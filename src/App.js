import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ClientView from "./components/ClientView";
import AdminView from "./components/AdminView";
import ButtonAppBar from "./components/AppBar";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route element={<ButtonAppBar />} /> */}
        <Route
          exact
          path="/"
          element={
            <>
              <ButtonAppBar />
              <Home />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <ButtonAppBar />
              <AdminView />
            </>
          }
        />
        <Route
          path="/client"
          element={
            <>
              <ButtonAppBar />
              <ClientView />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
