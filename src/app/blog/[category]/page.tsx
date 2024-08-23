/**
 * 포스트 전체 개요 페이지
 *
 * 실제 포스트 상세는 [slug] 하위 디렉토리로
 */

import PostListPage from "@/pages/post_list/PostListPage";

type Props = {
    params: { category: string };
};

function CategoryPage({ params }: Props) {
    return <PostListPage category={params.category} />;
}

export default CategoryPage;
