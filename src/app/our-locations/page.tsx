import SubFooter from "@/components/footer/components/sub-footer";
import HeroSection from "@/components/section/hero-section";
import { maps } from "../../../public/imgs";
import Section from "@/components/section/section";
import { locationsWeServe } from "@/constants/pages-data";
import LocationCard from "@/components/cards/location-card";
import ContentHighlightCard from "@/components/cards/content-highlight-card";
import { IoLocationOutline } from "react-icons/io5";

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
