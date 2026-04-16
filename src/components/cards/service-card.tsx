import Link from "next/link";
import { IconType } from "react-icons";
import Card from "../ui/card/card";
import Button from "../ui/button/button";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  to: string;
}

const ServiceCard = ({ icon, title, description, to }: ServiceCardProps) => {
  const Icon = icon;
  return (
    <Card className="p-6 flex flex-col gap-4 bg-white">
      <div className="py-2 px-5 bg-[#285A481A] w-fit rounded-md">
        <Icon size={40} className="text-green-600" />
      </div>

      <h5 className="font-semibold text-green-900 md:text-2xl lg:text-3xl">
        {title}
      </h5>

      <p className="text-gray-500 max-w-9/12">{description}</p>

      <Button className="self-start" to={to}>
        تفاصيل الخدمة
      </Button>
    </Card>
  );
};

export default ServiceCard;
