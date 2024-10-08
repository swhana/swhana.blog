import { Post } from "@/config/types";
import PostCard from "./PostGridCard";

interface PostListProps {
    list: Post[];
}

export default function PostGridList({ list }: PostListProps) {
    return (
        <section>
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                {list.map((post) => (
                    <PostCard key={post.url + post.date} post={post} />
                ))}
            </ul>
        </section>
    );
}
