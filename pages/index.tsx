import Head from "next/head";

import DemoItem from "@/components/DemoItem";
import Divider from "@/components/Divider";

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
        </div>
      </main>
    </>
  );
}
