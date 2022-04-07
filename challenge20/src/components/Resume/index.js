import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
  return (
    <section className="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div className="mt-5">
          <h2 className="top-title">Aaron Bean</h2>
          <ul>
            <li>
              Full-Stack Web Development
            </li>
          </ul>

          <p className="mt-5">
            <a href="https://www.linkedin.com/in/arbean1978">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedIn"
              />
            </a>
          </p>

          <a
            href="https://www.linkedin.com/in/arbean1978"
            className="link"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;