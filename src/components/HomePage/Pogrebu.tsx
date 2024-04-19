import H1 from "../typo/H1";
import Paragraph from "../typo/Paragraph";
import { Button } from "../ui/button";
import Wrapper from "../wrapper";
import iphoneX from "@/assets/images/iPhonex.png";

const Pogrebu = () => {
    return (
        <div className="border w-full text-center border-[#E3E8EC] py-24" style={{
            backgroundImage: 'linear-gradient(to bottom, #B6ECEC 9%, #BEF4F4 0%)',
        }}>
            <Wrapper className="w-[73%] flex gap-4 justify-between items-center">
                <div className="content text-start w-[60%]">
                    <H1>Obveščanje o pogrebu</H1>
                    <Paragraph className="py-4">V težkih trenutkih je včasih lažje poslati ali deliti po socialnih omrežjih,   kot obveščati vsakega posebej.</Paragraph>
                    <Paragraph className="py-4">Na spominski strani pokojnika/ce si prenesete obvestilo o pogrebu, ki ga lahko potem pošiljate naprej sorodnikom in znancem. Obvestilo je prilagojeno meram mobilnega telefona.</Paragraph>
                    <Paragraph className="font-semibold pb-8">Obvestilo o pogrebu je BREZPLAČNO.</Paragraph>
                    <Button variant="primary" size="lg">Poišči osmrtnico</Button>
                </div>
                <img src={iphoneX} alt="ipad-landscape" />
            </Wrapper>
        </div >
    )
}

export default Pogrebu;