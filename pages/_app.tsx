import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import RootLayout from '@/app/layout';

export default function App({ Component, pageProps }: AppProps): React.ReactElement<AppProps> {

  return (
    <UserProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </UserProvider>
  );
}
