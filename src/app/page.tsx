import SocialBtns from "./components/SocialBtns/SocialBtns";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Icon from "./components/icons/Icon";
import Info from "./components/information/Information";
import "./styles/Home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns/>
        <a className="btn-primary" target="_blank" href="mailto:caiosilvamap@gmail.com">
          contact me
          <Icon id="email-icon" src="/email-icon.svg" alt="icom E-mail" width={30} height={30} />
        </a>
      </div>
    </main>
  )
}
