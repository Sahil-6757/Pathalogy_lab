import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { toast } from "react-toastify";
function Patient() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [referDoc, setReferDoc] = useState();
  const [getPatient, setgetPatient] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  async function getData() {
    await setgetPatient(JSON.parse(localStorage.getItem("patient") || "[]"));
  }

  let patient = {
    name: Name,
    age: Age,
    gender: Gender,
    date: date,
    referDoctor: value,
  };
  const handleClick = () => {
    if (!(Name, Age, date, referDoc, Gender)) {
      toast.error("Fill the form", {
        autoClose: 1000,
      });
    } else {
      toast.success("Saved Successfully", {
        autoClose: 1000,
      });
      getPatient.push(patient);
      localStorage.setItem("patient", JSON.stringify(getPatient));
      console.log(getPatient);
      getData();
      setName("");
      setAge("");
      setGender("");
      setDate("");
    }
  };

  const handleDelete = (index) => {
    getPatient.splice(index, 1);
    localStorage.setItem("patient", JSON.stringify(getPatient));
    getData();
  };

  async function getDoctor() {
    let resp = await axios.get("http://localhost:8000/api/doctor");
    let response = resp.data;
    setReferDoc(response.map((value) => value.name));
  }

  const handleReport = (value, index) => {
    console.log(index);
    // <Link to={{pathname:"/patient/patientReport", state:value}}></Link>
    navigate("/patient/patientReport", {
      state: value,
    });
  };

  useEffect(() => {
    getData();
    getDoctor();
  }, []);

  return (
    <div className="container my-4">
      <div
        className="textInput"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={Name}
          placeholder="Patient Name"
          className="form-control w-auto"
        />
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={Age}
          placeholder="Patent Age"
          className="form-control w-auto"
        />
        <select
          class="form-select"
          onChange={(e) => setGender(e.target.value)}
          style={{ width: "20rem" }}
          id="inputGroupSelect01"
        >
          <option defaultValue={"Gender"}>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div
        className="textInput my-2"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          className="form-control w-auto"
        />
        <Autocomplete
          disablePortal
          options={referDoc}
          sx={{ width: 300 }}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Refer Doctor" />
          )}
        />
      </div>
      <input
        type="button"
        value="Save patient"
        className="btn btn-primary"
        onClick={handleClick}
      />

      <hr />

      <table class="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              #
            </th>
            <th scope="col" className="text-center">
              Patient Name
            </th>
            <th scope="col" className="text-center">
              Patient Age
            </th>
            <th scope="col" className="text-center">
              Patient Gender
            </th>
            <th scope="col" className="text-center">
              Patient Date
            </th>
            <th scope="col" className="text-center">
              Patient Refer Doctor
            </th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {getPatient.map((value, index) => {
            return (
              <tr>
                <th className="text-center" scope="row">
                  {index + 1}
                </th>
                <td className="text-center">{value.name}</td>
                <td className="text-center">{value.age}</td>
                <td className="text-center">{value.gender}</td>
                <td className="text-center">{value.date}</td>
                <td className="text-center">{value.referDoctor}</td>
                <td>
                  <button
                    className="btn btn-secondary mx-2"
                    onClick={() => handleReport(value, index)}
                  >
                    Make report
                  </button>
                  <button
                    className="btn btn-danger my-2"
                    onClick={() => handleDelete(index)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Patient;
