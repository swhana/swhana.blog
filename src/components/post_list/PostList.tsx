import { Post } from "@/config/types";
import PostCard from "./PostCard";

interface PostListProps {
    list: Post[];
}

export default function PostList({ list }: PostListProps) {
    return (
        <section>
            <ul className="flex flex-col gap-8 lg:gap-12">
                {list.map((post) => (
                    <PostCard key={post.url + post.date} post={post} />
                ))}
            </ul>
        </section>
    );
}
