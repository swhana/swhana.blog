import Image from "next/image";

interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export const MdxImage = ({
    src,
    alt,
    width = 500,
    height = 500,
}: ImageProps) => {
    return (
        <div>
            <Image
                src={src}
                alt={alt}
                className="mx-auto mb-0 mt-8 rounded-md"
                width={width}
                height={height}
            />
            {alt !== "" && (
                <span className="w-full block mb-8 mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                    {alt}
                </span>
            )}
        </div>
    );
};
