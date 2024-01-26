import img1 from "../IMG/mitama.jpg";
import img2 from "../IMG/asokoro.jpg";
import img3 from "../IMG/jabi.jpg";
import img4 from "../IMG/jahi.jpg";
import { Link } from "react-router-dom";

function Locality() {
  return (
    <>
      <div className="local-one">
        <h2>
          Best Deals Guranteed on your. <br /> favourite localities by
          Tezzer-Homes
        </h2>
      </div>

      <div className="project-two">
        <div className="card">
          <div className="left1">
            <img src={img1} alt="" />
          </div>
          <div className="right">
            <h1>Mitama, Abuja</h1>
            <h4>Clam Enviroment</h4>
            <h5>
              Properties In This Locality : <span>20</span>
            </h5>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">See Locality</span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="left1">
            <img src={img2} alt="" />
          </div>
          <div className="right">
            <h1>Asokoro, Abuja</h1>
            <h4>Beautify Views</h4>
            <h5>
              Properties In This Locality : <span>10</span>
            </h5>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">See Locality</span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="left1">
            <img src={img3} alt="" />
          </div>
          <div className="right">
            <h1>Jabi, Abuja</h1>
            <h4>Lake View</h4>
            <h5>
              Properties In This Locality : <span>30</span>
            </h5>
            <Link to="/LocalityDescription">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">See Locality</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="left1">
            <img src={img4} alt="" />
          </div>
          <div className="right">
            <h1>Jahi, Abuja</h1>
            <h4>Business Place</h4>
            <h5>
              Properties In This Locality : <span>25</span>
            </h5>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">See Locality</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Locality;
