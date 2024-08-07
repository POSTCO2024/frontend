import React from 'react';
import { Breadcrumb } from 'antd';
import type { BreadcrumbProps } from 'antd';

export const Header: React.FC = () => {
  const items: BreadcrumbProps['items'] = [
    {
      title: 'Home',
    },
    {
      title: <a href="">작업대상재 편성</a>,
    },
    {
      title: <a href="">공정 별 에러재 관리</a>,
    },
  ];

  return <Breadcrumb items={items} />;
};

export default Header;
