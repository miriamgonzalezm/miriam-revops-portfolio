import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miriam Gonzalez | Senior Revenue Operations & GTM Systems",
  description: "Senior Revenue Operations and GTM Systems portfolio spanning Salesforce, Agentforce, HubSpot, data governance, commercial analytics and AI-enabled operations.",
  keywords: ["Revenue Operations", "GTM Operations", "GTM Systems", "Sales Operations", "Salesforce Agentforce", "Salesforce", "HubSpot"],
  authors: [{ name: "Miriam Gonzalez" }],
  creator: "Miriam Gonzalez",
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Miriam Gonzalez | Senior Revenue Operations & GTM Systems",
    description: "Turning operational friction into systems people can use — across Salesforce, HubSpot, automation and the wider GTM stack."
  },
  twitter: {
    card: "summary",
    title: "Miriam Gonzalez | Senior Revenue Operations & GTM Systems",
    description: "Turning operational friction into systems people can use."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
