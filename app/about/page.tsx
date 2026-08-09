import Nav from "../components/Nav";

export default function About() {
  return (
    <main className="bg-[#f0ead6] text-[#201f1d] min-h-screen font-[Lora] pt-9 px-14 pb-20">
      <Nav />
      <div className="max-w-[1240px] mx-auto">
        <h1 className="font-['Cormorant_Garamond',serif] font-bold text-[56px] leading-[0.95] tracking-[-0.01em] my-11">
          about
        </h1>
        <p className="text-[13.5px] leading-[1.65] font-[Lora] max-w-[600px]">
          More about Tessa and her approach to photography is coming soon.
        </p>
      </div>
    </main>
  );
}
