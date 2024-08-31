/**
 * 포스트 전체 개요 페이지
 *
 * 실제 포스트 상세는 [slug] 하위 디렉토리로
 */

import {
    getPostPaths,
    parsePostAbstract,
} from "@/lib/posts";
import PostListPage from "@/components/post_list/PostListPage2";

type Props = {
    params: { category: string };
};

export function generateStaticParams() {
    const postPaths = getPostPaths();

    const paramList = postPaths
        .map((path) => {
            const parsed = parsePostAbstract(path);
            return parsed;
        })
        .map((item) => ({
            category: item.categoryPath,
        }));

    return paramList;
}

const CategoryPage = async ({ params: { category } }: Props) => {

    return (
        <PostListPage
            category={category}
        />
    );
};

export default CategoryPage;
