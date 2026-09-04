export default function Nameplate({
  brandName = "Tessa Osborne",
}: {
  brandName?: string;
}) {
  return (
    <div className="text-center pt-1">
      <div className="font-['Amsterdam_Handwriting',cursive] text-[44px] sm:text-[60px] lg:text-[80px] leading-[1.4] pb-1.5">
        {brandName}
      </div>
    </div>
  );
}
