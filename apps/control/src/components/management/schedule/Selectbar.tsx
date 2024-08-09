import React from 'react';
import { Select } from 'antd';
import styles from './Selectbar.module.scss';

interface PropsType {
  title: string;
  options: string[];
}
const Selectbar = ({ title, options }: PropsType) => {
  const select_options = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <div className={styles.selectbar}>
      <label>{title}</label>
      <Select
        placeholder="==선택=="
        style={{ width: 'fit-content' }}
        options={select_options}
      />
    </div>
  );
};

export default Selectbar;
