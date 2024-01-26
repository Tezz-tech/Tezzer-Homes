import { Link } from "react-router-dom";
import img1 from "../IMG/Rectangle 86.png";
function DevesLand() {
  return (
    <>
      <div className="deves-one">
        <h2>
          Check Nigeria’s biggest developers <br /> on board exclusive on
          Tezzer-Homes
        </h2>
      </div>

      <div className="project-two">
        <div className="card">
          <div className="left1">
            <img src={img1} alt="" />
          </div>
          <div className="right">
            <h1>Lodha Group</h1>
            <h4>35+ years of experience</h4>
            <h5>
              Completed Properties : <span>20</span>
            </h5>
            <Link to="/DevelopersDescription">
              <button className="c-button c-button--gooey">
                View Profile
                <div className="c-button__blobs">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              style={{ display: "block", height: 0, width: 0 }}
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
export default DevesLand;
