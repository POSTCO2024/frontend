import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../pages/App";

const CustomRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      {/* 다른 라우트를 추가 */}
    </Routes>
  </Router>
);

export default CustomRoutes;
