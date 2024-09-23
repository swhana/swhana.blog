// 전체 포스트 썸네일 보여주는 개요 페이지

import CategoryList from "@/components/post_list/CategoryList";
import PostCard from "@/components/post_list/PostCard";
import {
    getAllPostCount,
    getCategoryDetailList,
    getSortedPostList,
} from "@/lib/posts";
import CategorySelect from "./CategorySelect";

interface PostListProps {
    category?: string;
}

const PostListPage = async ({ category }: PostListProps) => {
    const postList = await getSortedPostList(category);
    const categoryList = getCategoryDetailList();
    const allPostCount = await getAllPostCount();
    return (
        <section className="mx-auto mt-24 w-full max-w-[750px] px-4">
            <CategoryList
                categoryList={categoryList}
                allPostCount={allPostCount}
                currentCategory={category}
            />
            <CategorySelect
                categoryList={categoryList}
                allPostCount={allPostCount}
                currentCategory={category}
            />
            <section className="max-h-[60vh] overflow-scroll">
                <ul className="flex flex-col gap-8 lg:gap-12">
                    {postList.map((post) => (
                        <li key={post.url + post.date}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default PostListPage;
