import Image from "next/image";
import Card from "../ui/card/card";
import { IconType } from "react-icons";

interface ImageCardProps {
  imgPath: string;
  imgAlt: string;
  icon?: IconType;
  title: string;
  description: string;
}

const ImageCard = ({
  imgPath,
  imgAlt,
  icon,
  title,
  description,
}: ImageCardProps) => {
  const Icon = icon as IconType;
  return (
    <Card className="group bg-white">
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={imgPath}
          alt={imgAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          {icon && (
            <div className="p-2 bg-[#285A481A] rounded-md">
              <Icon size={25} className="text-green-600" />
            </div>
          )}

          <h5 className="font-semibold text-2xl text-green-900">{title}</h5>
        </div>

        <p className="text-gray-500">{description}</p>
      </div>
    </Card>
  );
};

export default ImageCard;
