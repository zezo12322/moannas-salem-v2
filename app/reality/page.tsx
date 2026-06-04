import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AuroraBackground } from "@/components/AuroraBackground";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  fadeInUp,
  zoomIn,
  flipUp,
  slideInRight,
  slideInLeft,
} from "@/lib/animations";

export const metadata: Metadata = {
  title: "الواقع بالأرقام",
  description:
    "تشخيص موثق لواقع النساء المصريات في سوق العمل ومواقع صنع القرار، والعنف المبني على النوع الاجتماعي، وما يضمنه القانون للمرأة العاملة — كما رصدته الخطة الاستراتيجية لمؤسسة مؤنث سالم 2025-2030.",
};

// ─── Data (من وثيقة الخطة الاستراتيجية 2025-2030) ──────────────────────────────

// قسم 1 — النساء في سوق العمل (أرقام كبيرة قابلة للعدّ + أسطر نصية)
const laborStats = [
  {
    value: 48.6,
    suffix: "٪",
    label: "نسبة النساء من سكان مصر",
    note: "تقديرات يناير 2024 — الجهاز المركزي للتعبئة العامة والإحصاء",
    tone: "primary" as const,
  },
  {
    value: 15.3,
    suffix: "٪",
    label: "فقط نسبة النساء من إجمالي المشتغلين",
    note: "الربع الثالث 2023",
    tone: "secondary" as const,
  },
  {
    value: 47.6,
    suffix: "٪",
    label: "نسبة النساء من المتعطلين عن العمل",
    note: "الربع الثالث 2023",
    tone: "secondary" as const,
  },
  {
    value: 20.2,
    suffix: "٪",
    label: "فقط نسبة النساء في المناصب الإدارية العليا والمتوسطة",
    note: "الجهاز المركزي للتعبئة العامة والإحصاء",
    tone: "primary" as const,
  },
];

// أسطر نصية لا تصلح للعدّ المباشر (أقل من / مركز / متوسط)
const laborFacts = [
  {
    headline: "أقل من 5٪",
    body: "من النساء اللاتي سبق لهن الزواج يمتلكن مسكنًا بمفردهن أو بالمشاركة",
    note: "المسح الصحي للأسرة 2021",
  },
  {
    headline: "أقل من 2٪",
    body: "من النساء يمتلكن أرضًا بشكل فردي أو بالمشاركة",
    note: "المسح الصحي للأسرة 2021",
  },
  {
    headline: "المركز 175 من 190",
    body: "ترتيب مصر في تقرير البنك الدولي «المرأة وأنشطة الأعمال والقانون» 2024",
    note: "البنك الدولي 2024",
  },
  {
    headline: "أقل من الحد الأدنى",
    body: "متوسط أجور النساء في القطاع الخاص أقل من الحد الأدنى للأجور",
    note: "تقرير المبادرة المصرية للحقوق الشخصية",
  },
];

// قسم 2 — النساء في مواقع صنع القرار
const decisionStats = [
  {
    value: 18,
    suffix: "٪",
    label: "نسبة تمثيل المرأة في الحكومة الحالية",
    note: "مقابل 6٪ في 2015",
  },
  {
    value: 25,
    suffix: "٪",
    label: "كوتة مخصصة للمرأة في مجلس النواب",
    note: "قانون 2020",
  },
  {
    value: 14,
    suffix: "٪",
    label: "نسبة تمثيل النساء في مجلس الشيوخ",
    note: "40 مقعدًا من 300",
  },
  {
    value: 5,
    prefix: "أقل من ",
    suffix: "٪",
    label: "نسبة تمثيل النساء في الأحزاب السياسية",
    note: "الخطة الاستراتيجية 2025-2030",
  },
];

const literacyGap = {
  female: 22.8,
  male: 12.4,
  note: "مسح القوى العاملة 2022",
};

// قسم 3 — العنف المبني على النوع الاجتماعي
const legalGaps = [
  "التعريف المحدود للعنف في قانون العقوبات",
  "غياب قانون واضح للعنف الأسري",
  "المادة 242 تعاقب الإيذاء البدني فقط دون النفسي",
  "المادة 237 تخفف العقوبة في «جرائم الشرف»",
  "نقص الحماية للمبلغات والشهود",
  "عقوبات التحرش (م306 مكرر ب) غير رادعة بشكل كافٍ",
  "عدم الاعتراف بالاغتصاب الزوجي",
];

// قسم 4 — ماذا يقول القانون للمرأة العاملة (قانون العمل 12 لسنة 2003)
const laborLaw = [
  {
    article: "م35",
    text: "حظر التمييز في الأجور بسبب الجنس",
  },
  {
    article: "م91",
    text: "إجازة وضع 3 أشهر مدفوعة الأجر (بحد أقصى مرتين خلال مدة الخدمة)",
  },
  {
    article: "م93",
    text: "فترتا رضاعة يوميًا لمدة 24 شهرًا دون خفض الأجر",
  },
  {
    article: "م94",
    text: "إجازة بدون أجر لرعاية الطفل (منشآت 50+ عاملًا) وإلزام المنشآت التي تضم 100 عاملة بدار حضانة",
  },
];

const constitutionalGuarantees = [
  "م11 من الدستور تلزم الدولة بالمساواة بين المرأة والرجل",
  "م180 تخصص ربع مقاعد المجالس المحلية للنساء",
  "مصر مصدّقة على اتفاقية القضاء على جميع أشكال التمييز ضد المرأة (CEDAW)",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RealityPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="relative overflow-hidden bg-primary px-4 py-14 md:px-8 md:py-20 lg:px-16 lg:py-24"
      >
        <AuroraBackground intensity="normal" />
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col gap-4">
          <AnimateOnScroll>
            <nav
              aria-label="مسار التنقل"
              className="flex justify-center gap-2 font-tajawal text-sm text-white/60"
            >
              <Link href="/" className="hover:text-white transition-colors">
                الرئيسية
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/90">الواقع بالأرقام</span>
            </nav>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
              الواقع بالأرقام
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="font-tajawal text-base md:text-lg text-white/85 leading-relaxed max-w-xl mx-auto">
              لماذا نعمل — تشخيص موثق لواقع النساء المصريات كما رصدته خطتنا
              الاستراتيجية 2025-2030
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

      {/* ── 1 · النساء في سوق العمل ──────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="labor-heading"
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="labor-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                النساء في سوق العمل
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
              <p className="font-tajawal text-gray-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
                نصف المجتمع تقريبًا — لكن الحضور الاقتصادي والملكية لا يزالان
                محدودَين بشكل لافت
              </p>
            </div>
          </AnimateOnScroll>

          {/* الأرقام الكبيرة */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {laborStats.map((stat, i) => (
              <AnimateOnScroll key={stat.label} delay={i * 0.07} variants={zoomIn}>
                <div className="hover-lift bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 text-center flex flex-col gap-2 h-full">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className={`font-cairo font-bold text-4xl md:text-5xl leading-none ${
                      stat.tone === "secondary" ? "text-secondary" : "text-primary"
                    }`}
                  />
                  <p className="font-cairo font-semibold text-sm md:text-base text-gray-900 leading-snug mt-1">
                    {stat.label}
                  </p>
                  <p className="font-tajawal text-muted text-xs leading-relaxed mt-auto pt-2">
                    {stat.note}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* حقائق نصية — ملكية وأجور وترتيب دولي */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {laborFacts.map((fact, i) => (
              <AnimateOnScroll
                key={fact.body}
                delay={(i % 2) * 0.08}
                variants={i % 2 === 0 ? slideInRight : slideInLeft}
              >
                <div className="hover-lift bg-white rounded-2xl shadow-sm border border-gray-100 border-s-4 border-s-secondary p-5 md:p-6 flex flex-col gap-2 h-full">
                  <span className="font-cairo font-bold text-2xl md:text-3xl text-secondary leading-none">
                    {fact.headline}
                  </span>
                  <p className="font-tajawal text-gray-700 text-sm md:text-base leading-relaxed">
                    {fact.body}
                  </p>
                  <p className="font-tajawal text-muted text-xs leading-relaxed mt-auto pt-1">
                    {fact.note}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2 · النساء في مواقع صنع القرار ───────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="decision-heading"
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="decision-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                النساء في مواقع صنع القرار
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
              <p className="font-tajawal text-gray-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
                تقدّم ملموس في التمثيل السياسي — تقابله فجوات لا تزال قائمة في
                الأحزاب والتعليم
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {decisionStats.map((stat, i) => (
              <AnimateOnScroll key={stat.label} delay={i * 0.07} variants={flipUp}>
                <div className="hover-lift bg-white rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-primary p-5 md:p-6 text-center flex flex-col gap-2 h-full">
                  <span className="font-cairo font-bold text-4xl md:text-5xl leading-none text-primary">
                    {stat.prefix && (
                      <span className="font-tajawal font-semibold text-base text-muted block mb-1">
                        {stat.prefix}
                      </span>
                    )}
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <p className="font-cairo font-semibold text-sm md:text-base text-gray-900 leading-snug mt-1">
                    {stat.label}
                  </p>
                  <p className="font-tajawal text-muted text-xs leading-relaxed mt-auto pt-2">
                    {stat.note}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* فجوة الأمية */}
          <AnimateOnScroll variants={fadeInUp}>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 px-6 py-8 md:px-10 md:py-10 flex flex-col gap-5">
              <h3 className="font-cairo font-bold text-lg md:text-xl text-primary text-center">
                فجوة الأمية بين الجنسين
              </h3>
              <div className="grid grid-cols-2 gap-5 md:gap-8 max-w-md mx-auto w-full">
                <div className="text-center flex flex-col gap-1">
                  <AnimatedCounter
                    value={literacyGap.female}
                    suffix="٪"
                    className="font-cairo font-bold text-3xl md:text-4xl text-secondary leading-none"
                  />
                  <span className="font-tajawal text-sm text-gray-700">
                    الأمية بين الإناث
                  </span>
                </div>
                <div className="text-center flex flex-col gap-1">
                  <AnimatedCounter
                    value={literacyGap.male}
                    suffix="٪"
                    className="font-cairo font-bold text-3xl md:text-4xl text-primary leading-none"
                  />
                  <span className="font-tajawal text-sm text-gray-700">
                    الأمية بين الذكور
                  </span>
                </div>
              </div>
              <p className="font-tajawal text-muted text-xs text-center leading-relaxed">
                {literacyGap.note}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 3 · العنف المبني على النوع الاجتماعي (نبرة جادّة) ─────────────── */}
      <section
        dir="rtl"
        className="relative overflow-hidden bg-primary px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="gbv-heading"
      >
        <AuroraBackground intensity="soft" blobs={false} />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="gbv-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-white"
              >
                العنف المبني على النوع الاجتماعي
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
            </div>
          </AnimateOnScroll>

          {/* الرقم الصادم */}
          <AnimateOnScroll variants={zoomIn}>
            <div className="bg-white/5 border border-white/15 rounded-3xl px-6 py-8 md:px-10 md:py-10 text-center flex flex-col gap-3">
              <AnimatedCounter
                value={167}
                className="font-cairo font-bold text-5xl md:text-6xl text-secondary leading-none"
              />
              <p className="font-cairo font-semibold text-lg md:text-xl text-white leading-snug">
                جريمة قتل بحق نساء مصريات خلال النصف الأول من 2024 فقط
              </p>
              <p className="font-tajawal text-white/60 text-sm leading-relaxed">
                تقرير مؤسسة إدراك للتنمية والمساواة
              </p>
            </div>
          </AnimateOnScroll>

          {/* الثغرات القانونية */}
          <AnimateOnScroll>
            <h3 className="font-cairo font-bold text-lg md:text-xl text-white text-center">
              الثغرات القانونية الموثقة في الخطة
            </h3>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {legalGaps.map((gap, i) => (
              <AnimateOnScroll
                key={gap}
                delay={(i % 2) * 0.07}
                variants={i % 2 === 0 ? slideInRight : slideInLeft}
              >
                <div className="bg-white/5 border border-white/15 border-s-4 border-s-secondary rounded-2xl px-5 py-4 flex items-start gap-3 h-full">
                  <span
                    aria-hidden="true"
                    className="mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"
                  />
                  <p className="font-tajawal text-white/85 text-sm md:text-base leading-relaxed">
                    {gap}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 · ماذا يقول القانون للمرأة العاملة ─────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="lawful-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="lawful-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                ماذا يقول القانون للمرأة العاملة
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
              <p className="font-tajawal text-gray-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
                قانون العمل رقم 12 لسنة 2003 يكفل حقوقًا واضحة — معرفتها هي الخطوة
                الأولى للمطالبة بها
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {laborLaw.map((item, i) => (
              <AnimateOnScroll
                key={item.article}
                delay={(i % 2) * 0.08}
                variants={i % 2 === 0 ? slideInRight : slideInLeft}
              >
                <div className="hover-lift bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 flex items-start gap-4 h-full">
                  <span
                    aria-hidden="true"
                    className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-cairo font-bold text-sm"
                  >
                    {item.article}
                  </span>
                  <p className="font-tajawal text-gray-700 text-sm md:text-base leading-relaxed pt-1">
                    {item.text}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* ضمانات دستورية ودولية */}
          <AnimateOnScroll variants={flipUp}>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 border-t-4 border-t-secondary px-6 py-8 md:px-10 flex flex-col gap-4">
              <h3 className="font-cairo font-bold text-lg md:text-xl text-primary">
                وعلى المستوى الدستوري والدولي
              </h3>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {constitutionalGuarantees.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"
                    />
                    <span className="font-tajawal text-gray-700 text-sm md:text-base leading-relaxed">
                      {g}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 5 · CTA الختامي ──────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="relative overflow-hidden bg-primary px-4 py-14 md:px-8 md:py-20 lg:px-16"
      >
        <AuroraBackground intensity="normal" conic />
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <AnimateOnScroll>
            <h2 className="font-cairo font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-snug">
              هذه الأرقام هي سبب وجودنا
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="font-tajawal text-base md:text-lg text-white/85 leading-loose max-w-xl mx-auto">
              في ظل هذا التشخيص لواقع المرأة في مصر، تعمل مؤسسة مؤنث سالم على تعزيز
              وحماية حقوق النساء المصريات عبر تخصيص كافة الموارد البشرية والمادية
              لتحقيق رؤية وأهداف المؤسسة.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/resources"
                className="sheen group animate-pulse-ring inline-flex items-center justify-center min-h-[52px] px-10 py-3 rounded-xl bg-secondary text-white font-cairo font-bold text-base hover:bg-secondary/90 transition-colors shadow-lg shadow-black/20"
              >
                اعرفي حقوقك
              </Link>
              <Link
                href="/transparency"
                className="inline-flex items-center justify-center min-h-[52px] px-10 py-3 rounded-xl border-2 border-white text-white font-cairo font-bold text-base hover:bg-white hover:text-primary transition-colors"
              >
                اطلعي على أهدافنا
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── المصادر ──────────────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-surface px-4 py-6 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="font-tajawal text-muted text-xs md:text-sm leading-relaxed text-center">
            المصادر: الجهاز المركزي للتعبئة العامة والإحصاء، البنك الدولي،
            المبادرة المصرية للحقوق الشخصية، مؤسسة إدراك للتنمية والمساواة.
          </p>
        </div>
      </section>
    </>
  );
}
