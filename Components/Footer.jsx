import style from "../style/Footer.css"
import {FaEnvelope, FaArrowRight, FaFacebook, FaInstagram, FaTwitter, FaGithub} from "react-icons/fa"
import Logo from "../images/logo.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col">
                    <img src={Logo} className="logo" alt="logo bk" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor corporis quos officia rerum facere.</p>
                </div>

                <div className="col">
                    <h3>Office</h3>
                    <p>Minha Casa</p>
                    <p>Ribeirão Preto - SP</p>
                    <p>Rua Jorge Luiz de Almeida, 380</p>
                    <p>Jardim Cristo Redentor</p>
                    <p className="email-id">iamcarllosjr@gmail.com</p>
                    <h4>+55 - 16993547171</h4>
                </div>

                <div className="col">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Newsletter</h3>
                    <form>
                        <i className="far"><FaEnvelope/></i>
                        <input type="email" placeholder="Enter your email" required/>
                        <button type="submit"><i className="fas"><FaArrowRight/></i></button>
                    </form>

                    <div className="social-icons">
                        <i className="icons"><FaFacebook/></i>
                        <i className="icons"><FaInstagram/></i>
                        <i className="icons"><FaTwitter/></i>
                        <i className="icons"><FaGithub/></i>
                    </div>

                </div>
            </div>
            <hr />
            <p className="copyright">Carlos Gomes de Melo Junior © 2023 - All Rights Reserved</p>

            

        </footer>
    )
}   

export default Footer;