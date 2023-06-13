import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import keyboardUrl from "@/assets/images/keyboard.png";
import * as BurritoButton from "@/components/burrito-ui/Button";
import Button from "@/components/local/Button";
import Divider from "@/components/local/Divider";
import Footer from "@/components/local/Footer";
import { IconArrowBack, IconX } from "@tabler/icons-react";

const Demo: React.FC = () => {
  // Edit this to change the metadata of the page
  const metaData = {
    title: 'Keyboard Shortcut Panel',
    date: '2023/06/13',
  };
  const [isShowPanel, setShowPanel] = useState(false);

  return (
    <>
      <Head>
        <title>{metaData.title} - Taichi Design Demo</title>
      </Head>
      <div className="flex flex-col">
        <div className="flex flex-col lg:-ml-44 lg:flex-row lg:gap-20">
          <Link
            className="group mb-10 -mt-16 flex w-24 items-center gap-1 text-[var(--label-base)] transition duration-300 ease-out hover:text-[var(--label-title)] lg:mb-4 lg:mt-0"
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
            {isShowPanel && (
              <motion.div
              
                // MARK: transition animation for the panel
                initial={{ opacity: 0, x: -320 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -320, transition: { duration: 0.15, ease: "easeIn" } }}
                transition={{ duration: 0.2, ease: [0.45, 1, 0.68, 1] }}
                // MARK: transition animation for the panel

                className="absolute flex flex-col gap-6 p-4 left-0 top-0 bottom-0 w-80 bg-zinc-800 shadow-taipower-2xl overflow-hidden">
                <div className="flex justify-between items-center">
                  <div className="text-base font-semibold leading-tight text-white">
                    {"Shortcuts"}
                  </div>
                  <BurritoButton.default
                    className="flex w-8 h-8 text-white justify-center items-center"
                    onClick={() => {
                      setShowPanel(false);
                    }}
                    size="lg"
                    type="icon"
                  >
                    <IconX />
                  </BurritoButton.default>
                </div>
                <Image
                  src={keyboardUrl}
                  width={288}
                  height={940}
                  alt="Keyboard"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-col items-start justify-center">
            <Button
              isIcon={false}
              text={isShowPanel ? 'Hide Panel' : 'Show Panel'}
              onClick={() => {
                setShowPanel(!isShowPanel);
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
