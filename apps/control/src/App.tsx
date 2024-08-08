import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from '@postcoil/ui';
import './App.css';
import logo from './assets/logo.svg';
import human from './assets/human.svg';
import { ContentBoard } from '@postcoil/ui';
import Button from './Button';
import Button2 from './Button2';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <Navigation logo={logo} human={human} />
        <Routes>
          <Route path="/button1" element={<ContentBoard Board={Button} />} />
          <Route path="/button2" element={<ContentBoard Board={Button2} />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
