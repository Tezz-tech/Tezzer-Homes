import ibm from "../IMG/Check India’s biggest developers on board exclusive on Zeal.png";
import ibb from "../IMG/Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et..png";
import img5 from "../IMG/Sort_Icon.png";
import Agent1 from "../IMG/Agent1.png";
import Agent2 from "../IMG/Agent2.png";
import Agent3 from "../IMG/Agent3.png";
import Agent4 from "../IMG/Agent4.png";
import Agent5 from "../IMG/Agent5.png";
import Agent6 from "../IMG/Agent6.png";


function ArgentArchive() {
    return (
        <div>
            <div className="Sunny_bg">
                <div className="Sunny_bg_textContainer">
                    <div className="Sunny_textAbove"><img src={ibm} alt="" /></div>
                    <div className="Sunny_textBelow"><img src={ibb} alt="" /></div>
                </div>
            </div>

            <div className="Sunny_sortbyContainer Sunny_upwardMove">
                <div><img src={img5} alt="" /></div>
                <div className="Sunny_sortText"><p>Sort by</p> </div>
            </div>

            <div className="Sunny_agentContainer">
                <div className="Sunny_agent1">
                    <div className="Sunny_agent1_Left">
                        <img src={ Agent1} alt="" />
                    </div>

                    <div className="Sunny_agent1_Right">
                        <div className="Sunny_agent1_Right_Text1Container">
                            <div><h4>Rahul Gami</h4></div>
                            <div className="Sunny_checkBox"><input type="checkbox" id="" /></div>
                        </div>

                        <div className="Sunny_Nerul"><p>Nerul, Navi Mumbai</p></div>
                        <div className="Sunny_Channel"><p>Channel Partner</p></div>

                        <div className="Sunny_agentBtn">
                            <button></button>
                        </div>
                    </div>
                </div>

                <div className="Sunny_agent1">
                    <div className="Sunny_agent1_Left">
                        <img src={ Agent2} alt="" />
                    </div>

                    <div className="Sunny_agent1_Right">

                    </div>
                </div>
            </div>
        </div>
    )
};

export default ArgentArchive;