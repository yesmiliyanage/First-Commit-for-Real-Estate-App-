import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                    <ul>
                        <li className="footer-icon"><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li className="footer-icon"><a href="https://www.facebook.com/Meta"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li className="footer-icon"><a href="https://x.com/?lang=en"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                        <li className="footer-icon"><a href="https://web.whatsapp.com/"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                    </ul>
            </div>

            <div className="footer-copyright">
                &copy; 2024 ARIA REALTY. All rights reserved
            </div>
        </footer>
    )

}