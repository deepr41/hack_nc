import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage";
import Header from "./components/Header";
import { useState } from "react";
import HomePage from "./components/homePage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
