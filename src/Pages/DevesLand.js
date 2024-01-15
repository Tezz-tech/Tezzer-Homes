import img1 from "../IMG/Rec 1.png";
import img2 from "../IMG/Rec 2.png";
import img3 from "../IMG/Rec 3.png";
import img4 from "../IMG/Rec 4.png";
import img5 from "../IMG/Sort_Icon.png";
import img6 from "../IMG/checkIcon.png";
import ibm from "../IMG/Check India’s biggest developers on board exclusive on Zeal.png";
import ibb from "../IMG/Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et..png";
import Group104 from "../IMG/Group 104.png";


function DevesLand() {
  return (
    <div >
      <div className="Sunny_bg">
        <div className="Sunny_bg_textContainer">
          <div className="Sunny_textAbove"><img src={ibm} alt="" /></div>
          <div className="Sunny_textBelow"><img src={ibb} alt="" /></div>
        </div>
      </div>

      <div className="Sunny_belowBg">
        <img src={Group104} alt="" />
      </div>

      <div className="Sunny_sortbyContainer">
        <div><img src={img5} alt="" /></div>
        <div className="Sunny_sortText"><p>Sort by</p> </div>
      </div>

      <div className="Sunny_lodhaContainer">
        <div className="Sunny_lodha">
          <div className="Sunny_lodhaImg">
            <img src={img1} alt="" />
          </div>
          <div className="Sunny_lodhaRight">
            <h5>Lodha Group</h5>
            <p>35+ years of experience</p>
            <div className="Sunny_projects">
              <h4>Completed Projects <span>19</span></h4>
              <h4>Ongoing Projects <span className="Sunny_span2">5</span></h4>
              <h4>Upcoming Projects <span className="Sunny_span3">2</span></h4>
            </div>

            <div className="Sunny_checkBtn">
              <div><h3>Check profile</h3></div>
              <div className="Sunny_checkBtn_img"><img src={img6} alt="" /></div>
            </div>
          </div>

        </div>
        <div className="Sunny_lodha">
          <div className="Sunny_lodhaImg Sunny_prestigeImg">
            <img src={img2} alt="" />
          </div>
          <div className="Sunny_lodhaRight">
            <h5>Prestige Group</h5>
            <p>35+ years of experience</p>
            <div className="Sunny_projects">
              <h4>Completed Projects <span>19</span></h4>
              <h4>Ongoing Projects <span className="Sunny_span2">5</span></h4>
              <h4>Upcoming Projects <span className="Sunny_span3">2</span></h4>
            </div>

            <div className="Sunny_checkBtn">
              <div><h3>Check profile</h3></div>
              <div className="Sunny_checkBtn_img"><img src={img6} alt="" /></div>
            </div>
          </div>
        </div>
      </div>


      <div className="Sunny_lodhaContainer">
        <div className="Sunny_lodha">
          <div className="Sunny_lodhaImg Sunny_brigadeImg">
            <img src={img3} alt="" />
          </div>
          <div className="Sunny_lodhaRight">
            <h5>Brigade Group</h5>
            <p>35+ years of experience</p>
            <div className="Sunny_projects">
              <h4>Completed Projects <span>19</span></h4>
              <h4>Ongoing Projects <span className="Sunny_span2">5</span></h4>
              <h4>Upcoming Projects <span className="Sunny_span3">2</span></h4>
            </div>

            <div className="Sunny_checkBtn">
              <div><h3>Check profile</h3></div>
              <div className="Sunny_checkBtn_img"><img src={img6} alt="" /></div>
            </div>
          </div>

        </div>
        <div className="Sunny_lodha">
          <div className="Sunny_lodhaImg Sunny_prestigeImg Sunny_sobhaImg">
            <img src={img4} alt="" />
          </div>
          <div className="Sunny_lodhaRight">
            <h5>Sobha Group</h5>
            <p>35+ years of experience</p>
            <div className="Sunny_projects">
              <h4>Completed Projects</h4>
              <h4>Ongoing Projects</h4>
              <h4>Upcoming Projects</h4>
            </div>

            <div className="Sunny_checkBtn">
              <div><h3>Check profile</h3></div>
              <div className="Sunny_checkBtn_img"><img src={img6} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DevesLand;
