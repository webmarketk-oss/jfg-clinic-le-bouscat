import type { Metadata } from "next";
import "./globals.css";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const metadata: Metadata = {
  title: "JFG Clinic Le Bouscat - Diagnostic + soin découverte dès 80€",
  description:
    "JFG Clinic Le Bouscat. Diagnostic complet de votre peau + soin découverte dès 80€. Offre à durée limitée.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {META_PIXEL_ID ? (
          <noscript>
            <img
              alt=""
              height={1}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              style={{ display: "none" }}
              width={1}
            />
          </noscript>
        ) : null}
        {children}
      </body>
    </html>
  );
}
