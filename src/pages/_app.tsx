import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/public/fonts/Montserrat/font.css';
import '@/public/fonts/Pretendard/font.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
