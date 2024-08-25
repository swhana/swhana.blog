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
            className="break-words text-blue-400 no-underline underline-offset-4 hover:font-semibold"
            {...props}
        >
            {children}
        </a>
    );
};
