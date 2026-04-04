interface ProductFeatureCardProps {
  imgPath: string;
  imgAlt: string;
  title: string;
  description: string;
  features: string[];
}

import Image from "next/image";
import Card from "../ui/card/card";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ProductFeatureCard = ({
  imgPath,
  imgAlt,
  title,
  description,
  features,
}: ProductFeatureCardProps) => {
  return (
    <Card className="p-6 bg-white">
      {/* Image */}
      <div className="relative w-full h-60 rounded-2xl overflow-hidden">
        <Image src={imgPath} alt={imgAlt} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-2">
          {title}
        </h3>

        <p className="text-gray-500 mb-4">{description}</p>

        {/* Features list */}
        <div className="flex flex-col items-start gap-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline
                size={20}
                className="text-green-600"
              />

              <span className="text-green-900 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProductFeatureCard;
