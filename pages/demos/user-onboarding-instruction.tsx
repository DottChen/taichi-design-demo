import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import AimIcon from "@/assets/icons/aim.svg";
import DenoiserOnIcon from "@/assets/icons/denoiser-on.svg";
import SidebarHelpIcon from "@/assets/icons/help.svg";
import LeftMouseButton from "@/assets/icons/left-mouse-button.svg";
import MouseWheelIcon from "@/assets/icons/mouse-wheel.svg";
import RightMouseButton from "@/assets/icons/right-mouse-button.svg";
import TipsBanner from "@/components/burrito-app/tips/TipsBanner";
import TipsEmbed from "@/components/burrito-app/tips/TipsEmbed";
import TipsPopover from "@/components/burrito-app/tips/TipsPopover";
import Button from "@/components/local/Button";
import Divider from "@/components/local/Divider";
import Footer from "@/components/local/Footer";
import { IconArrowBack } from "@tabler/icons-react";

const Demo: React.FC = () => {
  // Edit this to change the metadata of the page
  const metaData = {
    title: 'User Onboarding Instruction',
    date: '2023/06/06',
  };

  const [isTipsEmbedOneVisible, setIsTipsEmbedOneVisible] = useState(true);
  const [isTipsEmbedTwoVisible, setIsTipsEmbedTwoVisible] = useState(true);
  const [isTipsEmbedThreeVisible, setIsTipsEmbedThreeVisible] = useState(true);
  const [isTipsEmbedFourVisible, setIsTipsEmbedFourVisible] = useState(true);
  const [isTipsEmbedFiveVisible, setIsTipsEmbedFiveVisible] = useState(true);

  const [isTipsPopoverOneVisible, setIsTipsPopoverOneVisible] = useState(false);
  const [isTipsPopoverTwoVisible, setIsTipsPopoverTwoVisible] = useState(false);
  const [isTipsPopoverThreeVisible, setIsTipsPopoverThreeVisible] =
    useState(false);
  const [isTipsPopoverFourVisible, setIsTipsPopoverFourVisible] =
    useState(false);

  const [isTipsBannerOneVisible, setIsTipsBannerOneVisible] = useState(false);

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
        <div className="mt-24 flex flex-col gap-4">
          <div className="text-base font-semibold text-[var(--label-title)]">
            {'TipsEmbed（插入型）'}
          </div>
          <section className="flex h-[1024px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[var(--bg-border)] bg-zinc-900">
            {/* Edit here to change content*/}
            <div className="flex h-full w-[320px] flex-col items-center justify-center gap-8 border-x border-dashed border-red-500 py-16">
              <AnimatePresence>
                {isTipsEmbedOneVisible && (
                  <TipsEmbed
                    onClose={() => {
                      setIsTipsEmbedOneVisible(false);
                    }}
                  >
                    <span>
                      <span>{'Drag a '}</span>
                      <span className="font-semibold text-lime-300">
                        {'material'}
                      </span>
                      <span>{' to an object to apply it'}</span>
                    </span>
                  </TipsEmbed>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {isTipsEmbedTwoVisible && (
                  <TipsEmbed
                    onClose={() => {
                      setIsTipsEmbedTwoVisible(false);
                    }}
                  >
                    <span>
                      <span>{'Click an '}</span>
                      <span className="font-semibold text-lime-300">
                        {'environment'}
                      </span>
                      <span>{' or drag into the viewport to apply it'}</span>
                    </span>
                  </TipsEmbed>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {isTipsEmbedThreeVisible && (
                  <TipsEmbed
                    onClose={() => {
                      setIsTipsEmbedThreeVisible(false);
                    }}
                  >
                    <span>
                      <span>{'Click a '}</span>
                      <span className="font-semibold text-lime-300">
                        {'model'}
                      </span>
                      <span>
                        {' or drag into the viewport to add it to the scene'}
                      </span>
                    </span>
                  </TipsEmbed>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {isTipsEmbedFourVisible && (
                  <TipsEmbed
                    onClose={() => {
                      setIsTipsEmbedFourVisible(false);
                    }}
                  >
                    <span>
                      <span>{'Click to add an '}</span>
                      <span className="font-semibold text-lime-300">
                        {'animation'}
                      </span>
                      <span>{' to selected '}</span>
                      <span className="font-semibold text-lime-300">
                        {'objects'}
                      </span>
                      <span>{' or '}</span>
                      <span className="font-semibold text-lime-300">
                        {'current camera'}
                      </span>
                    </span>
                  </TipsEmbed>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {isTipsEmbedFiveVisible && (
                  <TipsEmbed
                    onClose={() => {
                      setIsTipsEmbedFiveVisible(false);
                    }}
                  >
                    <span>
                      <span>{'Click to preview a '}</span>
                      <span className="font-semibold text-lime-300">
                        {'lighting preset'}
                      </span>
                    </span>
                  </TipsEmbed>
                )}
              </AnimatePresence>
              <Button
                isIcon={false}
                text="Reset"
                onClick={() => {
                  setIsTipsEmbedOneVisible(true);
                  setIsTipsEmbedTwoVisible(true);
                  setIsTipsEmbedThreeVisible(true);
                  setIsTipsEmbedFourVisible(true);
                  setIsTipsEmbedFiveVisible(true);
                }}
              />
            </div>
          </section>
        </div>
        <div className="mt-24 flex flex-col gap-4">
          <div className="text-base font-semibold text-[var(--label-title)]">
            {'TipsPopover（手动型 & 自动型）'}
          </div>
          <section className="flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[var(--bg-border)] bg-zinc-900 py-16">
            {/* Edit here to change content*/}
            <div className="flex w-[320px] flex-col gap-8">
              <div className="flex items-center justify-between">
                <TipsPopover
                  trigger={<DenoiserOnIcon />}
                  isOpen={isTipsPopoverOneVisible}
                  onClose={() => {
                    setIsTipsPopoverOneVisible(false);
                  }}
                >
                  <div className="flex flex-col items-start justify-center gap-2">
                    <span className="inline">
                      <span className="font-semibold text-lime-300">
                        {'Denoiser'}
                      </span>
                      <span>{' has been automaticlaly turned on'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span>{'Press'}</span>
                      <span className="inline-flex h-5 items-center">
                        <DenoiserOnIcon />
                      </span>
                      <span>{'to turn it off'}</span>
                    </span>
                  </div>
                </TipsPopover>
                <Button
                  isIcon={false}
                  text="Open Popover"
                  onClick={() => {
                    setIsTipsPopoverOneVisible(true);
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <TipsPopover
                  trigger={<SidebarHelpIcon />}
                  isOpen={isTipsPopoverTwoVisible}
                  onClose={() => {
                    setIsTipsPopoverTwoVisible(false);
                  }}
                >
                  <span className="inline-flex items-center gap-1">
                    <span>{'Press '}</span>
                    <span className="inline-flex h-5 items-center">
                      <SidebarHelpIcon />
                    </span>
                    <span>{'to get more help'}</span>
                  </span>
                </TipsPopover>
                <Button
                  isIcon={false}
                  text="Open Popover"
                  onClick={() => {
                    setIsTipsPopoverTwoVisible(true);
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <TipsPopover
                  trigger={<AimIcon />}
                  isOpen={isTipsPopoverThreeVisible}
                  onClose={() => {
                    setIsTipsPopoverThreeVisible(false);
                  }}
                >
                  <span className="inline-flex items-center gap-1">
                    <span>{'Press'}</span>
                    <span className="inline-flex h-5 items-center">
                      <AimIcon />
                    </span>
                    <span>{'to'}</span>
                    <span className="font-semibold text-lime-300">
                      {'Aim View'}
                    </span>
                    <span>{'at selected objects'}</span>
                  </span>
                </TipsPopover>
                <Button
                  isIcon={false}
                  text="Open Popover"
                  onClick={() => {
                    setIsTipsPopoverThreeVisible(true);
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <TipsPopover
                  trigger={
                    <div className="text-sm font-semibold text-sky-300">
                      {'Post-processing'}
                    </div>
                  }
                  isOpen={isTipsPopoverFourVisible}
                  onClose={() => {
                    setIsTipsPopoverFourVisible(false);
                  }}
                >
                  <span className="inline">
                    <span>{'You can adjust '}</span>
                    <span className="font-semibold text-lime-300">
                      {'post-processing effects'}
                    </span>
                    <span>{' of your renderings here'}</span>
                  </span>
                </TipsPopover>
                <Button
                  isIcon={false}
                  text="Open Popover"
                  onClick={() => {
                    setIsTipsPopoverFourVisible(true);
                  }}
                />
              </div>
            </div>
          </section>
        </div>
        <div className="mt-24 flex flex-col gap-4">
          <div className="text-base font-semibold text-[var(--label-title)]">
            {'TipsBanner（自动型）'}
          </div>
          <section className="flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[var(--bg-border)] bg-zinc-900 py-16">
            <TipsBanner
              isOpen={isTipsBannerOneVisible}
              onClose={() => {
                setIsTipsBannerOneVisible(false);
              }}
            >
              <div className="flex items-center gap-10">
                <div className="flex items-center justify-center gap-4">
                  <LeftMouseButton />
                  <div className="flex flex-col">
                    <div className="text-sm font-semibold text-lime-500">
                      {'Rotate'}
                    </div>
                    <div className="text-xs font-normal text-white">
                      {'Drag with left mouse button'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <MouseWheelIcon />
                  <div className="flex flex-col">
                    <div className="text-sm font-semibold text-lime-500">
                      {'Zoom'}
                    </div>
                    <div className="text-xs font-normal text-white">
                      {'Scroll up or down with mouse wheel'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <RightMouseButton />
                  <div className="flex flex-col">
                    <div className="text-sm font-semibold text-lime-500">
                      {'Pan'}
                    </div>
                    <div className="text-xs font-normal text-white">
                      {'Drag with middle or right mouse button'}
                    </div>
                  </div>
                </div>
              </div>
            </TipsBanner>
            <Button
              isIcon={false}
              text="Open Tips"
              onClick={() => {
                setIsTipsBannerOneVisible(true);
              }}
            />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Demo;
