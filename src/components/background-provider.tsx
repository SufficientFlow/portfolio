"use client"

import { Particles } from "@/components/ui/particles"
import { 
    useEffect, useState
 } from "react"
import { useTheme } from "next-themes"

export default function BackgroundProvider(){
    const { resolvedTheme } = useTheme()
    const [color, setColor] = useState(resolvedTheme === "dark" ? "#ffffff" : "#000000")
  
    useEffect(() => {
      setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
    }, [resolvedTheme])


    return <Particles 
    className="absolute inset-0"
    color={color}
    quantity={100}
    ease={80}
    refresh
    />
}