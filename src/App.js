import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import MobileMenu from "./components/navbar/mobile_menu/mobile_menu";
import Header from "./components/header/header";
import Map from "./components/map/map";
import Testmonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileNav: false
    };
  }
  setNavbar = open => {
    this.setState({ showMobileNav: open });
  };
  componentDidMount() {
    window.addEventListener("resize", this.hideMobileNavOnResize);
  }
  hideMobileNavOnResize = () => {
    this.setState({ showMobileNav: false });
  };
  closeNav=(hide)=>{
    this.setState({ showMobileNav: hide });
  }
  render() {
    return (
      <div>
        <Navbar openMobileNav={this.setNavbar} />
        {(() => {
          if (!this.state.showMobileNav) {
            return null;
          } else {
            return <MobileMenu closeNav={this.closeNav}/>;
          }
        })()}
        <Header />
        <Map />
        <Testmonial />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
