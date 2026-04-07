export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

type Dictionary = {
  hospitalName: string;
  nav: {
    home: string;
    services: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    apiHealth: string;
    service: string;
    status: string;
    database: string;
    redis: string;
    timestamp: string;
    apiUnavailable: string;
  };
  footer: {
    copyright: string;
    policy: string;
    privacy: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  vi: {
    hospitalName: "BỆNH VIỆN ĐA KHOA SƠN LA",
    nav: {
      home: "Trang chủ",
      services: "Dịch vụ",
      contact: "Liên hệ"
    },
    home: {
      title: "Nền tảng bệnh viện",
      subtitle: "Base stack: Next.js + NestJS + PostgreSQL + Redis + Docker",
      apiHealth: "Tình trạng API",
      service: "dịch vụ",
      status: "trạng thái",
      database: "cơ sở dữ liệu",
      redis: "redis",
      timestamp: "thời gian",
      apiUnavailable:
        "API chưa sẵn sàng. Hãy kiểm tra container bằng lệnh docker compose ps."
    },
    footer: {
      copyright: "Bệnh viện. Bảo lưu mọi quyền.",
      policy: "Chính sách",
      privacy: "Bảo mật"
    }
  },
  en: {
    hospitalName: "SON LA GENERAL HOSPITAL",
    nav: {
      home: "Home",
      services: "Services",
      contact: "Contact"
    },
    home: {
      title: "Hospital Platform",
      subtitle: "Base stack: Next.js + NestJS + PostgreSQL + Redis + Docker",
      apiHealth: "API Health",
      service: "service",
      status: "status",
      database: "database",
      redis: "redis",
      timestamp: "timestamp",
      apiUnavailable:
        "API is unavailable. Check containers with docker compose ps."
    },
    footer: {
      copyright: "Hospital. All rights reserved.",
      policy: "Policy",
      privacy: "Privacy"
    }
  }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
