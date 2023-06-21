import Head from 'next/head';
import React from 'react';

interface LayoutProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/portrait-rounded.png" />
      </Head>
      <div className="mx-auto flex w-full max-w-2xl flex-col px-6 py-40">
        {children}
      </div>
    </>
  );
};

export default Layout;
