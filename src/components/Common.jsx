import React from "react";

function Common({ children }) {
  return (
    <div
      style={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
       paddingBottom:"30px"
      }}
    >
      {children}
    </div>
  );
}

export default Common;
