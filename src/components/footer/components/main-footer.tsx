import Link from "next/link";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { footerLogo } from "../../../../public/imgs";
import Button from "@/components/ui/button/button";

const quickLinks = [
  "الصفحة الرئيسية",
  "شراء الأثاث المستعمل",
  "اشتر مطبخك الجديد",
  "المناطق التي نخدمها",
  "من نحن",
];

const services = [
  "شراء غرف النوم المستعملة",
  "شراء المكيفات المستعملة",
  "شراء الثلاجات المستعملة",
  "شراء الأجهزة المنزلية",
  "بيع المطابخ الحديثة",
  "المطابخ الألمنيوم والخشب",
];

const MainFooter = () => {
  return (
    <div
      className="px-6 md:px-16 py-12"
      style={{
        background:
          "linear-gradient(132deg, #285A48 -76.64%, #265544 -66.27%, #234F40 -55.9%, #214A3C -45.53%, #1F4538 -35.16%, #1D3F34 -24.79%, #1A3A30 -14.42%, #18352C -4.06%, #163029 6.31%, #142B25 16.68%, #122621 27.05%, #0F221E 37.42%, #0D1D1A 47.79%, #0B1816 58.16%, #091413 68.52%)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {/* Logo & Info */}
          <div className="flex flex-col gap-4">
            <Image
              src={footerLogo}
              alt="النجعاوي لشراء الأثاث المستعمل بالرياض"
              className="w-1/2 lg:w-4/6"
              priority
            />

            <p className="leading-relaxed text-sm lg:max-w-[90%]">
              شركة متخصصة في شراء الأثاث المستعمل وبيع المطابخ الحديثة في الرياض
            </p>

            <div className="flex items-center gap-2 text-sm">
              <FiClock />
              <span>خبرة أكثر من 5 سنوات</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">
              روابط سريعة
            </h3>

            <ul className="space-y-2 text-sm">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link href="/" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">خدماتنا</h3>

            <ul className="space-y-2 text-sm">
              {services.map((item, i) => (
                <li key={i}>
                  <Link href="/" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">
              تواصل معنا
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <IoLocationOutline className="text-amber-500" size={20} />
                الرياض، المملكة العربية السعودية
              </li>

              <li className="flex items-center gap-2">
                <IoCallOutline className="text-amber-500" size={20} />
                ‏‪054 088 4998‬‏ 966+
              </li>
            </ul>
            <Button className="mt-5 w-full" variant="primary">
              <RiWhatsappFill size={22} />
              تواصل عبر واتساب
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-xs">
          © 2026 النجعاوي. جميع الحقوق محفوظة.
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
