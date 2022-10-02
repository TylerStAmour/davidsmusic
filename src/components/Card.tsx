import React from "react";

interface Props {
    children?: React.ReactNode;
    className?: string;
}

export default ({ children, className }: Props) => {
    return (
        <div className={`rounded-lg shadow-lg hover:shadow-xl mb-6 sm:mb-0 p-4 pt-6 pb-6 transition duration-200 hover:translate-y-0.5 ${className}`}>
            {children}
        </div>
    );
}