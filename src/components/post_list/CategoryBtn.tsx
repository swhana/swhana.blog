import Link from "next/link";
import { Button } from "../ui/button";

interface CategoryProps {
    name: string; //카테고리 이름
    href: string; //링크
    isCurrent: boolean; //현재 선택중인 카테고리 인지
    count: number; //카테고리의 포스트 수
}

export default function CategoryBtn({
    name,
    href,
    isCurrent,
    count,
}: CategoryProps) {
    return (
        <li>
            <Button asChild size="sm" variant={isCurrent ? "default" : "ghost"}>
                <Link href={href}>
                    {name} ({count})
                </Link>
            </Button>
        </li>
    );
}
