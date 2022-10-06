import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import Icon from "../components/Icon";

export default () => {
    return (
        <div>
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
                <div className={"flex flex-col sm:grid sm:grid-cols-3 mt-32 2xl:mt-52 sm:gap-10 2xl:gap-16 mb-16"}>
                    <Card className={"flex flex-col bg-neutral-50"} title={"Wedding Ceremonies"} icon={"/icons/church.svg"}>
                        <p className={"mt-5 pl-2 pr-2 mb-6"}>
                            Ready for your big day? Well, no need to worry! I've got you covered. With various affordable options, I'll make sure we can find something to suit your needs.
                        </p>
                        <Button to={"/packages"} className={"text-alt border border-1 rounded-md border-alt w-fit"}>
                            See Packages
                        </Button>
                    </Card>
                    <Card className={"flex flex-col bg-neutral-50"} title={"Wedding Receptions"} icon={"/icons/cake.svg"}>
                        <p className={"mt-5 pl-2 pr-2 mb-6"}>
                            While it may not be as stressful as the official ceremony, it's still a challenge to plan! Let me take care of the music and ease that burden, I'm sure I've got what you're looking for.
                        </p>
                        <Button to={"/packages"} className={"text-alt border border-1 rounded-md border-alt w-fit"}>
                            See Packages
                        </Button>
                    </Card>
                    <Card className={"flex flex-col bg-neutral-50"} title={"Dinner/Lounge Music"} icon={"/icons/speaker.svg"}>
                        <p className={"mt-5 pl-2 pr-2 mb-6"}>
                            Looking to get a musician for an event? Look no further. I've got flexible options for all kinds of music and events, from casual to formal.
                        </p>
                        <Button to={"/packages"} className={"text-alt border border-1 rounded-md border-alt w-fit"}>
                            See Packages
                        </Button>
                    </Card>
                </div>
            </Container>
            <Container className={"flex flex-col sm:grid sm:grid-cols-2 bg-neutral-100 pt-16 pb-16"}>
                <div className={"flex justify-center items-center"}>
                    <img className={"max-h-52 rounded-lg"} src={"/placeholder.png"}/>
                </div>
                <div className={"flex flex-col"}>
                    <p className={"text-alt text-5xl"}>About Me</p>
                    <p className={"text-lg mt-2 pr-2"}>
                        Hi, I’m David, a 16 year old multi-instrumentalist based in the GTA. I can play 14 different instruments, but I’m most proficient in Piano, Accordion, and Tenor Sax. I’ve been playing the piano for 12 years, and gigging for just over 5 years.
                    </p>
                </div>
            </Container>
            <Container className={"flex flex-col mt-6"}>
                <p className={"text-5xl text-alt text-center"}>Services</p>
                <p className={"text-xl text-center"}>View the various services offered below.</p>
                <div className={"flex flex-col sm:grid sm:grid-cols-2 gap-6 mt-20"}>
                    <div className={"flex flex-col items-center"}>
                        <div className={"mb-8"}>
                            <div className={"flex flex-row items-center"}>
                                <Icon src={"/icons/keyboard.svg"} className={"max-h-[64px] max-w-[64px]"} background backgroundColor={"bg-neutral-200"}/>
                                <p className={"text-2xl ml-4"}>Piano/Keyboard</p>
                            </div>
                            <p className={"ml-[64px] pl-4 max-w-md"}>The piano is the instrument I have the most experience with, it is also my personal favorite. It's a timeless classic that goes well with any kind of event.</p>
                        </div>
                        <div>
                            <div className={"flex flex-row items-center"}>
                                <Icon src={"/icons/accordion.svg"} className={"max-h-[64px] max-w-[64px]"} background backgroundColor={"bg-neutral-200"}/>
                                <p className={"text-2xl ml-4"}>Accordion</p>
                            </div>
                            <p className={"ml-[64px] pl-4 max-w-md"}>A rather uncommon instrument here in Canada, the accordion can create a very unique experience for your event.</p>
                        </div>
                    </div>
                    <div className={"flex flex-col items-center"}>
                        <div className={"mb-8"}>
                            <div className={"flex flex-row items-center"}>
                                <Icon src={"/icons/microphone.svg"} className={"max-h-[64px] max-w-[64px]"} background backgroundColor={"bg-neutral-200"}/>
                                <p className={"text-2xl ml-4"}>Vocals</p>
                            </div>
                            <p className={"ml-[64px] pl-4 max-w-md"}>While I'm not a singer myself, I have various singers available to choose from so you can find the ideal vocals for your event.</p>
                        </div>
                        <div>
                            <div className={"flex flex-row items-center"}>
                                <Icon src={"/icons/saxophone.svg"} className={"max-h-[64px] max-w-[64px]"} background backgroundColor={"bg-neutral-200"}/>
                                <p className={"text-2xl ml-4"}>Saxophone</p>
                            </div>
                            <p className={"ml-[64px] pl-4 max-w-md"}>A staple of Jazz, the saxophone is a great instrument to choose for a relaxed and laid back mood. It's one of my personal favorites as well.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}