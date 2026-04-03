import Image from "next/image";
import { whatsappVector } from "../../../../public/imgs";

const NavWhatsapp = () => {
  return (
    <button className="cursor-pointer hidden lg:block">
      <Image
        src={whatsappVector}
        alt="تواصل معنا عبر الواتساب النجعاوي لشراء الاثائث المستعمل بالرياض"
      />
    </button>
  );
};

export default NavWhatsapp;
