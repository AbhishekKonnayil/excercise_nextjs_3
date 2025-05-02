import React from "react";
import { Montserrat } from "next/font/google";
const coralPixels = Montserrat({ subsets: ["latin"], weight: "500" });

const Home = () => {
  return <div><h1>Home</h1><p className={`${coralPixels.className}`}>This is home page</p></div>;
};

export default Home;
