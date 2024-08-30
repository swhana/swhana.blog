// 블로그 포스트 작성
import { CategoryDetail, Post, PostMatter } from "@/config/types";
import path from "path";
import fs from "fs";
import readingTime from "reading-time";
import matter from "gray-matter";
import dayjs from "dayjs";
import { sync } from "glob";

// Window의 경우 경로를 \로 표시하고, MacOS의 경우 /로 표시하는 것에 주의해야한다
const BASE_PATH = path.join('src', 'posts', 'blog');
const POST_PATH = path.join(process.cwd(), BASE_PATH); // Node.js의 path모듈로 상대 경로를 절대 경로로 바꿈

// category folder name => public name
export const getCategoryName = (dirPath: string) => 
    dirPath
        .split("_")
        .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
        .join(" ");

    

// post 세부 내용 파싱
const parsePostDetail = async (postPath: string) => {
    const file = fs.readFileSync(postPath, "utf8");
    const { data, content } = matter(file); // 게시글 파일을 전달하고 파싱된 data와 content를 얻음

    const grayMatter = data as PostMatter;
    const readingMinutes = Math.ceil(readingTime(content).minutes); // 읽는 데 걸리는 시간
    const dateString = dayjs(grayMatter.date)
        .locale("ko")
        .format("YYYY년 MM월 DD일");

    return { ...grayMatter, dateString, content, readingMinutes };
};

// post 개요 파싱
export const parsePostAbstract = (postPath: string) => {
    const filePath = postPath
        .slice(postPath.indexOf(BASE_PATH))
        .replace(`${BASE_PATH}` + path.sep, "")
        .replace(".mdx", "");

    const [categoryPath, slug] = filePath.split(path.sep); // blog/[categoryPath]/[slug]
    const url = `/blog/${categoryPath}/${slug}`; // 글 상세 페이지 들어갈 때 링크용
    const categoryName = getCategoryName(categoryPath);

    return { url, categoryPath, categoryName, slug };
};

// 전체 post 파싱
const parsePost = async (postPath: string): Promise<Post> => {
    const postAbstract = parsePostAbstract(postPath); //개요 파싱
    const postDetail = await parsePostDetail(postPath); //상세내용 파싱

    return { ...postAbstract, ...postDetail };
};

// 모든 mdx파일 경로 조회
export const getPostPaths = (category?: string) => {
    const folder = category || "**";
    const postPaths: string[] = sync(`${POST_PATH}/${folder}/**/*.mdx`);
    return postPaths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<Post[]> => {
    const postPaths = getPostPaths(category);

    // 각각의 포스트 경로에 대하여 parsePost 진행
    const postList = await Promise.all(
        postPaths.map((postPath) => parsePost(postPath)),
    );

    return postList;
};

// 모든 포스트 목록 정렬
export const getSortedPostList = async (category?: string): Promise<Post[]> => {
    const postList = await getPostList(category);

    return postList.sort((a, b) => (a.date < b.date ? 1 : -1));
};

// 포스트 상세 내용 조회
export const getPostDetail = async (category: string, slug: string) => {
    const filePath = path.join(POST_PATH, category, slug, 'content.mdx')
    
    const postDetail = await parsePost(filePath);
    return postDetail;
};

export const getAllPostCount = async () => (await getPostList()).length;

export const getCategoryList = () => {
    const paths: string[] = sync(`${POST_PATH}/*`);
    const list = paths.map((p) => p.split(path.sep).slice(-1)?.[0]);
    return list;
};

// 카테고리 전부
export const getCategoryDetailList = () => {
    //모든 글 탐색
    const postPaths: string[] = sync(`${POST_PATH}/**/**/*.mdx`);
 
    const PATH = path.sep === '\\' ? BASE_PATH : POST_PATH;
    const postListByCategory = postPaths.map(
        (p) => p.replace(PATH + path.sep, "").split(path.sep)[0]
    );

    const result: { [key: string]: number } = {};
    for (const category of postListByCategory) {
        if (result[category]) {
            result[category] += 1;
        } else {
            result[category] = 1;
        }
    }
    const detailList: CategoryDetail[] = Object.entries(result).map(
        ([category, count]) => ({
            dirName: category,
            publicName: getCategoryName(category),
            count,
        }),
    );

    return detailList;
};

// export const getCategoryDetailList = async () => {
//     const postList = await getPostList();
//     const result: { [key: string]: number } = {};
//     for (const post of postList) {
//         const category = post.categoryPath;
//         if (result[category]) {
//             result[category] += 1;
//         } else {
//             result[category] = 1;
//         }
//     }
//     const detailList: CategoryDetail[] = Object.entries(result).map(
//         ([category, count]) => ({
//             dirName: category,
//             publicName: getCategoryName(category),
//             count,
//         }),
//     );

//     return detailList;
// };

export const parseToc = (content: string) => {
    //markdown에서 ##(h2: 제목)이나 ###(h3: 소제목)으로 시작하는 문서 찾기
    const regex = /^(##|###) (.*$)/gim;
    const targetList = content.match(regex);

    return (
        targetList?.map((target) => ({
            text: target.replace("##", "").replace("#", ""), //##, ### 붙은 제목을 전부 텍스트화함

            //"## Sample Target?" -> "#sample-target"
            link:
                "#" +
                target
                    .replace("# ", "")
                    .replace("#", "")
                    .replace(/[\[\]:!@#$/%^&*()+=,.]/g, "")
                    .replace(/ /g, "-")
                    .toLowerCase()
                    .replace("?", ""),

            //##의 경우 들여쓰기 0, ###의 경우 들여쓰기 1
            indent: (target.match(/#/g)?.length || 2) - 2,
        })) || []
    );
};
