import Nav from "./components/Nav";
import Nameplate from "./components/Nameplate";
import HeroTitle from "./components/HeroTitle";
import BioSection from "./components/BioSection";
import CategoryFooter from "./components/CategoryFooter";

export default function Home() {
  return (
    <main className="bg-[#f0ead6] text-[#201f1d] min-h-screen font-[Lora] pt-9 px-14 pb-20">
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
