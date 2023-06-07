import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import * as RadixTooltip from '@radix-ui/react-tooltip';

import Arrow from './Arrow';
import styles from './style.module.css';

interface TooltipProps {
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  content: string | React.ReactNode;
  className?: string;
  delayDuration?: number;
  offset?: number;
  isOpen: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  className,
  side = 'top',
  align = 'center',
  delayDuration = 700,
  offset = 8,
  isOpen,
}: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <AnimatePresence>
          {isOpen && (
            <RadixTooltip.Portal forceMount>
              <RadixTooltip.Content
                side={side}
                sideOffset={offset}
                align={align}
                arrowPadding={8}
                onPointerDownOutside={(e) => {
                  e.preventDefault();
                }}
                onEscapeKeyDown={(e) => {
                  e.preventDefault();
                }}
              >
                <motion.div
                  className={clsx(styles.TooltipContent, className)}
                  initial={{ opacity: 0, translateX: 8 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0, translateX: 8 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  {content}
                  <RadixTooltip.Arrow asChild width={16} height={9}>
                    <Arrow />
                  </RadixTooltip.Arrow>
                </motion.div>
              </RadixTooltip.Content>
            </RadixTooltip.Portal>
          )}
        </AnimatePresence>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
