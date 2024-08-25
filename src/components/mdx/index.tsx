import { MDXComponents } from "mdx/types";
import { ExternalLink } from "./Link";
import { MdxImage } from "./Image";
import { Callout } from "./Callout";
import { Paragraph } from "./Paragraph";

//Custom MDX Component
export const MdxComponent: MDXComponents = {
    p: Paragraph as any,
    a: ExternalLink as any,
    img: MdxImage as any,
    blockquote: Callout,
    Callout,
};
