import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";

function App() {
  const HomeComponent = React.lazy(() => import("./HomeComponent"));
  const DashboardComponent = React.lazy(() => import("./DashboardComponent"));

  /**
   * Must have suspense wrapper, otherwise app will not work.
   * Can wrap multiple lazy loaded components in a single suspense element.
   * Can give a fallback to show a loader.
   * Can place error boundaries outside the wrapper to show errors when there is a failure.
   */

  return (
    <div className="App">
      <h2>App Component</h2>
      <Suspense fallback={<div>Loading....</div>}>
        <HomeComponent />
        <DashboardComponent />
      </Suspense>
    </div>
  );
}

export default App;
