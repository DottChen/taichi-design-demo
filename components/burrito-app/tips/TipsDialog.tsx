import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';
import GotItIcon from '@/assets/icons/got-it.svg';
import Button from '@/components/burrito-ui/Button';
import * as Dialog from '@radix-ui/react-dialog';

import styles from './style.module.css';

interface TipsDialogProps {
  children: React.ReactNode;
  className?: string;
  closeText?: string;
  closeIcon?: React.ReactNode;
  isStep?: boolean;
  currentStep?: number;
  totalSteps?: number;
  onBack?: () => void;
  onNext?: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const TipsDialog: React.FC<TipsDialogProps> = ({
  children,
  className,
  closeText,
  closeIcon,
  isStep = false,
  currentStep = 0,
  totalSteps = 0,
  onBack,
  onNext,
  isOpen,
  onClose,
}: TipsDialogProps) => {
  return (
    <Dialog.Root modal={false}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Content
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
              className="absolute left-[50%] top-14 z-10 flex w-full translate-x-[-50%] justify-center px-4"
            >
              <motion.div
                className={clsx(
                  styles.TipsContainer,
                  className,
                  'flex h-fit w-fit items-center justify-center gap-6 px-5 py-4'
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                // transition={{ type: 'spring', mass: 0.03, stiffness: 20, velocity: 4.8, damping: 0.9 }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
              >
                <div className="flex w-fit px-2 text-sm font-normal leading-5 text-white">
                  {children}
                </div>
                {isStep ? (
                  <div className="flex items-center justify-between gap-3">
                    <Button
                      type="link"
                      className=""
                      size="sm"
                      onClick={onClose}
                    >
                      {'End'}
                    </Button>
                    <div className="flex items-center justify-end gap-3">
                      <div className="text-xs font-semibold text-white">
                        {currentStep}/{totalSteps}
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <button
                          disabled={currentStep === 1}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-black transition-colors duration-75 ease-out hover:bg-lime-400 active:bg-lime-500 disabled:opacity-40 disabled:hover:bg-lime-300 disabled:active:bg-lime-300"
                          onClick={onBack}
                        >
                          <ChevronLeftIcon />
                        </button>
                        <button
                          disabled={currentStep === totalSteps}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-black transition-colors duration-75 ease-out hover:bg-lime-400 active:bg-lime-500 disabled:opacity-40 disabled:hover:bg-lime-300 disabled:active:bg-lime-300"
                          onClick={onNext}
                        >
                          <ChevronRightIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Button
                    type="tips"
                    className=""
                    size="sm"
                    onClick={onClose}
                    icon={closeIcon || <GotItIcon />}
                  >
                    {closeText || 'Got it'}
                  </Button>
                )}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default TipsDialog;
