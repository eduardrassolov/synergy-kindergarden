import Image from 'next/image'
import React from 'react'
import Article from './components/article/Article'
import { IArticle } from './lib/definitions'
import ArticleList from './components/article/ArticleList'

export default function HomePage() {
    return (
        <main className='h-[100vh] mx-auto px-4 max-w-[90rem]'>
            <section>
                <article>
                    <h1 className='text-center text-xl font-semibold my-4'>Ласкаво просимо до Синегрія</h1>

                    <p className="mb-2">Україномовний центр розвитку для дошкільнят у м.Констанца.</p>
                    <p>Ми - простір розвитку, безпеки, щасливого дитинства в нових реаліях!</p>
                </article>

                <ArticleList />
            </section>
        </main>
    )
}
