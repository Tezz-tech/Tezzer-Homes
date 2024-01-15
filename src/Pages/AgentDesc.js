import TopCardComponent from "./DevDesc-component/TopCardComponent";
import TopCardComponentInfo from "./DevDesc-component/topbrandcomponent-info";
import AgentImage from "../IMG/Rectangle 46.png";
import { FaPhone } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
function AgentDesc() {
    return (
        <div>
            <div className="RealBrand-container">
                    <div className="Agent-image-container">
                        <img src={AgentImage} alt="img" />
                        <div className="AgentImgtxt">
                            <p>Rejul Imran</p>
                            <p className="Agentid">MHRERAGHY2389</p>
                        </div>
                    </div>
                <div className="realBrandSec-1">
                    <TopCardComponent />
                    <TopCardComponentInfo />
                </div>
            </div>
            <div className="contactlocationsection">
                <div className="brandimglogo-container">
                    <img src={AgentImage} alt="logo" className="brandlogoimg" />

                </div>
                <div className="contactbrandlocation">
                    <h1>Rejul Imran</h1>
                    <p className="Agent-id">MHRERAGHY2389</p>
                    <span>Lodha Excelus, NM Joshi Marg, Mahalaxmi, Mumbai - 400011</span>
                    <div className="brandcontacticons">
                        <i><FaPhone /> +9177865438984</i>
                        <i><IoGlobeOutline /> www.website.com</i>
                    </div>
                    <button className="creator-button">Contact Agent</button>
                </div>
            </div>
        </div>
    )
}
export default AgentDesc;