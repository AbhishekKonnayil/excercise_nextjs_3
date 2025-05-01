"use client";

import Link from "next/link";
import { useState } from "react";

const Layout = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        className="border"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Link href="/analytics/revenue">Revenue</Link>
      <Link href="/analytics/stats">Stats</Link>
    </div>
  );
};

export default Layout;
