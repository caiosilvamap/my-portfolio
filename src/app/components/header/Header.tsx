import "./Header.scss"
import Icon from '../icons/Icon'

export default function Header() {
    return (
        <div className="header">
            <div>
                <h1>
                    Hi, i'm Caio! <Icon id="hi-icon" src="/hi-icon.svg" alt="icon insta" width={50} height={50} />
                </h1>
                <h2>Full Stack Developer</h2>
            </div>
            <Icon id="profile-image" src="/me.jpg" alt="picture perfil" width={290} height={330} />
        </div>
    )
}
