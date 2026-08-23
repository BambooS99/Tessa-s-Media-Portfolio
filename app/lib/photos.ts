import fs from "fs";
import path from "path";

const PHOTOS_ROOT = path.join(process.cwd(), "public/images/photos");

// URL slug -> display label.
export const CATEGORIES: Record<string, string> = {
  wedding: "wedding",
  freelance: "freelance",
  "other-events": "other events",
};

function normalize(name: string) {
  return name.replace(/[-_]/g, " ").trim().toLowerCase();
}

// Folders on disk may not match the URL slug exactly in casing or spacing
// (e.g. "Wedding", "other events"). Find whatever folder actually corresponds
// to a given slug so we don't require an exact name.
function resolveCategoryDirName(category: string): string | null {
  if (!fs.existsSync(PHOTOS_ROOT)) return null;

  const target = normalize(category);
  const entries = fs.readdirSync(PHOTOS_ROOT, { withFileTypes: true });
  const match = entries.find((e) => e.isDirectory() && normalize(e.name) === target);

  return match ? match.name : null;
}

export function getCategoryPhotos(category: string) {
  const dirName = resolveCategoryDirName(category);
  if (!dirName) return [];

  const dir = path.join(PHOTOS_ROOT, dirName);
  const files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

  const parsed = files.map((file) => {
    const match = file.match(/^(\d+)-/);
    const order = match ? parseInt(match[1], 10) : Infinity;
    const { mtimeMs } = fs.statSync(path.join(dir, file));
    return { file, order, mtimeMs };
  });

  parsed.sort((a, b) => a.order - b.order || a.mtimeMs - b.mtimeMs);

  return parsed.map((p) => ({ file: p.file, dirName }));
}

export function findCategoryPhoto(category: string, file: string) {
  const dirName = resolveCategoryDirName(category);
  if (!dirName) return null;

  const filePath = path.join(PHOTOS_ROOT, dirName, file);
  if (!fs.existsSync(filePath)) return null;

  return { dirName };
}
