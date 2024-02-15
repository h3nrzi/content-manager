import 'bulma/css/bulma.min.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ActiveResource from '@/components/ActiveResource';

import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
const yekan = localFont({ src: '../public/yekan.ttf' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={yekan.className}>
      <Navbar />
      <ActiveResource />
      <Component {...pageProps} />
    </div>
  );
}
