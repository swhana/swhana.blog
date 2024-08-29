import Image from "next/image";

interface ImageProps {
    src: string;
    alt: string;
}

export const MdxImage = ({ src, alt }: ImageProps) => {
    //블로그에 올라가는 이미지는 전부 원격 이미지가 되기 때문에 사이즈를 사전에 알 수가 없음 그래서 img태그 활용
    return (
        <div>
            <picture>
                <img
                    src={src}
                    alt={alt}
                    className="mx-auto mb-0 mt-8 rounded-md"
                />
            </picture>
            {alt !== "" && (
                <span className="w-full block mb-8 mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                    {alt}
                </span>
            )}
        </div>
    );
};
