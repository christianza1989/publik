// src/app/[locale]/layout.tsx
import React from "react";

// Šis failas yra reikalingas, kad next-intl galėtų
// perduoti lokalizacijos informaciją, bet pagrindines
// HTML struktūras valdys src/app/layout.tsx

export default async function LocaleLayout({ // <<< Pridėtas "async"
  children,
  params, // <<< Pakeista
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params; // <<< Pridėtas "await"
  return <>{children}</>;
}
