import React from 'react';
import img1 from '../IMG/pexels-pixabay-259685.jpg';

function Projects() {
  return (
    <>
      <div className="project-one">
        <h2>
          Check your favorite properties selected <br /> only for you by
          Tezzer-Homes
        </h2>
      </div>

      <div className="project-two">
        <div className="card">
          <div className="left">
            <img src={img1} alt="" />
          </div>
          <div className="right">
            <h3>Lohdah Group</h3>
            <h1>Lodha Miracles</h1>
            <h4>Andheri East, Mumbai</h4>
            <h5>450K - 680K</h5>
            <p>Ready to move in</p>
            <button className="c-button c-button--gooey">
                View Property
              <div className="c-button__blobs">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              style={{ display: 'block', height: 0, width: 0 }}
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  ></feGaussianBlur>
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                  ></feColorMatrix>
                  <feBlend in="SourceGraphic" in2="goo"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;