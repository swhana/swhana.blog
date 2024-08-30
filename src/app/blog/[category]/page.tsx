/**
 * 포스트 전체 개요 페이지
 *
 * 실제 포스트 상세는 [slug] 하위 디렉토리로
 */

import PostListPage from "@/components/post_list/PostListPage";
import {
    getAllPostCount,
    getCategoryDetailList,
    getPostPaths,
    getSortedPostList,
    parsePostAbstract,
} from "@/lib/posts";

type Props = {
    params: { category: string; slug: string };
};

export function generateStaticParams() {
    try {
        const postPaths = getPostPaths();
        console.log("Post Paths:", postPaths); // 파일 경로 확인

        const paramList = postPaths
            .map((path) => {
                const parsed = parsePostAbstract(path);
                console.log("Parsed Path:", parsed); // 파싱된 데이터 확인
                return parsed;
            })
            .map((item) => ({
                category: item.categoryPath,
            }));

        console.log("Generated Params:", paramList); // 최종 생성된 파라미터
        return paramList;
    } catch (error) {
        console.error("Error in generateStaticParams:", error);
        return [];
    }
}

const CategoryPage = async ({ params: { category, slug } }: Props) => {
    const postList = await getSortedPostList(category);
    const categoryList = getCategoryDetailList();
    const allPostCount = await getAllPostCount();

    return (
        <PostListPage
            category={category}
            postList={postList}
            categoryList={categoryList}
            allPostCount={allPostCount}
        />
    );
};

export default CategoryPage;
