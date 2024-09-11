import ProjectList from "@/components/project_list/ProjectList";
import { getSortedProjectList } from "@/lib/projects";
import { Metadata } from "next";

export const dynamicParams = false;

export const metadata: Metadata = {
    title: { absolute: "PROJECTS" },
    description: "개인 / 팀 프로젝트 경험을 기록합니다.",
};

async function Project() {
    const content = await getSortedProjectList();

    return (
        <section className="mx-auto mt-24 w-full max-w-[750px] px-4">
            <ProjectList list={content} />
        </section>
    );
}

export default Project;
