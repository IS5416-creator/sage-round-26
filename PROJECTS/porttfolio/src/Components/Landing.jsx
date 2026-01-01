import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="landing">
      <h1>Welcome</h1>
      <p>This is my personal portfolio built with React.</p>
      <Link to="/portfolio" className="btn">
        View Portfolio
      </Link>
    </section>
  );
}

export default Landing;
