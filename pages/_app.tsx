import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import AppLayout from '@/components/layout/AppLayout';
import theme from '@/theme';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={theme}>
      <AppLayout className={inter.variable}>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}
