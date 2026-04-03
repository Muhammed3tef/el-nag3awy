import Image from "next/image";
import { mainLogo } from "../../../../public/imgs";

export const NavbarLogo = () => {
  return (
    <Image
        src={mainLogo}
        alt="النجعاوي لشراء الأثاث المستعمل بالرياض"
        priority
        width={150}
        height={150}
      />
  );
};
