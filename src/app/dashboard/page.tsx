import React from "react";
import Image from "next/image";

const Dashboard = () => {
  if (7 < 5) {
    throw new Error("Error in Dashboard please note");
  }
  return (
    <div>
      <Image
        src="https://m.media-amazon.com/images/I/71RWw4rR6LL.jpg"
        alt={"Nature image"}
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default Dashboard;
