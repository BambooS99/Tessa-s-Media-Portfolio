import Nav from "./components/Nav";
import Nameplate from "./components/Nameplate";
import HeroTitle from "./components/HeroTitle";
import BioSection from "./components/BioSection";
import CategoryFooter from "./components/CategoryFooter";

export default function Home() {
  return (
    <main className="bg-[#f0ead6] text-[#201f1d] min-h-screen font-[Lora] pt-6 px-5 pb-14 sm:pt-8 sm:px-8 sm:pb-16 lg:pt-9 lg:px-14 lg:pb-20">
      <Nav />
      <div className="max-w-[1240px] mx-auto relative">
        <Nameplate />
        <HeroTitle />
        <BioSection />
        <CategoryFooter />
      </div>
    </main>
  );
}
