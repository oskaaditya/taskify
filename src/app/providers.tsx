'use client';

import { NextUIProvider } from '@nextui-org/react';
import React, { FC } from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
