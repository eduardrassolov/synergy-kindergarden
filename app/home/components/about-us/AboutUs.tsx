import Image from 'next/image'
import React from 'react'
import Header from '../typography/Header'

export default function AboutUs() {
    return (
        <section className="my-8">
            <Header>Про нас:</Header>

            <div className='flex flex-col md:flex-row gap-8 justify-center mx-auto'>
                <div>
                    <Image src={"/about-us.webp"} alt="about" width={300} height={300} className="mx-auto" />
                </div>
                <div className='sm:max-w-2xl'>
                    <p className='mb-2'>Україномовний центр розвитку дітей дошкільного віку "Синергія" у м. Констанца.</p>
                    <p className='mb-2'>Вірність традиціям та цінностям, які забезпечують неповторну атмосферу освітньої та творчої діяльності, пошук креативних рішень, взаємоповагу, взаємодопомогу та свободу самовираження кожної дитини.</p>
                    <p className='mb-2'>У нашому центрі розвитку кожна дитина має можливість проявити себе в багатьох сферах: інтелектуальній, художній та спортивній.</p>
                    <p className='mb-2'>Заняття з англійської мови, акторської майстерності, творчості, математики, танців чи художньої гімнастики допомагають виявити у дитини здібності та таланти, а також розвинути інтерес до знань. Заняття проходять в цікавій ігровій формі, а навчальний матеріал є унікальним та відповідає всім дидактичним вимогам</p>
                </div>
            </div>
        </section >
    )
}
