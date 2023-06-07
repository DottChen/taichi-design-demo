import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import GotItIcon from "@/assets/icons/got-it.svg";
import Button from "@/components/burrito-ui/Button";
import * as Dialog from "@radix-ui/react-dialog";

import styles from "./style.module.css";

interface TipsDialogProps {
  children: React.ReactNode;
  className?: string;
  closeText?: string;
  closeIcon?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const TipsDialog: React.FC<TipsDialogProps> = ({
  children,
  className,
  closeText,
  closeIcon,
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
              className="absolute flex justify-center top-14 left-[50%] w-full z-10 translate-x-[-50%] px-4"
            >
              <motion.div
                className={clsx(
                  styles.TipsContainer,
                  className, "flex items-center justify-center h-fit w-fit gap-6 px-5 py-4")}
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
                  <Button
                    type="tips"
                    className=""
                    onClick={onClose}
                    icon={closeIcon || <GotItIcon />}
                  >
                    {closeText || 'Got it'}
                  </Button>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default TipsDialog;
