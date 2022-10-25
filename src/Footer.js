import facebook from "./icons/Facebook.png"
import twitter from "./icons/Twitter.png"
import instagram from "./icons/Instagram.png"
import github from "./icons/GitHub.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__inner">
                <img src={facebook} alt="" className="footer__logo" />
                <img src={twitter} alt="" className="footer__logo" />
                <img src={instagram} alt="" className="footer__logo" />
                <img src={github} alt="" className="footer__logo" />
            </div>
        </div>
    )
}