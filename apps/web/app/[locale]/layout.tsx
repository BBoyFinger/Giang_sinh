import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { dictionaries, isLocale, locales } from "../../lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = dictionaries[locale];

  return (
    <>
      <SiteHeader locale={locale} hospitalName={dict.hospitalName} nav={dict.nav} />
      <main className="flex min-h-[calc(100vh-8rem)] flex-1 flex-col">{children}</main>
      <SiteFooter
        copyright={dict.footer.copyright}
        policy={dict.footer.policy}
        privacy={dict.footer.privacy}
      />
    </>
  );
}
