//Intersection Observer로 현재 보고 있는 뷰포트의 글 제목 감지

import { useEffect, useRef, useState } from "react";

// 자기소개 페이지용
export const useAboutObserver = (query: string) => {
    const observer = useRef<IntersectionObserver>(); //Intersection Observer를 등록할 ref
    const [targetList, setTargetList] = useState<string[]>([]); //현재 뷰포트가 관찰하는 요소

    //마운트 되면 실행
    useEffect(() => {
        const handleObserver: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                const targetId = entry.target.innerHTML;

                //관찰중인 요소가 뷰포트에 진입했을 때
                if (entry.isIntersecting) {
                    setTargetList(() => [targetId]);
                }
                //관찰중인 요소가 뷰포트에서 벗어났을 때
                else {
                    setTargetList((prev) => {
                        return prev.filter((element) => element !== targetId);
                    });
                }
            });
        };
        const scrollMarginOption = {
            rootMargin: "-48px 0px -75% 0px",
        };

        //ref에 옵저버 등록
        observer.current = new IntersectionObserver(
            handleObserver,
            scrollMarginOption,
        );

        const elements = document.querySelectorAll(query); //사전에 지정한 요소 전부 탐색
        elements.forEach((element) => observer.current?.observe(element)); //지정한 요소 전부 관찰

        return () => observer.current?.disconnect(); //언마운트 될때 옵저버 해제
    }, [query]);

    return [...targetList];
};

// 블로그 포스트용
export const useContentObserver = (query: string) => {
    const observer = useRef<IntersectionObserver>(); //Intersection Observer를 등록할 ref
    const [targetList, setTargetList] = useState<string[]>([]); //현재 뷰포트가 관찰하는 요소

    //마운트 되면 실행
    useEffect(() => {
        const handleObserver: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                const targetId = `#${entry.target.id}`;

                //관찰중인 요소가 뷰포트에 진입했을 때
                if (entry.isIntersecting) {
                    setTargetList(() => [targetId]);
                }
                //관찰중인 요소가 뷰포트에서 벗어났을 때
                else {
                    setTargetList((prev) => {
                        return prev.filter((element) => element !== targetId);
                    });
                }
            });
        };
        const scrollMarginOption = {
            rootMargin: "-48px 0px -60% 0px",
            threshold: 1,
        };

        //ref에 옵저버 등록
        observer.current = new IntersectionObserver(
            handleObserver,
            scrollMarginOption,
        );

        const elements = document.querySelectorAll(query); //사전에 지정한 요소 전부 탐색
        elements.forEach((element) => observer.current?.observe(element)); //지정한 요소 전부 관찰

        return () => observer.current?.disconnect(); //언마운트 될때 옵저버 해제
    }, [query]);

    return [...targetList];
};
