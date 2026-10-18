import React from 'react'
import imgStarsFooter1 from "../src/Images/star2.svg"
import imgStarsFooter2 from "../src/Images/star3.svg"

const Footer = () => {
  return (
    <section className='flex items-center justify-center w-full mb-26 flex-col gap-8 md:mb-8'>
        <article className='flex w-[90%] justify-center items-center'>
            <picture><img className='w-24' src={imgStarsFooter1} alt="" /></picture>
            <h2 className='text-(--rose) font-semibold text-center'>SUA BELEZA É NOSSA PRIORIDADE</h2>
            <picture><img className='w-24'  src={imgStarsFooter2} alt="" /></picture>
        </article>
        <p className='text-(--marrom) font-semibold text-center w-4/5'>&copy;2026 EVE NAIL DESIGN.</p>
    </section>
  )
}

export default Footer