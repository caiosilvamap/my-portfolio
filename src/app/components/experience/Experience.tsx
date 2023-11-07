import SectionTitle from "../sectionTitle/SectionTitle";
import "./Experience.scss"
import Skill from "../skills/Skill";


export default function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <p>1 year interning as Software Developer at Companhia Siderúrgica Nacional - CSN.</p>
            <div className="experience-time">
                <Skill image="/bootstrap-logo.png" width={50} height={40} measure="3" years="3 years" />
                <Skill image="/react-logo.png" width={50} height={43} measure="studying" years="Studying" study={true} />
                <Skill image="/ts-logo.png" width={50} height={50} measure="studying" years="Studying" study={true} />
                <Skill image="/java-logo.png" width={50} height={50} measure="1" years="1 year" />
                <Skill image="/csharp-logo.png" width={50} height={50} measure="1" years="1 year" />
                <Skill image="/net-logo.png" width={50} height={50} measure="1" years="1 year" />
                <Skill image="/sql-logo.png" width={50} height={30} measure="2" years="2 years" />
            </div>
        </div>
    )
}