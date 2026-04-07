import { notFound } from "next/navigation";
import { dictionaries, isLocale } from "../../lib/i18n";

type HealthResponse = {
  service: string;
  status: string;
  database: string;
  redis: string;
  timestamp: string;
};

async function getApiHealth(): Promise<HealthResponse | null> {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

  try {
    const response = await fetch(`${baseUrl}/health`, { cache: "no-store" });
    if (!response.ok) return null;
    return (await response.json()) as HealthResponse;
  } catch {
    return null;
  }
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = dictionaries[locale];
  const health = await getApiHealth();

  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        {dict.home.title}
      </h1>
      <p className="mt-2 text-slate-600">{dict.home.subtitle}</p>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          {dict.home.apiHealth}
        </h2>
        {health ? (
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>
              <span className="font-medium text-slate-900">
                {dict.home.service}:
              </span>{" "}
              {health.service}
            </li>
            <li>
              <span className="font-medium text-slate-900">
                {dict.home.status}:
              </span>{" "}
              {health.status}
            </li>
            <li>
              <span className="font-medium text-slate-900">
                {dict.home.database}:
              </span>{" "}
              {health.database}
            </li>
            <li>
              <span className="font-medium text-slate-900">
                {dict.home.redis}:
              </span>{" "}
              {health.redis}
            </li>
            <li>
              <span className="font-medium text-slate-900">
                {dict.home.timestamp}:
              </span>{" "}
              {health.timestamp}
            </li>
          </ul>
        ) : (
          <p className="mt-4 text-sm text-slate-600">{dict.home.apiUnavailable}</p>
        )}
      </section>
    </div>
  );
}
