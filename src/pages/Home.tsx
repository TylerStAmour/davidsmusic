import Container from "../components/Container";
import Logo from "../components/Logo";
import Card from "../components/Card";
import Icon from "../components/Icon";
import Button from "../components/Button";

export default () => {
    return (
        <Container>
            <div className={"flex flex-col sm:flex-row sm:items-center"}>
                <Logo/>
                <div className={"flex grow flex-col mt-2 sm:mt-0 sm:flex-row sm:justify-end text-2xl lg:mr-30 md:mr-24"}>
                    <a href={"/packages"} className={"lg:mr-16 md:mr-10 heading"}>Event Packages</a>
                    <a href={"/about"} className={"lg:mr-16 md:mr-10 heading"}>About Me</a>
                    <a href={"/contact"} className={"heading"}>Contact</a>
                </div>
            </div>
            <div className={"flex flex-col sm:grid sm:grid-cols-2 mt-12 sm:mt-24 2xl:mt-48"}>
                <div className={"flex flex-col justify-center mb-10 sm:mb-0"}>
                    <p className={"text-7xl text-alt font-semibold"}>David Morhart</p>
                    <p className={"text-2xl text-alt"}>Your ideal choice for weddings, lounge music, and more...</p>
                </div>
                <div className={"flex justify-center"}>
                    <img className={"max-h-72 2xl:max-h-96 rounded-lg"} src={"/placeholder.png"}/>
                </div>
            </div>
            <div className={"flex flex-col sm:grid sm:grid-cols-3 mt-32 2xl:mt-52 sm:gap-10"}>
                <Card className={"flex flex-col"}>
                    <div className={"flex flex-col items-center mb-5"}>
                        <Icon className={"mt-2"} src={"/svg/church.svg"} background backgroundColor={"bg-neutral-200"}/>
                        <p className={"text-center font-alt text-2xl mt-4"}>Wedding Ceremonies</p>
                    </div>
                    <hr/>
                    <p className={"mt-5 pl-2 pr-2 mb-6"}>
                        Ready for your big day? Well, no need to worry! I've got you covered. With various affordable options, I'll make sure we can find something to suit your needs.
                    </p>
                    <Button to={"/packages"} className={"text-alt border border-1 rounded-md border-alt w-fit"}>
                        See Packages
                    </Button>
                </Card>
                <Card className={"flex flex-col"}>
                    <div className={"flex flex-col items-center mb-5"}>
                        <Icon className={"mt-2"} src={"/svg/cake.svg"} background backgroundColor={"bg-neutral-200"}/>
                        <p className={"text-center font-alt text-2xl mt-4"}>Wedding Receptions</p>
                    </div>
                    <hr/>
                    <p className={"mt-5 pl-2 pr-2 mb-6"}>
                        While it may not be as stressful as the official ceremony, it's still a challenge to plan! Let me take care of the music and ease that burden, I'm sure I've got what you're looking for.
                    </p>
                    <Button to={"/packages"} className={"text-alt border border-1 rounded-md border-alt w-fit"}>
                        See Packages
                    </Button>
                </Card>
                <Card className={"flex flex-col"}>
                    <div className={"flex flex-col items-center mb-5"}>
                        <Icon className={"mt-2"} src={"/svg/speaker.svg"} background backgroundColor={"bg-neutral-200"}/>
                        <p className={"text-center font-alt text-2xl mt-4"}>Dinner/Lounge Music</p>
                    </div>
                    <hr/>
                    <p className={"mt-5 pl-2 pr-2 mb-6"}>
                        Looking to get a musician for an event? Look no further. I've got flexible options for all kinds of music and events, from casual to formal.
                    </p>
                    <Button to={"/packages"} className={"text-alt border border-1 rounded-md border-alt w-fit"}>
                        See Packages
                    </Button>
                </Card>
            </div>
        </Container>
    );
}