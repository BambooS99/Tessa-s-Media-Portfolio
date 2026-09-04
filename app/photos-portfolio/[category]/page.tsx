import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import { CATEGORIES, getCategoryPhotos } from "../../lib/photos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const title = CATEGORIES[category];

  return title
    ? {
        title: `${title} Photography`,
        description: `Browse ${title} photography by Tessa Osborne.`,
      }
    : {};
}

export default async function CategoryGallery({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!(category in CATEGORIES)) {
    notFound();
  }

  const title = CATEGORIES[category];
  const photos = getCategoryPhotos(category);

  return (
    <main className="bg-[#f0ead6] text-[#201f1d] min-h-screen font-[Lora] pt-6 px-5 pb-14 sm:pt-8 sm:px-8 sm:pb-16 lg:pt-9 lg:px-14 lg:pb-20">
      <Nav />
      <div className="max-w-[1240px] mx-auto">
        <Link
          href="/photos-portfolio"
          className="inline-block text-[13px] uppercase tracking-[0.08em] font-[Lora] text-[#201f1d] hover:text-[#7d5411] mb-6"
        >
          ‹ all photos
        </Link>
        <h1 className="font-['Cormorant_Garamond',serif] font-bold text-[34px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-[-0.01em] mb-8 lg:mb-11 capitalize">
          {title}
        </h1>

        {photos.length === 0 ? (
          <p className="text-[13.5px] leading-[1.65] font-[Lora] max-w-[600px]">
            This gallery is coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-10">
            {photos.map(({ file, dirName }, i) => (
              <Link
                key={file}
                href={`/photos-portfolio/${category}/${encodeURIComponent(file)}`}
                className="relative block aspect-[4/5] overflow-hidden bg-[#e4dcc4]"
              >
                <Image
                  src={`/images/photos/${encodeURIComponent(dirName)}/${encodeURIComponent(file)}`}
                  alt={`${title} photography by Tessa Osborne`}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  quality={90}
                  className="object-cover"
                  priority={i < 6}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
