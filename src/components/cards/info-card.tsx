import { IconType } from "react-icons";
import Card from "../ui/card/card";

interface InfoCardProps {
  icon: IconType;
  title: string;
  description: string;
  centered?: boolean;
  step?: number;
}

const InfoCard = ({
  icon,
  title,
  description,
  centered = false,
  step,
}: InfoCardProps) => {
  const Icon = icon;
  return (
    <Card className={`shadow-none ${centered ? "text-center" : ""}`}>
      <div className="flex flex-col items-center gap-2">
        <div className="relative bg-green-800 text-white flex items-center justify-center w-16 h-16 rounded-full mb-3">
          <Icon size={30} />

          {/* ✅ conditional number */}
          {step && (
            <div className="absolute bg-green-500 text-[12px] w-6 h-6 rounded-full top-0 inset-s-0 flex items-center justify-center">
              {step}
            </div>
          )}
        </div>

        <h5 className="font-semibold text-green-900 text-xl">{title}</h5>

        <p className="text-gray-500 text-center">{description}</p>
      </div>
    </Card>
  );
};

export default InfoCard;
