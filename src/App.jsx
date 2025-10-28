import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/navbar";
import Login from "./components/login";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Login />
    </>
  );
}
