import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

function InformationContainer() {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    {/* <p>(+238) 9208013</p> */}
                    <p>(+238) 266 12 30</p>
                </div>

            </div>

            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    {/* <p>esmaelcardoso@gmail.com</p> */}
                    <p>esmaelcardoso@dev.cv</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    {/* <p>Palmarejo, Praia, Cabo Verde</p> */}
                    <p>Praia, Cabo Verde</p>
                </div>
            </div>

        </section>
    )
}

export default InformationContainer