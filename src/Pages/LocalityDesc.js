import Home from "../IMG/Home.jpeg";
import dlayout from "../IMG/layout-visualization-of-residential-area-70098-xxl.jpg";
// import ted from "../IMG/ted.jpeg";
// import penny from "../IMG/penny.jpeg";
// import hero from "../IMG/hero.jpeg";
// import fourstar from "../IMG/4stars-removebg-preview.png";
const LocalityDesc = () => {
  return (
    <>
      <div className="LocalityDesc-container">
        <div className="LocalityDesc-left-container">
          <div className="LocalityDesc-left-text">
            <h1>
              <span style={{ display: "block" }}>Nerul,</span> Navi Mumbai
            </h1>
            <p>
              Nerul is a small town in the state of Maharashtra. It is located
              in the heart of the city. It is a popular tourist destination for
              people who love to travel. It is also a popular destination for
              tourists who want to visit the city.
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
        <div className="featured-text">
          <h1>Featured Projects </h1>
        </div>
        <div className="carousel">{/* <Carousel /> */}</div>
      </div>
      <div className="localityMap-container">
        <h1>Locality Map</h1>
        <div className="localitymapimg">
          <iframe
            title="Locality Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31520.516382079917!2d7.469071397251721!3d9.057877124280846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba5808f8b2d%3A0xa7190191916f082b!2sCentral%20Business%20District%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1705051890952!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div>
        <p>
          This is a wonderful,easy to use and very effective, big ups to the
          team
        </p>
      </div>
    </>
  )
}

export default LocalityDesc;