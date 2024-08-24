import { MDXComponents } from "mdx/types";
import { ExternalLink } from "./Link";
import { Image } from "./Image";
import { Callout } from "./Callout";

//Custom MDX Component
export const MdxComponent: MDXComponents = {
    a: ExternalLink as any,
    img: Image as any,
    blockquote: Callout,
    Callout,
};
