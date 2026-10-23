import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miriam Gonzalez | Revenue Operations, GTM Systems & AI Automation",
  description: "Revenue Operations portfolio spanning commercial planning, forecasting, Salesforce and GTM systems, governance, Agentforce automation and cross-functional operations.",
  keywords: ["Revenue Operations", "GTM Operations", "GTM Systems", "Sales Operations", "Salesforce Agentforce", "Salesforce", "HubSpot"],
  authors: [{ name: "Miriam Gonzalez" }],
  creator: "Miriam Gonzalez",
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Miriam Gonzalez | Revenue Operations, GTM Systems & AI Automation",
    description: "Commercial operations, GTM systems and practical AI automation — from forecasting and governance to a suite of Salesforce Agentforce agents."
  },
  twitter: {
    card: "summary",
    title: "Miriam Gonzalez | Revenue Operations, GTM Systems & AI Automation",
    description: "Turning commercial friction into operating processes, systems and practical AI automation."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
