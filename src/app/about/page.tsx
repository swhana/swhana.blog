import AboutPage from "@/components/about/AboutPage";
import { getSortedProjectList } from "@/lib/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: { absolute: "swhana | FE Engineer" },
    description: "프론트엔드 개발자 한상원입니다.",
};

const AboutMe = async () => {
    const projects = await getSortedProjectList();

    return (
        <section className="mx-auto mt-24 w-full justify-center max-w-[750px] px-4">
            <AboutPage projects={projects} />
        </section>
    );
};

export default AboutMe;
