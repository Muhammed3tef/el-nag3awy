import { IconType } from "react-icons";

interface ContentHighlightCardProps {
  title: string;
  icon: IconType;
  heading: string;
  paragraphs: string[];
  note?: string;
}

import Card from "../ui/card/card";

const ContentHighlightCard = ({
  title,
  icon: Icon,
  heading,
  paragraphs,
  note,
}: ContentHighlightCardProps) => {
  return (
    <Card className="py-12 px-8 bg-white">
      {/* Top Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">
        {title}
      </h2>

      {/* Icon + Heading */}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
          <Icon size={20} />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-green-900">
          {heading}
        </h3>
      </div>

      {/* Paragraphs */}
      <div className="text-gray-600 leading-relaxed space-y-2">
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Optional Note */}
      {note && (
        <div className="mt-6 bg-gray-200 w-3/4 md:w-1/2 mx-auto rounded-xl py-8 px-4 text-center text-gray-600 text-sm">
          {note}
        </div>
      )}
    </Card>
  );
};

export default ContentHighlightCard;
