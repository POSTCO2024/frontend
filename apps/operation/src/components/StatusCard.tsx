import React from "react";
import { Card, Elevation } from "@blueprintjs/core";

interface StatusCardProps {
  title: string;
  value: number | string;
  subtext: string;
  color: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ title, value, subtext, color }) => (
  <Card elevation={Elevation.TWO} style={{ width: "150px", marginBottom: "15px", backgroundColor: color }}>
    <h4>{title}</h4>
    <h1>{value}</h1>
    <p>{subtext}</p>
  </Card>
);

export default StatusCard;
