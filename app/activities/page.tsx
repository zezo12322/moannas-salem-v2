import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ActivitiesExplorer } from "@/components/ActivitiesExplorer";
import { zoomIn } from "@/lib/animations";
import { activities } from "@/lib/activities";

export const metadata: Metadata = {
  title: "أنشطتنا",
  description:
    "سجل أنشطة مؤسسة مؤنث سالم — ورش وتدريبات وحملات وندوات وجلسات دعم نفسي للصحفيات والنساء العاملات منذ 2024، موثّقة بالصور والتقارير.",
};

export default function ActivitiesPage() {
  const total = activities.length;

  return (
    <>
      {/* Hero */}
      <section
        dir="rtl"
        className="relative overflow-hidden bg-primary px-4 py-14 md:px-8 md:py-20 lg:py-24"
      >
        <AuroraBackground intensity="normal" />
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col gap-4">
          <AnimateOnScroll>
            <nav
              aria-label="مسار التنقل"
              className="flex justify-center gap-2 font-tajawal text-sm text-white/60"
            >
              <span className="text-white/90">الرئيسية</span>
              <span aria-hidden="true">/</span>
              <span className="text-white/90">أنشطتنا</span>
            </nav>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
              أنشطتنا
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="font-tajawal text-base md:text-lg text-white/85 leading-relaxed max-w-xl mx-auto">
              سجل حيّ لما أنجزناه على الأرض — ورش وتدريبات وحملات وندوات وجلسات دعم
              نفسي للصحفيات والنساء العاملات، موثّقة بالصور والتقارير منذ 2024.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3} variants={zoomIn}>
            <div
              aria-hidden="true"
              className="mx-auto mt-2 w-16 h-1 rounded-full bg-secondary"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Explorer */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-label={`سجل الأنشطة (${total} نشاطًا)`}
      >
        <div className="max-w-6xl mx-auto">
          <ActivitiesExplorer />
        </div>
      </section>
    </>
  );
}
