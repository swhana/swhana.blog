/**
 *  '/' URL에 보일 페이지
 *
 *  추후 블로그가 확장되면 바뀔 수 있음
 *  */

import { redirect } from "next/navigation";

export default function Home() {
    redirect("/blog");
}
