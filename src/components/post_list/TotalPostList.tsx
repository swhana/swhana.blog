"use client";
/**
 * 현재로썬 카테고리 부분 / 포스트 부분 모두 CSR이어서 상태 공유를 편하게 하기 위해 통합했음
 * 나중에 Sidebar 만들고 Grid-List 전환 버튼을 Sidebar로 옮기게 되면 다시 컴포넌트 분리할 수도 있음
 */

import { CategoryDetail, Post } from "@/config/types";
import { useRouter } from "next/navigation";
import CategoryBtn from "./CategoryBtn";
import GridBtn from "../theme/GridBtn";
import { useState } from "react";
import PostGridList from "./PostGridList";
import PostList from "./PostList";

interface ListProps {
    categoryList: CategoryDetail[];
    allPostCount: number; //전체 포스트 수
    currentCategory?: string; //현재 선택중인 카테고리
    list: Post[];
}

export default function TotalPostList({
    categoryList,
    allPostCount,
    currentCategory = "All",
    list,
}: ListProps) {
    const router = useRouter();
    const [isGrid, setIsGrid] = useState(false);

    //Select형 Button으로 구현할 때 사용
    const onCategoryChange = (category: string) => {
        if (category === "All") router.push("/blog");
        else router.push(`/blog/${category}`);
    };

    return (
        <section className="hidden sm:block">
            <div className="flex justify-between mb-10">
                <ul className="flex gap-3">
                    <CategoryBtn
                        key={"All"}
                        name={"All"}
                        href={`/blog/`}
                        isCurrent={currentCategory === "All"}
                        count={allPostCount}
                    />
                    {categoryList.map((category) => (
                        <CategoryBtn
                            key={category.dirName}
                            name={category.publicName}
                            href={`/blog/${category.dirName}`}
                            isCurrent={category.dirName === currentCategory}
                            count={category.count}
                        />
                    ))}
                </ul>
                <GridBtn isGrid={isGrid} onClick={() => setIsGrid(!isGrid)} />
            </div>
            <div>
                {isGrid ? (
                    <PostGridList list={list} />
                ) : (
                    <PostList list={list} />
                )}
            </div>
        </section>
    );
}
