import react from "react";
import Logo from "./Logo";
import Container from "./Container";
import React from "react";

export default () => (
    <Container className={"flex flex-row bg-neutral-900 pb-8"}>
        <div className={"flex"}>
            <Logo className={"fill-gray-400 h-48 w-48"}/>
        </div>
        <div className={"flex flex-row justify-around items-center pl-2 pr-2 grow text-3xl text-gray-400 font-alt"}>
            <a href={"/packages"} className={"border-b-2 pb-3 pr-1.5 pl-1.5 border-gray-400 transition duration-300 hover:border-gray-300 hover:-translate-y-2 hover:text-gray-300"}>
                Event Packages
            </a>
            <a href={"/about"} className={"border-b-2 pb-3 pr-1.5 pl-1.5 border-gray-400 transition duration-300 hover:border-gray-300 hover:-translate-y-2 hover:text-gray-300"}>
                About Me
            </a>
            <a href={"/contact"} className={"border-b-2 pb-3 pr-1.5 pl-1.5 border-gray-400 transition duration-300 hover:border-gray-300 hover:-translate-y-2 hover:text-gray-300"}>
                Contact
            </a>
        </div>
        <div className={"border border-l-2 border-gray-400 rounded-full"}/>
        <div className={"flex flex-col justify-center pl-14"}>
            <p className={"text-3xl font-semibold text-gray-300"}>
                David Morhart
            </p>
            <p className={"text-lg text-gray-400"}>
                inquiries@davidsmusic.ca
            </p>
        </div>
    </Container>
);