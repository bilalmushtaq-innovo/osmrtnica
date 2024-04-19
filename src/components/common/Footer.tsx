import footerLogo from "@/assets/images/footer-logo.svg";
import Large from "../typo/Large";
import { Link } from "react-router-dom";
import { Phone } from 'lucide-react';
import { AtSign } from 'lucide-react';
import { Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <div className="pt-12 pb-8 bg-[#EEF2F2]">
            <div className="grid grid-cols-4 justify-evenly w-[85%] mx-auto">
                <div>
                    <img src={footerLogo} alt="logo" className="py-2" />
                    <div className="options flex flex-col gap-2 pt-4">
                        <Link to="/auth">
                            <div className="flex items-center gap-4">
                                <div className="p-2 icons-shadow rounded-md">
                                    <Phone fill="black" size={18} stroke="1" />
                                </div>
                                <Large>386 05 05 05 05</Large>
                            </div>
                        </Link>
                        <Link to="/auth">
                            <div className="flex items-center gap-4">
                                <div className="p-2 icons-shadow rounded-md">
                                    <AtSign size={18} />
                                </div>
                                <Large>best@website.com</Large>
                            </div>
                        </Link>
                        <Link to="/auth">
                            <div className="flex items-center gap-4">
                                <div className="p-2 icons-shadow rounded-md">
                                    <Facebook size={18} />
                                </div>
                                <Large>Facebook</Large>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <Large className="font-semibold pb-4">Glavne strani</Large>
                    <div className="options flex flex-col gap-2">
                        <Link to="/auth">Osmrtnice</Link>
                        <Link to="/auth">Pogrebi</Link>
                        <Link to="/auth">Spominska</Link>
                        <Link to="/auth">Cvetličarne</Link>
                        <Link to="/auth">Pogrebna podjetja</Link>
                    </div>
                </div>
                <div>
                    <Large className="font-semibold pb-4">Koristne povezave</Large>
                    <div className="options flex flex-col gap-2">
                        <Link to="/auth">Pogosta vprašanja</Link>
                        <Link to="/auth">Kaj storiti, ko se zgodi</Link>
                        <Link to="/auth">Kako oddati osmrtnico</Link>
                        <Link to="/auth">Kontakt</Link>
                        <Link to="/auth">Partnerji</Link>
                    </div>
                </div>
                <div>
                    <Large className="font-semibold pb-4">Drobni tisk</Large>
                    <div className="options flex flex-col gap-2">
                        <Link to="/auth">Splošni pogoji poslovanja</Link>
                        <Link to="/auth">Politika zasebnosti</Link>
                        <Link to="/auth">Politika varovanja osebnih podatkov</Link>
                        <Link to="/auth">Piškotki</Link>
                        <Link to="/auth">Povej naprej</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer