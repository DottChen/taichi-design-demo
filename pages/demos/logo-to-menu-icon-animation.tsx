import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import IconMenu from '@/assets/icons/menu-icon-32x32.svg';
import taitopiaLogo from '@/assets/images/taitopia-logo.png';
import Divider from '@/components/local/Divider';
import Footer from '@/components/local/Footer';
import { IconArrowBack } from '@tabler/icons-react';

const Demo: React.FC = () => {
  // Edit this to change the metadata of the page
  const metaData = {
    title: 'Logo to Menu Icon Animation',
    date: '2023/04/27',
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
        <section className="mt-24 flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--bg-border)] bg-zinc-900">
          {/* Edit here to change content*/}
          <div className="group relative flex h-12 w-12 cursor-pointer items-center justify-center">
            <Image
              src={taitopiaLogo}
              width={48}
              height={48}
              alt="Taitopia Logo"
              className="absolute transform bg-zinc-900 opacity-100 duration-300 ease-in-out group-hover:scale-50 group-hover:opacity-0"
            />
            <div className="absolute flex scale-50 transform items-center justify-center opacity-0 duration-300 ease-[cubic-bezier(0.48,2.32,0.64,1)] group-hover:scale-100 group-hover:opacity-100">
              <IconMenu />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Demo;
