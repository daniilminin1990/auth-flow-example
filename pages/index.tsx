import React from 'react';

import { Typography } from '@/shared/ui';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  return <Typography variant={'h1'}>Home page</Typography>;
}

export default Home;
