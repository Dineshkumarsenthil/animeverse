import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section">
      <div className="container page-content">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="btn">
          Go Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
