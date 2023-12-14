import React from 'react'
import Image from 'next/image'
import Header from '../typography/Header'
import SubHeader from '../typography/SubHeader'

export default function Groups() {
    return (
        <section className='my-10'>
            <Header>Групи:</Header>
            <div className='flex flex-col sm:flex-row sm:gap-12 justify-center'>
                <div className="mb-4 sm:max-w-md ">
                    <SubHeader>Середня група (3 - 4,5 роки)</SubHeader>
                    <Image src={"/group1.webp"} alt='group1' width={200} height={200} className='mx-auto my-4' />
                    <p>Відвідувачі молодшої групи у супроводі вихователів потрапляють у цікавий світ розваг.
                        Едьютеймент - навчання розвагою - ось наш секрет!
                        На інтегрованих заняттях вихованці опановують програму "Подорож у довкілля" з підходом STREAM технологій.</p>
                </div>

                <div className="sm:max-w-md ">
                    <SubHeader>Старша група (4,5 - 6 років)</SubHeader>
                    <Image src={"/group2.webp"} alt='group1' width={200} height={200} className='mx-auto my-4' />

                    <p>
                        Синергійці старшої групи опановують програму STREAM - "Стежинки у Всесвіт", що передбачає знайомство з науками, технологіями, інженирінгом, мистецтвом. А ще інтегровані заняття включають в зміст класичну підготовку до школи - читання, письмо, ази математики.
                    </p>
                </div>
            </div>
        </section>
    )
}
