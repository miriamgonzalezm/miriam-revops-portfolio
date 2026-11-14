import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miriam Gonzalez | Revenue Operations, GTM Systems & Commercial Intelligence",
  description: "Full-funnel Revenue Operations portfolio spanning marketing and sales operations, forecasting, lifecycle management, Salesforce, HubSpot, commercial governance and practical AI automation.",
  keywords: ["Revenue Operations", "GTM Operations", "GTM Systems", "Sales Operations", "Marketing Operations", "Commercial Intelligence", "Salesforce Agentforce", "Salesforce", "HubSpot"],
  authors: [{ name: "Miriam Gonzalez" }],
  creator: "Miriam Gonzalez",
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Miriam Gonzalez | Revenue Operations, GTM Systems & Commercial Intelligence",
    description: "Full-funnel operations connecting marketing, sales and finance through trusted data, commercial systems and practical AI automation."
  },
  twitter: {
    card: "summary",
    title: "Miriam Gonzalez | Revenue Operations, GTM Systems & Commercial Intelligence",
    description: "Turning commercial complexity into operating systems people can trust."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
