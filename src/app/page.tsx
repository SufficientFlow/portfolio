import Landing from "@/components/landing/landing";
import ProjectCard from "@/components/ui/project-card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Landing />
      {/* Decorational divider */}
      <div className="w-4/5 flex flex-col items-center justify-center border-t border-border mt-28">
      </div>
      <ProjectCard
        title="Project 1"
        description="This is the description of the project"
        image=""
        imageAlt="Project 1 Image"
        link=""
      />
      <ProjectCard
        title="Project 1"
        description="This is the description of the project"
        image=""
        imageAlt="Project 1 Image"
        link=""
      />
    </div>
  );
}
