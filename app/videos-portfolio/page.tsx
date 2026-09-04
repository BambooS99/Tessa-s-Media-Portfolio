import Nav from "../components/Nav";

export default function VideosPortfolio() {
  return (
    <main className="bg-[#f0ead6] text-[#201f1d] min-h-screen font-[Lora] pt-6 px-5 pb-14 sm:pt-8 sm:px-8 sm:pb-16 lg:pt-9 lg:px-14 lg:pb-20">
      <Nav />
      <div className="max-w-[1240px] mx-auto">
        <h1 className="font-['Cormorant_Garamond',serif] font-bold text-[34px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-[-0.01em] my-8 lg:my-11">
          videos portfolio
        </h1>
        <p className="text-[13.5px] leading-[1.65] font-[Lora] max-w-[600px]">
          The video gallery is coming soon.
        </p>
      </div>
    </main>
  );
}
