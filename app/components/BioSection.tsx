import Image from "next/image";

const IMG_W = 380;
const IMG_H = 267; // matches the camera's true aspect ratio (860x604)
const OVERLAP_W = 170; // how much of the photo pokes into each text column
const SHAPE_MARGIN = 20; // breathing room between the text and the camera's silhouette

// Traced from the camera photo's alpha channel (40 vertical samples), one polygon per column.
// shape-outside: url(image) is unreliable across browsers/float-directions for this photo, but
// shape-outside: polygon(...) reliably works for both float:left and float:right, so the
// silhouette is pre-baked into two polygons instead of referencing the PNG directly.
const LEFT_COLUMN_SHAPE =
  "polygon(100% 0%, 100% 2.5%, 100% 5%, 78% 7.5%, 62.4% 10%, 61.3% 12.4%, 61.3% 14.9%, 59% 17.6%, 55.4% 20.1%, 55.1% 22.6%, 55.4% 25%, 54.8% 27.5%, 57.2% 30%, 57.2% 32.5%, 58.5% 35%, 58.5% 37.5%, 57.4% 40%, 57.7% 42.5%, 55.6% 44.9%, 57.2% 47.4%, 59% 50.1%, 54.3% 52.6%, 50.2% 55.1%, 43.9% 57.5%, 28.9% 60%, 20.8% 62.5%, 16.6% 65%, 13% 67.5%, 10.1% 70%, 9.9% 72.5%, 9.9% 75%, 12.7% 77.4%, 15.9% 79.9%, 16.9% 82.4%, 23.9% 85.1%, 35.1% 87.6%, 82.1% 90%, 82.1% 92.5%, 100% 95%, 100% 97.5%, 100% 100%)";
const RIGHT_COLUMN_SHAPE =
  "polygon(0% 0%, 0% 2.5%, 0% 5%, 0% 7.5%, 11.1% 10%, 13.2% 12.4%, 13.2% 14.9%, 14.5% 17.6%, 18.1% 20.1%, 18.6% 22.6%, 18.9% 25%, 18.6% 27.5%, 17.1% 30%, 16.6% 32.5%, 16.3% 35%, 15.3% 37.5%, 16% 40%, 16% 42.5%, 16.6% 44.9%, 16.6% 47.4%, 15.5% 50.1%, 17.9% 52.6%, 18.1% 55.1%, 35.8% 57.5%, 67.8% 60%, 81% 62.5%, 88% 65%, 90.1% 67.5%, 90.1% 70%, 90.1% 72.5%, 89.9% 75%, 89.9% 77.4%, 89.9% 79.9%, 89.6% 82.4%, 86% 85.1%, 76.9% 87.6%, 60.2% 90%, 0% 92.5%, 0% 95%, 0% 97.5%, 0% 100%)";

const BIO_LEFT_BASE =
  "Tessa Osborne is a photographer working primarily in digital, drawn to natural light, quiet moments, and the small details that get overlooked. Every session starts with a conversation about who you are and what you want to remember. ";
const BIO_RIGHT_BASE =
  "This portfolio holds a mix of portrait work, everyday documentary shots, and the occasional personal project. It's a living collection, new work gets added as it's made, so check back. ";

export default function BioSection({
  bioLeft = BIO_LEFT_BASE.repeat(3).trim(),
  bioRight = BIO_RIGHT_BASE.repeat(3).trim(),
}: {
  bioLeft?: string;
  bioRight?: string;
}) {
  return (
    <section className="relative">
      {/* Wide desktop (design's tuned viewport, >=1280px): text hugs the camera's silhouette. */}
      <div className="hidden xl:flex gap-10 items-start relative">
        <div className="flex-1">
          <div
            aria-hidden
            style={{
              float: "right",
              width: OVERLAP_W,
              height: IMG_H,
              shapeOutside: LEFT_COLUMN_SHAPE,
              shapeMargin: `${SHAPE_MARGIN}px`,
              visibility: "hidden",
            }}
          />
          <p className="text-justify text-[13.5px] leading-[1.65] font-[Lora]">{bioLeft}</p>
        </div>

        <div className="flex-1">
          <div
            aria-hidden
            style={{
              float: "left",
              width: OVERLAP_W,
              height: IMG_H,
              shapeOutside: RIGHT_COLUMN_SHAPE,
              shapeMargin: `${SHAPE_MARGIN}px`,
              visibility: "hidden",
            }}
          />
          <p className="text-justify text-[13.5px] leading-[1.65] font-[Lora]">{bioRight}</p>
        </div>

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ width: IMG_W, height: IMG_H }}
        >
          <Image
            src="/images/camera-cutout.png"
            alt="Camera"
            fill
            className="object-contain [filter:sepia(0.15)_saturate(0.9)_contrast(1.05)]"
          />
        </div>
      </div>

      {/* Narrower viewports: the silhouette-hugging layout depends on fixed pixel geometry that
          doesn't hold up below the design's tuned width, so fall back to a simple stacked layout. */}
      <div className="flex xl:hidden flex-col items-center gap-8">
        <div className="relative w-full max-w-[380px] aspect-[380/267]">
          <Image
            src="/images/camera-cutout.png"
            alt="Camera"
            fill
            className="object-contain [filter:sepia(0.15)_saturate(0.9)_contrast(1.05)]"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-8 w-full">
          <p className="flex-1 text-justify text-[13.5px] leading-[1.65] font-[Lora]">{bioLeft}</p>
          <p className="flex-1 text-justify text-[13.5px] leading-[1.65] font-[Lora]">{bioRight}</p>
        </div>
      </div>
    </section>
  );
}
