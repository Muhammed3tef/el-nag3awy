import { LuMessageCircle } from "react-icons/lu";
import Button from "../ui/button/button";
import { IoCallOutline } from "react-icons/io5";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  imgPath?: string;
}
const HeroSection = ({ title, description, imgPath }: HeroSectionProps) => {
  return (
    <section className="hero-section pt-28">
      <div
        className={`grid grid-cols-1 ${imgPath ? "md:grid-cols-2" : "min-h-[50vh]"}`}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, #285A48 0%, #265544 7.14%, #234F40 14.29%, #214A3C 21.43%, #1F4538 28.57%, #1D3F34 35.71%, #1A3A30 42.86%, #18352C 50%, #163029 57.14%, #142B25 64.29%, #122621 71.43%, #0F221E 78.57%, #0D1D1A 85.71%, #0B1816 92.86%, #091413 100%)",
          }}
          className={`flex flex-col justify-center gap-6 px-6 md:px-16 py-12 text-white order-2 md:order-1 ${imgPath ? "items-start text-start" : "items-center text-center"}`}
        >
          <h1 className="font-bold text-3xl lg:text-4xl">{title}</h1>
          <p className="text-xl">{description}</p>
          {imgPath && (
            <div className="btns-wrapper flex flex-col gap-4 justify-center items-start">
              <Button variant="primary" to="https://wa.me/966540884998">
                <LuMessageCircle size={22} />
                تواصل عبر واتساب
              </Button>
              <Button variant="secondary" to="tel:0540884998">
                <IoCallOutline size={22} />
                اتصل الآن
              </Button>
            </div>
          )}
        </div>
        {imgPath && (
          <div className="img-wrapper order-1 md:order-2">
            <Image src={imgPath} alt="النجعاوي للاثاث" className="w-full" />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
