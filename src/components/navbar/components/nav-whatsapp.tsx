import Image from "next/image";
import { whatsappVector } from "../../../../public/imgs";
import Link from "next/link";

const NavWhatsapp = () => {
  return (
    <button className="cursor-pointer hidden lg:block">
      <Link href="https://wa.me/0540884998" target="_blank">
        <Image
          src={whatsappVector}
          alt="تواصل معنا عبر الواتساب النجعاوي لشراء الاثائث المستعمل بالرياض"
        />
      </Link>
    </button>
  );
};

export default NavWhatsapp;
