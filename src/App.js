import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Patient from "./components/Patient";
import { ToastContainer } from "react-toastify";
import Reportpatient from "./components/Reportpatient";
import Test from "./components/Test";
import Doctor from "./components/Doctor";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/patient" Component={Patient} />
        <Route path="/patient/patientReport/*" Component={Reportpatient} />
        <Route path="/test" Component={Test} />
        <Route path="/doctor" Component={Doctor} />
      </Routes>
    </>
  );
}

export default App;
