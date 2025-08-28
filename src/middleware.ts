// src/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'lt', 'lv', 'et'], // <<< Pridėtos 'lv' ir 'et'
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(lt|en|lv|et)/:path*'] // <<< Pridėtos 'lv' ir 'et'
};
