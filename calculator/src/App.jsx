import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let calculation;
    switch (operation) {
      case "add":
        calculation = n1 + n2;
        break;
      case "subtract":
        calculation = n1 - n2;
        break;
      case "multiply":
        calculation = n1 * n2;
        break;
      case "divide":
        calculation = n2 !== 0 ? n1 / n2 : "Error: Division by zero";
        break;
      default:
        return;
    }
    setResult(calculation);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>React Calculator</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => calculate("add")}>+</button>
        <button
          onClick={() => calculate("subtract")}
          style={{ marginLeft: "5px" }}
        >
          -
        </button>
        <button
          onClick={() => calculate("multiply")}
          style={{ marginLeft: "5px" }}
        >
          *
        </button>
        <button
          onClick={() => calculate("divide")}
          style={{ marginLeft: "5px" }}
        >
          /
        </button>
      </div>

      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#2c2c2cff",
        }}
      >
        <strong>Result:</strong>{" "}
        {result !== null ? result : "Enter numbers and pick an operation"}
      </div>
    </div>
  );
};

export default Calculator;
