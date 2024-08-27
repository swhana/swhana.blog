import { Project } from "@/config/types";

import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectDialog({ project }: ProjectCardProps) {
    return (
        <Dialog>
            <DialogTrigger className="text-start">
                <ProjectCard project={project} />
            </DialogTrigger>
            <DialogContent className="max-w-[500px] gap-0 px-0 pb-3">
                <ProjectDetail project={project} />
            </DialogContent>
        </Dialog>
    );
}
