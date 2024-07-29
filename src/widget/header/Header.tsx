import React from 'react';

import { Outlinebell } from '@/../public/assets/components';
import SnapMomentLogo from '@/../public/assets/components/SnapMomentLogo';
import { LocaleSwitcher } from '@/features';

import s from './Header.module.scss';

type HeaderProps = {
  isAuthorized: boolean;
};
export const Header = (props: HeaderProps) => {
  const { isAuthorized } = props;

  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logoWrapper}>
          <SnapMomentLogo className={s.logo} />
        </div>
        <div className={s.itemsWrapper}>
          {isAuthorized && <Outlinebell className={s.bell} />}
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
};
