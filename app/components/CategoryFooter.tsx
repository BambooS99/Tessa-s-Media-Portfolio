export default function CategoryFooter({
  promptBody = "Browse the gallery for recent sessions, read more about the approach on the about page, or get in touch to book a shoot.",
}: {
  promptBody?: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[210px_1fr] gap-4 md:gap-9 items-start mt-10 md:mt-14">
      <h2 className="font-['Cormorant_Garamond',serif] font-bold text-[26px] sm:text-[30px] md:text-[36px] leading-[1.02] tracking-[-0.01em] m-0">
        what are you here to see more of?
      </h2>
      <div>
        <p className="text-[13.5px] leading-[1.65] font-[Lora] mb-5">
          {promptBody}
        </p>
        <div className="flex gap-10 font-['Cormorant_Garamond',serif] font-semibold text-[19px]"></div>
      </div>
    </div>
  );
}
