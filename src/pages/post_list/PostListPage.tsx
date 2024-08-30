// 전체 포스트 썸네일 보여주는 개요 페이지

import CategoryList from "@/components/post_list/CategoryList";
import PostCard from "@/components/post_list/PostCard";

interface PostListProps {
    category?: string;
    postList;
    categoryList;
    allPostCount;
}

const PostListPage = async ({
    category,
    postList,
    categoryList,
    allPostCount,
}: PostListProps) => {
    return (
        <section className="mx-auto mt-[72px] w-full max-w-[750px] px-4">
            <CategoryList
                categoryList={categoryList}
                allPostCount={allPostCount}
                currentCategory={category}
            />
            <section>
                <ul className="flex flex-col gap-8 lg:gap-12">
                    {postList.map((post) => (
                        <PostCard key={post.url + post.date} post={post} />
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default PostListPage;
