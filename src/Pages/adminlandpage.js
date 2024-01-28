// import Admin_Icon1 from "../IMG/Admin_Icon1.png";
// import Admin_Icon2 from "../IMG/Admin_Icon2.png";
// import Admin_Icon3 from "../IMG/Admin_Icon3.png";
import { RiAdminLine } from "react-icons/ri";
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
            <Link to="/AdminLogin" className="Sunny_Admin_Btn-link">
              <div className="Sunny_landLord">
                <RiAdminLine className="Sunny_landLord_icon" />
              </div>
              <p>MERCHANT</p>
            </Link>
            <Link to="/AgentLogin" className="Sunny_Admin_Btn-link">
              <div>
                <div className="Sunny_landLord">
                  <MdOutlineSupportAgent className="Sunny_landLord_icon" />
                </div>
                <p>AGENTS</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLanding;
