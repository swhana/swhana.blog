import { Post } from "@/config/types";
import { CalendarDays, Clock3 } from "lucide-react";
import Link from "next/link";

interface PostProp {
    post: Post;
}

export default function PostHeader({ post }: PostProp) {
    return (
        <header className="mt-14 text-center">
            <h1 className="mb-5 text-3xl font-bold">{post.title}</h1>
            <div className="mb-3 text-base">
                <Link
                    href={`/blog/${post.categoryPath}`}
                    className="text-sm font-medium text-pink-600 lg:text-base"
                >
                    {post.categoryName}
                </Link>
            </div>
            <div className="flex justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                    <CalendarDays className="w-3.5" />
                    <span>{post.dateString}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Clock3 className="w-3.5" />
                    <span>{post.readingMinutes}분</span>
                </div>
            </div>
            <hr className="mt-5" />
        </header>
    );
}
