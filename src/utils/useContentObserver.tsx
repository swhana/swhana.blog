//Intersection Observer로 현재 보고 있는 뷰포트의 글 제목 감지

import { useEffect, useRef, useState } from "react";

export const useContentObserver = (query: string) => {
    const observer = useRef<IntersectionObserver>(); //Intersection Observer를 등록할 ref
    const [targetList, setTargetList] = useState<string[]>([]); //현재 뷰포트가 관찰하는 요소
    const [tempTargetId, setTempTargetId] = useState("");

    //마운트 되면 실행
    useEffect(() => {
        const handleObserver: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                const targetId = `#${entry.target.id}`;

                console.log(entry.target);
                //관찰중인 요소가 뷰포트에 진입했을 때
                if (entry.isIntersecting) {
                    setTargetList((prev) => [...prev, targetId]);
                    setTempTargetId(() => "");
                }
                //관찰중인 요소가 뷰포트에서 벗어났을 때
                else {
                    setTargetList((prev) => {
                        if (prev.length === 0) setTempTargetId(targetId);
                        return prev.filter((element) => element !== targetId);
                    });
                }
            });
        };
        const scrollMarginOption = {
            rootMargin: "-32px 0px -55% 0px",
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

    return [...targetList, tempTargetId];
};