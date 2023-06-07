import clsx from 'clsx';
import { forwardRef } from 'react';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'tips'
  | 'link'
  | 'icon';

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconSuffix?: React.ReactNode;
  type?: ButtonType;
  htmlType?: 'button' | 'submit' | 'reset';
  disabled?: boolean; // 样式和功能都会有差异
  size?: 'sm' | 'lg';
  block?: boolean;
  className?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      children,
      icon,
      iconSuffix,
      type = 'primary',
      htmlType,
      disabled = false,
      size = 'lg',
      block = false,
      className,
      ...props
    },
    forwardedRef
  ) => {
    let dimensionsClassNames = '';
    switch (type) {
      case 'link':
        dimensionsClassNames = 'px-3 h-8';
        break;
      case 'icon':
        dimensionsClassNames = 'p-0';
        break;
      default:
        dimensionsClassNames = size === 'sm' ? 'px-4 h-8' : 'px-6 h-10';
        break;
    }

    return (
      <button
        ref={forwardedRef}
        disabled={disabled}
        onClick={onClick && ((event) => onClick(event))}
        type={htmlType}
        className={clsx(
          'group relative inline-flex select-none items-center justify-center overflow-hidden whitespace-nowrap rounded-lg font-semibold outline-none transition-all duration-75 focus-visible:outline-none',
          dimensionsClassNames,
          {
            'w-full':
              block &&
              /* we don't allow link button to be full width  https://taichigraphics.slack.com/archives/C04TQBPRJUD/p1681727345958079?thread_ts=1681723557.358999&cid=C04TQBPRJUD */
              type !== 'link',
            'text-xs': size === 'sm',
            'text-sm': size === 'lg',
          },
          {
            'border-none bg-sky-500 text-white shadow-lg hover:bg-sky-600 active:bg-sky-700':
              type === 'primary' && !disabled,
            'border border-solid border-zinc-700 bg-zinc-800 text-white shadow-lg  hover:bg-zinc-900 active:bg-neutral-900':
              type === 'secondary' && !disabled,
            'border-none bg-red-500 text-white shadow-lg hover:bg-red-600 active:bg-red-700':
              type === 'warning' && !disabled,
            'bg-gradient-to-r from-lime-300 to-sky-300 text-black disabled:bg-zinc-900':
              type === 'tips' && !disabled,
            'border-none bg-transparent text-sky-500 hover:bg-neutral-900 active:bg-black':
              type === 'link' && !disabled,
            'border-none bg-transparent hover:bg-neutral-900 active:bg-black':
              type === 'icon' && !disabled,
            'border border-solid border-zinc-800': disabled && type !== 'icon',
            'border-none': disabled && type === 'icon',
            'cursor-not-allowed bg-zinc-900 text-zinc-700 shadow-lg': disabled,
            'cursor-pointer': !disabled,
          },
          className
        )}
        {...props}
        data-type={type}
      >
        {icon && <div className="z-10 mr-2 flex items-center">{icon}</div>}
        <span className="z-10">{children}</span>
        {iconSuffix && (
          <div className="z-10 ml-1 flex items-center">{iconSuffix}</div>
        )}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r opacity-0 transition-all duration-150 group-hover:from-lime-400 group-hover:to-sky-400 group-hover:opacity-100 group-disabled:bg-zinc-900" />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r opacity-0 transition-all duration-150 group-active:from-lime-500 group-active:to-sky-500 group-active:opacity-100 group-disabled:bg-zinc-900" />
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
