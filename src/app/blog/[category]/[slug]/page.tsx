//블로그 포스트 상세 페이지
//여기만큼은 무슨일이 있어도 Server-side Component로 사수한다

import PostBody from "@/components/post_detail/PostBody";
import PostHeader from "@/components/post_detail/PostHeader";
import Sidebar from "@/components/post_detail/ToC_Sidebar";
import { getPostDetail, parseToc } from "@/lib/posts";

interface PostDetailProps {
    params: { category: string; slug: string };
}

export default async function PostDetailPage({
    params: { category, slug },
}: PostDetailProps) {
    const post = await getPostDetail(category, slug);
    const toc = parseToc(post.content);

    return (
        <div className="prose mx-auto w-full max-w-[750px] px-5 dark:prose-invert sm:px-6">
            <PostHeader post={post} />
            <article className="relative">
                <Sidebar contents={toc} />
                <PostBody post={post} />
            </article>
        </div>
    );
}
