interface Props {
  className?: string;
  children: React.ReactNode;
}
const Card = ({ className, children }: Props) => {
  return (
    <div
      className={`card shadow-md rounded-2xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
