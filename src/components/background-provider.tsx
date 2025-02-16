"use client"

import { Particles } from "@/components/ui/particles"
import { 
    useEffect, useState
 } from "react"
import { useTheme } from "next-themes"

export default function BackgroundProvider(){
    const { theme } = useTheme()
    const [color, setColor] = useState("#ffffff")
  
    useEffect(() => {
      setColor(theme === "dark" ? "#ffffff" : "#000000")
    }, [theme])


    return <Particles 
    className="absolute inset-0"
    color={color}
    quantity={100}
    ease={80}
    refresh
    />
}