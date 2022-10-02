import React from "react";
import Logo from "./Logo";

export default () => (
    <div className={"flex flex-col sm:flex-row sm:items-center"}>
        <Logo/>
        <div className={"flex grow flex-col mt-2 sm:mt-0 sm:flex-row sm:justify-end text-2xl lg:mr-30 md:mr-24"}>
            <a href={"/packages"} className={"lg:mr-16 md:mr-10 heading"}>Event Packages</a>
            <a href={"/about"} className={"lg:mr-16 md:mr-10 heading"}>About Me</a>
            <a href={"/contact"} className={"heading"}>Contact</a>
        </div>
    </div>
)