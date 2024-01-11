import img1 from '../IMG/Group 196.png'
import img2 from '../IMG/Vector (2).png'
import img3 from '../IMG/Vector (3).png'
import img4 from '../IMG/Vector (4).png'
import img5 from '../IMG/Vector (5).png'
import img6 from '../IMG/Vector (6).png'
import img7 from '../IMG/Group 201.png'
import img8 from '../IMG/Group 228.png'
import img9 from '../IMG/Group 229.png'
function About() {
  return (
    <>
      <div className="about-one">
        <img src={img1} alt="" />
      </div>
      <div className="about-two">
        <h2>What Tezzer Homes Is About</h2>
        <p>Welcome to Tezzer Homes, where innovation and sustainability redefine modern living. Our smart homes boast cutting-edge technology, while eco-friendly designs reflect our commitment to a greener future. With a focus on aesthetic excellence, Tezzer Homes creates spaces that seamlessly blend luxury and functionality. Join us in shaping the future of real estate—one home at a time.</p>
        <div className="icons">
            <div className="main">
                <img src={img2} alt="" />
                <h3>Ethics</h3>
            </div>
            <div className="main">
                <img src={img3} alt="" />
                <h3>Innovation</h3>
            </div>
            <div className="main">
                <img src={img4} alt="" />
                <h3>Collaboration</h3>
            </div>
            <div className="main">
                <img src={img5} alt="" />
                <h3>Quality & Comfort</h3>
            </div>
            <div className="main">
                <img src={img6} alt="" />
                <h3>Sustainability</h3>
            </div>
        </div>
      </div>
      <div className="about-three">
        <div className="card">
            <div className="circle">
                <img src={img7} alt="" />
            </div>
            <h3>Vision</h3>
            <p>“To redefine real estate buying experience at the tip of your fingers by providing consumer focus web platform.”</p>
        </div>
        <div className="card">
            <div className="circle">
                <img src={img8} alt="" />
            </div>
            <h3>Mission</h3>
            <p>To collaborate with skilled professionals from multiple verticals of the Indian real estate sector providing home buyers a convenient & anchored experience.”</p>
        </div>
        <div className="card">
            <div className="circle">
                <img src={img9} alt="" />
            </div>
            <h3>Goal</h3>
            <p>“ Establish ourselves as a reliable medium between the demand side and the supply side of the real estate industry ” one-stop</p>
        </div>
      </div>
    </>
  );
}
export default About;