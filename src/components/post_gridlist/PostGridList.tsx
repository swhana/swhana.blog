import { Post } from "@/config/types";
import PostCard from "./PostCard";

interface PostListProps {
    list: Post[];
}

export default function PostGridList({ list }) {
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
