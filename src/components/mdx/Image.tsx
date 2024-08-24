interface ImageProps {
    src: string;
    alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
    return (
        <div>
            <img src={src} alt={alt} className="mx-auto mb-0 mt-8 rounded-md" />
            {alt !== "" && (
                <span className="w-full block mb-8 mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                    {alt}
                </span>
            )}
        </div>
    );
};
