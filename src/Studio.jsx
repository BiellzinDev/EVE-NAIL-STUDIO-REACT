import imgStudio1 from "../src/Images/Studio-cadeiras.webp"
import imgStudio2 from "../src/Images/Studio-mesas.webp"
import './index.css'
import TesteEmail from "./TesteEmail"

function Studio(){
    return(
        <section className="flex items-center justify-center flex-col overflow-x-hidden bg-(--fundo) pb-10 font-[Montserrat] w-[90%]">
            <section className="studio flex spa-section w-[90%] text-center flex-col gap-4 pt-24 xl:max-w-6xl">
                <h2 id="studio" className="todo w-full text-center text-[2rem] uppercase font-bold text-(--rose)">O Studio</h2>
                <p className="text-(--marrom) font-semibold">O EVE NAIL STUDIO é um espaço  dedicado para seu momento, com materiais e equipamentos de qualidade, esterealizados. Prontos para deixar suas unhas um arraso! Afinal, você já é linda, vamos realçar isso!</p>
                <article className="flex flex-col gap-4 md:flex-row lg:justify-center lg:gap-20">
                    <picture className="flex lg:basis-xl lg:h-auto">
                        <img className="w-[21.3rem] rounded-2xl lg:w-full " src={imgStudio1} alt="Imagem das caideias"/>
                    </picture>
                    <picture className="flex lg:basis-xl lg:h-auto">
                        <img className="w-[21.3rem] rounded-2xl lg:w-full" src={imgStudio2} alt="Imagem das mesas"/>
                    </picture>
                </article>
            </section>
        </section>
    )
}

export default Studio