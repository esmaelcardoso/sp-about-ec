import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/SocialNetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

function SocialNetworks() {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks