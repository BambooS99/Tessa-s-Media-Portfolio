export default function CategoryFooter({
  promptBody = "Browse the gallery for recent sessions, read more about the approach on the about page, or get in touch to book a shoot.",
  formats = ["digital"],
}: { promptBody?: string; formats?: string[] }) {
  return (
    <div className="grid grid-cols-[210px_1fr] gap-9 items-start mt-14">
      <h2 className="font-['Cormorant_Garamond',serif] font-bold text-[36px] leading-[1.02] tracking-[-0.01em] m-0">
        what are you here to see more of?
      </h2>
      <div>
        <p className="text-[13.5px] leading-[1.65] font-[Lora] mb-5">{promptBody}</p>
        <div className="flex gap-10 font-['Cormorant_Garamond',serif] font-semibold text-[19px]">
          {formats.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
