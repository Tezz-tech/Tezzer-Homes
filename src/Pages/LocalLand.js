import local1 from "../IMG/Local1.png";
import local2 from "../IMG/Local2.png";
import local3 from "../IMG/Local3.png";
import local4 from "../IMG/Local4.png";


function LocalLand() {
    return (
        <div className="Sunny_Container">
            <div className="Sunny_localBg_Img">
                <div className="Sunny_localUp_Text">
                    <div><h5>Best Deals Guaranteed on your</h5></div>
                    <div><h5>favourite localities by Zeal</h5></div>
                </div>

                <div className="Sunny_localDown_Text">
                    <div><p>Lorem ipsum dolor sit amet, consectetur adipisc elit,</p></div>
                    <div><p>sed do eiusmod tempor incididunt ut labore et.</p></div>
                </div>
            </div>

            <div className="Sunny_localContainer">
                <div className="Sunny_searchBar Sunny_padRight">
                    <input type="search" placeholder="Search Localities" id="" />
                </div>

                <div className="Sunny_searchBtn_Container Sunny_padRight">
                    <button>🔍</button>
                </div>
            </div>

            <div className="Sunny_localLast">
                <div className="Sunny_last1">
                    <img src={local1} alt="" />
                    <div>
                        <h5>Bandra</h5>
                    </div>

                    <div>
                        <p>sea-facing, spacious</p>
                    </div>
                </div>

                <div className="Sunny_last2">
                    <img src={local2} alt="" />
                    <div>
                        <h5>Navi Mumbai</h5>
                    </div>

                    <div>
                        <p>Wide, spacious</p>
                    </div>
                </div>
            </div>


            <div className="Sunny_localLast">
                <div className="Sunny_last1">
                    <img src={local3} alt="" />
                    <div>
                        <h5>South Bombay</h5>
                    </div>

                    <div>
                        <p>sea-facing, Luxurious</p>
                    </div>
                </div>

                <div className="Sunny_last2">
                    <img src={local4} alt="" />
                    <div>
                        <h5>Andheri West</h5>
                    </div>

                    <div>
                        <p>Luxurious, spacious</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocalLand;