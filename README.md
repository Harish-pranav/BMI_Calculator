# Ex06 BMI Calculator
## Date:05/09/2026
### NAME : Harish Pranav
### REG NO : 212225040117

## AIM
To create a BMI calculator using React Router 

## ALGORITHM
### STEP 1 State Initialization
Manage the current page (Home or Calculator) using React Router.

### STEP 2 User Input
Accept weight and height inputs from the user.

### STEP 3 BMI Calculation
Calculate the BMI based on user input.

### STEP 4 Categorization
Classify the BMI result into categories (Underweight, Normal weight, Overweight, Obesity).

### STEP 5 Navigation
Navigate between pages using React Router.

## PROGRAM

App.jsx

```
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Calculator from "./calculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
Calculator.jsx
```
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
```
Home.jsx
```
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>BMI Calculator</h1>
      <p>Calculate your Body Mass Index.</p>

      <Link to="/calculator">
        <button>Go to Calculator</button>
      </Link>
    </div>
  );
}

export default Home;
```

## OUTPUT
<img width="982" height="490" alt="Screenshot 2026-09-06 205159" src="https://github.com/user-attachments/assets/59999a65-4a90-4b8c-9fa1-7d84e71c0c72" />
<img width="1002" height="506" alt="Screenshot 2026-09-06 205251" src="https://github.com/user-attachments/assets/36258738-d04d-498f-94de-f6f85644fedb" />

## RESULT
The program for creating BMI Calculator using React Router is executed successfully.
