import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import animationImg from "@/assets/images/animation.png";
import environmentImg from "@/assets/images/environment.png";
import importImg from "@/assets/images/import.png";
import lightPresetImg from "@/assets/images/light-preset.png";
import materialImg from "@/assets/images/material.png";
import modelImg from "@/assets/images/model.png";
import Tooltip from "@/components/burrito-app/sidebar-tooltip/Tooltip";
import Button from "@/components/local/Button";
import Divider from "@/components/local/Divider";
import Footer from "@/components/local/Footer";
import { IconArrowBack } from "@tabler/icons-react";

const Demo: React.FC = () => {
  // Edit this to change the metadata of the page
  const metaData = {
    title: 'Sidebar Tooltip Animation',
    date: '2023/06/07',
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleStartAnimation = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3100);
  };

  const tooltipList = [
    {
      content: 'Material',
      icon: (
        <Image
          src={materialImg}
          width={32}
          height={32}
          alt="Material"
          quality={100}
        />
      ),
    },
    {
      content: 'Environment',
      icon: (
        <Image
          src={environmentImg}
          width={32}
          height={32}
          alt="Environment"
          quality={100}
        />
      ),
    },
    {
      content: 'Model',
      icon: (
        <Image
          src={modelImg}
          width={32}
          height={32}
          alt="Model"
          quality={100}
        />
      ),
    },
    {
      content: 'Animation',
      icon: (
        <Image
          src={animationImg}
          width={32}
          height={32}
          alt="Animation"
          quality={100}
        />
      ),
    },
    {
      content: 'Light Preset',
      icon: (
        <Image
          src={lightPresetImg}
          width={32}
          height={32}
          alt="Light Preset"
          quality={100}
        />
      ),
    },
    {
      content: 'Import',
      icon: (
        <Image
          src={importImg}
          width={32}
          height={32}
          alt="Import"
          className="mt-7"
          quality={100}
        />
      ),
    },
  ];

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
        <section className="mt-24 flex w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--bg-border)] bg-zinc-900 py-16">
          {/* Edit here to change content*/}
          <div className="group relative flex flex-col items-center justify-center gap-5">
            <Button
              isIcon={false}
              text="Start Animation"
              className="mb-16"
              onClick={handleStartAnimation}
            />
            {tooltipList.map((tooltip, index) => {
              return (
                <Tooltip
                  side="right"
                  key={`tooltip-${tooltip.content}`}
                  isOpen={isOpen}
                  delay={index * 0.1}
                  content={tooltip.content}
                >
                  {tooltip.icon}
                </Tooltip>
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Demo;
