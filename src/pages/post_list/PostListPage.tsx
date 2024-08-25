// 전체 포스트 썸네일 보여주는 개요 페이지

import {
    getAllPostCount,
    getCategoryList,
    getSortedPostList,
} from "@/lib/posts";
import TotalPostList from "@/components/post_list/TotalPostList";

interface PostListProps {
    category?: string;
}
export default async function PostListPage({ category }: PostListProps) {
    const postList = await getSortedPostList(category);
    const categoryList = await getCategoryList();
    const allPostCount = await getAllPostCount();

    return (
        <section className="mx-auto mt-12 w-full max-w-[750px] px-4">
            <TotalPostList
                categoryList={categoryList}
                allPostCount={allPostCount}
                currentCategory={category}
                list={postList}
            />
        </section>
    );
}
