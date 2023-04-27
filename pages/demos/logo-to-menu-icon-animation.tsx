import Head from "next/head";
import Link from "next/link";

import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import { IconArrowBack } from "@tabler/icons-react";

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
        <section className="mt-24 flex w-full overflow-hidden rounded-2xl border border-[var(--bg-border)] bg-[var(--bg-sub)]">
          {/* Edit here to change content*/}
          <video
            className="h-full w-full rounded-lg object-cover"
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/585f2742-62fc-4dfc-b92c-08ef8ca22d0d/SpotifyPlayCard.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45/20230124/us-west-2/s3/aws4_request&X-Amz-Date=20230124T112138Z&X-Amz-Expires=86400&X-Amz-Signature=f937cf1230543bc8be5b31f6c60472d01f8ece0159a27717aba34cc24595d09a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22SpotifyPlayCard.mp4%22&x-id=GetObject"
            autoPlay
            loop
          />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Demo;
