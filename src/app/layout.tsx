import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.BASE_URL}`),

  title: {
    default: "النجعاوي | شراء الأثاث المستعمل وبيع المطابخ في الرياض",
    template: "%s | النجعاوي",
  },

  description:
    "شركة النجعاوي متخصصة في شراء الأثاث المستعمل وبيع المطابخ الحديثة في الرياض. نقدم أفضل الأسعار، خدمة سريعة، وتقييم عادل مع نقل مجاني.",

  keywords: [
    "شراء الأثاث المستعمل الرياض",
    "بيع مطابخ الرياض",
    "شراء عفش مستعمل",
    "مطابخ حديثة",
    "شركة أثاث مستعمل الرياض",
  ],

  authors: [{ name: "النجعاوي" }],
  creator: "النجعاوي",
  publisher: "النجعاوي",

  openGraph: {
    title: "النجعاوي | شراء الأثاث المستعمل وبيع المطابخ في الرياض",
    description:
      "أفضل شركة لشراء الأثاث المستعمل وبيع المطابخ الحديثة في الرياض بأسعار تنافسية وخدمة موثوقة.",
    url: `${process.env.BASE_URL}`,
    siteName: "النجعاوي",
    locale: "ar_SA",
    type: "website",
  },

  alternates: {
    canonical: `${process.env.BASE_URL}`,
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="rtl"
      className={`${cairo.className} h-full antialiased`}
    >
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
