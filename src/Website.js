import HeroSection from "./components/hero-section/herosection";
import NavigationBar from "./components/navigation/navigationbar";
import "./Website.css";

function Website() {
  return (
    <div className="App">
      <div className="nav-wrapper">
        <NavigationBar />
      </div>
      <HeroSection />
    </div>
  );
}

export default Website;
