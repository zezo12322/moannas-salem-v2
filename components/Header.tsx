"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/about",     label: "من نحن" },
  { href: "/campaigns", label: "الحملات" },
  { href: "/training",  label: "التدريب" },
  { href: "/resources", label: "الموارد" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#FAF5EF]/95 backdrop-blur-sm border-b border-[#DDD3CC]">
        <nav
          className="max-w-[1200px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between"
          aria-label="القائمة الرئيسية"
        >
          {/* الشعار — يمين في RTL */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="مؤنث سالم — الصفحة الرئيسية"
          >
            <Image
              src="/logo.jpg"
              alt=""
              width={44}
              height={44}
              priority
              className="rounded-full ring-1 ring-[#DDD3CC]"
            />
            <span className="text-[#4B245E] font-bold text-xl leading-none hidden sm:inline">
              مؤنث سالم
            </span>
          </Link>

          {/* روابط desktop */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-150 ${
                    pathname === link.href
                      ? "text-[#4B245E]"
                      : "text-[#211A22] hover:text-[#4B245E]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 bg-[#4B245E] text-white text-[15px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#3A1A4A] transition-colors duration-150"
            >
              تواصلي معنا
              <span aria-hidden="true">←</span>
            </Link>
          </div>

          {/* زر الموبايل */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-[#211A22]"
            onClick={() => setOpen(true)}
            aria-label="افتح القائمة"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer موبايل — ينزلق من اليمين */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="قائمة التنقل"
        aria-modal="true"
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-[#FAF5EF] shadow-lg flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DDD3CC]">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo.jpg"
              alt=""
              width={36}
              height={36}
              className="rounded-full ring-1 ring-[#DDD3CC]"
            />
            <span className="text-[#4B245E] font-bold text-xl">مؤنث سالم</span>
          </Link>
          <button
            className="text-[#211A22] p-1"
            onClick={() => setOpen(false)}
            aria-label="أغلق القائمة"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col list-none m-0 p-0 flex-1 px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-3 text-lg font-medium border-b border-[#DDD3CC]/50 transition-colors ${
                  pathname === link.href
                    ? "text-[#4B245E]"
                    : "text-[#211A22] hover:text-[#4B245E]"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-6 py-6">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-1 w-full bg-[#4B245E] text-white text-base font-semibold px-5 py-3 rounded-full hover:bg-[#3A1A4A] transition-colors"
            onClick={() => setOpen(false)}
          >
            تواصلي معنا
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </div>

      {/* CTA ثابت أسفل الموبايل */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF5EF] border-t border-[#DDD3CC] px-4 py-3">
        <Link
          href="/contact"
          className="flex items-center justify-center gap-1 w-full bg-[#4B245E] text-white text-base font-semibold py-3 rounded-full hover:bg-[#3A1A4A] transition-colors"
        >
          تواصلي معنا
          <span aria-hidden="true">←</span>
        </Link>
      </div>
    </>
  );
}
