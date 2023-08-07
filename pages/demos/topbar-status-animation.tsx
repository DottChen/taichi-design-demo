import { AnimatePresence, easeInOut, easeOut, motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import IconFail from '@/assets/icons/fail.svg';
import IconSpinner from '@/assets/icons/spinner.svg';
import IconSuccess from '@/assets/icons/success.svg';
import placeholderImg from '@/assets/images/placeholder.png';
import * as BurritoButton from '@/components/burrito-ui/Button';
import Button from '@/components/local/Button';
import Divider from '@/components/local/Divider';
import Footer from '@/components/local/Footer';
import { IconArrowBack } from '@tabler/icons-react';

const Demo: React.FC = () => {
  // Edit this to change the metadata of the page
  const metaData = {
    title: 'TopBar Status Animation',
    date: '2023/07/27',
  };
  const [response, setResponse] = useState(true);
  const [loadingTime, setLoadingTime] = useState(0);
  const [isShowPanel, setShowPanel] = useState(false);
  const [isShowError, setIsShowError] = useState(false);
  const [isShowSuccess, setIsShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (response: boolean) => {
    setIsSubmitting(true);
    const res = await submitFunction(response);
    setIsSubmitting(false);
    if (res) {
      setIsShowSuccess(true);
      setTimeout(() => {
        setIsShowSuccess(false);
        setShowPanel(false);
      }, 1000);
    } else {
      setIsShowError(true);
      setTimeout(() => {
        setIsShowError(false);
        setShowPanel(false);
      }, 1000);
    }
  };

  const submitFunction = async (response: boolean): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, loadingTime);
    });
  };

  const handleCancel = () => {
    setShowPanel(false);
  };

  return (
    <>
      <Head>
        <title>{metaData.title} - Taichi Design Demo</title>
      </Head>
      <div className="flex flex-col">
        <div className="flex flex-col lg:-ml-44 lg:flex-row lg:gap-20">
          <Link
            className="group -mt-16 mb-10 flex w-24 items-center gap-1 text-[var(--label-base)] transition duration-300 ease-out hover:text-[var(--label-title)] lg:mb-4 lg:mt-0"
            href={'/'}
          >
            <IconArrowBack className="h-4 w-4" />
            <div className="text-base font-normal underline decoration-[var(--label-faint)] underline-offset-2 transition duration-300 ease-out group-hover:decoration-[var(--label-muted)]">
              Back
            </div>
          </Link>
          <div className="font-mono mb-4 text-base leading-normal text-[var(--label-faint)]">
            {metaData.date}
          </div>
        </div>
        <h1 className="mb-4 text-left text-xl font-semibold leading-tight text-[var(--label-title)]">
          {metaData.title}
        </h1>
        <Divider />
        <section className="relative mt-24 flex h-[640px] flex-col items-center justify-center gap-8">
          {/* Edit here to change content*/}
          <div className="group absolute flex h-[640px] w-[768px] flex-col items-center justify-center gap-5 overflow-hidden rounded-xl border border-[var(--bg-border)] bg-zinc-700">
            <div className="relative flex h-full w-full items-center justify-center">
              <AnimatePresence>
                {isShowPanel && (
                  <motion.div
                    initial={{ opacity: 0, y: -56 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -56 }}
                    transition={{ duration: 0.2, ease: easeInOut }}
                    className="absolute left-0 top-0 flex h-14 w-full items-center justify-center bg-black/90"
                  >
                    <AnimatePresence>
                      {!isSubmitting && !isShowSuccess && !isShowError && (
                        <motion.div
                          initial={{ opacity: 1, scale: 1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.15, ease: easeOut }}
                          className="flex items-center justify-center gap-5"
                        >
                          <div className="text-sm font-semibold text-white">
                            {'Are you sure to apply the light preset?'}
                          </div>
                          <div className="flex items-center gap-2">
                            <BurritoButton.default
                              onClick={handleCancel}
                              size="sm"
                              type="secondary"
                            >
                              {'Cancel'}
                            </BurritoButton.default>
                            <BurritoButton.default
                              onClick={() => {
                                handleSubmit(response);
                              }}
                              size="sm"
                              type="primary"
                            >
                              {'Apply'}
                            </BurritoButton.default>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isSubmitting && !isShowSuccess && !isShowError && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ duration: 0.15, ease: easeOut }}
                          className="absolute flex items-center justify-center"
                        >
                          <IconSpinner className="animate-spin" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isShowSuccess && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{
                            duration: 0.15,
                            ease: easeOut,
                            delay: 0.15,
                          }}
                          className="absolute flex items-center justify-center"
                        >
                          <IconSuccess className="text-emerald-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isShowError && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{
                            duration: 0.15,
                            ease: easeOut,
                            delay: 0.15,
                          }}
                          className="absolute flex items-center justify-center"
                        >
                          <IconFail className="text-red-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute z-10 flex flex-col items-center gap-8">
                <div className="flex items-center gap-8">
                  <Button
                    isIcon={false}
                    text={'Show Success Panel (Promise: 1s)'}
                    onClick={() => {
                      setLoadingTime(1000);
                      setResponse(true);
                      setShowPanel(true);
                    }}
                  />
                  <Button
                    isIcon={false}
                    text={'Show Fail Panel (Promise: 1s)'}
                    onClick={() => {
                      setLoadingTime(1000);
                      setResponse(false);
                      setShowPanel(true);
                    }}
                  />
                </div>
                <div className="flex items-center gap-8">
                  <Button
                    isIcon={false}
                    text={'Show Success Panel (Instant)'}
                    onClick={() => {
                      setLoadingTime(0);
                      setResponse(true);
                      setShowPanel(true);
                    }}
                  />
                  <Button
                    isIcon={false}
                    text={'Show Fail Panel (Instant)'}
                    onClick={() => {
                      setLoadingTime(0);
                      setResponse(false);
                      setShowPanel(true);
                    }}
                  />
                </div>
              </div>
              <div className="relative flex h-[448px] w-[760px] overflow-hidden">
                <Image
                  src={placeholderImg}
                  fill
                  sizes="100%"
                  className="pointer-events-none overflow-hidden object-cover"
                  alt="Placeholder Image"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Demo;
