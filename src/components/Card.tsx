import React from "react";
import Icon from "./Icon";

interface Props {
    children?: React.ReactNode;
    className?: string;
    title: string;
    icon?: string
}

export default ({ children, className, title, icon }: Props) => {
    return (
        <div className={`flex flex-col rounded-lg shadow-lg hover:shadow-xl mb-6 sm:mb-0 p-4 pt-6 pb-6 transition duration-200 hover:translate-y-0.5 ${className}`}>
            <div className={"flex flex-col items-center mb-5"}>
                {icon && <Icon className={"mt-2"} src={icon} background backgroundColor={"bg-neutral-200"}/>}
                <p className={"text-center font-alt text-2xl mt-4"}>{title}</p>
            </div>
            <hr/>
            {children}
        </div>
    );
}