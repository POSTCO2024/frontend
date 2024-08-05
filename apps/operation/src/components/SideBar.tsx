import React from "react";
import { Button, Icon } from "@blueprintjs/core";
import postcoLogo from '../assets/postco.png';


const Sidebar: React.FC = () => (
  <div className="sidebar" 
  style={{ 
    display: "flex",
    flexDirection:"column",
    width: "250px", 
    backgroundColor: "#F4F7FD", 
    height: "100vh", 
    padding: "20px",
    boxSizing: "border-box",
    }}>
    <div className="logo">
      <img src={postcoLogo} alt="Logo" style={{ width: "150px", marginBottom: "20px" }} />
    </div>
    <div className="menu" style={{flex:1}}>
      <Button icon="document" text=" 스케줄링" minimal={true} large={true}/>
      <br/>
      <Button icon="desktop" text=" 모니터링" minimal={true} large={true} />
      <br/>
      <Button icon="dashboard" text=" 대시보드" minimal={true} large={true} />
    </div>
    <div className="user-info" style={{ marginTop: "auto", padding: "20px 0" }}>
      <Icon icon="user" size={50} />
      <div>최효준 CEO</div>
      <div>포스코DX</div>
    </div>
  </div>
);

export default Sidebar;