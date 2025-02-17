import Landing from "@/components/landing/landing";
import ProjectCard from "@/components/ui/project-card";
import Database from "@/lib/pocketbase";
import { RecordModel } from "pocketbase";

const queryResult = await Database.getProjects();

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Landing />
      {/* Decorational divider */}
      <div className="w-4/5 flex flex-col items-center justify-center border-t border-border mt-28">
      </div>
        {queryResult.map((project: { [x: string]: string }) => (
          <ProjectCard
            key={project['name']}
            title={project['name']}
            description={project['description']}
            shortDescription={project['short_description']}
            image={project['collectionId'] + "/" + project['id'] + "/" + project['thumbnail']}
            imageAlt={"Project Image"}
            link={project['github_url']}
          />
        ))}
    </div>
  );
}
