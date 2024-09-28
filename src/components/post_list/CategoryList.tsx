"use client";
/**
 * 현재로썬 카테고리 부분 / 포스트 부분 모두 CSR이어서 상태 공유를 편하게 하기 위해 통합했음
 * 나중에 Sidebar 만들고 Grid-List 전환 버튼을 Sidebar로 옮기게 되면 다시 컴포넌트 분리할 수도 있음
 */

import { CategoryDetail } from "@/config/types";
import CategoryBtn from "./CategoryBtn";

interface ListProps {
    categoryList: CategoryDetail[];
    allPostCount: number; //전체 포스트 수
    currentCategory?: string; //현재 선택중인 카테고리
}

export default function CategoryList({
    categoryList,
    allPostCount,
    currentCategory = "All",
}: ListProps) {
    return (
        <section className="hidden md:block">
            <div className="flex justify-between mb-10">
                <ul className="flex gap-3 flex-wrap">
                    <CategoryBtn
                        name="All"
                        href="/blog"
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
            </div>
        </section>
    );
}
