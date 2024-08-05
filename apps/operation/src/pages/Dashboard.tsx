import React, { useState } from "react";
import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from "@blueprintjs/core";
import SearchBar from "../components/SearchBar";
import DataTable from "../components/DataTable";
import StatusCard from "../components/StatusCard";
import CommonPagination from "../components/SharePagination";

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100; // 예시

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    console.log(`페이지 ${page} (페이지 크기: ${pageSize})`);
  };

  return (
    <div className="dashboard" style={{ padding: "20px" }}>
      <Navbar>
        <NavbarGroup>
          <NavbarHeading>작업 지시문</NavbarHeading>
          <NavbarDivider />
          <SearchBar />
        </NavbarGroup>
      </Navbar>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <DataTable />
        <div 
          className="status-summary" 
          style={{ 
            marginLeft: "20px", 
            display: "flex", 
            flexDirection: "column", 
            textAlign: "center",
            width: "300px" // 원하는 너비 설정 (예시로 300px 지정)
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            <div style={{ width: "48%" }}>
              <StatusCard title="작업 예정" value="30" subtext="+18.7%" color="#D1FAE5" />
            </div>
            <div style={{ width: "48%" }}>
              <StatusCard title="작업 완료" value="7" subtext="-18.7%" color="#FECACA" />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <StatusCard title="현재 작업중" value="54" subtext="+18.7%" color="#BFDBFE"/>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>

        <CommonPagination
          current={currentPage}
          total={totalItems}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Dashboard;
