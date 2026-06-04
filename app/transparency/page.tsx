import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AuroraBackground } from "@/components/AuroraBackground";
import {
  fadeInUp,
  zoomIn,
  flipUp,
  slideInRight,
  slideInLeft,
} from "@/lib/animations";

export const metadata: Metadata = {
  title: "الشفافية والحوكمة",
  description:
    "الإطار القانوني والهيكل المؤسسي ونظرية التغيير وآليات المتابعة والتقييم لمؤسسة مؤنث سالم للتنمية — من وثيقة الخطة الاستراتيجية 2025-2030.",
};

// ─── Data (من وثيقة الخطة الاستراتيجية 2025-2030 واللائحة الأساسية) ──────────

const rightsApproach = [
  {
    title: "الكرامة الإنسانية والمساواة",
    description:
      "يتمحور عملنا حول ضمان حقوق النساء كافة، بغض النظر عن خلفياتهن أو ظروفهن، من خلال التركيز على احترام الكرامة الإنسانية وتحقيق العدالة الجندرية في المجتمع.",
  },
  {
    title: "تمكين النساء والمشاركة الفعّالة",
    description:
      "نتبنى سياسات وبرامج تتيح للنساء فرصة المشاركة في اتخاذ القرارات المتعلقة بحياتهن الخاصة ومجتمعهن، وتمكينهن من الوصول إلى الموارد والخدمات وتطوير مهاراتهن القيادية.",
  },
  {
    title: "الشفافية والمساءلة",
    description:
      "نُبلغ النساء والمجتمع المحلي عن الأنشطة والقرارات بشكل واضح وصريح، ونضمن حقهن في متابعة العمل وتقييمه، ويمكن لأي امرأة التقدم بشكوى دون خوف.",
  },
  {
    title: "التشبيك والمناصرة",
    description:
      "نبني تحالفات قوية مع منظمات أخرى للعمل على قضايا حقوق النساء، والضغط على صانعي وصانعات السياسات لتغيير التشريعات المجحفة وتحقيق إصلاحات تعزز حقوق النساء.",
  },
  {
    title: "احترام التنوع والشمول",
    description:
      "نضمن أن تكون خدماتنا شاملة للجميع ومستجيبة للاحتياجات المتنوعة للنساء، بما في ذلك النساء ذوات الإعاقة ومن خلفيات اجتماعية وثقافية مختلفة.",
  },
  {
    title: "الاستدامة والتطوير",
    description:
      "نعمل على إيجاد حلول مستدامة للمشاكل التي تواجهها النساء، بحيث تستمر آثار هذه الحلول على المدى الطويل.",
  },
];

const workFields = [
  "التوعية وبناء القدرات الفنية والمهارية",
  "البحوث والدراسات وأوراق السياسات المتعلقة بحقوق النساء",
  "دعم فرص التمويل للمشروعات والتمكين الاقتصادي للمرأة",
  "دراسات جدوى المشروعات الاقتصادية",
  "دراسات تحديد ورصد وتقييم الاحتياجات المجتمعية",
  "التوعية الجماهيرية والمشاركة في المبادرات الوطنية",
  "دعم الصحة الإنجابية والتوعية في مجالات تنظيم الأسرة",
  "التبادل الثقافي وتبادل الخبرات بين الشعوب وتعزيز العلاقات الثقافية",
];

const theoryOfChange = [
  {
    level: "على صعيد الأفراد",
    points: [
      "فهم النساء لحقوقهن السياسية والمدنية والاقتصادية والاجتماعية والثقافية وامتلاكهن أدوات المناصرة للدفاع عنها",
      "فهم النساء لحقوقهن القانونية والاجتماعية وامتلاكهن الموارد والثقة لمنع أعمال العنف المبني على النوع الاجتماعي",
    ],
  },
  {
    level: "على الصعيد المجتمعي",
    points: [
      "فهم المجتمع المصري لأهمية المساواة من منظور النوع الاجتماعي ومواجهة المواقف والمعايير الاجتماعية التي تعزز أوجه عدم المساواة",
      "اعتراف المجتمع بانتشار العنف المبني على النوع الاجتماعي ونتائجه، واتخاذ خطوات للدعوة إلى مجتمع خالٍ من العنف",
    ],
  },
  {
    level: "على الصعيد السياساتي",
    points: [
      "التزام الجهات المسؤولة في تنفيذ القوانين من منظور حقوق الإنسان وبما يتفق مع المعايير الدولية",
      "إنفاذ القوانين والإجراءات الرامية إلى مكافحة العنف المبني على النوع الاجتماعي ومحاسبة الجناة أمام القضاء",
    ],
  },
];

const strategicDirections = [
  {
    title: "تطوير السياسات والممارسات",
    description:
      "تصميم وتطوير سياسات شاملة تمنع التمييز وتضمن حقوق النساء في مكان العمل، وتنفيذ ممارسات توظيف وترقية قائمة على الكفاءة والجدارة.",
  },
  {
    title: "التوعية والتثقيف",
    description:
      "إطلاق حملات توعية لرفع الوعي تجاه حقوق النساء وأهمية بيئة العمل الآمنة، وتقديم دورات تدريبية لتعزيز فهم الجميع لهذه الحقوق.",
  },
  {
    title: "الشراكات الاستراتيجية",
    description:
      "التعاون مع الجهات الحكومية لتغيير السياسات والقوانين، وبناء شراكات مع مؤسسات المجتمع المدني لتعزيز جهود المناصرة وتبادل المعرفة.",
  },
  {
    title: "مناصرة السياسات",
    description:
      "الضغط من أجل تشريعات أفضل تتعلق بحقوق النساء بما في ذلك قوانين العمل والحقوق الاقتصادية، والانخراط في الشبكات التي تروج لحقوق النساء.",
  },
  {
    title: "تقديم الدعم المباشر",
    description:
      "إنشاء مراكز دعم وقنوات إبلاغ عن حالات التحرش أو العنف، وتقديم المشورة والمساعدة للنساء المتضررات، وبرامج تمكين اقتصادي وتدريب مهني.",
  },
  {
    title: "البحوث والدراسات",
    description:
      "تنفيذ دراسات واستقصاءات ميدانية لفهم التحديات التي تواجه النساء في أماكن العمل، واستخدام البيانات لتوجيه السياسات والبرامج وقياس الأثر.",
  },
  {
    title: "تعزيز ثقافة العمل الشامل",
    description:
      "الترويج لقيم المساواة وتعزيز ثقافة مؤسسية تقوم على الأمان والمساواة بين الجنسين، وضمان بيئات عمل شاملة لجميع النساء بغض النظر عن خلفياتهن.",
  },
  {
    title: "المتابعة والمراجعة",
    description:
      "وضع آليات لرصد وتقييم التقدم المحرز في قضايا حقوق النساء، وتكييف الاستراتيجيات استجابة للتغيرات الاجتماعية والسياسية والاقتصادية.",
  },
];

const commitments = [
  {
    metric: "30%",
    title: "زيادة الوعي بحقوق النساء الاقتصادية والاجتماعية خلال 12 شهرًا",
    measure: "القياس: استطلاعات قبل وبعد الحملات",
  },
  {
    metric: "500 امرأة",
    title: "تدريبهن على مهارات العمل والحقوق الاقتصادية والاجتماعية خلال 18 شهرًا",
    measure: "القياس: تسجيل المشاركات وتقييمات البرامج",
  },
  {
    metric: "300 امرأة",
    title: "توفير خدمات استشارية قانونية لهن خلال عامين",
    measure: "القياس: متابعة عدد المستفيدات واستبيانات الرضا",
  },
  {
    metric: "10 منظمات + 5 جهات حكومية",
    title: "شراكات موقعة خلال 3 سنوات",
    measure: "القياس: توثيق الشراكات والمشاريع المشتركة",
  },
  {
    metric: "3 سياسات أو قوانين",
    title: "التأثير على تطويرها لتعزيز حقوق النساء في العمل خلال 5 سنوات",
    measure: "القياس: متابعة المتغيرات في السياسات الحكومية",
  },
  {
    metric: "50%",
    title: "زيادة المشاركة المجتمعية في فعاليات حقوق النساء",
    measure: "القياس: تسجيل أعداد المشاركين في الفعاليات",
  },
  {
    metric: "منصة إلكترونية",
    title: "إطلاق منصة موارد ومعلومات عن حقوق النساء قبل نهاية 2025",
    measure: "القياس: تتبع الزيارات والمستفيدات",
  },
  {
    metric: "40%",
    title: "زيادة التمويل السنوي للمؤسسة خلال 3 سنوات",
    measure: "القياس: تحليل الميزانية والتقارير المالية",
  },
];

const governanceBodies = [
  {
    name: "مجلس الأمناء",
    role: "أعلى سلطة حوكمة في المؤسسة",
    duties: [
      "وضع السياسات والخطط الاستراتيجية (دليل السياسات والإجراءات التنظيمية والمالية)",
      "اعتماد الأوراق والمستندات المالية والفنية والتقارير",
      "اعتماد نظم المتابعة والتقييم للبرامج والمشروعات",
      "اعتماد الخطط والموازنات السنوية ومتابعة تنفيذ السياسات المالية",
    ],
  },
  {
    name: "الهيئة الاستشارية",
    role: "خبرات خارجية داعمة للتوجه الاستراتيجي",
    duties: [
      "المشاركة في تصميم التوجهات الاستراتيجية للمؤسسة",
      "تقديم الدعم الفني والتوصيات على مستوى السياسات العامة",
      "بناء العلاقات والشراكات والتسويق لبرامج المؤسسة",
      "التوجيه والإرشاد لضمان تطبيق الخطة الاستراتيجية",
    ],
  },
  {
    name: "الإدارة التنفيذية",
    role: "إدارة العمل اليومي وتنفيذ الخطط",
    duties: [
      "وضع ومتابعة تنفيذ الخطط التشغيلية",
      "الرقابة على نظام إدارة المعلومات والمتابعة والتقييم",
      "تمثيل المؤسسة خارجيًا في بناء الشراكات والتحالفات",
      "متابعة تطبيق دليل السياسات والإجراءات وكتابة التقارير الفنية",
    ],
  },
  {
    name: "الإدارة المالية",
    role: "إدارة الموارد بشفافية ودقة",
    duties: [
      "التسويات المالية والتسجيل في الدفاتر المالية",
      "كتابة التقارير المالية الدورية",
      "إدارة الحسابات البنكية",
      "إعداد الميزانية العمومية",
    ],
  },
];

const units = [
  {
    name: "وحدة الرصد والتقييم وإدارة المعلومات",
    duties: [
      "مراجعة وتنفيذ خطة المتابعة والتقييم الخاصة بالمؤسسة",
      "تصميم خطط المتابعة والتقييم للبرامج والمشروعات",
      "تصميم الأدوات والنماذج وإعداد ومراجعة التقارير الدورية",
    ],
  },
  {
    name: "وحدة الاتصال وبناء الشراكات والتمويل",
    duties: [
      "وضع وتنفيذ خطط الشراكة",
      "كتابة المقترحات التمويلية وتنمية الموارد",
      "متابعة الهوية المؤسسية",
    ],
  },
  {
    name: "وحدة بناء القدرات والتدريب",
    duties: [
      "تصميم خطط وبرامج التدريب الخاصة بالبرامج والمشروعات",
      "تحديد الاحتياجات التدريبية للمؤسسة وفريق العمل",
      "متابعة تنفيذ التدريبات وتصميم برامج التوعية",
    ],
  },
  {
    name: "وحدة البرامج",
    duties: [
      "تصميم البرامج الفنية والمشروعات",
      "متابعة آليات التنفيذ والتنسيق بين فرق العمل",
      "تصميم وصياغة التقارير الفنية للبرامج والمشروعات",
    ],
  },
  {
    name: "وحدة الاستشارات القانونية والنفسية والدعم الفني",
    duties: [
      "وضع خطط وبرامج الدعم النفسي والقانوني والفني",
      "إنشاء مراكز المساندة القانونية والنفسية",
      "متابعة وتقييم أداء برامج الدعم",
    ],
  },
];

const beneficiaries = [
  "النساء والفتيات من جميع الأعمار، وخاصة النساء في وضعيات هشة (ذوات الإعاقة، النازحات، المهاجرات)",
  "المجتمعات المحلية والأسر — عبر التثقيف والتوعية حول حقوق النساء",
  "الجهات الحكومية والمجالس المعنية (المجلس القومي للمرأة، المجلس القومي لحقوق الإنسان)",
  "منظمات المجتمع المدني والشبكات المحلية والإقليمية والدولية",
  "القطاع الخاص — لتعزيز الممارسات العادلة والشفافة في بيئة العمل",
  "الوسائل الإعلامية والمنصات الرقمية — للتأثير على الرأي العام",
  "الأكاديميون والباحثون — للتعاون في الدراسات الداعمة لقضايا حقوق النساء",
  "المحاميات/المحامون والمستشارات/المستشارون القانونيون والمؤثرون الاجتماعيون",
];

const reportingCadence = [
  { label: "تقارير شهرية", description: "متابعة دورية لسير الأنشطة والمشروعات" },
  { label: "تقارير ربع سنوية", description: "مراجعة التقدم المحرز مقابل الخطط التشغيلية" },
  { label: "تقارير نصف سنوية", description: "تقييم منتصف المدة وتعديل المسار عند الحاجة" },
  { label: "تقارير سنوية", description: "تقارير فنية ومالية شاملة تُرفع لمجلس الأمناء" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TransparencyPage() {
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
              <span className="text-white/90">الشفافية والحوكمة</span>
            </nav>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h1 className="font-cairo font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
              الشفافية والحوكمة
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="font-tajawal text-base md:text-lg text-white/85 leading-relaxed max-w-xl mx-auto">
              الحوكمة قيمة مؤسِّسة لدينا — معلومات واضحة عن أنشطتنا ومواردنا،
              ومساءلة كاملة أمام مستفيداتنا وشركائنا
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

      {/* ── الإطار القانوني ───────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16"
        aria-labelledby="legal-heading"
      >
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll variants={flipUp}>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 border-s-4 border-s-secondary px-6 py-8 md:px-10 md:py-10 flex flex-col gap-4">
              <h2
                id="legal-heading"
                className="font-cairo font-bold text-xl md:text-2xl text-primary"
              >
                الإطار القانوني
              </h2>
              <p className="font-tajawal text-gray-700 text-base leading-loose">
                «مؤسسة مؤنث سالم للتنمية» مؤسسة أهلية غير ربحية مسجلة لدى وزارة
                التضامن الاجتماعي (مديرية التضامن الاجتماعي بالجيزة) طبقًا لأحكام
                قانون تنظيم ممارسة العمل الأهلي رقم{" "}
                <strong className="font-cairo font-semibold text-primary">
                  149 لسنة 2019
                </strong>{" "}
                ولائحته التنفيذية، ومجال عملها الرئيسي حقوق الإنسان.
              </p>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 font-tajawal text-sm">
                <div className="flex gap-2">
                  <dt className="font-cairo font-semibold text-muted shrink-0">رئيسة مجلس الأمناء:</dt>
                  <dd className="text-foreground">أسماء فتحي</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-cairo font-semibold text-muted shrink-0">النطاق الجغرافي:</dt>
                  <dd className="text-foreground">جمهورية مصر العربية مع تعاون إقليمي ودولي</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-cairo font-semibold text-muted shrink-0">الخطة الاستراتيجية:</dt>
                  <dd className="text-foreground">2025 – 2030</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-cairo font-semibold text-muted shrink-0">المقر:</dt>
                  <dd className="text-foreground">شارع الجامعة، الجيزة</dd>
                </div>
              </dl>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── مجالات العمل ──────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="fields-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="fields-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                مجالات العمل
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
              <p className="font-tajawal text-gray-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
                ثمانية مجالات نعمل من خلالها على النهوض بحقوق النساء — كما حدّدتها
                خطتنا الاستراتيجية
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {workFields.map((field, i) => (
              <AnimateOnScroll
                key={field}
                delay={(i % 2) * 0.08}
                variants={i % 2 === 0 ? slideInRight : slideInLeft}
              >
                <div className="hover-lift bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 flex items-start gap-4 h-full">
                  <span
                    aria-hidden="true"
                    className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary/15 text-secondary font-cairo font-bold text-base"
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-cairo font-bold text-base text-gray-900 leading-snug pt-1.5">
                    {field}
                  </h3>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── النهج القائم على الحقوق ───────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="rights-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="rights-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                نهجنا القائم على الحقوق
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
              <p className="font-tajawal text-gray-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
                ستة مبادئ تحكم عملنا وتدخلاتنا — كما نصّت عليها خطتنا الاستراتيجية
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {rightsApproach.map((principle, i) => (
              <AnimateOnScroll
                key={principle.title}
                delay={(i % 2) * 0.08}
                variants={i % 2 === 0 ? slideInRight : slideInLeft}
              >
                <div className="hover-lift bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 flex flex-col gap-3 h-full">
                  <span
                    aria-hidden="true"
                    className="font-cairo font-bold text-3xl text-secondary leading-none"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-cairo font-bold text-base md:text-lg text-gray-900 leading-snug">
                    {principle.title}
                  </h3>
                  <p className="font-tajawal text-gray-600 text-sm md:text-base leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── نظرية التغيير ─────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="toc-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="toc-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                نظرية التغيير
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
              <p className="font-tajawal text-gray-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
                نُحدث الأثر عبر استراتيجية متعددة الطبقات تبدأ من المرأة كفرد
                وتمتد إلى المجتمع والسياسات
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {theoryOfChange.map((layer, i) => (
              <AnimateOnScroll key={layer.level} delay={i * 0.1}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-primary p-5 md:p-6 flex flex-col gap-4 h-full">
                  <h3 className="font-cairo font-bold text-base md:text-lg text-primary leading-snug">
                    {layer.level}
                  </h3>
                  <ul className="list-none m-0 p-0 flex flex-col gap-3">
                    {layer.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"
                        />
                        <span className="font-tajawal text-gray-600 text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variants={zoomIn}>
            <div className="relative overflow-hidden bg-primary rounded-3xl px-6 py-8 md:px-10 text-center">
              <AuroraBackground intensity="soft" blobs={false} />
              <p className="relative z-10 font-cairo font-bold text-lg md:text-xl text-white leading-relaxed">
                الأثر المنشود: النساء والشابات المصريات يتمتعن بحقوقهن المدنية
                بشكل كامل
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── التوجهات الاستراتيجية ─────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="directions-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="directions-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                توجهاتنا الاستراتيجية الثمانية
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
              <p className="font-tajawal text-gray-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
                البوصلة التي توجه عملنا خلال سنوات الخطة الاستراتيجية
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {strategicDirections.map((direction, i) => (
              <AnimateOnScroll
                key={direction.title}
                delay={(i % 2) * 0.08}
                variants={i % 2 === 0 ? slideInRight : slideInLeft}
              >
                <div className="hover-lift bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 flex items-start gap-4 h-full">
                  <span
                    aria-hidden="true"
                    className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-cairo font-bold text-base"
                  >
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-cairo font-bold text-base text-gray-900 leading-snug">
                      {direction.title}
                    </h3>
                    <p className="font-tajawal text-gray-600 text-sm leading-relaxed">
                      {direction.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── التزاماتنا القابلة للقياس ─────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="commitments-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="commitments-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                التزاماتنا القابلة للقياس
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
              <p className="font-tajawal text-gray-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
                أهداف محددة بأرقام ومُهل زمنية — كما نصّت عليها الخطة
                الاستراتيجية، ونقيسها دوريًا
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {commitments.map((commitment, i) => (
              <AnimateOnScroll
                key={commitment.title}
                delay={(i % 2) * 0.08}
                variants={i % 2 === 0 ? slideInRight : slideInLeft}
              >
                <div className="hover-lift bg-white rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-secondary p-5 md:p-6 flex flex-col gap-3 h-full">
                  <AnimateOnScroll variants={zoomIn} delay={0.1}>
                    <span className="font-cairo font-bold text-3xl text-secondary leading-tight block">
                      {commitment.metric}
                    </span>
                  </AnimateOnScroll>
                  <h3 className="font-cairo font-bold text-base text-gray-900 leading-snug">
                    {commitment.title}
                  </h3>
                  <p className="font-tajawal text-muted text-sm leading-relaxed mt-auto">
                    {commitment.measure}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── الهيكل المؤسسي ────────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="structure-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="structure-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                الهيكل المؤسسي والأدوار
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
              <p className="font-tajawal text-gray-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
                فصل واضح بين الحوكمة والتنفيذ — أربع هيئات تتكامل أدوارها
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {governanceBodies.map((body, i) => (
              <AnimateOnScroll
                key={body.name}
                delay={(i % 2) * 0.08}
                variants={i % 2 === 0 ? slideInRight : slideInLeft}
              >
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-secondary p-5 md:p-6 flex flex-col gap-3 h-full">
                  <div>
                    <h3 className="font-cairo font-bold text-lg text-primary leading-snug">
                      {body.name}
                    </h3>
                    <p className="font-tajawal text-muted text-sm mt-1">
                      {body.role}
                    </p>
                  </div>
                  <ul className="list-none m-0 p-0 flex flex-col gap-2">
                    {body.duties.map((duty) => (
                      <li key={duty} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"
                        />
                        <span className="font-tajawal text-gray-600 text-sm leading-relaxed">
                          {duty}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* الوحدات الخمس */}
          <AnimateOnScroll>
            <h3 className="font-cairo font-bold text-xl md:text-2xl text-primary text-center">
              الوحدات التنفيذية الخمس
            </h3>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {units.map((unit, i) => (
              <AnimateOnScroll key={unit.name} delay={(i % 3) * 0.07}>
                <div className="hover-lift bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3 h-full">
                  <h4 className="font-cairo font-bold text-base text-gray-900 leading-snug">
                    {unit.name}
                  </h4>
                  <ul className="list-none m-0 p-0 flex flex-col gap-2">
                    {unit.duties.map((duty) => (
                      <li key={duty} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                        />
                        <span className="font-tajawal text-gray-600 text-sm leading-relaxed">
                          {duty}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── الفئات المستفيدة ──────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="beneficiaries-heading"
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="beneficiaries-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                الفئات المستفيدة
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
            </div>
          </AnimateOnScroll>

          <ol className="flex flex-col gap-3 list-none m-0 p-0" aria-label="قائمة الفئات المستفيدة">
            {beneficiaries.map((item, i) => (
              <li key={item}>
                <AnimateOnScroll
                  delay={(i % 4) * 0.05}
                  variants={i % 2 === 0 ? slideInRight : slideInLeft}
                >
                  <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4">
                    <span
                      aria-hidden="true"
                      className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white font-cairo font-bold text-sm mt-0.5"
                    >
                      {i + 1}
                    </span>
                    <p className="font-tajawal text-gray-700 text-base leading-relaxed pt-0.5">
                      {item}
                    </p>
                  </div>
                </AnimateOnScroll>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── المتابعة والتقييم ─────────────────────────────────────────────── */}
      <section
        dir="rtl"
        className="bg-bg px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20"
        aria-labelledby="me-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <AnimateOnScroll>
            <div className="text-center">
              <h2
                id="me-heading"
                className="font-cairo font-bold text-2xl md:text-3xl text-primary"
              >
                المتابعة والتقييم
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 w-14 h-1 rounded-full bg-secondary"
              />
              <p className="font-tajawal text-gray-600 text-base mt-3 max-w-xl mx-auto leading-relaxed">
                وحدة مستقلة للرصد والتقييم ترفع تقاريرها الفنية والمالية لمجلس
                الأمناء وفق دورية منتظمة
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {reportingCadence.map((report, i) => (
              <AnimateOnScroll key={report.label} delay={i * 0.07} variants={zoomIn}>
                <div className="hover-lift bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center flex flex-col gap-2 h-full">
                  <h3 className="font-cairo font-bold text-base text-primary leading-snug">
                    {report.label}
                  </h3>
                  <p className="font-tajawal text-gray-600 text-sm leading-relaxed">
                    {report.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variants={flipUp}>
            <div
              className="bg-green-trust/10 border border-green-trust/30 rounded-2xl px-6 py-6 md:px-8 flex items-start gap-4"
              role="note"
              aria-label="التزام المساءلة"
            >
              <span
                aria-hidden="true"
                className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-trust text-white mt-0.5"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M9 12l2 2 4-4" />
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                </svg>
              </span>
              <p className="font-tajawal text-gray-700 text-base leading-loose">
                نتحمل المسؤولية عن أفعالنا وقراراتنا، ونقدم تفسيرات دقيقة
                للشركاء والمانحين والمستفيدات بشأن استخدام الموارد والنتائج
                المحققة — ويمكن لأي امرأة التقدم بشكوى أو التعبير عن مخاوفها دون
                خوف.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section dir="rtl" className="bg-surface px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <AnimateOnScroll>
            <h2 className="font-cairo font-bold text-2xl md:text-3xl text-primary leading-snug">
              عندك سؤال عن عملنا أو مواردنا؟
            </h2>
            <p className="font-tajawal text-gray-600 text-base mt-2 leading-relaxed max-w-md mx-auto">
              الشفافية تبدأ بالإجابة — تواصلي معنا وسنرد على استفساراتك
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="sheen group inline-flex items-center justify-center min-h-[52px] px-10 py-3 rounded-xl bg-primary text-white font-cairo font-bold text-base hover:bg-primary-hover transition-colors shadow-md"
              >
                تواصلي معنا
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center min-h-[52px] px-10 py-3 rounded-xl border-2 border-primary text-primary font-cairo font-bold text-base hover:bg-primary hover:text-white transition-colors"
              >
                اعرفي المزيد عنا
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
