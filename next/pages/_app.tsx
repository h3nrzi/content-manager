import 'bulma/css/bulma.min.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import localFont from 'next/font/local';
const yekan = localFont({ src: '../public/yekan.ttf' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={yekan.className}>
      <Component {...pageProps} />
    </div>
  );
}
