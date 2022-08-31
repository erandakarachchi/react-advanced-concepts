import { useState } from "react";
import "./App.css";

function App() {
  const [res, setRes] = useState(0);
  // const add = async () => {
  //   try {
  //     const math = await import("./math");
  //     const answer = math.addTwoNumbers(20, 40);
  //     console.log("ANSWER : ", answer);
  //     setRes(answer);
  //   } catch (error) {
  //     console.log("Unable to import math module");
  //   }
  // };

  const add = () => {
    import("./math")
      .then((math) => {
        const answer = math.addTwoNumbers(200, 300);
        console.log("ANSWER : ", answer);
        setRes(answer);
      })
      .catch((error) => {
        console.log("Unable to import math module");
      });
  };

  return (
    <div className="App">
      <button onClick={() => add()}>Add Two Numbers</button>
      <h2>{res}</h2>
    </div>
  );
}

export default App;
