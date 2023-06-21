import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import IconDenoiserOn from "@/assets/icons/denoiser-on.svg";
import IconSidebarHelp from "@/assets/icons/help.svg";
import IconShortcutsLeft from "@/assets/icons/shortcuts-left.svg";
import IconShortcutsRight from "@/assets/icons/shortcuts-right.svg";
import IconWireframeHelper from "@/assets/icons/wireframe-helper.svg";
import * as BurritoButton from "@/components/burrito-ui/Button";
import Button from "@/components/local/Button";
import Divider from "@/components/local/Divider";
import Footer from "@/components/local/Footer";
import { IconArrowBack } from "@tabler/icons-react";

interface Tip {
  id: number;
  content: React.ReactNode;
}

const Demo: React.FC = () => {
  // Edit this to change the metadata of the page
  const metaData = {
    title: 'Loading Tips',
    date: '2023/06/21',
  };
  const tips: Tip[] = [
    {
      id: 0,
      content: (
        <div className="flex items-center justify-center gap-2 text-white">
          <span className="inline-flex items-center gap-1">
            <span>{'Click the '}</span>
            <span className="inline-flex h-5 items-center">
              <IconDenoiserOn />
            </span>
            <span>{' button on the bottom to toggle '}</span>
            <span className="font-semibold text-lime-300">
              {'Denoiser'}
            </span>
          </span>
        </div>
      ),
    },
    {
      id: 1,
      content: (
        <div className="flex items-center justify-center gap-2 text-white">
          <span className="inline-flex items-center gap-1">
            <span>{'Click the '}</span>
            <span className="inline-flex h-5 items-center">
              <IconSidebarHelp />
            </span>
            <span>{' button on the bottom left corner for more '}</span>
            <span className="font-semibold text-lime-300">
              {'Help'}
            </span>
          </span>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="flex items-center justify-center gap-2 text-white">
          <span className="inline-flex items-center gap-1">
            <span>{'Click the '}</span>
            <span className="inline-flex h-5 items-center">
              <IconWireframeHelper />
            </span>
            <span>{' button on the bottom to toggle '}</span>
            <span className="font-semibold text-lime-300">
              {'Light and Camera Wireframe'}
            </span>
          </span>
        </div>
      )
    },
  ]
  const [isShowTips, setShowTips] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [animateDirection, setAnimateDirection] = useState<'left' | 'right'>('right');
  const previousTip = () => {
    if (animateDirection === 'left') {
      setCurrentTip((currentTip + 1) % tips.length);
      return;
    }
    setAnimateDirection('left');
  };
  const nextTip = () => {
    if (animateDirection === 'right') {
      setCurrentTip((currentTip + 1) % tips.length);
      return;
    }
    setAnimateDirection('right');
  };

  useEffect(() => {
    if (!isShowTips) {
      setCurrentTip(0);
      return;
    }
    const timer = setTimeout(() => {
      nextTip();
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentTip, isShowTips]);

  useEffect(() => {
    if (animateDirection === 'left') {
      setCurrentTip((currentTip - 1 + tips.length) % tips.length);
    } else {
      setCurrentTip((currentTip + 1) % tips.length);
    }
  }, [animateDirection]);

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
        <section className="mt-24 flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--bg-border)] bg-[#1C1C1F]">
          {/* Edit here to change content*/}
          <AnimatePresence>
            {isShowTips && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-zinc-900/95 px-[60px] py-10"
              >
                <div className="flex flex-col items-center justify-between gap-10">
                  <div className="text-base font-semibold leading-tight text-white">
                    {'Renderer is starting up'}
                  </div>
                  <div className="h-px w-[400px] bg-gradient-to-r from-[#0EA5E900] via-[#0EA5E9] to-[#0EA5E900]" />
                  <BurritoButton.default
                    onClick={() => {
                      setShowTips(false);
                    }}
                    size="lg"
                    type="link"
                  >
                    {'Hide Tips'}
                  </BurritoButton.default>
                </div>

                {/* Loading tips here! */}
                <div className="absolute bottom-10 left-[60px] right-[60px] flex justify-between gap-4 max-[800px]:hidden">
                  <BurritoButton.default
                    onClick={previousTip}
                    size="lg"
                    type="link"
                    className="gap-3 pl-0 text-white"
                    icon={<IconShortcutsLeft />}
                  >
                    {'Previous'}
                  </BurritoButton.default>
                  <div className="flex flex-1 items-center justify-center overflow-hidden">
                    {tips.map((tip) => {
                      return (
                        <AnimatePresence>
                          {tip.id === currentTip && (
                            <motion.div
                              className="absolute"
                              key={`tip-${tip.id}`}
                              initial={{ opacity: 0, translateX: animateDirection === "right" ? 32 : -32 }}
                              animate={{ opacity: 1, translateX: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.5 } }}
                              exit={{ opacity: 0, translateX: animateDirection === "right" ? -32 : 32 }}
                              transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                              {tip.content}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      );
                    })}
                  </div>
                  <BurritoButton.default
                    onClick={nextTip}
                    size="lg"
                    type="link"
                    className="gap-3 pr-0 text-white"
                    iconSuffix={<IconShortcutsRight />}
                  >
                    {'Next'}
                  </BurritoButton.default>
                </div>
                {/* Loading tips here! */}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-col items-start justify-center">
            <Button
              isIcon={false}
              text={isShowTips ? 'Hide Tips' : 'Show Tips'}
              onClick={() => {
                setShowTips(!isShowTips);
              }}
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Demo;
