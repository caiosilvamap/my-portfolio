import Image from "next/image";
import "./Skill.scss"
import { AnimationStudying } from "./AnimationStudying";

interface SkillProps {
    image: string
    width: number
    height: number
    years: string
    measure: string
    study?: boolean
}
export default function Skill(props: SkillProps) {
    return (
        <div className="experience-language">
            <Image
                src={props.image}
                alt="Skill logo"
                width={props.width}
                height={props.height}
                priority
            />
            <div className="experience-unit">
                <div className={`experience-measure measure-${props.measure}`}>
                    <span>
                        {props.years}
                    </span>
                    {props.study &&
                        <AnimationStudying />
                    }
                </div>
            </div>
        </div>
    )
}