/**
 * 포스트 전체 개요 페이지
 *
 * 실제 포스트 상세는 [slug] 하위 디렉토리로
 */

import {
    getAllPostCount,
    getCategoryDetailList,
    getSortedPostList,
} from "@/lib/posts";
import PostListPage from "@/pages/post_list/PostListPage";

export const dynamicParams = false;

type Props = {
    params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
    const postList = await getSortedPostList(params.category);
    const categoryList = await getCategoryDetailList();
    const allPostCount = await getAllPostCount();

    return (
        <PostListPage
            category={params.category}
            postList={postList}
            categoryList={categoryList}
            allPostCount={allPostCount}
        />
    );
};

export default CategoryPage;
