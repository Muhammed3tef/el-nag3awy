import Card from "../ui/card/card";
import { IoLocationOutline } from "react-icons/io5";

interface LocationCardProps {
  title: string;
  areas: string[];
}

const LocationCard = ({ title, areas }: LocationCardProps) => {
  return (
    <Card className="bg-white min-h-44">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#285A481A] rounded-md">
            <IoLocationOutline size={25} className="text-green-600" />
          </div>

          <h5 className="font-semibold text-2xl text-green-900">{title}</h5>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {areas.map((area, idx) => (
            <span
              key={idx}
              className="text-gray-500 bg-[#EFFDF8] rounded-2xl text-center py-1 text-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default LocationCard;
