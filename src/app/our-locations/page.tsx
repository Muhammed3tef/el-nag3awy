import SubFooter from "@/components/footer/components/sub-footer";
import HeroSection from "@/components/section/hero-section";
import { maps } from "../../../public/imgs";
import Section from "@/components/section/section";
import { locationsWeServe } from "@/constants/pages-data";
import LocationCard from "@/components/cards/location-card";
import ContentHighlightCard from "@/components/cards/content-highlight-card";
import { IoLocationOutline } from "react-icons/io5";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "مناطق الخدمة في الرياض | شراء الأثاث المستعمل وتركيب المطابخ في جميع الأحياء",
  description:
    "نخدم جميع أحياء الرياض لشراء الأثاث المستعمل وتركيب المطابخ الحديثة. نصل إليك بسرعة ونقدم أفضل الأسعار مع خدمة موثوقة في جميع المناطق.",

  keywords: [
    "شراء الأثاث المستعمل الرياض أحياء",
    "مناطق شراء العفش المستعمل الرياض",
    "شركة شراء أثاث مستعمل في الرياض",
    "تركيب مطابخ الرياض جميع الأحياء",
    "خدمات الأثاث المستعمل الرياض",
    "شراء عفش مستعمل شمال الرياض",
    "شراء عفش مستعمل شرق الرياض",
    "شراء عفش مستعمل غرب الرياض",
    "شراء عفش مستعمل جنوب الرياض",
  ],

  authors: [{ name: "النجعاوي" }],
  creator: "النجعاوي",
  publisher: "النجعاوي",

  openGraph: {
    title: "نخدم جميع أحياء الرياض | شراء أثاث مستعمل وتركيب مطابخ",
    description:
      "سواء كنت في شمال أو جنوب أو شرق أو غرب الرياض، نصل إليك بسرعة ونقدم أفضل الأسعار.",
    url: "https://your-domain.com/locations",
    siteName: "النجعاوي",
    locale: "ar_SA",
    type: "website",
  },

  alternates: {
    canonical: "https://your-domain.com/locations",
  },
};

const OurLocations = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="مناطق الخدمة في الرياض"
        description="نخدم جميع مناطق الرياض لشراء الأثاث المستعمل وتركيب المطابخ الحديثة"
        imgPath={maps}
      />

      {/* Locations We Serve Section*/}
      <Section title="المناطق التي نخدمها" description="نغطي جميع أحياء الرياض">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locationsWeServe.map((location, idx) => (
            <LocationCard key={idx} {...location} />
          ))}
        </div>
      </Section>

      {/* Locations Covered Section */}
      <Section className="bg-green-50">
        <ContentHighlightCard
          title="تغطية شاملة"
          icon={IoLocationOutline}
          heading="نخدم جميع أحياء الرياض"
          paragraphs={[
            "من شمال الرياض إلى جنوبها ومن شرقها إلى غربها",
            "نصل إليك في أي وقت وبأسرع وقت ممكن",
            "نقوم بتقييم الأثاث وجميع المحتويات ونعطيك أفضل سعر",
          ]}
          note="هل موقعك غير مذكور؟ لا تقلق! نحن نخدم جميع أحياء الرياض، تواصل معنا للتأكد من تغطية منطقتك"
        />
      </Section>

      <SubFooter
        title="في أي منطقة بالرياض؟"
        description="تواصل معنا الآن وسنصل إليك أينما كنت في الرياض"
      />
    </>
  );
};

export default OurLocations;
