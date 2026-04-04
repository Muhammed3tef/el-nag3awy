import { IconType } from "react-icons";

interface FeatureItem {
  title: string;
  description: string;
  icon: IconType;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}

const getCols = (cols: number) => {
  switch (cols) {
    case 3:
      return "md:grid-cols-3";
    case 4:
      return "md:grid-cols-2 lg:grid-cols-4";
    default:
      return "grid-cols-1 md:grid-cols-2";
  }
};

const FeatureGrid = ({
  title,
  subtitle,
  items,
  columns = 2,
}: FeatureGridProps) => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-900">{title}</h2>
          {subtitle && <p className="text-gray-500">{subtitle}</p>}
        </div>

        <div className={`grid gap-4 ${getCols(columns)}`}>
          {items.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="bg-gray-100 rounded-xl p-4 flex items-start gap-3"
              >
                <div className="bg-green-600 text-white w-8 h-8 rounded-md flex items-center justify-center">
                  <Icon size={16} />
                </div>

                <div>
                  <h5 className="font-semibold text-green-900">{item.title}</h5>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
