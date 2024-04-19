import H1 from "../typo/H1";
import candle from "@/assets/images/Candle.png"
import H3 from "../typo/H3";
import Large from "../typo/Large";
import Small from "../typo/Small";
import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';
import { Button } from "../ui/button";
import SelectLabels from "../ui/SelectLabel";
import { Search } from 'lucide-react';
import InputField from "../ui/InputField";

const Obituaries = () => {
    return (
        <div className="w-[75%] mx-auto mb-16 flex flex-col items-center">
            <H1 className="-pt-2 text-center pb-8">Zadnje osmrtnice</H1>
            <div className="pb-12 flex items-center justify-center gap-4">
                <InputField width="100%" />
                <SelectLabels
                    width=""
                    label="Išči po kraju"
                    menuItems={[
                        { value: 10, label: 'Ten' },
                        { value: 20, label: 'Twenty' },
                        { value: 30, label: 'Thirty' },
                    ]}
                /><SelectLabels
                    width=""
                    label="Išči po regiji"
                    menuItems={[
                        { value: 10, label: 'Ten' },
                        { value: 20, label: 'Twenty' },
                        { value: 30, label: 'Thirty' },
                    ]}
                />
                <Button size="search">
                    <Search size={20} />
                </Button>
            </div>
            <div className="obituaries grid grid-cols-2 gap-8 w-full">
                <div className="flex p-2 pr-8 gap-2 rounded-lg border-2 shadow-obituaries border-white bg-gradient-to-br from-[#E3EAEF] to-[#F3F6F8]">
                    <img src={candle} alt="image" />
                    <div className="py-4 flex flex-col justify-between w-full">
                        <H3>Elizabeta Škorjanc</H3>
                        <div>
                            <Large>1944 – 29.01.2024 (80 let)</Large>
                            <Large>Muta</Large>
                        </div>
                        <div className="self-end flex gap-2">
                            <Small>Osmrtnica</Small>
                            <Link to="/auth">
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex p-2 pr-8 gap-2 rounded-lg border-2 shadow-obituaries border-white bg-gradient-to-br from-[#E3EAEF] to-[#F3F6F8]">
                    <img src={candle} alt="image" />
                    <div className="py-4 flex flex-col justify-between w-full">
                        <H3>Elizabeta Škorjanc</H3>
                        <div>
                            <Large>1944 – 29.01.2024 (80 let)</Large>
                            <Large>Muta</Large>
                        </div>
                        <div className="self-end flex gap-2">
                            <Small>Osmrtnica</Small>
                            <Link to="/auth">
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-8">
                <Button variant="primary" size="lg">Prikaži več</Button>
            </div>
        </div >
    )
}

export default Obituaries;