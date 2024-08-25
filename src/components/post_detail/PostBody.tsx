import { Post } from "@/config/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxComponent } from "../mdx";

import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

interface PostProp {
    post: Post;
}

export default function PostBody({ post }: PostProp) {
    return (
        <MDXRemote
            source={post.content}
            components={MdxComponent}
            options={{
                mdxOptions: {
                    remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
                    rehypePlugins: [
                        [
                            rehypePrettyCode,
                            {
                                theme: {
                                    dark: "github-dark",
                                    light: "github-light",
                                },
                            },
                        ],
                        rehypeSlug,
                    ],
                },
            }}
        />
    );
}
