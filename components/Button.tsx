import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isIcon?: boolean;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  isIcon = true,
  text = null,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(
        `
          group flex h-8 select-none items-center justify-center gap-2 rounded-lg text-xs
          ${isIcon ? (text === null ? 'px-[6px]' : 'pl-2 pr-3') : 'px-2'}
          disabled:border-[var(--bg-shade)]] border border-[var(--bg-border)]
          bg-[var(--bg-sub)] outline-none transition-all
          duration-300 ease-out
          hover:cursor-pointer hover:border-[var(--bg-border-strong)]
          hover:bg-[var(--bg-shade)] active:scale-95 disabled:cursor-default
          `,
        className
      )}
    >
      <div
        className={`h-4 w-4 text-[var(--label-base)] group-hover:text-[var(--label-title)] group-disabled:text-[var(--label-muted)] ${
          isIcon ? '' : 'hidden'
        }`}
      >
        {children}
      </div>
      {text && (
        <span
          className={`whitespace-nowrap text-[var(--label-base)] group-hover:text-[var(--label-title)] group-disabled:text-[var(--label-muted)]`}
        >
          {text}
        </span>
      )}
    </button>
  );
};

export default Button;
