import Image from 'next/image'
import Link from "next/link";
const Card = ({href, name, imgUrl}) => {
    return (
        <Link href={href}>
            <a href="">
                <h2>{name}</h2>
                <Image src={imgUrl} height={160} width={260}/>
            </a>
        </Link>
    )
}

export default Card