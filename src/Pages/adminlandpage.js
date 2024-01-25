// import Admin_Icon1 from "../IMG/Admin_Icon1.png";
// import Admin_Icon2 from "../IMG/Admin_Icon2.png";
// import Admin_Icon3 from "../IMG/Admin_Icon3.png";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
function AdminLanding() {
  return (
    <div className="Sunny_adminBg">
      <div className="Sunny_AdminLand_Container">
        <div>
          <h1>WELCOME TO TEZZER-HOMES !!!</h1>
          <h2>The Surest Plug For Your Maximum Comfort.</h2>

          <div className="Sunny_Aminunder_Btn">
            <div>
              <Link to="/AdminLogin" className="Sunny_Admin_Btn-link">
                <div className="Sunny_landLord">
                  <RiAdminLine className="Sunny_landLord_icon" />
                </div>
                <p>LANDLORD</p>
              </Link>
            </div>

            <div>
              <div className="Sunny_landLord">
                <MdOutlineRealEstateAgent className="Sunny_landLord_icon" />
              </div>
              <p>MERCHANT</p>
            </div>

            <div>
              <div className="Sunny_landLord">
                <MdOutlineSupportAgent className="Sunny_landLord_icon" />
              </div>
              <p>AGENTS</p>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLanding;
