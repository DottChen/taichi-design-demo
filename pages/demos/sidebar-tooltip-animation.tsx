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

  const [isOpenMaterial, setIsOpenMaterial] = useState(false);
  const [isOpenEnvironment, setIsOpenEnvironment] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [isOpenAnimation, setIsOpenAnimation] = useState(false);
  const [isOpenLightPreset, setIsOpenLightPreset] = useState(false);
  const [isOpenImport, setIsOpenImport] = useState(false);

  const handleStartAnimation = () => {
    setIsOpenMaterial(true);
    setTimeout(() => {
      setIsOpenEnvironment(true);
    }
    , 150);
    setTimeout(() => {
      setIsOpenModel(true);
    }
    , 300);
    setTimeout(() => {
      setIsOpenAnimation(true);
    }
    , 450);
    setTimeout(() => {
      setIsOpenLightPreset(true);
    }
    , 600);
    setTimeout(() => {
      setIsOpenImport(true);
    }
    , 750);

    setTimeout(() => {
      setIsOpenMaterial(false);
      setIsOpenEnvironment(false);
      setIsOpenModel(false);
      setIsOpenAnimation(false);
      setIsOpenLightPreset(false);
      setIsOpenImport(false);
    }
    , 3350);
  }


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
        <section className="mt-24 flex py-16 w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--bg-border)] bg-zinc-900">
          {/* Edit here to change content*/}
          <div className="relative group flex gap-5 flex-col items-center justify-center">
            <Button
              isIcon={false}
              text="Start Animation"
              className="mb-16"
              onClick={handleStartAnimation}
            />
            <Tooltip
              side="right"
              content="Material"
              isOpen={isOpenMaterial}
            >
              <Image
                src={materialImg}
                width={32}
                height={32}
                alt="Material"
                quality={100}
                />
            </Tooltip>
            <Tooltip
              side="right"
              content="Environment"
              isOpen={isOpenEnvironment}
            >
              <Image
                src={environmentImg}
                width={32}
                height={32}
                alt="Environment"
                quality={100}
                />
            </Tooltip>
            <Tooltip
              side="right"
              content="Model"
              isOpen={isOpenModel}
            >
              <Image
                src={modelImg}
                width={32}
                height={32}
                alt="Model"
                quality={100}
                />
            </Tooltip>
            <Tooltip
              side="right"
              content="Animation"
              isOpen={isOpenAnimation}
            >
              <Image
                src={animationImg}
                width={32}
                height={32}
                alt="Animation"
                quality={100}
                />
            </Tooltip>
            <Tooltip
              side="right"
              content="Light Preset"
              isOpen={isOpenLightPreset}
            >
              <Image
                src={lightPresetImg}
                width={32}
                height={32}
                alt="Light Preset"
                quality={100}
                />
            </Tooltip>
            <Tooltip
              side="right"
              content="Import"
              isOpen={isOpenImport}
            >
              <Image
                src={importImg}
                width={32}
                height={32}
                alt="Import"
                className="mt-7"
                quality={100}
              />
            </Tooltip>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Demo;
