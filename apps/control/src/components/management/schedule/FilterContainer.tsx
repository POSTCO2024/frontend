import react from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Selectbar from './Selectbar';
import styles from './FilterContainer.module.scss';

interface PropsType {
  process: {
    title: string; // 공정명
    options: string[]; // ['PCM', 'CAL', 'EGL']
  };

  roll: {
    title: string;
    options: string[];
  };

  handleSearch: () => void; // function to handle search button click event
}

const FilterContainer = ({}) => {
  const process = {
    title: '공정명',
    options: ['PCM', 'CAL', 'EGL'],
  };

  const roll = {
    title: '설비_롤단위명',
    options: ['AVJK13D', 'DJIF23Q', 'VJOE559'],
  };

  const handleSearch = () => {};

  return (
    <div className={styles.filterContainer}>
      <Selectbar title={process.title} options={process.options} />
      <Selectbar title={roll.title} options={roll.options} />
      <Button
        onClick={handleSearch}
        icon={<SearchOutlined />}
        iconPosition="end"
      >
        조회
      </Button>
    </div>
  );
};

export default FilterContainer;
