

import { MdOutlineLocationOn } from "react-icons/md";
const TopCardComponentInfo = () => {
    return (
        <div className="TopCardComponentInfo-container">
            <div className="TopCardComponentInfo-text">
                <p className="initiallocationtext"><span className="location-trait">Market Presence </span>In Mumbai, India</p>
                <div className='TopCardLocationInfo-location-div'>
                    <div className="TopCardLocationInfo-location">
                        <i><MdOutlineLocationOn /></i>
                        <p>Nerul</p>
                    </div>
                    <div className="TopCardLocationInfo-location">
                        <i><MdOutlineLocationOn /></i>
                        <p>Khargar</p>
                    </div>
                    <div className="TopCardLocationInfo-location">
                        <i><MdOutlineLocationOn /></i>
                        <p>Seawoods</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default TopCardComponentInfo;