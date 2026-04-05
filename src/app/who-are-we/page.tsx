import InfoCard from "@/components/cards/info-card";
import SubFooter from "@/components/footer/components/sub-footer";
import HeroSection from "@/components/section/hero-section";
import Section from "@/components/section/section";
import { ourPrinciples, whyChooseUs } from "@/constants/pages-data";
import ServiceListCard from "./_components/service-item";
import FeatureGrid from "./_components/feature-grid";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن | شركة النجعاوي لشراء الأثاث المستعمل وبيع المطابخ في الرياض",
  description:
    "تعرف على شركة النجعاوي وخبرتنا في شراء الأثاث المستعمل وبيع المطابخ الحديثة في الرياض. نقدم خدمات موثوقة، أسعار عادلة، وخدمة احترافية نالت ثقة آلاف العملاء.",

  keywords: [
    "شركة النجعاوي",
    "من نحن النجعاوي",
    "شراء الأثاث المستعمل الرياض",
    "شركة أثاث مستعمل الرياض",
    "بيع مطابخ حديثة الرياض",
    "شركة مطابخ الرياض",
    "خدمات الأثاث المستعمل",
  ],

  authors: [{ name: "شركة النجعاوي" }],
  creator: "النجعاوي",
  publisher: "النجعاوي",

  openGraph: {
    title: "من نحن | النجعاوي",
    description:
      "شركة رائدة في شراء الأثاث المستعمل وبيع المطابخ الحديثة في الرياض بخبرة وثقة.",
    url: "https://your-domain.com/about",
    siteName: "النجعاوي",
    locale: "ar_SA",
    type: "website",
  },

  alternates: {
    canonical: "https://your-domain.com/about",
  },
};

const WhoAreWe = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="من نحن"
        description="شركة النجعاوي الرائدة في شراء الأثاث المستعمل وبيع المطابخ الجديدة في الرياض"
      />

      {/* Our Story Section */}
      <Section>
        <h3 className="font-bold text-3xl mb-8">قصتنا</h3>
        <p className="text-gray-700 text-md">
          بدأت النجعاوي رحلتها منذ أكثر من 5 سنوات برؤية واضحة: تقديم خدمة شراء
          أثاث مستعمل تتميز بالشفافية والمصداقية والأسعار العادلة.
        </p>
        <p className="text-gray-700 my-8 text-md">
          على مر السنين، اكتسبنا ثقة الآلاف من العملاء في جميع أنحاء الرياض،
          وأصبحنامن اهم الأسماء في مجال شراء الأثاث المستعمل.
        </p>
        <p className="text-gray-700 text-md">
          توسعت خدماتنا لتشمل بيع المطابخ الجديدة بأفضل الجودات والتصاميم، لنوفر
          لعملائنا حلولاً شاملة لمنازلهم.
        </p>
      </Section>

      {/* Our Principles Section */}
      <Section
        className="bg-green-50"
        title="قيمنا"
        description="المبادئ التي نؤمن بها ونعمل على أساسها"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {ourPrinciples.map((info, idx) => (
            <InfoCard key={idx} {...info} />
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="لماذا النجعاوي" description="ما يميزنا عن المنافسين">
        <FeatureGrid
          title="لماذا النجعاوي"
          subtitle="نقدم خدمات متميزة"
          columns={2}
          items={whyChooseUs}
        />
      </Section>
      {/* Our Services Section */}
      <Section className="bg-green-50">
        <ServiceListCard
          title="خدماتنا"
          items={[
            {
              title: "شراء الأثاث المستعمل",
              description:
                "نشتري جميع أنواع الأثاث والأجهزة المنزلية المستعملة بأفضل الأسعار. خدمة سريعة، تقييم عادل، ودفع فوري نقداً.",
            },
            {
              title: "بيع المطابخ الحديثة",
              description:
                "نوفر أفضل المطابخ الحديثة بتصاميم عصرية وجودة عالية. مطابخ ألمنيوم وخشب بأسعار تنافسية مع خدمة تركيب احترافية.",
            },
            {
              title: "النقل المجاني",
              description:
                "نقدم خدمة نقل مجانية لجميع مناطق الرياض مع فريق محترف ومعدات مناسبة.",
            },
            {
              title: "الاستشارات المجانية",
              description:
                "نقدم استشارات مجانية لتقييم أثاثك أو اختيار المطبخ المناسب لمنزلك.",
            },
          ]}
        />
      </Section>
      {/* Our Coverage Section */}
      <Section title="تغطيتنا" description="نخدم جميع أحياء ومناطق الرياض">
        <p className="text-center text-green-900">
          من شمال الرياض إلى جنوبها ومن شرقها إلى غربها، فريقنا جاهز للوصول إليك
          بسرعة وتقديم أفضل خدمة في جميع الأحياء والمناطق.
        </p>
      </Section>
      <SubFooter
        title="جاهزون لخدمتك"
        description="تواصل معنا الآن ودعنا نساعدك"
      />
    </>
  );
};

export default WhoAreWe;
