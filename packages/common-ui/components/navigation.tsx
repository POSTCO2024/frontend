import React, { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, ConfigProvider } from 'antd';

interface NavigationProps {
  logo: string;
  human: string;
}

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: '작업 대상재 편성',
    children: [
      { key: '11', label: 'Option 1' },
      { key: '12', label: 'Option 2' },
      { key: '13', label: 'Option 3' },
      { key: '14', label: 'Option 4' },
    ],
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: '작업 스케줄 편성',
    children: [
      { key: '21', label: 'Option 1' },
      { key: '22', label: 'Option 2' },

      // 탭의 서브탭
      // {
      //   key: '24',
      //   label: 'Submenu 2',
      //   children: [
      //     { key: '241', label: 'Option 1' },
      //     { key: '242', label: 'Option 2' },
      //     { key: '243', label: 'Option 3' },
      //   ],
      // },
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: '기준 관리',
    children: [
      { key: '31', label: 'Option 1' },
      { key: '32', label: 'Option 2' },
      { key: '33', label: 'Option 3' },
      { key: '34', label: 'Option 4' },
    ],
  },
];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);

export const Navigation: React.FC<NavigationProps> = ({ logo, human }) => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1,
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <div
      style={{
        width: 256,
        height: '100%',
        backgroundColor: '#EFF4FF',
        position: 'relative',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={logo}
          style={{
            marginTop: '40px',
            width: '200px',
            height: '100px',
            objectFit: 'contain',
            paddingBottom: 20,
          }}
        />
      </div>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemBg: '#EFF4FF',
              itemColor: '#09090A',
              itemSelectedBg: '#E0E7FF',
              itemHoverColor: '#09090A',
              subMenuItemBg: '#EFF4FF',
              itemBorderRadius: 15,
              itemMarginInline: 5,
              padding: 70,
            },
          },
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['231']}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          style={{ width: 256 }}
          items={items}
        />
      </ConfigProvider>
      <div
        style={{
          position: 'absolute',
          top: 750,
          height: 100,
          width: '100%',
        }}
      >
        <div
          style={{
            width: '70%',
            margin: 'auto',
            borderRadius: 30,
            backgroundColor: '#ffffff',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: 75,
          }}
        >
          <div>
            <img src={human} />
          </div>
          <div>
            <p
              style={{
                fontSize: 14,
                color: '#2563EB',
                fontWeight: 'bold',
              }}
            >
              신찬규 사원
            </p>
            <p
              style={{
                fontSize: 14,
                color: '#2563EB',
                fontWeight: 'bold',
                marginTop: -18,
              }}
            >
              부서 : 관제팀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
