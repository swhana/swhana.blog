//블로그 포스트 상세 페이지

import PostBody from "@/components/post_detail/PostBody";
import PostHeader from "@/components/post_detail/PostHeader";
import { getPostDetail } from "@/lib/posts";

interface PostDetailProps {
    params: { category: string; slug: string };
}

export default async function PostDetailPage({
    params: { category, slug },
}: PostDetailProps) {
    const post = await getPostDetail(category, slug);

    return (
        <div className="prose mx-auto w-full max-w-[750px] px-5 dark:prose-invert sm:px-6">
            <PostHeader post={post} />
            <article className="relative">
                <PostBody post={post} />
            </article>
        </div>
    );
}
