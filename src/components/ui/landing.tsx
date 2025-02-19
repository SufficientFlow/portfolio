"use client"

import { ArrowBigDown, ArrowBigDownDashIcon, ArrowBigDownIcon, ArrowDown } from "lucide-react";
import Link from "next/link";
import { 
    useState,
    useEffect
} from "react"

export default function Landing() {
    const [showName, setShowName] = useState(false)
    const [showUnderTitle, setShowUnderTitle] = useState(false)
    const [showProjects, setShowProjects] = useState(false)

    useEffect(() => {
        const titleTimer = setTimeout(() => {
            setShowName(true);
          }, 2500);

        const underTitleTimer = setTimeout(() => {
            setShowUnderTitle(true);
          }, 4500);

        const projectsTimer = setTimeout(() => {
            setShowProjects(true);
          }, 6000);
    }, [])
    
    return (
    <div className="flex flex-col items-center justify-center min-h-[400px] mt-10">
        <div className="text-center text-6xl relative h-[80px]">
            <span
                className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap transition-opacity duration-1000 ${
                showName ? 'opacity-0' : 'opacity-100'
                }`}
            >
                Hi 👋
            </span>
            <span
                className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap transition-opacity duration-1000 ${
                showName ? 'opacity-100' : 'opacity-0'
                }`}
            >
                I am Jesse
            </span>
        </div>
        <div className="mt-4">
            <span
                className={`transition-opacity duration-1000 ${
                showUnderTitle ? 'opacity-100' : 'opacity-0'
                }`}
            >
                A software engineering student <Link href="https://www.nhlstenden.com/hbo-opleidingen/informatica" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@NHL Stenden</Link>
            </span>
        </div>
        <div className="mt-4">
            <span
                className={`transition-opacity duration-1000 flex flex-col items-center justify-center gap-8 mt-10 ${
                showProjects ? 'opacity-100' : 'opacity-0'
                }`}
            >
                See some of the things I&apos;ve worked on below.
                <ArrowBigDownIcon />
            </span>
        </div>
    </div>
    )
}