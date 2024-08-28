//리스트형 포스트카드

import { Post } from "@/config/types";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    const desc = post.description || post.content.slice(0, 120);

    return (
        <Link href={post.url}>
            <li className="w-full flex flex-row justify-between gap-3 overflow-hidden rounded-md transition group">
                <div className="max-w-[500px]">
                    <p className="text-lg font-semibold mt-2 group-hover:text-blue-500">
                        {post.title}
                    </p>
                    <p className="text-sm font-light text-stone-500 truncate-2">
                        {desc}
                    </p>
                    <p className="text-xs font-extralight mt-4 mb-1">
                        {post.dateString}
                    </p>
                </div>
                <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={100}
                    height={100}
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
            </li>
        </Link>
    );
}
