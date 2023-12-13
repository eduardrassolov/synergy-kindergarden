import React from 'react'
import ArticleList from './components/article/ArticleList'
import Groups from './components/groups/Groups'
import AboutUs from './components/about-us/AboutUs'
import Divider from './components/divider/Divider'

export default function HomePage() {
    return (
        <main className='mx-auto px-4 max-w-[90rem]'>
            <section>
                <article className='my-8'>
                    <h1 className='text-center text-4xl font-semibold my-2'>Ласкаво просимо у Синергія</h1>

                    <p className="text-center text-gray-600">Україномовний центр розвитку для дошкільнят у м.Констанца.</p>
                    <p className='text-center text-gray-600'> Ми - простір розвитку, безпеки, щасливого дитинства в нових реаліях!</p>
                </article>
            </section>
            <Divider />

            <ArticleList />
            <Divider />

            <Groups />
            <Divider />

            <AboutUs />
        </main >
    )
}
