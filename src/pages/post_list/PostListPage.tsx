// 전체 포스트 썸네일 보여주는 개요 페이지

import CategoryList from "@/components/post_gridlist/CategoryList";
import PostGridList from "@/components/post_gridlist/PostGridList";
import PostList from "@/components/post_list/PostList";
import ToggleGridList from "@/components/post_list/ToggleList";
import GridBtn from "@/components/theme/GridBtn";

import {
    getAllPostCount,
    getCategoryList,
    getSortedPostList,
} from "@/lib/posts";

interface PostListProps {
    category?: string;
}
export default async function PostListPage({ category }: PostListProps) {
    const postList = await getSortedPostList(category);
    const categoryList = await getCategoryList();
    const allPostCount = await getAllPostCount();

    return (
        <section className="mx-auto mt-12 w-full max-w-[750px] px-4">
            <CategoryList
                categoryList={categoryList}
                allPostCount={allPostCount}
                currentCategory={category}
            />
            <ToggleGridList list={postList} />
        </section>
    );
}
