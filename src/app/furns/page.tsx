import SubFooter from "@/components/footer/components/sub-footer";
import Section from "@/components/section/section";
import { howWeWork, whatWeBuy, whyChooseUs } from "@/constants/pages-data";
import ImageCard from "@/components/cards/image-card";
import InfoCard from "@/components/cards/info-card";
import HeroSection from "@/components/section/hero-section";
import FeatureListCard from "@/components/cards/feature-list-card";
import { heroImg } from "../../../public/imgs";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شراء الأثاث المستعمل في الرياض | أفضل أسعار لبيع الأثاث المستعمل",
  description:
    "نشتري الأثاث المستعمل في الرياض بأفضل الأسعار. خدمات سريعة وموثوقة لشراء غرف النوم، المطابخ، الأجهزة المنزلية والمزيد. تواصل معنا الآن للحصول على تقييم مجاني.",

  keywords: [
    "شراء الأثاث المستعمل الرياض",
    "بيع أثاث مستعمل",
    "شراء عفش مستعمل الرياض",
    "أثاث مستعمل للبيع",
    "شراء أجهزة منزلية مستعملة",
    "شركة شراء أثاث مستعمل",
    "بيع عفش بسرعة",
  ],

  authors: [{ name: "النجعاوي لشراء الأثاث المستعمل" }],
  creator: "النجعاوي",
  publisher: "النجعاوي",

  openGraph: {
    title: "شراء الأثاث المستعمل في الرياض | أسعار مميزة وخدمة سريعة",
    description:
      "هل لديك أثاث مستعمل؟ نشتريه بأفضل سعر في الرياض مع خدمة سريعة وتقييم مجاني.",
    url: "https://your-domain.com/furns",
    siteName: "النجعاوي",
    locale: "ar_SA",
    type: "website",
  },

  alternates: {
    canonical: "https://your-domain.com/furns",
  },
};

const Furns = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        imgPath={heroImg}
        title="شراء الأثاث المستعمل في الرياض"
        description="نشتري جميع أنواع الأثاث والأجهزة المنزلية المستعملة بأفضل الأسعار في الرياض"
      />

      {/* What We Buy Section*/}
      <Section
        title="ما الذي نشتريه؟"
        description="نشتري جميع أنواع الأثاث والأجهزة المستعملة في حالة جيدة"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whatWeBuy.map((item, idx) => (
            <ImageCard key={idx} {...item} />
          ))}
        </div>
      </Section>

      {/* How We Work */}
      <Section title="كيف نعمل" description="خطوات بسيطة وسريعة لبيع أثاثك">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {howWeWork.map((info, idx) => (
            <InfoCard key={idx} {...info} step={idx + 1} />
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section
        title="لماذا تختار النجعاوي"
        description="نقدم أفضل خدمة في شراء الأثاث المستعمل"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-4">
          {whyChooseUs.map((info, idx) => (
            <InfoCard key={idx} {...info} />
          ))}
        </div>
      </Section>

      <Section className="bg-green-50">
        <FeatureListCard
          title="كيف نقيم الأثاث؟"
          items={[
            {
              title: "حالة الأثاث",
              description:
                "نقيم حالة الأثاث من حيث النظافة والمتانة ومدى سلامته",
            },
            {
              title: "الماركة والنوعية",
              description:
                "الماركات المعروفة والذات الجودة العالية تحصل على سعر أفضل",
            },
            {
              title: "الطلب في السوق",
              description: "نعتمد على دراسة السوق لتقديم أفضل سعر تنافسي",
            },
            {
              title: "العمر والاستخدام",
              description: "الأثاث الأحدث والأقل استخداماً يحصل على تقييم أعلى",
            },
          ]}
        />
      </Section>
      <SubFooter
        title="جاهز لبيع أثاثك؟"
        description="احصل على أفضل سعر لأثاثك المستعمل اليوم"
      />
    </>
  );
};

export default Furns;
