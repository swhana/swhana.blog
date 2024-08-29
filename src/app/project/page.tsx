import ProjectList from "@/components/project_list/ProjectList";
import { getSortedProjectList } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
    return [];
}

async function Project() {
    const content = await getSortedProjectList();

    return (
        <section className="mx-auto mt-12 w-full max-w-[750px] px-4">
            <ProjectList list={content} />
        </section>
    );
}

export default Project;
