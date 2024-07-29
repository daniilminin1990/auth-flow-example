import React from 'react';

import { Congratulations, useConfirmRegistration } from '@/pagesComponents';

export default function Page() {
  const {} = useConfirmRegistration();

  return <Congratulations />;
}
