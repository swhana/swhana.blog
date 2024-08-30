//블로그 포스트 상세 페이지
//여기만큼은 무슨일이 있어도 Server-side Component로 사수한다

import Comments from "@/components/comments/Comments";
import PostBody from "@/components/post_detail/PostBody";
import PostHeader from "@/components/post_detail/PostHeader";
import Sidebar from "@/components/post_detail/ToC_Sidebar";
import {
    getPostDetail,
    getPostPaths,
    parsePostAbstract,
    parseToc,
} from "@/lib/posts";

interface PostDetailProps {
    params: { category: string; slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
    const postPaths: string[] = getPostPaths();
    const paramList = postPaths
        .map((path) => parsePostAbstract(path))
        .map((item) => ({
            category: item.categoryPath,
            slug: item.slug,
        }));
    console.log("Generated Params[slug]:", paramList);
    return paramList;
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
                <Comments />
            </article>
        </div>
    );
}
