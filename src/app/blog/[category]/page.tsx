/**
 * 포스트 전체 개요 페이지
 *
 * 실제 포스트 상세는 [slug] 하위 디렉토리로
 */

import PostListPage from "@/components/post_list/PostListPage";
import { getPostPaths, parsePostAbstract } from "@/lib/posts";
import { Metadata } from "next";

type Props = {
    params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: params.category.toUpperCase(),
        description: "프론트엔드 개발자 한상원입니다.",
    };
}

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
    return <PostListPage category={category} />;
};

export default CategoryPage;
