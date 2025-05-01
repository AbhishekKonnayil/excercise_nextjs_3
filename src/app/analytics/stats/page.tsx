import { redirect } from "next/navigation";
import React from "react";

const Stats = () => {
  redirect("/analytics/revenue");
  return <div>Stats</div>;
};

export default Stats;
