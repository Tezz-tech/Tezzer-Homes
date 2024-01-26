import TopCardComponent from "./DevDesc-component/TopCardComponent";
import TopCardComponentInfo from "./DevDesc-component/topbrandcomponent-info";
import brandimage from "../IMG/BrandLog-dave.png";
import { FaPhone } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
function DevelopersDesc() {
    return (
        <div>
            <div className="RealBrand-container">
                <div className="realBrandSec-1">
                    <TopCardComponent />
                    <TopCardComponentInfo />
                </div>
                <div className="realBrandSec-2">
                    <div className="brand-image-container">
                        <p>MHRERAGHY2389</p>
                        <img src={brandimage} alt="img" />
                    </div>
                </div>
            </div>
            <div className="contactlocationsection">
                <div className="brandimglogo-container">
                    <img src={brandimage} alt="logo" className="brandlogoimg" />
                </div>
                <div className="contactbrandlocation">
                    <h1>Lodha Group</h1>    
                    <span>Lodha Excelus, NM Joshi Marg, Mahalaxmi, Mumbai - 400011</span>
                    <div className="brandcontacticons">
                        <i><FaPhone /></i>
                        <i><IoGlobeOutline /></i>
                    </div>
                    <div className="customername-container">
                        <input type="text" name="name" id="name" placeholder="Your Name" className="customername" />
                    </div>
                    <div className="customermail">
                        <input type="email" name="email" id="email" placeholder="Yourmailaddressplease@gmail.com" className="customername" />
                    </div>
                    <div class="contactusbutton">
                        <span class="text">Get In Touch</span>
                        <span class="arrow"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DevelopersDesc;