import SubFooter from "@/components/footer/components/sub-footer";
import HeroSection from "@/components/section/hero-section";
import { yourKitchen } from "../../../public/imgs/kitchens";
import Section from "@/components/section/section";
import { kitchenTypes, whyChooseOurKitchens } from "@/constants/pages-data";
import ProductFeatureCard from "@/components/cards/product-featured-card";
import InfoCard from "@/components/cards/info-card";
import FeatureListCard from "@/components/cards/feature-list-card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مطابخ حديثة في الرياض | تصميم وتركيب مطابخ عصرية بأسعار مميزة",
  description:
    "اكتشف أفضل المطابخ الحديثة في الرياض بتصاميم عصرية وجودة عالية. نقدم تصميم 3D مجاني، تركيب احترافي، وضمان شامل بأسعار تنافسية.",

  keywords: [
    "مطابخ حديثة الرياض",
    "تفصيل مطابخ",
    "مطابخ مودرن",
    "تصميم مطابخ 3D",
    "مطابخ جاهزة",
    "تركيب مطابخ الرياض",
    "مطابخ خشب",
    "مطابخ المنيوم",
  ],

  authors: [{ name: "النجعاوي للمطابخ الحديثة" }],
  creator: "النجعاوي",
  publisher: "النجعاوي",

  openGraph: {
    title: "مطابخ حديثة في الرياض | تصميم مجاني وتركيب احترافي",
    description:
      "احصل على مطبخ أحلامك بتصميم عصري وجودة عالية مع أفضل الأسعار في الرياض.",
    url: `${process.env.BASE_URL}/kitchens`,
    siteName: "النجعاوي",
    locale: "ar_SA",
    type: "website",
  },

  alternates: {
    canonical: `${process.env.BASE_URL}/kitchens`,
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Kitchens = () => {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="اشتر مطبخك الجديد"
        description="نقدم أفضل المطابخ الحديثة بتصاميم عصرية وجودة عالية بأسعار تنافسية"
        imgPath={yourKitchen}
      />

      {/* New Kitechens Section */}
      <Section
        title="أنواع المطابخ"
        description="نوفر جميع أنواع المطابخ بتصاميم حديثة"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kitchenTypes.map((kitchen, idx) => (
            <ProductFeatureCard key={idx} {...kitchen} />
          ))}
        </div>
      </Section>

      {/* Why Choose Our Kitechens Section */}
      <Section
        className="bg-green-50"
        title="لماذا تختار مطابخنا"
        description="نقدم أفضل جودة وخدمة في السوق"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mb-12 md:mb-20">
          {whyChooseOurKitchens.map((info, idx) => (
            <InfoCard key={idx} {...info} />
          ))}
        </div>

        <FeatureListCard
          columns={2}
          title="ما نقدمه"
          items={[
            {
              title: "تصميم مجاني",
              description: "نقدم تصميم 3D مجاني لمطبخك",
            },
            {
              title: "استشارة مجانية",
              description: "مستشار متخصص لمساعدتك",
            },
            {
              title: "تركيب احترافي",
              description: "فريق تركيب محترف ومدرب",
            },
            {
              title: "ضمان شامل",
              description: "ضمان على الخامات والتركيب",
            },
            {
              title: "أسعار منافسة",
              description: "أفضل الأسعار في السوق",
            },
            {
              title: "صيانة دورية",
              description: "خدمة صيانة ما بعد البيع",
            },
          ]}
        />
      </Section>
      <SubFooter
        title="هل تريد مطبخ أحلامك؟"
        description="تواصل معنا الآن واحصل على استشارة مجانية وتصميم 3D لمطبخك"
      />
    </main>
  );
};

export default Kitchens;
