import { PropsWithChildren } from "react";
import { LinkProps } from "next/link";
export const ExternalLink = ({
    children,
    href,
    ...props
}: PropsWithChildren<LinkProps>) => {
    return (
        <a
            href={href.toString() || ""}
            target="_blank"
            className="break-words text-pink-600 no-underline underline-offset-4 hover:underline"
            {...props}
        >
            {children}
        </a>
    );
};
