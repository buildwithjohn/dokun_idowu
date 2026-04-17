import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import GlobalShell from "@/components/ui/GlobalShell";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Rev. Dokun Idowu | Bible Teacher · Pioneer · Executive Leader, Rhema Nigeria",
  description:
    "Rev. Dokun Idowu is an anointed Bible teacher, preacher, and pioneer — graced by God for the gifts of the Spirit and the move of the Holy Ghost. Executive Leader at Rhema Nigeria.",
  keywords: ["Rev Dokun Idowu", "Rhema Nigeria", "Bible teacher", "Kenneth Hagin", "Nigerian pastor", "RBTC"],
  openGraph: {
    title: "Rev. Dokun Idowu",
    description: "Bible Teacher · Pioneer · Executive Leader, Rhema Nigeria",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalShell>{children}</GlobalShell>
      </body>
    </html>
  );
}
