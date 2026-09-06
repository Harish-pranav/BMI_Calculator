import { useState } from "react";

function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (weightValue > 0 && heightValue > 0) {
      const heightInMeters = heightValue / 100;
      const result = weightValue / (heightInMeters * heightInMeters);

      setBmi(result.toFixed(2));

      if (result < 18.5) {
        setCategory("Underweight");
      } else if (result < 25) {
        setCategory("Normal weight");
      } else if (result < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obesity");
      }
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <br />
      <br />

      <button onClick={calculateBMI}>
        Calculate BMI
      </button>

      {bmi && (
        <div>
          <h2>BMI: {bmi}</h2>
          <h3>Category: {category}</h3>
        </div>
      )}
    </div>
  );
}

export default Calculator;