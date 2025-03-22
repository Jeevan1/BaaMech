import { IconType } from 'react-icons';

const SectionHeading = ({
  title,
  className,
  icon: Icon,
}: {
  title: string;
  className?: string;
  icon?: IconType;
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-1 text-primary ${className}`}
    >
      {Icon && <Icon size={34} className="pt-1 text-primary" />}
      <h1
        className={`relative text-lg font-semibold text-primary uppercase md:text-xl lg:text-xl`}
      >
        <span className="m-0 p-0 leading-0">{title}</span>
        <span className="block h-0.5 w-[calc(100%-20%)] bg-primary"></span>
      </h1>
    </div>
  );
};

export default SectionHeading;
