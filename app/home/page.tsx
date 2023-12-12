import React from 'react'

export default function HomePage() {
    return (
        <main className='h-[100vh] mx-auto px-4'>
            <section>
                <article>
                    <h1 className='text-center text-xl font-semibold my-2'>Ласкаво просимо до Синегрія</h1>

                    <p>Україномовний центр розвитку для дошкільнят у м.Констанца.</p>
                    <p>Ми - простір розвитку, безпеки, щасливого дитинства в нових реаліях!</p>
                </article>

                <div className="flex flex-col mt-5 gap-4">
                    <article>
                        <h3>Едьютейнмент</h3>
                        <p>Навчання розвагою</p>
                    </article>

                    <article>
                        <h3>Харчування</h3>
                        <p>Збалансоване і корисне чотириразове харчування</p>
                    </article>

                    <article>
                        <h3>Безпека</h3>
                        <p>Якісне та безпечне обладнання, відеонагляд, мед. працівник</p>
                    </article>

                    <article>
                        <h3>Затишок</h3>
                        <p>Особлива атмосфера затишку і турботи</p>
                    </article>
                </div>
            </section>

            <section>

            </section>
        </main>
    )
}
