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

export interface TableItem {
    text: string;
    link: string;
    indent: number;
}

//프로젝트 개요에 쓰일 타입
export interface ProjectMatter {
    title: string; //프로젝트 제목
    description: string; //프로젝트 개요
    startDate: string; //시작한 날짜
    endDate: string; //완료한 날짜
    techstacks: string[]; //기술스택
    url: string; //프로젝트 주소
    thumbnail: string; //썸네일 주소
}

//프로젝트 상세 내용에 쓰일 타입
export interface Project extends ProjectMatter {
    imgPath?: string; //이미지 저장되는 주소
    slug: string;
    content: string; //사실 markdown 내용은 전부 content안에 들어갈 예정
}
