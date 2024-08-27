import { Project } from "@/config/types";
import ProjectDialog from "./ProjectDialog";

interface ProjectListProps {
    list: Project[];
}

export default function ProjectList({ list }: ProjectListProps) {
    return (
        <>
            <h1 className="text-3xl font-bold mb-10">Projects</h1>
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-6">
                {list.map((project) => (
                    <ProjectDialog
                        key={project.title + project.url}
                        project={project}
                    />
                ))}
            </ul>
        </>
    );
}
