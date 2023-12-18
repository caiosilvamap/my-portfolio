import SectionTitle from "../sectionTitle/SectionTitle"
import "./Information.scss"
import Icon from "..//icons/Icon"


export default function Info() {
    return (
        <div className="infos">
            <SectionTitle text="Languages" />
            <div className="languages-info">
                <span>
                    <Icon id="flag-icon" src="/brazil-icon.svg" alt="icon brazil" width={40} height={40} /> PT-BR - Native Speaker
                </span>
                <span>
                    <Icon id="flag-icon" src="/usa-icon.svg" alt="icon usa" width={40} height={40} />EN - Basic
                </span>
                <span>
                    <Icon id="flag-icon" src="/spanish-icon.svg" alt="icon spanish" width={40} height={40} />ES - Basic
                </span>
            </div>
            <SectionTitle text="Education" />
            <div className="educational-info">
                <span>
                    <Icon id="flag-icon" src="/education-icon.svg" alt="icon education" width={40} height={40} /> Licenciate Computer Science - Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro (IFRJ)
                </span>
            </div>
        </div>
    )
}