"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  activitiesSorted,
  activityYears,
  THEME_META,
  activityHero,
  type ActivityTheme,
} from "@/lib/activities";

type YearFilter = "all" | number;
type ThemeFilter = "all" | ActivityTheme;

const themeOrder: ActivityTheme[] = [
  "digital-safety",
  "gbv",
  "training",
  "psych-support",
  "advocacy",
  "economic",
  "motherhood",
  "internal",
];

export function ActivitiesExplorer() {
  const [year, setYear] = useState<YearFilter>("all");
  const [theme, setTheme] = useState<ThemeFilter>("all");

  const filtered = useMemo(
    () =>
      activitiesSorted.filter(
        (a) =>
          (year === "all" || a.year === year) &&
          (theme === "all" || a.theme === theme)
      ),
    [year, theme]
  );

  const chip = (active: boolean) =>
    `font-cairo text-sm px-4 py-2 rounded-full border transition-colors min-h-[40px] ${
      active
        ? "bg-primary text-white border-primary"
        : "bg-white text-muted border-border hover:border-primary hover:text-primary"
    }`;

  return (
    <div className="flex flex-col gap-8">
      {/* فلاتر */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-cairo font-semibold text-sm text-foreground ms-1">العام:</span>
          <button className={chip(year === "all")} onClick={() => setYear("all")}>
            الكل
          </button>
          {activityYears.map((y) => (
            <button key={y} className={chip(year === y)} onClick={() => setYear(y)}>
              {y}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-cairo font-semibold text-sm text-foreground ms-1">المجال:</span>
          <button className={chip(theme === "all")} onClick={() => setTheme("all")}>
            الكل
          </button>
          {themeOrder.map((t) => (
            <button key={t} className={chip(theme === t)} onClick={() => setTheme(t)}>
              {THEME_META[t].label}
            </button>
          ))}
        </div>
      </div>

      <p className="font-tajawal text-sm text-muted -mt-2">
        {filtered.length} نشاطًا
      </p>

      {/* الشبكة */}
      <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {filtered.map((a) => {
          const hero = activityHero(a);
          const tm = THEME_META[a.theme];
          return (
            <li key={a.slug} className="h-full">
              <Link
                href={`/activities/${a.slug}`}
                className="hover-lift group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                  {hero ? (
                    <Image
                      src={hero}
                      alt={a.title}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className={`transition-transform duration-500 group-hover:scale-105 ${
                        a.imageType === "cards" ? "object-contain p-2" : "object-cover"
                      }`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/90 to-accent/80">
                      <span className="font-cairo font-bold text-white/90 text-lg px-4 text-center leading-snug">
                        {a.kind}
                      </span>
                    </div>
                  )}
                  <span
                    className={`absolute top-3 right-3 font-cairo font-semibold text-[11px] px-3 py-1 rounded-full ${tm.chip} backdrop-blur-sm`}
                  >
                    {tm.label}
                  </span>
                </div>
                <div className="flex flex-col gap-2 p-5 flex-1">
                  <div className="flex items-center gap-2 font-tajawal text-xs text-muted">
                    <span className="font-cairo font-medium text-secondary">{a.kind}</span>
                    <span aria-hidden="true">•</span>
                    <span>{a.dateLabel}</span>
                  </div>
                  <h3 className="font-cairo font-bold text-base md:text-lg text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="font-tajawal text-sm text-muted leading-relaxed line-clamp-3 flex-1">
                    {a.summary}
                  </p>
                  <span className="font-cairo font-semibold text-sm text-primary inline-flex items-center gap-1 pt-1">
                    التفاصيل
                    <span aria-hidden="true">←</span>
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ActivitiesExplorer;
