// src/components/CommonPagination.tsx

import React from 'react';
import { Pagination } from 'antd';

interface CommonPaginationProps {
  current: number;
  total: number;
  pageSize?: number;
  onChange: (page: number, pageSize?: number) => void;
  showSizeChanger?: boolean;
  pageSizeOptions?: string[];
}

const CommonPagination: React.FC<CommonPaginationProps> = ({
  current,
  total,
  pageSize = 10,
  onChange,
  showSizeChanger = true,
  pageSizeOptions = ['10', '20', '30', '40'],
}) => {
  return (
    <Pagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      showSizeChanger={showSizeChanger}
      pageSizeOptions={pageSizeOptions}
    />
  );
};

export default CommonPagination;
