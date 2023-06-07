import type * as RadixTooltip from '@radix-ui/react-tooltip';
import { forwardRef } from 'react';

const Arrow = forwardRef<
  React.ElementRef<typeof RadixTooltip.Arrow>,
  React.ComponentPropsWithoutRef<typeof RadixTooltip.Arrow>
>(({ width = 20, height = 20, ...props }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      ref={ref}
      {...props}
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      className="block"
    >
      <mask
        id="mask0_5_6"
        style={{ maskType: 'alpha' }}
        width="20"
        height="20"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M0 0H20V20H0z"></path>
      </mask>
      <g mask="url(#mask0_5_6)">
        <path className="fill-zinc-800" d="M20 0H0l10 20L20 0z"></path>
        <path
          className="stroke-zinc-700"
          vectorEffect="non-scaling-stroke"
          d="M10 18.882L.515-.088c.627-4.992 2.033-8.568 3.781-10.859 1.76-2.307 3.847-3.292 5.863-3.179 2.027.114 4.105 1.346 5.818 3.73 1.693 2.357 3.005 5.814 3.51 10.304L10 18.882z"
        ></path>
      </g>
    </svg>
  );
});

Arrow.displayName = 'Arrow';

export default Arrow;
