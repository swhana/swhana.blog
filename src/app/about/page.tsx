import AboutPage from "@/components/about/AboutPage";
import { getSortedProjectList } from "@/lib/projects";

const AboutMe = async () => {
    const projects = await getSortedProjectList();

    return (
        <section className="flex flex-1 mx-auto mt-24 w-full max-w-[750px] px-4">
            <AboutPage projects={projects} />
        </section>
    );
};

export default AboutMe;
