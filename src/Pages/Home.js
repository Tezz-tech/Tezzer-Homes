import { Link } from "react-router-dom";
import img1 from "../IMG/Rectangle 81.png";
import img2 from "../IMG/Rectangle 86.png";
import img3 from "../IMG/Rectangle 95.png";
import img4 from "../IMG/Group.png";
import { FiSearch } from "react-icons/fi";

function Home() {
  return (
    <>
      <div className="precious-one">
        <div className="left">
          <h1>
            We Help You <br /> Building The Dreams & Bring More <br /> Than You
            Expect
          </h1>
          <Link className="fancy">
            <span className="top-key"></span>
            <span className="text">See Properties</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </Link>
        </div>
        <div className="right"></div>
      </div>
      <div className="precious-two">
        <div className="card">
          <img src={img1} alt="" />
          <h3>Lodha Group</h3>
          <p>35+ years of experience</p>
          <span>270+ Project Done</span><br />
          <button>Check Profile</button>
        </div>
        <div className="card">
          <img src={img2} alt="" />
          <h3>Lodha Group</h3>
          <p>35+ years of experience</p>
          <span>270+ Project Done</span><br />
          <button>Check Profile</button>
        </div>
        <div className="card">
          <img src={img3} alt="" />
          <h3>Lodha Group</h3>
          <p>35+ years of experience</p>
          <span>270+ Project Done</span><br />
          <button>Check Profile</button>
        </div>
        <div className="card">
          <img src={img4} alt="" />
          <h3>Lodha Group</h3>
          <p>35+ years of experience</p>
          <span>270+ Project Done</span><br />
          <button>Check Profile</button>
        </div>
      </div>
      <div className="precious-three">
        <h2>Property Selection Process</h2>
        <p>The property selection process involves several steps to ensure that you make an informed and <br /> wise decision when purchasing real estate.</p>
      </div>
      <div className="precious-four">
        <div className="e-card playing">
          <div className="image"></div>

          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="infotop">
            <FiSearch/>
            <br />  
            Explore
            <br />
            <div className="name">Look at property values, trends, and potential for future appreciation.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
