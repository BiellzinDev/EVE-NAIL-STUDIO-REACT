import './index.css'
import iconLocal from "../src/Images/localizacao-icon.webp"
import iconWatch from "../src/Images/relogio-icon.webp"
import iconWhats from "../src/Images/whats-app-icon.webp"

function Contato(){
    return(
        <section id='contatos' className="todo flex items-center justify-center flex-col overflow-x-hidden bg-[#f3ebe3] pb-10 font-[Montserrat]">
            <section className="flex-col flex items-center justify-center spa-section w-full tt bg-(--rose) md:rounded-2xl text-(--fundo) mt-12 py-8 rounded-b-2xl md:mt-24">
                <h2  className="title-contato text-center text-2xl w-full uppercase font-bold pb-4">Entre em contato</h2>
                <p className=' text-center w-4/5'>Sempre a disposição para promover a melhor experiência a você, agende seu horário</p>
            </section>
            <section className="flex flex-col pt-4 w-[85%]">
                <h2 className="w-full text-center text-(--rose) text-[1.2rem] font-semibold py-4">Informações de Contato</h2>
                <section className='xl:flex xl:justify-between xl:gap-4'>
                    <section className='xl:w-[50%]'>
                        <section className="flex flex-col gap-4">
                            <article className="flex justify-start text-start gap-4 rounded-bl-2xl rounded-br-2xl w-full items-center">
                                <picture>
                                    <i className="fi fi-rr-marker text-(--rose) text-[2rem]"></i>
                                </picture>
                                <address className='w-full text-(--marrom)'>
                                    <h4 className='text-(--rose) font-semibold'>Nosso endereço:</h4>
                                    R. Américo Vespúcio, 12 - Sala 01
                                    Parque Imperial, Barueri - SP
                                </address>
                            </article>
                            <article className="flex justify-start text-start gap-4 rounded-bl-2xl rounded-br-2xl w-full items-center">
                                <picture className="icon-contatos ">
                                    <i className="fi fi-rr-clock-three text-(--rose) text-[2rem]"></i>
                                </picture>
                                <address className='w-full text-(--marrom)'>
                                    <h4 className='text-(--rose) font-semibold'>Horário de atendimento:</h4>
                                    Segunda a Sabádo: 09h as 18h
                                </address>
                            </article>
                            <article className="flex justify-start text-start gap-4 rounded-bl-2xl rounded-br-2xl w-full items-center">
                                <picture className="icon-contatos">
                                    <i className="fi fi-brands-whatsapp text-(--rose) text-[2rem]"></i>
                                </picture>
                                <address className='w-full text-(--marrom)'>
                                    <h4 className='text-(--rose) font-semibold'>WhatsApp:</h4>
                                    (11) 98931-6769
                                </address>
                            </article>
                        </section>
                    </section>
                    <section className='hidden xl:flex xl:w-1 xl:h-50 bg-(--rose)'></section>
                    <section className='flex flex-col pt-8'>
                        <p className='text-(--rose) text-center font-semibold'>Atendimento apenas com horário marcado!</p>
                        <h2 className="pt-4 pb-2 font-bold text-(--rose) text-center">Siga-nos nas redes sociais</h2>
                        <picture className='text-center py-4'>
                            <i className="fi fi-brands-instagram text-(--rose) text-[2rem]"></i>
                        </picture>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Contato