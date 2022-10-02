import React from "react";

interface Props {
    src: string;
    background?: boolean;
    backgroundColor?: string; // Must use Tailwind to define background color
    className?: string;
}

export default ({ src, background, backgroundColor, className }: Props) => {
    return (
        <img
            src={src}
            className={`max-w-[52px] max-h-[52px] ${className} 
                ${background == true && `p-2 ${backgroundColor} rounded-full`}`
            }
        />
    )
}