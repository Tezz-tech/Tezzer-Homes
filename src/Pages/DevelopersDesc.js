import TopCardComponent from "./DevDesc-component/TopCardComponent";
import TopCardComponentInfo from "./DevDesc-component/topbrandcomponent-info";
import brandimage from "../IMG/BrandLog-dave.png"
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
        </div>
    )
}
export default DevelopersDesc;