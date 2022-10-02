import React from "react";
import { Link } from "react-router-dom";

interface Props {
    to: string;
    className?: string;
    children?: React.ReactNode;
}

export default ({ to, className, children }: Props) => {
    return (
        <Link to={to} className={`pt-2 pb-2 p-4 ${className} transition duration-200 hover:-translate-y-0.5 hover:opacity-75`}>
            {children}
        </Link>
    );
}