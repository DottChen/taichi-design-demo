import { twMerge } from "tailwind-merge";

interface DividerProps extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        `h-px w-full rounded-full bg-[var(--bg-border)]`,
        className
      )}
    />
  );
};

export default Divider;
