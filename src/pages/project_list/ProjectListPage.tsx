import ProjectList from "@/components/project_list/ProjectList";
import { getSortedProjectList } from "@/lib/projects";

export default async function ProjectListPage() {
    const projectList = await getSortedProjectList();

    return (
        <section className="mx-auto mt-12 w-full max-w-[750px] px-4">
            <ProjectList list={projectList} />
        </section>
    );
}
