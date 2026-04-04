interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceListCardProps {
  title: string;
  items: ServiceItem[];
}

const ServiceListCard = ({ title, items }: ServiceListCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
      <h3 className="text-2xl font-bold text-green-900  mb-6">
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="border-s-4 border-green-800 ps-4 ">
            <h5 className="font-semibold text-green-900 text-xl">{item.title}</h5>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceListCard;
