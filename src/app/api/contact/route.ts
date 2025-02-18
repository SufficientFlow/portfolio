import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL
    const headersList = await headers()
    const domain = headersList.get('host') || 'Unknown Domain'

    if (!webhookUrl) {
      throw new Error("Discord webhook URL not configured")
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: domain,
        embeds: [{
          title: "📬 New Contact Form Submission",
          description: "A new contact form submission has been received.",
          fields: [
            {
              name: "📧 Email",
              value: data.email,
              inline: true,
            },
            {
              name: "📅 Date",
              value: new Date(data.contactDate).toLocaleDateString(),
              inline: true,
            },
            {
              name: "📝 Subject",
              value: data.subject || "No subject provided",
            },
            {
              name: "💬 Message",
              value: "```" + data.content + "```",
            },
          ],
          color: 0x7289DA, // Discord's blurple color
          timestamp: new Date().toISOString(),
          footer: {
            text: "Contact Form Submission",
          }
        }],
      }),
    })

    if (!response.ok) {
      throw new Error(`Failed to send to Discord: ${response.statusText}`)
    }

    return NextResponse.json({ 
      success: true,
      message: "Message sent successfully! We'll get back to you soon." 
    })
  } catch (error) {
    console.error("Error in contact API:", error)
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : "Failed to send message",
        details: "Please try again later or contact us through alternative means."
      },
      { status: 500 }
    )
  }
} 