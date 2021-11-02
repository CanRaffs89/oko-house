import logo from '../img/logo.svg'
import fb_icon from '../img/fb_icon.svg'
import insta_icon from '../img/insta_icon.svg'
import twtr_icon from '../img/twtr_icon.svg'

const Footer = () => {
    return (
        <footer>
            <div id="footer-name">
                <a href="/"><img src={logo} alt="" /></a>
                <h3>öko haus</h3>
                <div className="footer-inner">
                    <p>123 Street Name</p>
                    <p>City Name</p>
                    <p>AA11 123</p>
                </div>
            </div>
            <div id="footer-social">
                <h3>Social Media</h3>
                <div id="footer-social-icons">
                    <a href="/"><img src={fb_icon} alt="" /></a>
                    <a href="/"><img src={insta_icon} alt="" /></a>
                    <a href="/"><img src={twtr_icon} alt="" /></a>
                </div>
            </div>
            <div id="footer-contact">
                <h3>Contact</h3>
                <div className="footer-inner">
                    <p>info@ökohaus.com</p>
                    <p>+44 20 1234 567</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
