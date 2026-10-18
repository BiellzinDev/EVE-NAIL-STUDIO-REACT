import './index.css'
import imgManicure from "../src/Images/Manicure-tradicional.webp"
import imgNailArt from "../src/Images/Nail-art.webp"
import imgManutencao from "../src/Images/Manutencao-alongamento.webp"
import imgEsmaltacaoComum from "../src/Images/Esmaltacao-comum.webp"
import imgGel from "../src/Images/Esmaltacao-em-gel.webp"
import imgBlindagem from "../src/Images/unhas-extensao.webp"


function Service(){
    return(
        <section className="flex items-center justify-center flex-col overflow-x-hidden bg-[#f3ebe3] font-[Montserrat] w-full pt-24">
            <section  className="servico spa-section gap-6 flex spa-section w-[90%] text-center flex-col pb-12">
                <h2 id="servico" className="todo w-full text-center text-[2rem] uppercase text-(--rose) font-bold">Serviços</h2>
                <section className='flex flex-col w-full md:flex-row flex-wrap md:gap-4 md:items-stretch md:justify-center xl:'>
                    <section className="flex flex-col text-center gap-[.4rem] md:flex-1 md:basis-xs xl:basis-sm 2xl:basis-lg">
                        <h3 className="text-2xl text-(--rose) font-semibold">Nail art</h3>
                        <p className='text-(--marrom) font-medium md:grow'>Personalização das unhas por meio de desenhos, pinturas, pedrarias, efeitos, adesivos e diferentes técnicas de decoração. É uma das formas de tornar o trabalho mais criativo e exclusivo.</p>
                        <picture className="box-servico"><img className='w-[21.3rem] h-[18.85rem] rounded-2xl lg:w-full lg:object-cover ' src={imgNailArt} alt="Imagem esmaltação em gel"/></picture>
                    </section>
                    <section className="flex flex-col text-center gap-[.4rem] md:flex-1 md:basis-xs xl:basis-sm 2xl:basis-lg">
                        <h3 className="text-2xl text-(--rose) font-semibold">Esmaltação em Gel</h3>
                        <p className='text-(--marrom) font-medium md:grow'>Aplicação de esmalte específico que é curado em cabine UV ou LED. Possui maior durabilidade e resistência em comparação ao esmalte tradicional.</p>
                        <picture className="box-servico"><img className='w-[21.3rem] h-[18.85rem] rounded-2xl lg:w-full lg:object-cover ' src={imgGel} alt="Imagem esmaltação em gel"/></picture>
                    </section>
                    <section className="flex flex-col text-center gap-[.4rem] md:flex-1 md:basis-xs xl:basis-sm 2xl:basis-lg">
                        <h3 className="text-2xl text-(--rose) font-semibold">Manicure Tradicional</h3>
                        <p className='text-(--marrom) font-medium md:grow'>Cuidados básicos com as unhas das mãos, incluindo corte, lixamento, remoção ou tratamento das cutículas e aplicação de esmalte.</p>
                        <picture className="box-servico"><img className='w-[21.3rem] h-[18.85rem] rounded-2xl lg:w-full lg:object-cover' src={imgManicure} alt="Imagem esmaltação em gel"/></picture>
                    </section>
                    <section className="flex flex-col text-center gap-[.4rem] md:flex-1 md:basis-xs xl:basis-sm 2xl:basis-lg">
                        <h3 className="text-2xl text-(--rose) font-semibold">Esmaltação Comum</h3>
                        <p className='text-(--marrom) font-medium md:grow'>Aplicação de esmalte tradicional nas unhas, permitindo que a cliente escolha entre diferentes cores, acabamentos e estilos.</p>
                        <picture className="box-servico"><img className='w-[21.3rem] h-[18.85rem] rounded-2xl lg:w-full lg:object-cover' src={imgEsmaltacaoComum} alt="Imagem esmaltação em gel"/></picture>
                    </section>
                    <section className="flex flex-col text-center gap-[.4rem] md:flex-1 md:basis-xs xl:basis-sm 2xl:basis-lg">
                        <h3 className="text-2xl text-(--rose) font-semibold">Manutenção</h3>
                        <p className='text-(--marrom) font-medium md:grow'>Procedimento realizado após o crescimento da unha natural para recuperar o formato e preencher o espaço próximo à cutícula, prolongando a durabilidade do alongamento.</p>
                        <picture className="box-servico"><img className='w-[21.3rem] h-[18.85rem] rounded-2xl lg:w-full lg:object-cover' src={imgManutencao} alt="Imagem esmaltação em gel"/></picture>
                    </section>
                    <section className="flex flex-col text-center gap-[.4rem] md:flex-1 md:basis-xs xl:basis-sm 2xl:basis-lg">
                        <h3 className="text-2xl text-(--rose) font-semibold">Blindagem</h3>
                        <p className='text-(--marrom) font-medium md:grow'>Procedimento feito sobre a unha natural com o objetivo de criar uma camada protetora contra quebras e impactos, além de aumentar a durabilidade do esmalte.</p>
                        <picture className="box-servico"><img className='w-[21.3rem] h-[18.85rem] rounded-2xl lg:w-full lg:object-cover' src={imgBlindagem} alt="Imagem esmaltação em gel"/></picture>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Service