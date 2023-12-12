import React from 'react'
import Article from './Article'
import { IArticle } from '../../lib/definitions'

const articles: IArticle[] = [
    {
        imgPath: "/robot.webp",
        imgAlt: "robot",
        title: "Едьютейнмент",
        description: "Навчання розвагою"
    },
    {
        imgPath: "/food.webp",
        imgAlt: "food",
        title: "Харчування",
        description: "Збалансоване і корисне чотириразове харчування"
    },
    {
        imgPath: "/camera.webp",
        imgAlt: "camera",
        title: "Безпека",
        description: "Якісне та безпечне обладнання, відеонагляд, мед. працівник"
    },
    {
        imgPath: "/pillow.webp",
        imgAlt: "pillow",
        title: "Затишок",
        description: "Особлива атмосфера затишку і турботи"
    },
]

export default function ArticleList() {
    return (
        <div className="flex flex-col mt-5 gap-10 sm:flex-row sm:gap-4 justify-between">
            {articles.map(item => <Article key={item.imgAlt} data={item} />)}
        </div>
    )
}
