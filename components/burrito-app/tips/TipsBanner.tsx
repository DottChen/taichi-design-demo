import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import GotItIcon from '@/assets/icons/got-it.svg';
import Button from '@/components/burrito-ui/Button';

import styles from './style.module.css';

interface TipsBannerProps {
  children: React.ReactNode;
  className?: string;
  closeText?: string;
  closeIcon?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const TipsBanner: React.FC<TipsBannerProps> = ({
  children,
  className,
  closeText,
  closeIcon,
  isOpen,
  onClose,
}: TipsBannerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-0 left-0 flex h-screen w-screen justify-center"
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
          <div
            className={clsx(
              styles.TipsContainer,
              className,
              'mt-14 flex h-fit w-fit gap-6 px-5 py-4'
            )}
          >
            <div className="flex w-fit px-2 text-sm font-normal leading-5 text-white">
              {children}
            </div>
            <Button
              type="tips"
              className=""
              onClick={onClose}
              icon={closeIcon || <GotItIcon />}
            >
              {closeText || 'Got it'}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TipsBanner;
