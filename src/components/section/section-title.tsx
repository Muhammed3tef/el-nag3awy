interface Props {
  title: string;
  description: string;
}
const SectionTitle = ({ title, description }: Props) => {
  return (
    <div className="mb-8 text-center">
      <h3 className="font-bold text-3xl mb-4">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default SectionTitle;
