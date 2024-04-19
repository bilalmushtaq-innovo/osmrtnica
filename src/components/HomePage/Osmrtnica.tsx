import H1 from "../typo/H1";
import ipadLandscape from "@/assets/images/iPad-landscape.png";
import Wrapper from "../wrapper";
import Paragraph from "../typo/Paragraph";
import { Button } from "../ui/button";

const Osmrtnica = () => {
    return (
        <div className="border-1 w-full text-center border-[#E3E8EC] bg-[#FEFAF2]">
            <Wrapper className=" flex gap-4 items-center">
                <img src={ipadLandscape} alt="ipad-landscape" />
                <div className="content text-start">
                    <H1>Osmrtnica</H1>
                    <Paragraph className="py-4">Stran, kjer izvemo vse o pogrebu, se vpišete v Žalno knjigo,
                        izrečete sožalja in prižgete virtualno svečko.  </Paragraph>
                    <Paragraph className="font-semibold pb-8">Vse navedeno je BREZPLAČNO.</Paragraph>
                    <Button variant="primary" size="lg">Več informacij</Button>
                </div>
            </Wrapper>
        </div>
    )
}

export default Osmrtnica;