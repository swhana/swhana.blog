//About 페이지에 들어갈 내 이력서 정보 정리

import { Project } from "./types";

type Resume = {
    name: string; //이름
    position: string; //직책
    description: string; //한줄소개
    aboutme: string; //자기소개(길게)
    experience?: Experience[]; //경력
    education?: Education[];
};

type Experience = {
    title: string;
    link: string;
    description: string;
    duration: string;
};

type Education = {
    title: string;
    link: string;
    description: string;
    duration: string;
};

export const resume: Resume = {
    name: "한상원",
    position: "프론트엔드 개발자",
    description:
        "사소한 것을 놓치지 않는 개발, 보는 사람으로 하여금 즐거움을 주는 개발, 불편함을 고쳐주는 개발을 하고 싶습니다.",

    aboutme:
        "다른 사람과의 개발 경험을 누구보다 중요하게 여기는 개발자입니다. 읽기 좋은 코드를 작성하기 위한 코드 모듈화에 관심이 많으며, 아는 지식을 다른 사람과 공유하는 것을 좋아합니다. 혼자가 아닌 같이 성장하는 개발을 하고 싶습니다.",
    experience: [
        {
            title: "넛지 헬스케어",
            link: "https://cashwalk.com/",
            description: "Frontend Engineer Intern",
            duration: "2024 - 현재",
        },
    ],
    education: [
        {
            title: "삼성 청년 SW 아카데미",
            link: "https://www.ssafy.com/",
            description:
                "삼성 청년 SW 아카데미에서 6개월간 알고리즘, Java, Javascript, Vue.js 등 SW 역량 향상 교육을 받았으며, 팀 프로젝트를 통해 협업 능력과 애자일 프로세스 경험을 키웠습니다.",
            duration: "2022 - 2023",
        },
        {
            title: "Nagoya Institute of Technology",
            link: "https://www.nitech.ac.jp/eng/",
            description:
                "일본 나고야 소재 나고야공업대학에서 전기전자공학과를 전공했으며, 자율주행 차량의 무선통신 기술에 관하여 SUMO(Simulation of Urban MObility)를 활용한 시뮬레이션 연구를 진행하였습니다.",
            duration: "2015 - 2022",
        },
    ],
};
