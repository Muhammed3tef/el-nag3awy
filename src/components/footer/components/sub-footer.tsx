import Button from "@/components/ui/button/button";
import { IoCallOutline } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";

interface Props {
  title: string;
  description: string;
}
const SubFooter = ({ title, description }: Props) => {
  return (
    <div
      className="px-6 md:px-16 py-12"
      style={{
        background:
          "linear-gradient(100deg, #285A48 -76.64%, #265544 -66.27%, #234F40 -55.9%, #214A3C -45.53%, #1F4538 -35.16%, #1D3F34 -24.79%, #1A3A30 -14.42%, #18352C -4.06%, #163029 6.31%, #142B25 16.68%, #122621 27.05%, #0F221E 37.42%, #0D1D1A 47.79%, #0B1816 58.16%, #091413 68.52%)",
      }}
    >
      <div className="container text-center text-white flex flex-col gap-6">
        <h4 className="font-bold text-2xl md:text-3xl">{title}</h4>
        <p className="text-sm md:text-lg">{description}</p>

        <div className="btns-wrapper flex gap-4 justify-center items-center">
          <Button variant="primary" to="https://wa.me/966540884998">
            <RiWhatsappFill size={22} />
            تواصل عبر واتساب
          </Button>
          <Button variant="secondary" to="tel:0540884998">
            <IoCallOutline size={22} />
            اتصل الآن
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
