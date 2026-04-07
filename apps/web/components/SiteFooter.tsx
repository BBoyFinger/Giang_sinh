type SiteFooterProps = {
  copyright: string;
  policy: string;
  privacy: string;
};

export function SiteFooter({ copyright, policy, privacy }: SiteFooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} {copyright}</p>
          <div className="flex gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">
              {policy}
            </a>
            <a href="#" className="hover:text-slate-900">
              {privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
