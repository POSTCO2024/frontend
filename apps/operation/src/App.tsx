import { useState } from 'react';
import { Header } from '@postcoil/ui';
import { Navigation } from '@postcoil/ui';
import './App.css';
import logo from './assets/logo.svg';
import human from './assets/human.svg';
import { Layout, theme } from 'antd';

const { Content } = Layout;

const App: React.FC = () => {
  // const [count, setCount] = useState(0)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <Navigation logo={logo} human={human} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          ></div>
        </Content>
      </Layout>
    </div>
  );
};
export default App;
