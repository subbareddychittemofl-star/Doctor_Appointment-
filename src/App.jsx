import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Remaining.jsx/Landing_page";
import Navbar from "./Remaining.jsx/Navbar";
import Login from "./Remaining.jsx/Login";
import Doctors from "./Doctors/Doctorpage";
import Patients from "./assets/Patients/Patients";
import MyBookings from "./assets/Patients/Mybookings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage></Landingpage>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/doctor" element={<Doctors></Doctors>}></Route>
          <Route path="/patient" element={<Patients></Patients>}></Route>
          <Route path="mybookings" element={<MyBookings></MyBookings>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
