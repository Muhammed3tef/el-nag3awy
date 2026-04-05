import SubFooter from "@/components/footer/components/sub-footer";
import Button from "@/components/ui/button/button";

import {
  howWeWork,
  locationsWeServe,
  newKitchens,
  ourServices,
  whatWeBuy,
  whyChooseUs,
} from "@/constants/pages-data";
import Section from "@/components/section/section";
import ServiceCard from "@/components/cards/service-card";
import ImageCard from "@/components/cards/image-card";
import InfoCard from "@/components/cards/info-card";
import LocationCard from "@/components/cards/location-card";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative bg-[url('/imgs/hero-img.svg')]  bg-cover bg-center min-h-screen flex justify-center items-center">
        <div className="overlay inset-0 absolute bg-[#1D3F34] opacity-75" />
        <div className="container text-center text-white relative z-20">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl max-w-4/5 mx-auto leading-relaxed">
            شراء الأثاث المستعمل في الرياض
          </h1>
          <p className="text-base lg:text-2xl my-6">
            نقدم أفضل الأسعار لشراء أثاثك المستعمل مع خدمة النقل المجانية والدفع
            الفوري نقداً
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="cursor-pointer font-bold bg-white text-green-600 px-10 py-2 rounded hover:bg-green-600 hover:text-white transition duration-150">
              <Link href={"/furns"}>بيع أثاثك الآن</Link>
            </button>
            <button className="cursor-pointer font-bold border border-white px-10 py-2 rounded hover:bg-white hover:text-green-600 transition duration-150">
              <Link href={"/kitchens"}>اشتر مطبخك الجديد</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <Section
        title="خدماتنا الرئيسية"
        description="نوفر خدمات متكاملة في شراء الأثاث المستعمل وبيع المطابخ الحديثة"
      >
        <div className="grid md:grid-cols-2 gap-4">
          {ourServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </Section>

      {/* What We Buy Section*/}
      <Section
        className="bg-green-50"
        title="ما الذي نشتريه؟"
        description="نشتري جميع أنواع الأثاث والأجهزة المستعملة في حالة جيدة"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whatWeBuy.map((item, idx) => (
            <ImageCard key={idx} {...item} />
          ))}
        </div>
      </Section>

      {/* New Kitechens Section */}
      <Section
        title="المطابخ الجديدة"
        description="تصاميم عصرية بجودة عالية وأسعار منافسة"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newKitchens.map((item, idx) => (
            <ImageCard key={idx} {...item} />
          ))}
        </div>
        <Button className=" w-full lg:w-1/4 mx-auto mt-12">
          <Link href={"/kitchens"}>اشتر مطبخك الجديد</Link>
        </Button>
      </Section>

      {/* How We Work Section */}
      <Section title="كيف نعمل" description="خطوات بسيطة وسريعة لبيع أثاثك">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {howWeWork.map((info, idx) => (
            <InfoCard key={idx} {...info} step={idx + 1} />
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section*/}
      <Section
        className="bg-green-50"
        title="لماذا تختار النجعاوي"
        description="نقدم أفضل خدمة في شراء الأثاث المستعمل"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-4">
          {whyChooseUs.map((info, idx) => (
            <InfoCard key={idx} {...info} />
          ))}
        </div>
      </Section>

      {/* Locations We Serve Section*/}
      <Section title="المناطق التي نخدمها" description="نغطي جميع أحياء الرياض">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locationsWeServe.splice(0, 5).map((location, idx) => (
            <LocationCard key={idx} {...location} />
          ))}
        </div>
        <Button
          to="/our-locations"
          variant="secondary"
          className="w-full lg:w-1/4 mx-auto mt-12"
        >
          <Link href={"/our-locations"}>معرفة المناطق التي نخدمها</Link>
        </Button>
      </Section>

      <SubFooter
        title="هل تريد بيع أثاثك اليوم؟"
        description="تواصل معنا الآن واحصل على أفضل سعر لأثاثك المستعمل مع خدمة نقل مجانية ودفع فوري"
      />
    </>
  );
};

export default Home;
