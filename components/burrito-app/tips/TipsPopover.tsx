import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import GotItIcon from "@/assets/icons/got-it.svg";
import Button from "@/components/burrito-ui/Button";
import * as Popover from "@radix-ui/react-popover";

import styles from "./style.module.css";

interface TipsPopoverProps {
  children: React.ReactNode;
  anchor: React.ReactNode;
  closeText?: string;
  closeIcon?: React.ReactNode;
  sticky?: 'always' | 'partial';
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  isOpen: boolean;
  onClose: () => void;
}

export const TipsPopover: React.FC<TipsPopoverProps> = ({
  children,
  anchor,
  closeText,
  closeIcon,
  side = 'top',
  sticky = 'partial',
  align = 'center',
  isOpen,
  onClose,
}: TipsPopoverProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger className="focus:outline-none">
        {anchor}
      </Popover.Trigger>
      <AnimatePresence>
        {isOpen && (
          <Popover.Portal forceMount>
            <Popover.Content
              side={side}
              sideOffset={8}
              sticky={sticky}
              align={align}
              arrowPadding={12}
              onOpenAutoFocus={(e) => {
                e.preventDefault();
              }}
              onInteractOutside={(e) => {
                e.preventDefault();
              }}
              onPointerDownOutside={(e) => {
                e.preventDefault();
              }}
              onEscapeKeyDown={(e) => {
                e.preventDefault();
              }}
              className="relative z-10"
            >
              <motion.div
                className={clsx(
                  styles.TipsContainer,
                  'flex max-w-sm flex-col gap-6 px-3 pt-6 pb-3'
                )}
                initial={{
                  opacity: 0,
                  x: side === 'left' ? -12 : side === 'right' ? 12 : 0,
                  y: side === 'top' ? -12 : side === 'bottom' ? 12 : 0,
                }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{
                  opacity: 0,
                  x: side === 'left' ? -12 : side === 'right' ? 12 : 0,
                  y: side === 'top' ? -12 : side === 'bottom' ? 12 : 0,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <div className="flex w-fit px-2 text-sm font-normal leading-5 text-white">
                  {children}
                </div>
                <Button
                  type="tips"
                  className=""
                  size="sm"
                  block
                  onClick={onClose}
                  icon={closeIcon || <GotItIcon />}
                >
                  {closeText || 'Got it'}
                </Button>
                <Popover.Arrow className="fill-black" width={16} height={8} />
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
};

export default TipsPopover;
