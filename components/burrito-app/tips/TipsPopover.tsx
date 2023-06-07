import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import ChevronLeftIcon from "@/assets/icons/chevron-left.svg";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg";
import GotItIcon from "@/assets/icons/got-it.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Button from "@/components/burrito-ui/Button";
import * as Popover from "@radix-ui/react-popover";

import Arrow from "./Arrow";
import styles from "./style.module.css";

interface TipsPopoverProps {
  children: React.ReactNode;
  anchor: React.ReactNode;
  closeText?: string;
  closeIcon?: React.ReactNode;
  sticky?: 'always' | 'partial';
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  isStep?: boolean;
  currentStep?: number;
  totalSteps?: number;
  onBack?: () => void;
  onNext?: () => void;
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
  isStep = false,
  currentStep = 0,
  totalSteps = 0,
  onBack,
  onNext,
  isOpen,
  onClose,
}: TipsPopoverProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger className="focus:outline-none">{anchor}</Popover.Trigger>
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
                {isStep ? (
                  <div
                    className={`flex items-center justify-between gap-3 ${
                      currentStep === totalSteps && 'pl-2'
                    }`}
                  >
                    {currentStep !== totalSteps && (
                      <Button
                        type="link"
                        className=""
                        size="sm"
                        onClick={onClose}
                      >
                        {'End'}
                      </Button>
                    )}
                    <div className="flex items-center justify-end gap-3">
                      <div className="text-xs font-semibold text-white">
                        {currentStep}/{totalSteps}
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <button
                          disabled={currentStep === 1}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-black transition-colors duration-75 ease-out hover:bg-lime-400 active:bg-lime-500 disabled:opacity-40"
                          onClick={onBack}
                        >
                          <ChevronLeftIcon />
                        </button>
                        <button
                          disabled={currentStep === totalSteps}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-black transition-colors duration-75 ease-out hover:bg-lime-400 active:bg-lime-500 disabled:opacity-40"
                          onClick={onNext}
                        >
                          <ChevronRightIcon />
                        </button>
                      </div>
                    </div>
                    {currentStep === totalSteps && (
                      <Button
                        type="tips"
                        className=""
                        size="sm"
                        onClick={onClose}
                        icon={closeIcon || <SparkleIcon />}
                      >
                        {closeText || 'Well Done!'}
                      </Button>
                    )}
                  </div>
                ) : (
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
                )}
                <Popover.Arrow asChild width={16} height={9}>
                  <Arrow side={side} />
                </Popover.Arrow>
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
};

export default TipsPopover;
