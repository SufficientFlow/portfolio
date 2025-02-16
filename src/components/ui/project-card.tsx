import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "lucide-react"

interface ProjectCardProps {
    title: string,
    description: string,
    image: string,
    imageAlt: string,
    link: string
}

export default function ProjectCard(props : ProjectCardProps) {
    return (
        <div className="group relative flex flex-row w-full rounded-xl border border-zinc-200 bg-white p-6 shadow-md transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-col items-center justify-center w-1/3">
                <Image 
                    className="rounded-lg object-cover" 
                    src={props.image || "https://picsum.photos/300/200"} 
                    alt={props.imageAlt} 
                    width={300} 
                    height={200} 
                />
            </div>
            <div className="flex flex-col items-start justify-between w-2/3 pl-6">
                <div className="w-full">
                    <div className="flex flex-row items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                            {props.title}
                        </h3>
                        <Link 
                            href={props.link}
                            className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                        >
                            <GithubIcon className="w-5 h-5" />
                        </Link>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}