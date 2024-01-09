import { Link } from "react-router-dom";
import img1 from "../IMG/Rectangle 81.png"
import img2 from "../IMG/Rectangle 86.png"
import img3 from "../IMG/Rectangle 95.png"
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
            <span class="top-key"></span>
            <span class="text">Search Properties</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
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
          <img src={img1} alt="" />
          <h3>Lodha Group</h3>
          <p>35+ years of experience</p>
          <span>270+ Project Done</span><br />
          <button>Check Profile</button>
        </div>
      </div>
    </>
  );
}
export default Home;
