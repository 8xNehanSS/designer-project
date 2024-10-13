import HeroSection from "./components/hero-section/herosection";
import LabelContainer from "./components/label-container/labelcontainer";
import NavigationBar from "./components/navigation/navigationbar";
import Banner from "./components/banner/banner";
import "./Website.css";

//images
import labelImg1 from "./assets/images/image1.png";
import labelImg2 from "./assets/images/image2.png";
import labelImg3 from "./assets/images/image3.png";
import labelImg4 from "./assets/images/image4.png";
import IntroSection from "./components/intro-section/introsection";
import TilesSection from "./components/tiles-section/tilessection";

//text
const text1 = "The future of Web3 on Bitcoin";
const text2 = "Not ordinary app for not ordinary photos";
const text3 = "May the 4th be with you";
const text4 = "Forgotten Wikipedia articles";

function Website() {
  return (
    <div className="App">
      <div className="nav-wrapper">
        <NavigationBar />
      </div>
      <HeroSection />
      <div className="grid-container">
        <div className="grid-item">
          <LabelContainer image={labelImg1} text={text1} color="blue" />
        </div>
        <div className="grid-item">
          <LabelContainer image={labelImg2} text={text2} color="green" />
        </div>
        <div className="grid-item">
          <LabelContainer image={labelImg3} text={text3} color="grey" />
        </div>
        <div className="grid-item">
          <LabelContainer image={labelImg4} text={text4} color="orange" />
        </div>
      </div>
      <div>
        <IntroSection />
      </div>
      <div>
        <TilesSection />
      </div>
      <div>
        <Banner />
      </div>
    </div>
  );
}

export default Website;
