import { error } from "console";
import React from "react";

const Dashboard = () => {
  if (4 < 5) {
    throw new Error("Error in Dashboard please note");
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
