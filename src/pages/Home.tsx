import Banner from "@/components/HomePage/Banner";
import CheckBox from "@/components/HomePage/CheckBox";
import Hero from "@/components/HomePage/Hero";
import Obituaries from "@/components/HomePage/Obituaries";
import Osmrtnica from "@/components/HomePage/Osmrtnica";
import Pogrebu from "@/components/HomePage/Pogrebu";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F3F6F8]">
      <Hero />
      <Obituaries />
      <Osmrtnica />
      <Pogrebu />
      <Banner />
      <CheckBox />
    </div>
  );
};

export default Home;
