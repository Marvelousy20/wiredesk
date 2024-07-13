"use client";
import { useState } from "react";

const Connections = () => {
  const [allSelected, setAllSelected] = useState(true);

  return (
    <div>
      <div>
        <h1>All applications</h1>
        <h1>Installed applications</h1>
      </div>
    </div>
  );
};

export default Connections;
