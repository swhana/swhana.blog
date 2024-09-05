"use client";

import { CategoryDetail } from "@/config/types";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import Link from "next/link";
import { redirect } from "next/navigation";

interface ListProps {
    categoryList: CategoryDetail[];
    allPostCount: number; //전체 포스트 수
    currentCategory?: string; //현재 선택중인 카테고리
}

export default function CategorySelect({
    categoryList,
    allPostCount,
    currentCategory = "All",
}) {
    const onChange = (value) => {
        if (value === "All") redirect("/blog");
        redirect(`/blog/${value}`);
    };

    return (
        <Select
            onValueChange={(value) => onChange(value)}
            defaultValue={currentCategory}
        >
            <SelectTrigger className="w-[180px] md:hidden mb-4">
                <SelectValue placeholder={"All (" + allPostCount + ")"} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="All">
                        {"All (" + allPostCount + ")"}
                    </SelectItem>
                    {categoryList.map((category) => (
                        <SelectItem
                            key={category.dirName}
                            value={category.dirName}
                        >
                            {category.publicName + " (" + category.count + ")"}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
