import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import Navigation from "../components/Navigation";

export default () => {
    return (
        <Container>
            <Navigation/>
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
                <Card className={"flex flex-col"} title={"Wedding Ceremonies"} icon={"/svg/church.svg"}>
                    <p className={"mt-5 pl-2 pr-2 mb-6"}>
                        Ready for your big day? Well, no need to worry! I've got you covered. With various affordable options, I'll make sure we can find something to suit your needs.
                    </p>
                    <Button to={"/packages"} className={"text-alt border border-1 rounded-md border-alt w-fit"}>
                        See Packages
                    </Button>
                </Card>
                <Card className={"flex flex-col"} title={"Wedding Receptions"} icon={"/svg/cake.svg"}>
                    <p className={"mt-5 pl-2 pr-2 mb-6"}>
                        While it may not be as stressful as the official ceremony, it's still a challenge to plan! Let me take care of the music and ease that burden, I'm sure I've got what you're looking for.
                    </p>
                    <Button to={"/packages"} className={"text-alt border border-1 rounded-md border-alt w-fit"}>
                        See Packages
                    </Button>
                </Card>
                <Card className={"flex flex-col"} title={"Dinner/Lounge Music"} icon={"/svg/speaker.svg"}>
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