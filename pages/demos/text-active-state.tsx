import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import { IconArrowBack } from '@tabler/icons-react';

interface ListItemProps extends React.AllHTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ text, className }) => {
  const [isActive, setActive] = useState(false);

  return (
    <button
      className="flex min-h-[40px] w-64 items-center justify-start rounded-lg bg-transparent px-4 text-sm outline-none transition duration-150 ease-out hover:bg-neutral-900 active:bg-black"
      onClick={() =>
        setTimeout(() => {
          setActive(!isActive);
        }, 300)
      }
    >
      <div
        className={twMerge(
          'transition duration-1000 ease-out',
          `${
            isActive ? 'font-semibold text-sky-500' : 'font-normal text-white'
          }`,
          className
        )}
      >
        {text}
      </div>
    </button>
  );
};

const Demo: React.FC = () => {
  // Edit this to change the metadata of the page
  const metaData = {
    title: 'Text Active State',
    date: '2023/04/28',
  };

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
          <div className="flex flex-col items-center justify-center">
            <div className="mb-2 flex w-full select-none text-start text-xs font-normal text-[var(--label-faint)]">
              切换时有字重变化（transition=1000ms, timeout=300ms）：
            </div>
            <ListItem text="Camera_group" />
            <div className="mb-2 mt-8 flex w-full select-none text-start text-xs font-normal text-[var(--label-faint)]">
              切换时无字重变化（transition=1000ms, timeout=300ms）：
            </div>
            <ListItem text="Camera_group" className="font-normal" />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Demo;
