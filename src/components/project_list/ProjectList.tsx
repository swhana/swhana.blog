import { Project } from "@/config/types";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";

interface ProjectListProps {
    list: Project[];
}

export default function ProjectList({ list }: ProjectListProps) {
    return (
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {list.map((project) => (
                <ProjectDialog
                    key={project.title + project.url}
                    project={project}
                />
            ))}
        </ul>
    );
}
