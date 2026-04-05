import type { Metadata } from "next";
import SubFooter from "@/components/footer/components/sub-footer";
import HeroSection from "@/components/section/hero-section";
import Section from "@/components/section/section";
import { FaClock, FaCommentDots, FaMapMarkerAlt } from "react-icons/fa";
import { FAQItem } from "./_components/faq-item";
import { contactUs, faqs } from "@/constants/pages-data";

export const metadata: Metadata = {
  title: "تواصل معنا | النجعاوي لشراء الأثاث المستعمل في الرياض",
  description:
    "تواصل مع النجعاوي لشراء الأثاث المستعمل في الرياض بسهولة. اتصل بنا أو راسلنا عبر واتساب للحصول على أفضل الأسعار وخدمة سريعة وتقييم مجاني.",

  keywords: [
    "تواصل معنا النجعاوي",
    "رقم شراء أثاث مستعمل الرياض",
    "واتساب شراء عفش مستعمل",
    "خدمة عملاء شراء الأثاث",
    "شركة شراء أثاث مستعمل الرياض",
    "التواصل مع شركة أثاث مستعمل",
    "بيع أثاث مستعمل بسرعة",
  ],

  authors: [{ name: "النجعاوي لشراء الأثاث المستعمل" }],
  creator: "النجعاوي",
  publisher: "النجعاوي",

  openGraph: {
    title: "تواصل معنا | خدمة سريعة لشراء الأثاث المستعمل في الرياض",
    description:
      "تواصل الآن مع النجعاوي لبيع أثاثك المستعمل بأفضل سعر في الرياض. رد سريع وخدمة موثوقة.",
    url: "https://your-domain.com/contact",
    siteName: "النجعاوي",
    locale: "ar_SA",
    type: "website",
  },

  alternates: {
    canonical: "https://your-domain.com/contact",
  },
};

const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="تواصل معنا"
        description="نحن هنا للإجابة على جميع استفساراتك وخدمتك على مدار الساعة"
      />
      {/* Contact Us */}
      <Section
        title="طرق التواصل"
        description="اختر الطريقة الأنسب لك للتواصل معنا"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`text-white rounded-3xl p-7 flex items-start gap-4 ${idx === 0 ? "bg-linear-to-br from-green-300 to-green-600" : "bg-linear-to-br from-emerald-600 to-emerald-800"}`}
              >
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon size={25} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-lg">{item.description}</p>
                  <p>{item.tel}</p>
                  <a
                    href={`${item.type === "whatsapp" ? "https://wa.me/" : "tel:"}:${item.tel}`}
                    className="underline text-gray-200"
                  >
                    {item.btnMsg}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Info Cards Section */}
      <Section className="bg-gray-50 py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Location */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-stone-100 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-green-500 text-xl" />
            </div>
            <h4 className="text-stone-800 font-bold text-lg mb-2">الموقع</h4>
            <p className="text-stone-500 text-xs leading-relaxed">
              الرياض، المملكة العربية السعودية
            </p>
            <p className="text-stone-400 text-xs mt-1">
              نخدم جميع أحياء الرياض
            </p>
          </div>
          {/* Working Hours */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-stone-100 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <FaClock className="text-green-500 text-2xl" />
            </div>
            <h4 className="text-stone-800 font-bold text-lg mb-2">
              ساعات العمل
            </h4>
            <div className="flex flex-col gap-2">
              <p className="text-stone-500 text-sm leading-relaxed">
                السبت - الخميس
              </p>
              <p className="text-stone-600 text-sm font-medium ">
                8:00 صباحاً - 10:00 مساءً
              </p>
              <p className="text-stone-500 text-sm">
                الجمعة: 2:00 - 10:00 مساءً
              </p>
            </div>
          </div>
          {/* Response Time */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-stone-100 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <FaCommentDots className="text-green-500 text-2xl" />
            </div>
            <h4 className="text-stone-800 font-bold text-lg mb-1">
              استجابة سريعة
            </h4>
            <p className="text-stone-400 text-xs mb-2">نرد على الرسائل خلال</p>
            <span className="text-green-600 font-extrabold text-md">
              5-10 دقائق
            </span>
            <p className="text-stone-400 text-xs mt-1">في أوقات العمل</p>
          </div>
        </div>
      </Section>
      <section className="px-4 pb-12 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"></div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 pb-16 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-stone-800 text-3xl font-extrabold mb-2">
            الأسئلة الشائعة
          </h2>
          <p className="text-stone-400 text-sm">
            إجابات على الأسئلة الأكثر شيوعاً
          </p>
          <div className="w-12 h-1 bg-green-400 rounded-full mx-auto mt-3" />
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <SubFooter
        title="لا تتردد في التواصل"
        description="نحن في انتظار استفسارك ومستعدون لخدمتك"
      />
    </>
  );
};

export default ContactUs;
