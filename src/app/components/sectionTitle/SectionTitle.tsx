import	"./SectionTitle.scss"

interface SectionTitle {
    text: string
}

export default function SectionTitle({ text }: SectionTitle) {
    return (
        <h3 className="section-title"> {text} </h3>
    )


}