"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

interface ActivityGalleryProps {
  slug: string;
  count: number;
  alt: string;
  variant?: "photos" | "cards";
}

export function ActivityGallery({
  slug,
  count,
  alt,
  variant = "photos",
}: ActivityGalleryProps) {
  const [open, setOpen] = useState<number | null>(null);
  const items = Array.from({ length: count }, (_, i) => i + 1);

  const show = (n: number) => setOpen(((n % count) + count) % count);
  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((v) => (v === null ? v : (v + 1) % count)),
    [count]
  );
  const prev = useCallback(
    () => setOpen((v) => (v === null ? v : (v - 1 + count) % count)),
    [count]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") next();
      else if (e.key === "ArrowRight") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  const isCards = variant === "cards";

  return (
    <>
      <ul
        className={`list-none m-0 p-0 grid gap-3 md:gap-4 ${
          isCards
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-2 sm:grid-cols-3"
        }`}
      >
        {items.map((n, i) => (
          <li key={n}>
            <button
              type="button"
              onClick={() => show(i)}
              aria-label={`عرض الصورة ${n} من ${count} — ${alt}`}
              className={`group relative block w-full overflow-hidden rounded-xl ring-1 ring-black/5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isCards ? "aspect-[4/5] bg-surface" : "aspect-[4/3] bg-surface"
              }`}
            >
              <Image
                src={`/images/activities/${slug}/${n}.jpg`}
                alt={`${alt} — صورة ${n}`}
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
                className={`transition-transform duration-500 group-hover:scale-105 ${
                  isCards ? "object-contain" : "object-cover"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div
          dir="rtl"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} — عارض الصور`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-pop-in"
          onClick={close}
        >
          {/* إغلاق */}
          <button
            type="button"
            onClick={close}
            aria-label="إغلاق"
            className="absolute top-4 left-4 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {count > 1 && (
            <>
              {/* السابق (يمين في RTL) */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="الصورة السابقة"
                className="absolute right-3 md:right-6 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              {/* التالي (يسار في RTL) */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="الصورة التالية"
                className="absolute left-3 md:left-6 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/activities/${slug}/${open + 1}.jpg`}
              alt={`${alt} — صورة ${open + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <span className="absolute bottom-5 inset-x-0 text-center font-tajawal text-sm text-white/70">
            {open + 1} / {count}
          </span>
        </div>
      )}
    </>
  );
}

export default ActivityGallery;
