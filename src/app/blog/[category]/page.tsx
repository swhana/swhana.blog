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

export const dynamicParams = false;

type Props = {
    params: { category: string; slug: string };
};

export function generateStaticParams() {
    const postPaths: string[] = getPostPaths();
    const paramList = postPaths
        .map((path) => parsePostAbstract(path))
        .map((item) => ({
            category: item.categoryPath,
            slug: item.slug,
        }));

    console.log("Generated Params[category]:", paramList);

    return paramList;
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
