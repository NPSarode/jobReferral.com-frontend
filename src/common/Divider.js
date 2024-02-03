import React from "react";

const Divider = ({width = "100%"}) => {
  return (
    <div
      style={{
        width: width,
        marginLeft: "2rem",
        marginRight: "2rem",
        height: "1px",
        border: "1px solid #3332",
        display:"flex",
        alignItems: "center",
      }}
    />
  );
};

export default Divider;
