import SectionTitle from "../sectionTitle/SectionTitle";
import "./Experience.scss"
import Skill from "../skills/Skill";


export default function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <p>1 year of internship as a Software Developer at Companhia Siderúrgica Nacional - CSN.</p>
            <div className="experience-time">
                <Skill image="/bootstrap-icon.svg" width={50} height={50} measure="3" years="3 years" />
                <Skill image="/css-icon.svg" width={50} height={50} measure="3" years="3 years" />
                <Skill image="/html-icon.svg" width={50} height={50} measure="3" years="3 years" />
                <Skill image="/sql-icon.svg" width={50} height={50} measure="2" years="2 years" />
                <Skill image="/java-icon.svg" width={50} height={50} measure="1" years="1 year" />
                <Skill image="/csharp-icon.svg" width={50} height={50} measure="1" years="1 year" />
                <Skill image="/aspnet-icon.svg" width={50} height={50} measure="1" years="1 year" />
                <Skill image="/react-icon.svg" width={50} height={50} measure="studying" years="Studying" study={true} />
                <Skill image="/ts-icon.svg" width={50} height={50} measure="studying" years="Studying" study={true} />
                <Skill image="/scss-icon.svg" width={50} height={50} measure="studying" years="Studying" study={true} />
            </div>
        </div>
    )
}