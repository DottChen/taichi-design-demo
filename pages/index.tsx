import Head from 'next/head';

import DemoItem from '@/components/local/DemoItem';
import Divider from '@/components/local/Divider';

export default function Home() {
  const description = `
  Design demos made for Taichi's projects. Only for experimental purposes.
  `;

  return (
    <>
      <Head>
        <title>Taichi Design Demo</title>
        <meta
          name="description"
          content="Design demos made for Taichi's projects. Only for experimental purposes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full w-full flex-col gap-8">
        <div className="flex flex-col">
          <div className="shadow-highlight text-base font-medium leading-7 text-[var(--label-title)]">
            Taichi Design Demo
          </div>
          <div className="text-sm font-normal leading-6 text-[var(--label-faint)]">
            {description}
          </div>
        </div>
        <div>
          <Divider />
          <DemoItem
            title="Logo to Menu Icon Animation"
            link="logo-to-menu-icon-animation"
            date="2023/04/27"
          />
          <DemoItem
            title="Text Active State"
            link="text-active-state"
            date="2023/04/28"
          />
          <DemoItem
            title="User Onboarding Instruction"
            link="user-onboarding-instruction"
            date="2023/06/06"
          />
          <DemoItem
            title="Sidebar Tooltip Animation"
            link="sidebar-tooltip-animation"
            date="2023/06/07"
          />
          <DemoItem
            title="Keyboard Shortcut Panel"
            link="keyboard-shortcut-panel"
            date="2023/06/13"
          />
          <DemoItem
            title="Loading Tips"
            link="loading-tips"
            date="2023/06/21"
          />
        </div>
      </main>
    </>
  );
}
