import Image from "next/image"

interface IconProps {
    id?: string
    src: string
    alt: string
    width: number
    height: number
}

export default function Icon(props: IconProps) {
    return (
        <Image
            id={props.id}
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            priority
        />
    )
}