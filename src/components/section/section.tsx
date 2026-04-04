import SectionTitle from "./section-title";

interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ title, description, children, className }: SectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container">
        {title && description && <SectionTitle title={title} description={description} />}
        {children}
      </div>
    </section>
  );
};

export default Section;
