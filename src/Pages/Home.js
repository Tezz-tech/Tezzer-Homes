import { Link } from "react-router-dom";
import img1 from "../IMG/Rectangle 81.png";
import img2 from "../IMG/Rectangle 86.png";
import img3 from "../IMG/Rectangle 95.png";
import img4 from "../IMG/Group.png";
import img5 from "../IMG/Vector (1).png";
import { FiSearch } from "react-icons/fi";
import { BsHouseDoor } from "react-icons/bs";
import { MdEditCalendar } from "react-icons/md";
import { LiaFileContractSolid } from "react-icons/lia";
import { IoCubeOutline } from "react-icons/io5";
import { BiNews } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";

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
        <div className="card">
          <FiSearch className="four-icons"/>
          <h3>Explore</h3>
          <p>Search for a property of your choice</p>
        </div>
        <div className="card">
          <BsHouseDoor className="four-icons"/>
          <h3>Select A Property</h3>
          <p>Decide on which of our properties you want</p>
        </div>
        <div className="card">
          <MdEditCalendar className="four-icons"/>
          <h3>Book A Site</h3>
          <p>Set a day aside to inspect our properties</p>
        </div>
        <div className="card">
          <LiaFileContractSolid className="four-icons"/>
          <h3>Book Your Property</h3>
          <p>Get your desired property from us</p>
        </div>
      </div>
      <div className="precious-five">
        <div className="top">
          <h2>What We Do</h2>
        </div>
        <div className="bottom">
          <div className="one">
            <div className="circle">
              <IoCubeOutline className="icons"/>
            </div>
            <h4>3D Planning</h4>
            <p>We also specialize in 3d planning and modelling for your houses bringing your dreams to reality</p>
          </div>
          <div className="one">
            <div className="circle">
              <BiNews className="icons"/>
            </div>
            <h4>Web Platform</h4>
            <p>We also create responsive websites for companies and businesses</p>
          </div>
          <div className="one">
            <div className="circle">
              <HiSpeakerphone className="icons"/>
            </div>
            <h4>Marketing</h4>
            <p>We also market out companies and businesses to the general public, creating more awareness</p>
          </div>
        </div>
      </div>
      <div className="precious-six">
        <div className="left"></div>
        <div className="right">
          <img src={img5} alt="" />
          <h1>Tezzer Homes</h1>
          <input type="text" placeholder="Your Name" /><br />
          <input type="text" placeholder="Your Email Address" /><br />
          <button>Get In Touch With Us</button>
        </div>
      </div>
    </>
  );
}

export default Home;
