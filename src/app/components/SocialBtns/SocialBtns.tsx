import Icon from "../icons/Icon";
import "./SocialBtns.scss"

export default function SocialBtns() {
    return (
        <div className="social">
            <a id="instagram" target="_blank" href="https://www.instagram.com/caiosilvamap/">
                <Icon src="/insta-icon.svg" alt="icon insta" width={20} height={20} />
            </a>
            <a id="linkedin" target="_blank" href="https://www.linkedin.com/in/caiosilvamap/">
                <Icon src="/linkedin-icon.svg" alt="icon LinkedIn" width={20} height={20} />
            </a>
            <a id="github" target="_blank" href="https://github.com/caiosilvamap">
                <Icon src="/github-icon.svg" alt="icon GitHub" width={20} height={20} />
            </a>
            <a id="whatsapp" target="_blank" href="https://wa.me/5524998331776">
                <Icon src="/whatsapp-icon.svg" alt="icon WhatsApp" width={20} height={20} />
            </a>
        </div>
    )
}