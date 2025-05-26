import React from "react";
import { useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Reportpatient() {
  const top100Films = ["cbc", "widal", "hemogram", "thyroid", "urine"];

  const location = useLocation();
  const data = location.state;

  const handleTest = (param) => {
    console.log(param);
  };
  return (
    <div className="container">
      <h3 className="text-center text-danger">Patient Report</h3>
      <hr />
      <div
        className="inputContainer my-2"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 18 }}>
          Patient Name: <strong>{data.name}</strong>{" "}
        </p>
        <p style={{ fontSize: 18 }}>
          Patient Age: <strong>{data.age}</strong>{" "}
        </p>
        <p style={{ fontSize: 18 }}>
          Patient Gender: <strong>{data.gender}</strong>{" "}
        </p>
        <p style={{ fontSize: 18 }}>
          Patient Date: <strong>{data.date}</strong>{" "}
        </p>
        <p style={{ fontSize: 18 }}>
          Patient Refer Doctor: <strong>{data.referDoctor}</strong>{" "}
        </p>
      </div>
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select Test" />}
      />
    </div>
  );
}

export default Reportpatient;
