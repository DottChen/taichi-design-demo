import clsx from "clsx";
import { noop } from "lodash";
import { useEffect, useRef, useState } from "react";

import * as RadixTooltip from "@radix-ui/react-tooltip";

import Arrow from "./Arrow";
import styles from "./style.module.css";

type TooltipProps = {
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  content?: string | React.ReactNode;
  className?: string;
  delayDuration?: number;
  offset?: number;
  closeOnClick?: boolean;
};

const Tooltip = ({
  children,
  side,
  align,
  content,
  className,
  delayDuration = 700,
  offset = 0,
  closeOnClick = true,
}: TooltipProps) => {
  const [container, setContainer] = useState<HTMLElement>(document.body);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const Dialogs = document.querySelectorAll('[role="dialog"]');
    const lastDialog = Dialogs[Dialogs.length - 1];
    if (lastDialog) {
      setContainer(lastDialog as HTMLElement);
    }
  }, []);

  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          {closeOnClick ? (
            children
          ) : (
            <div
              ref={triggerRef}
              className="inline-flex"
              onClick={(e) => e.preventDefault()}
              onKeyDown={noop}
              role="button"
              tabIndex={0}
            >
              {children}
            </div>
          )}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal container={container}>
          {content ? (
            <RadixTooltip.Content
              className={clsx(styles.TooltipContent, className)}
              sideOffset={offset}
              side={side}
              align={align}
              onPointerDownOutside={(e) => {
                if (
                  (e.target === triggerRef.current ||
                    triggerRef.current?.contains(e.target as HTMLElement)) &&
                  !closeOnClick
                ) {
                  e.preventDefault();
                }
              }}
            >
              {content}
              <RadixTooltip.Arrow asChild width={16} height={9}>
                <Arrow />
              </RadixTooltip.Arrow>
            </RadixTooltip.Content>
          ) : (
            ''
          )}
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
