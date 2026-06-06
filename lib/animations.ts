import type { Variants } from "framer-motion";

// منحنى تسارع أنيق (ease-out-expo) — يُستخدم في معظم الحركات
const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

// كشف بطيء وواضح للكروت عند السكرول — حركة أكبر ومدة أطول لتكون ظاهرة
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.4, ease: easeOutExpo },
  },
};

// دخول ناعم مع ضبابية — للعناوين والأقسام البارزة
export const blurInUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: easeOutExpo },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export const slideInFromTop: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOutExpo } },
};

// ─── دخول جانبي واضح — للأعمدة والكروت المتناوبة ───

// يدخل من جهة اليمين (جهة البداية في RTL)
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: easeOutExpo },
  },
};

// يدخل من جهة اليسار
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: easeOutExpo },
  },
};

// يظهر من الخارج — يبدأ أكبر وينكمش لمكانه (للصور والبانرات)
export const zoomOut: Variants = {
  hidden: { opacity: 0, scale: 1.12 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: easeOutExpo },
  },
};

// تكبير عميق من الداخل — للأيقونات والشارات
export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: easeOutExpo },
  },
};

// انقلاب لأعلى بمنظور — للكروت البارزة
export const flipUp: Variants = {
  hidden: { opacity: 0, rotateX: -24, y: 36, transformPerspective: 900 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 1.1, ease: easeOutExpo },
  },
};

// حاوية تتابع — تُظهر أبناءها واحدًا تلو الآخر
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

// عنصر داخل الـ hero — دخول درامي ناعم
export const heroItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: easeOutExpo },
  },
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// طفو خفيف مستمر — للعناصر الزخرفية في الـ hero
export const floatY: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const mobileMenuVariants: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
