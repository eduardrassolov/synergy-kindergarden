import Image from "next/image"
import { IArticle } from "../../lib/definitions"
import SubHeader from "../typography/SubHeader";

export default function Article({ data }: { data: IArticle }) {
    const { imgPath, imgAlt, title, description } = data;

    return (
        <article className='flex flex-col justify-start items-center text-center '>
            <Image src={imgPath} alt={imgAlt} width={150} height={150} className="mb-4" />

            <SubHeader>{title}</SubHeader>
            <p className='text-base w-[300px] text-gray-500'>{description}</p>
        </article>
    )
}
