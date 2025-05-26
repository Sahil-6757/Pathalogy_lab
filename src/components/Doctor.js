import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
function Doctor() {
  const [Name, setName] = useState("");
  const [Degree, setDegree] = useState("");
  const [Doctor, setDoctor] = useState();

  const doctor = {
    name: Name,
    degree: Degree,
  };

  const handleClick = () => {
    try {
      if (!(Name && Degree)) {
        toast.error("Fill the form", {
          autoClose: 1000,
        });
      } else {
        axios.post("http://localhost:8000/api/doctor", doctor);
        toast.success("Saved successfully", {
          autoClose: 1000,
        });
        setName("");
        setDegree("");
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/doctor/${id}`);
    getData();
  };

  async function getData() {
    const response = await axios.get("http://localhost:8000/api/doctor");
    console.log(response.data);
    setDoctor(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center" style={{ color: "#ee8e5e" }}>
        Manage Doctors
      </h2>
      <hr />
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        className="form-control"
      />
      <input
        type="text"
        value={Degree}
        onChange={(e) => setDegree(e.target.value)}
        placeholder="Enter Degree"
        className="form-control my-2"
      />
      <input
        type="button"
        value="Save"
        className="btn btn-primary"
        onClick={handleClick}
      />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Degree</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Doctor ? (
            Doctor.map((value, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{value.name}</td>
                  <td>{value.degree}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(value._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Doctor;
