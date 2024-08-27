// 블로그 포스트 작성
import { Project, ProjectMatter } from "@/config/types";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { sync } from "glob";
import { format } from "date-fns";

// Window의 경우 경로를 \로 표시하고, MacOS의 경우 /로 표시하는 것에 주의해야한다
const BASE_PATH = "src\\posts\\project"; // 실제 포스트 mdx 파일이 위치하는 장소
const PROJECT_PATH = path.join(process.cwd(), BASE_PATH); // Node.js의 path모듈로 상대 경로를 절대 경로로 바꿈

// mdx파일 파싱
const parseProject = async (projectPath: string) => {
    const file = fs.readFileSync(projectPath, "utf8");

    //data: 프로젝트 개요 jsx, content: 프로젝트 내용 markdown
    const { data, content } = matter(file);
    const grayMatter = data as ProjectMatter;
    const startDate = format(data.startDate, "yyyy년 M월");
    const endDate = format(data.endDate, "yyyy년 M월");

    //project name에 해당하는 부분
    const slug = projectPath
        .slice(projectPath.indexOf(BASE_PATH))
        .replace(`${BASE_PATH}\\`, "")
        .replace(".mdx", "");

    return {
        ...grayMatter,
        content,
        startDate,
        endDate,
        slug,
    };
};

// 모든 프로젝트 목록 조회
export const getProjectList = async (): Promise<Project[]> => {
    const paths: string[] = sync(`${PROJECT_PATH}/**/*.mdx`);

    // 각각의 포스트 경로에 대하여 parsePost 진행
    const projectList = await Promise.all(
        paths.map((path) => parseProject(path)),
    );

    return projectList;
};

export const getSortedProjectList = async () => {
    const projectList = await getProjectList();

    return projectList.sort((a, b) => (a.startDate < b.startDate ? 1 : -1));
};
