import Link from "next/link";
import Image from "next/image";
import type { Locale } from "../lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  hospitalName: string;
  nav: {
    home: string;
    services: string;
    contact: string;
  };
};

export function SiteHeader({ locale, hospitalName, nav }: SiteHeaderProps) {
  const altLocale = locale === "vi" ? "en" : "vi";
  const altLabel = locale === "vi" ? "English" : "Tiếng Việt";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Logo bệnh viện"
            width={40}
            height={40}
            priority
            className="h-12 w-12 rounded-md object-cover"
          />
          <span className="text-base font-semibold tracking-tight text-slate-900">
            {hospitalName}
          </span>
        </Link>
        <nav aria-label="Chính" className="flex items-center gap-6 text-sm">
          <Link
            href={`/${locale}`}
            className="text-slate-600 transition-colors hover:text-slate-900"
          >
            {nav.home}
          </Link>
          <a
            href="#"
            className="text-slate-600 transition-colors hover:text-slate-900"
          >
            {nav.services}
          </a>
          <a
            href="#"
            className="text-slate-600 transition-colors hover:text-slate-900"
          >
            {nav.contact}
          </a>
          <Link
            href={`/${altLocale}`}
            className="rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
          >
            {altLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
