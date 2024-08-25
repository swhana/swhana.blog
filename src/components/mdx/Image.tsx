import Image from "next/image";

interface ImageProps {
    src: string;
    alt: string;
}

export const MdxImage = ({ src, alt }: ImageProps) => {
    return (
        <div>
            <Image
                src={src}
                alt={alt}
                className="mx-auto mb-0 mt-8 rounded-md"
                width={500}
                height={500}
            />
            <div>
                <span className="w-full block mb-8 mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                    {alt}
                </span>
            </div>
        </div>
    );
};
