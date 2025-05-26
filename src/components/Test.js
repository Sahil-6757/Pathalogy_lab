import React from "react";

function Test() {
  return (
    <div className="container">
      <h2 className="text-center" style={{ color: "#a5ee6e" }}>
        Manage Test
      </h2>
      <hr />
      <div className="inputContainer">
        <input
          type="text"
          className="form-control "
          placeholder="Enter Test name"
        />
      </div>
    </div>
  );
}

export default Test;
