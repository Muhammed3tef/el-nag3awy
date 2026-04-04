import { IoCheckmarkCircle } from "react-icons/io5";

interface FeatureItem {
  title: string;
  description: string;
}
interface FeatureListCardProps {
  title: string;
  items: FeatureItem[];
  columns?: 1 | 2 | 3;
}

const getGridCols = (cols: number) => {
  switch (cols) {
    case 2:
      return "md:grid-cols-2";
    case 3:
      return "md:grid-cols-2 lg:grid-cols-3";
    default:
      return "grid-cols-1";
  }
};
const FeatureListCard = ({
  title,
  items,
  columns = 1,
}: FeatureListCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-green-900 mb-6">
        {title}
      </h2>

      <div className={`grid gap-6 ${getGridCols(columns)} max-w-4xl mx-auto`}>
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="mt-1 text-green-600">
              <IoCheckmarkCircle size={22} />
            </div>

            <div>
              <h5 className="font-semibold text-green-900">{item.title}</h5>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureListCard;
