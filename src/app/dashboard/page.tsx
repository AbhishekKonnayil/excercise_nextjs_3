import React from "react";
import Image from "next/image";
import NatureImage from "../../../public/freenaturestock-2268-768x1152.jpg"

const Dashboard = () => {
  if (7 < 5) {
    throw new Error("Error in Dashboard please note");
  }
  return <div><Image src={NatureImage} alt={"Nature image"}/></div>;
};

export default Dashboard;
