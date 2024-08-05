import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";

const App: React.FC = () => (
  <div className="app" style={{ display: "flex" }}>
    <Sidebar />
    <Dashboard />
  </div>
);

export default App;
