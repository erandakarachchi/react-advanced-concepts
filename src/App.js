import { useState } from "react";
import "./App.css";

function App() {
  const [res, setRes] = useState(0);
  const [str, setStr] = useState("");
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

  const joinString = async () => {
    try {
      const { default: _ } = await import("lodash");
      const str = _.join(["Hello", "World"], " ");
      setStr(str);
    } catch (error) {
      console.log("ERROR ", error);
    }
  };

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
      <button onClick={() => joinString()}>Join String</button>
      <h2>{str}</h2>
    </div>
  );
}

export default App;
