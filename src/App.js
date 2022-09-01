import logo from "./logo.svg";
import React,{Suspense}from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const HomeComponent = React.lazy(() => import("./Home"));
  const AboutComponent = React.lazy(() => import("./About"));
  return (
    <div className="App">
      <h2>This is My React Application</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
