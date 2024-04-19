import heroImg from "@/assets/images/hero-img.png";

const Hero = () => {
    return (
        <>
            <div className="hero-images overflow-hidden">
                <img src={heroImg} alt="hero-img" width="100%" style={{
                    transform: "scaleX(105%)",
                }} />
            </div>
            <div className="nav-options transform -translate-y-44">
                <div className="flex gap-8 justify-center">
                    <div className="bg-none px-4">
                        <h1 className="number text-[64px] leading-snug text-[#7C7C7C] drop-shadow-md">01.</h1>
                        <h3 className="text uppercase pl-4 border-l-2 text-[28px] text-[#DEDEDE] font-semibold">osmrtnice</h3>
                    </div>
                    <div className="bg-none px-4">
                        <h1 className="number text-[64px] leading-snug text-[#7C7C7C] drop-shadow-md">02.</h1>
                        <h3 className="text uppercase pl-4 border-l-2 text-[28px] text-[#DEDEDE] font-semibold">pogrebi</h3>
                    </div>
                    <div className="bg-none px-4">
                        <h1 className="number text-[64px] leading-snug text-[#7C7C7C] drop-shadow-md">03.</h1>
                        <h3 className="text uppercase pl-4 border-l-2 text-[28px] text-[#DEDEDE] font-semibold">spominska</h3>
                    </div>
                    <div className="bg-none px-4">
                        <h1 className="number text-[64px] leading-snug text-[#7C7C7C] drop-shadow-md">04.</h1>
                        <h3 className="text uppercase pl-4 border-l-2 text-[28px] text-[#DEDEDE] font-semibold">cvetlicarne</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;