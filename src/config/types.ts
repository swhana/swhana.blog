export interface PostMatter {
    title: string; // 제목
    date: Date; // 작성날짜
    dateString: string; // 날짜 string
    thumbnail: string; // 썸네일 주소
    description: string; //description
}

export interface Post extends PostMatter {
    url: string; // 주소
    slug: string;
    categoryPath: string; // 카테고리 경로
    categoryName: string; // 카테고리 이름
    content: string; // 포스트 내용
    readingMinutes: number; // 읽는데 걸리는 시간
}

export interface CategoryDetail {
    dirName: string;
    publicName: string;
    count: number;
}

export interface HeadingItem {
    text: string;
    link: string;
    indent: number;
}
