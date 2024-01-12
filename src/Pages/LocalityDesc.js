import Home from "../IMG/Home.jpeg"
import dlayout from "../IMG/layout-visualization-of-residential-area-70098-xxl.jpg"
import Carousel from "./Creator-components/Carousel"
export const LocalityDesc = () => {
    return (
        <>
        <div className="LocalityDesc-container">
            <div className="LocalityDesc-left-container">
                <div className="LocalityDesc-left-text">
                    <h1><span style={{ display: "block" }}>Nerul,</span> Navi Mumbai</h1>
                    <p>Nerul is a small town in the state of Maharashtra. It is located in the heart of the city.
                        It is a popular tourist destination for people who love to travel.
                        It is also a popular destination for tourists who want to visit the city.
                    </p>
                </div>
            </div>
            <div className="LocalityDesc-right-container">
                <img src={Home} alt="" />
            </div>
        </div>
        <div className="dlayoutsection">
            <img src={dlayout} alt="img" />
            <h1>3d View of Site</h1>
        </div>
        <div className="Ourproperties-container">
            <Carousel />
        </div>
        </>
    )
}