import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ActivityGallery } from "@/components/ActivityGallery";
import { fadeInUp, zoomIn, flipUp, slideInRight, slideInLeft } from "@/lib/animations";
import { activities, activitiesSorted, THEME_META } from "@/lib/activities";
import { buildActivityInsight } from "@/lib/activityInsights";
import { getCampaignBySlug } from "@/lib/campaigns";
import { activityPostContent } from "@/lib/postContent";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = activities.find((x) => x.slug === slug);
  if (!a) return {};
  return { title: a.title, description: a.summary };
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = activities.find((x) => x.slug === slug);
  if (!a) notFound();

  const tm = THEME_META[a.theme];
  const campaign = a.campaignSlug ? getCampaignBySlug(a.campaignSlug) : undefined;
  const postContent = activityPostContent[a.slug];
  const insight = buildActivityInsight(a, campaign, postContent);
  const related = activitiesSorted
    .filter((x) => x.theme === a.theme && x.slug !== a.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        dir="rtl"
        className="relative overflow-hidden bg-primary px-4 py-14 md:px-8 md:py-20 lg:py-24"
      >
        <AuroraBackground intensity="normal" />
        <AnimateOnScroll variants={fadeInUp} className="relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-5 text-center">
            <nav
              aria-label="مسار التنقل"
              className="flex justify-center gap-2 font-tajawal text-sm text-white/60"
            >
              <Link href="/activities" className="hover:text-white transition-colors">
                أنشطتنا
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/90">{a.kind}</span>
            </nav>
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 font-cairo font-semibold text-sm px-5 py-2 rounded-full">
                {tm.label}
              </span>
            </div>
            <h1 className="font-cairo font-bold text-2xl md:text-4xl lg:text-[2.6rem] text-white leading-snug">
              {a.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm font-tajawal text-white/70">
              <span className="font-cairo font-medium text-secondary">{a.kind}</span>
              <span aria-hidden="true">•</span>
              <span>{a.dateLabel}</span>
            </div>
            <div aria-hidden="true" className="mx-auto mt-1 w-16 h-1 rounded-full bg-secondary" />
          </div>
        </AnimateOnScroll>
      </section>

      {/* عن النشاط */}
      <section dir="rtl" className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <AnimateOnScroll variants={fadeInUp}>
            <p className="font-tajawal text-base md:text-lg text-foreground/85 leading-[1.95]">
              {a.summary}
            </p>
          </AnimateOnScroll>

          {a.partners && a.partners.length > 0 && (
            <AnimateOnScroll variants={fadeInUp} delay={0.05}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-cairo font-semibold text-sm text-muted">
                  بالشراكة مع:
                </span>
                {a.partners.map((p) => (
                  <span
                    key={p}
                    className="font-tajawal text-sm bg-surface border border-border text-foreground/80 px-3 py-1 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          )}

          {campaign && (
            <AnimateOnScroll variants={fadeInUp} delay={0.1}>
              <Link
                href={`/campaigns/${campaign.slug}`}
                className="inline-flex items-center gap-2 self-start font-cairo font-semibold text-sm md:text-base text-primary hover:text-accent transition-colors min-h-[44px]"
              >
                اطّلعي على صفحة الحملة الكاملة: {campaign.title}
                <span aria-hidden="true" className="text-lg">←</span>
              </Link>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* الصورة الكاملة */}
      <section
        dir="rtl"
        className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:py-20"
        aria-labelledby="activity-insight-heading"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {insight.overview.map((item, i) => (
              <AnimateOnScroll key={`${item.label}-${item.value}`} delay={i * 0.04} variants={fadeInUp}>
                <div className="h-full bg-white border border-border rounded-lg p-5 shadow-sm">
                  <span className="font-cairo font-semibold text-xs text-secondary">
                    {item.label}
                  </span>
                  <p className="font-cairo font-bold text-base md:text-lg text-primary leading-snug mt-2">
                    {item.value}
                  </p>
                  <p className="font-tajawal text-sm text-muted leading-relaxed mt-2">
                    {item.helper}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <AnimateOnScroll variants={fadeInUp}>
              <span className="font-cairo font-semibold text-sm text-secondary">
                تفاصيل النشاط
              </span>
              <h2
                id="activity-insight-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary mt-2"
              >
                الصورة الكاملة
              </h2>
              <p className="font-tajawal text-base md:text-lg text-foreground/85 leading-[1.95] mt-4">
                {insight.lead}
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimateOnScroll variants={slideInRight}>
                <div className="h-full bg-bg border border-border rounded-lg p-5 md:p-6">
                  <h3 className="font-cairo font-bold text-xl text-foreground">
                    ما الذي ركزنا عليه؟
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {insight.focusAreas.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                        <span className="font-tajawal text-sm md:text-base text-foreground/80 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variants={slideInLeft} delay={0.06}>
                <div className="h-full bg-bg border border-border rounded-lg p-5 md:p-6">
                  <h3 className="font-cairo font-bold text-xl text-foreground">
                    مخرجات يمكن البناء عليها
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {insight.outcomes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span className="font-tajawal text-sm md:text-base text-foreground/80 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>

            {insight.followUps.length > 0 && (
              <AnimateOnScroll variants={fadeInUp} delay={0.08}>
                <div className="flex flex-col gap-3">
                  <h3 className="font-cairo font-bold text-xl text-primary">
                    مسارات للمتابعة
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {insight.followUps.map((item) =>
                      item.external ? (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group h-full bg-white border border-border rounded-lg p-5 shadow-sm transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <span className="font-cairo font-bold text-base text-primary group-hover:text-accent transition-colors">
                            {item.label}
                          </span>
                          <p className="font-tajawal text-sm text-muted leading-relaxed mt-2">
                            {item.description}
                          </p>
                        </a>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group h-full bg-white border border-border rounded-lg p-5 shadow-sm transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <span className="font-cairo font-bold text-base text-primary group-hover:text-accent transition-colors">
                            {item.label}
                          </span>
                          <p className="font-tajawal text-sm text-muted leading-relaxed mt-2">
                            {item.description}
                          </p>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </section>

      {/* من ذاكرة البوستات */}
      {postContent && (
        <section dir="rtl" className="bg-bg px-4 py-12 md:px-8 md:py-16">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <AnimateOnScroll className="text-center">
              <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary">
                {postContent.title}
              </h2>
              <p className="font-tajawal text-base text-muted leading-relaxed mt-3 max-w-2xl mx-auto">
                {postContent.intro}
              </p>
              <div aria-hidden="true" className="mx-auto mt-4 w-14 h-1 rounded-full bg-secondary" />
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {postContent.points.map((point, i) => (
                <AnimateOnScroll key={point} delay={i * 0.06} variants={fadeInUp}>
                  <div className="h-full bg-white border border-border rounded-2xl p-5 shadow-sm">
                    <span className="font-cairo font-bold text-2xl text-secondary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-tajawal text-sm md:text-base text-foreground/80 leading-relaxed mt-2">
                      {point}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {postContent.links && postContent.links.length > 0 && (
              <AnimateOnScroll variants={fadeInUp}>
                <div className="flex flex-wrap justify-center gap-3">
                  {postContent.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-cairo font-semibold text-sm inline-flex items-center justify-center min-h-[44px] rounded-full border border-primary/25 text-primary px-5 transition-colors hover:bg-primary hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </AnimateOnScroll>
            )}
          </div>
        </section>
      )}

      {/* المعرض */}
      {a.images && a.images > 0 && (
        <section
          dir="rtl"
          className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:py-20"
          aria-labelledby="gallery-heading"
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            <AnimateOnScroll className="text-center">
              <h2
                id="gallery-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                {a.imageType === "cards" ? "من الحملة" : "من الفعالية"}
              </h2>
              <div aria-hidden="true" className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary" />
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeInUp}>
              <ActivityGallery
                slug={a.slug}
                count={a.images}
                alt={a.title}
                variant={a.imageType ?? "photos"}
              />
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* روابط فيسبوك */}
      {a.fbLinks && a.fbLinks.length > 0 && (
        <section dir="rtl" className="bg-bg px-4 py-10 md:px-8">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 text-center">
            <AnimateOnScroll variants={zoomIn}>
              <p className="font-cairo font-semibold text-base text-foreground">
                شاهدي التغطية الكاملة على صفحتنا
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeInUp} delay={0.05}>
              <div className="flex flex-wrap justify-center gap-3">
                {a.fbLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sheen group font-cairo font-semibold text-sm inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full bg-primary text-white px-6 transition-colors hover:bg-primary-hover"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    {a.fbLinks!.length > 1 ? `منشور ${i + 1}` : "شاهدي على فيسبوك"}
                  </a>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* أنشطة ذات صلة */}
      {related.length > 0 && (
        <section dir="rtl" className="bg-surface px-4 py-14 md:px-8 md:py-20">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            <AnimateOnScroll className="text-center">
              <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary">
                أنشطة ذات صلة
              </h2>
              <div aria-hidden="true" className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary" />
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r, i) => (
                <AnimateOnScroll key={r.slug} delay={i * 0.06} variants={i % 2 === 0 ? slideInRight : slideInLeft}>
                  <Link
                    href={`/activities/${r.slug}`}
                    className="hover-lift group flex flex-col h-full bg-white rounded-2xl p-5 gap-2 border border-border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="font-tajawal text-xs text-muted">{r.dateLabel}</span>
                    <h3 className="font-cairo font-bold text-base text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="font-tajawal text-sm text-muted leading-relaxed line-clamp-2">
                      {r.summary}
                    </p>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section dir="rtl" className="bg-bg px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <AnimateOnScroll variants={flipUp}>
            <Link
              href="/activities"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 rounded-full border-2 border-primary text-primary font-cairo font-bold hover:bg-primary hover:text-white transition-colors"
            >
              <span aria-hidden="true">→</span>
              كل الأنشطة
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
