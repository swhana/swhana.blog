// 전체 포스트 썸네일 보여주는 개요 페이지

import PostCard from "@/components/post_list/PostCard";
import { getSortedPostList } from "@/lib/posts";

interface PostListProps {
    category?: string;
}

export default async function PostListPage({ category }: PostListProps) {
    const postList = await getSortedPostList(category);

    return (
        <section className="mx-auto mt-12 w-full max-w-[950px] px-4">
            <section>
                <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                    {postList.map((post) => (
                        <PostCard key={post.url + post.date} post={post} />
                    ))}
                </ul>
            </section>
        </section>
    );
}
