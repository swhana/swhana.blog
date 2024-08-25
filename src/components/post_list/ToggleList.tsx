"use client";
import { useState } from "react";

import PostList from "./PostList";
import GridBtn from "../theme/GridBtn";
import PostGridList from "./PostGridList";

export default function ToggleGridList({ list }) {
    const [isGrid, setIsGrid] = useState(false);

    return (
        <div>
            <div className="flex justify-end mt-4 mb-6">
                <GridBtn isGrid={isGrid} onClick={() => setIsGrid(!isGrid)} />
            </div>

            <div>
                {isGrid ? (
                    <PostGridList list={list} />
                ) : (
                    <PostList list={list} />
                )}
            </div>
        </div>
    );
}
