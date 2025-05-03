import React from "react";
import styles from "./page.module.css";
import { resolve } from "path";

const About = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(""), 4000));
  return <div className={`${styles.title}`}>WELCOME TO ABOUT PAGE</div>;
  
};

export default About;
