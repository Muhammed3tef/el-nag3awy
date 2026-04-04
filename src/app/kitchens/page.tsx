import SubFooter from "@/components/footer/components/sub-footer";
import HeroSection from "@/components/section/hero-section";
import { yourKitchen } from "../../../public/imgs/kitchens";
import Section from "@/components/section/section";
import { kitchenTypes, whyChooseOurKitchens } from "@/constants/pages-data";
import ProductFeatureCard from "@/components/cards/product-featured-card";
import InfoCard from "@/components/cards/info-card";
import FeatureListCard from "@/components/cards/feature-list-card";

const Kitchens = () => {
  return (
    <>
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
    </>
  );
};

export default Kitchens;
