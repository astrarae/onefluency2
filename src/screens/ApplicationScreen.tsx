import {BackgroundGradient} from "@/components/GlowingCard.tsx";
import {Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FlipWords} from "@/components/FlipWords.tsx";
import {Link} from "react-router-dom";

function ApplicationScreen() {
    return (
        <div className="h-full w-full flex justify-center items-center ">
            <BackgroundGradient className="w-[350px] h-[550px] ">
                <Card className="w-[100%] h-[100%] p-[10px] rounded-[20px] bg-black">
                    <CardHeader className="w-full flex justify-between items-center">
                        <CardTitle className="text-white">OneFluency</CardTitle>

                        <CardAction>
                            <Link to="/">
                                <Button>Back</Button>
                            </Link>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <FlipWords className="text-white font-semibold text-base" words={["Hi", "How was your day?","Build your dreams" ,"Have a nice day!"]}></FlipWords>
                        <div className="w-full h-[100px]"></div>
                        <p className="text-white">Ready to master a new language? Whether you want to learn English or Korean, our courses are designed to help you succeed. Join our vibrant community and start your language journey today!</p>
                    </CardContent>
                    <div className="w-full h-[100px]"></div>
                    <CardFooter>
                        <a href="https://t.me/v4LeR4ik"
                        className="text-white font-semibold text-base"
                        >
                            My Telegram
                        </a>
                    </CardFooter>
                </Card>
            </BackgroundGradient>
        </div>
    );
}

export default ApplicationScreen;
