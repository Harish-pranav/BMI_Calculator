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