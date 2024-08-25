import React from "react";
import { MdxImage } from "./Image";

export const Paragraph = ({ children }) => {
    // 자식 요소가 <MdxImage/>를 포함하고 있는지 확인함
    // 포함하고 있으면 <div>, 아니면 <p>태그로 감싸서 리턴
    const containsImg = (children) => {
        let ret = false;

        React.Children.forEach(children, (child) => {
            if (React.isValidElement(child) && child.type === MdxImage) {
                return (ret = true);
            }
        });

        return ret;
    };

    return containsImg(children) ? <div>{children}</div> : <p>{children}</p>;
};
