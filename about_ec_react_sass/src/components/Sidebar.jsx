import Avatar from "../img/esmael_cardoso_photo.jpg"

import "../styles/components/sidebar.sass";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Esmael Cardoso" />
      <p className="title">Full-Stack Developer & DBA</p>
      <SocialNetworks  />
      <InformationContainer />
      <a href="#" className="btn">Download CV</a>
    </aside>
  )
}

export default Sidebar