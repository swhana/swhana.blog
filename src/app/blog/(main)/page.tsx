//카테고리를 아예 입력 안했을 때

import CategoryList from "@/components/post_list/CategoryList";
import PostCard from "@/components/post_list/PostCard";
import {
    getAllPostCount,
    getCategoryDetailList,
    getSortedPostList,
} from "@/lib/posts";

const PostListPage = async () => {
    const postList = await getSortedPostList();
    const categoryList = await getCategoryDetailList();
    const allPostCount = await getAllPostCount();

    return (
        <section className="mx-auto mt-[72px] w-full max-w-[750px] px-4">
            <CategoryList
                categoryList={categoryList}
                allPostCount={allPostCount}
                currentCategory={"All"}
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