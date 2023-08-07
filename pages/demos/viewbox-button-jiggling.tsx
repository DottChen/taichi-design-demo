import { motion, useAnimationControls } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import placeholderImg from "@/assets/images/placeholder.png";
import * as BurritoButton from "@/components/burrito-ui/Button";
import Divider from "@/components/local/Divider";
import Footer from "@/components/local/Footer";
import { IconArrowBack } from "@tabler/icons-react";

const Demo: React.FC = () => {
  // Edit this to change the metadata of the page
  const metaData = {
    title: 'ViewBox Button Jiggling',
    date: '2023/08/07',
  };
  const shakeControls = useAnimationControls();
  const startShake = () => {
    shakeControls.start({
      x: [0, 4, -4, 4, -4, 4, -4, 0],
      transition: { duration: 0.3, ease: 'easeOut' },
    });
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
        <section className="relative mt-24 flex h-[720px] flex-col items-center justify-center gap-8">
          {/* Edit here to change content*/}
          <div className="absolute top-0 left-0 text-base font-semibold text-[var(--label-title)]">
            {'Click anywhere in the ViewBox to trigger the animation'}
          </div>
          <div className="group absolute flex h-[640px] w-[768px] flex-col items-center justify-center gap-5 overflow-hidden rounded-xl border border-[var(--bg-border)] bg-zinc-700">
            <div className="relative flex h-full w-full items-center justify-center">
                <div
                  className="absolute z-20 justify-center items-center flex h-14 w-full bg-black/90"
                >
                  <div className="flex flex-col items-center justify-between gap-10">
                    <div className="text-base font-semibold leading-tight text-white">
                      {"You have been inactive for a while. Click 'Resume' to continue rendering"}
                    </div>
                    <motion.div animate={shakeControls}>
                      <BurritoButton.default
                        size="lg"
                        type="primary"
                      >
                        {'Resume'}
                      </BurritoButton.default>
                    </motion.div>
                  </div>
                </div>
              <div
                className="z-10 absolute h-full w-full bg-black/70"
                onClick={() => {
                  startShake();
                }}
              />
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
