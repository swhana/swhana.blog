"use client";
// All(17) Nextjs(1) Git(3) 이런식으로

import { CategoryDetail } from "@/config/types";
import { useRouter } from "next/navigation";
import CategoryBtn from "./CategoryBtn";

interface CategoryListProps {
    categoryList: CategoryDetail[];
    allPostCount: number; //전체 포스트 수
    currentCategory?: string; //현재 선택중인 카테고리
}

export default function CategoryList({
    categoryList,
    allPostCount,
    currentCategory = "All",
}: CategoryListProps) {
    const router = useRouter();

    const onCategoryChange = (category: string) => {
        if (category === "All") router.push("/blog");
        else router.push(`/blog/${category}`);
    };

    return (
        <section className="mb-10 hidden sm:block">
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
        </section>
    );
}
