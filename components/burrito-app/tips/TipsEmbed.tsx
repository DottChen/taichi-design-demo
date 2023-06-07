import clsx from 'clsx';
import { motion } from 'framer-motion';

import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';
import GotItIcon from '@/assets/icons/got-it.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import Button from '@/components/burrito-ui/Button';

import styles from './style.module.css';

interface TipsEmbedProps {
  children: React.ReactNode;
  className?: string;
  closeText?: string;
  closeIcon?: React.ReactNode;
  isStep?: boolean;
  currentStep?: number;
  totalSteps?: number;
  onBack?: () => void;
  onNext?: () => void;
  onClose: () => void;
}

export const TipsEmbed: React.FC<TipsEmbedProps> = ({
  children,
  className,
  closeText,
  closeIcon,
  isStep = false,
  currentStep = 0,
  totalSteps = 0,
  onBack,
  onNext,
  onClose,
}: TipsEmbedProps) => {
  return (
    <motion.div
      className={clsx(
        styles.TipsContainer,
        className,
        'flex w-full flex-col gap-6 px-3 pt-6 pb-3'
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
      <div className="flex w-full px-2 text-sm font-normal leading-5 text-white">
        {children}
      </div>
      {isStep ? (
        <div className="flex items-center justify-between">
          {currentStep !== totalSteps && (
            <Button type="link" className="" size="sm" onClick={onClose}>
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
                className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-black disabled:opacity-40"
                onClick={onBack}
              >
                <ChevronLeftIcon />
              </button>
              <button
                disabled={currentStep === totalSteps}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-black disabled:opacity-40"
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
          {closeText || 'Got It'}
        </Button>
      )}
    </motion.div>
  );
};

export default TipsEmbed;
