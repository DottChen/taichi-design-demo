import clsx from 'clsx';
import { motion } from 'framer-motion';

import GotItIcon from '@/assets/icons/got-it.svg';
import Button from '@/components/burrito-ui/Button';

import styles from './style.module.css';

interface TipsEmbedProps {
  children: React.ReactNode;
  className?: string;
  closeText?: string;
  closeIcon?: React.ReactNode;
  onClose: () => void;
}

export const TipsEmbed: React.FC<TipsEmbedProps> = ({
  children,
  className,
  closeText,
  closeIcon,
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
    </motion.div>
  );
};

export default TipsEmbed;
