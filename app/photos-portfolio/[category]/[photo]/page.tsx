import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../../components/Nav";
import { CATEGORIES, findCategoryPhoto } from "../../../lib/photos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; photo: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const title = CATEGORIES[category];

  return title
    ? {
        title: `${title} Photograph`,
        description: `A ${title} photograph by Tessa Osborne.`,
      }
    : {};
}

export default async function Photo({
  params,
}: {
  params: Promise<{ category: string; photo: string }>;
}) {
  const { category, photo } = await params;

  if (!(category in CATEGORIES)) {
    notFound();
  }

  const file = decodeURIComponent(photo);
  const found = findCategoryPhoto(category, file);

  if (!found) {
    notFound();
  }

  return (
    <main className="bg-[#f0ead6] text-[#201f1d] min-h-screen font-[Lora] pt-6 px-5 pb-14 sm:pt-8 sm:px-8 sm:pb-16 lg:pt-9 lg:px-14 lg:pb-20">
      <Nav />
      <div className="max-w-[1240px] mx-auto">
        <Link
          href={`/photos-portfolio/${category}`}
          className="inline-block text-[13px] uppercase tracking-[0.08em] font-[Lora] text-[#201f1d] hover:text-[#7d5411] mb-6 lg:mb-8"
        >
          ‹ back
        </Link>
        <div className="relative w-full h-[50vh] sm:h-[65vh] lg:h-[78vh]">
          <Image
            src={`/images/photos/${encodeURIComponent(found.dirName)}/${encodeURIComponent(file)}`}
            alt={`${CATEGORIES[category]} photography by Tessa Osborne`}
            fill
            sizes="100vw"
            quality={95}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
}
