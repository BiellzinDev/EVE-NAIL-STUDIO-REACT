import ImgHero from "../src/Images/eve-nail-studio-hero-background.webp";
import ImgHeroTablet from "../src/Images/eve-nail-studio-hero-background.svg";
import imgManicure from "../src/Images/Manicure-tradicional.webp";
import imgNailArt from "../src/Images/Nail-art.webp";
import imgManutencao from "../src/Images/Manutencao-alongamento.webp";
import imgEsmaltacaoComum from "../src/Images/Esmaltacao-comum.webp";
import imgGel from "../src/Images/Esmaltacao-em-gel.webp";
import imgEsterlaAlone from "../src/Images/alone-estrela.webp";
import imgBlindagem from "../src/Images/unhas-extensao.webp"
import './index.css';

function Home() {
    // ⚠️ Configuração do número e da mensagem
    const numeroWhatsApp = "5511989316769"; // Atualizado de acordo com o telefone exibido na sua página

    // Função que lida com o clique e abre o WhatsApp
    const handleWhatsAppClick = () => {
        const mensagem = "Olá! Gostaria de agendar meu *momento Nail* e saber os horários disponíveis.";
        const mensagemFormatada = encodeURIComponent(mensagem);
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;
        
        window.open(urlWhatsApp, '_blank');
    };

    return (
        <section className="flex items-center justify-center flex-col bg-[#f3ebe3] font-[Montserrat] w-full relative xl:pb-12">
            <button onClick={handleWhatsAppClick} className=" hidden btn-whats text-center p-2 xl:items-center xl:justify-center font-semibold text-[1rem] cursor-pointer hover:opacity-[.5] xl:flex fixed xl:top-150 xl:right-0  leading-none xl:z-20"><i className="fi fi-brands-whatsapp-circle text-5xl text-(--whats)"></i></button>
            <section className="flex hero relative flex-col w-full h-96 text-white justify-end text-center mt-20 md:mt-0 md:h-152">
                <picture className="absolute md:w-full md:flex md:justify-center md:items-center md:relative">
                    <img src={ImgHero} className="Imagem Hero mt-20 md:hidden"/>
                    <img src={ImgHeroTablet} className="hidden md:block md:w-full" alt="Imagem Hero de unhas" />
                </picture>
                <article className="flex items-center justify-center hero box-principal absolute bottom-[35%] text-left left-[3%] w-full md:justify-start md:bottom-[25%]">
                    <p className="absolute text-center text-[1rem] text-white py-4 text-shadow-(--shadow-unhas) md:text-left md:text-2xl">O espaço perfeito para você,<br /> Nail art para quem ama o diferente</p>
                </article>
                <article className="flex justify-center items-center flex-col h-24 w-full absolute md:justify-start md:items-start md:pl-4">
                    {/* Evento onClick adicionado aqui */}
                    <button 
                        onClick={handleWhatsAppClick} 
                        className="btn flex items-center justify-center bg-(--rose) cursor-pointer h-[3.1rem] rounded-[50px] font-bold text-2xl text-center text-white gap-2 w-[75%] hover:opacity-[.7] md:w-[40%]">
                        <span className="text-[1rem] font-bold uppercase">Agende seu momento</span>
                        <picture><i className="fi fi-rs-arrow-right flex items-center justify-center text-[1.2rem]"></i></picture>
                    </button>
                </article>
            </section>

            <section className="flex w-[90%] text-center mt-4 flex-col items-center justify-center md:w-full md:justify-center md:items-center md:mt-8">
                <section className="box-service flex w-full overflow-x-auto gap-4 p-1 scroll-smooth md:justify-between md:items-center md:w-[90%] md:bg-(--fundo-service) md:p-4 md:rounded-2xl xl:flex-wrap">
                    <article className="flex box-unhas snap-start grow-0 shrink-0 basis-80 h-64 flex-col rounded-2xl text-white justify-end text-center md:w-50 xl:basis-[32%]">
                        <figure className="flex w-full relative flex-col justify-end items-end">
                            <img className="w-full object-fill h-64 rounded-2xl " src={imgNailArt} alt="Imagem de unhas Nail art"/>
                            <figcaption className="flex justify-center absolute w-full">
                                <h3 className="text-white text-[1rem] w-2/4 pb-4 font-bold text-shadow-(--shadow-unhas)">Nail art</h3>
                            </figcaption>
                        </figure>
                    </article>
                    <article className="flex box-unhas snap-start grow-0 shrink-0 basis-80 h-64 flex-col rounded-2xl text-white justify-end text-center md:w-50 xl:basis-[32%]" >
                        <figure className="flex w-full relative flex-col justify-end items-end ">
                            <img className="w-full object-fill h-64 rounded-2xl" src={imgGel} alt="Imagem de Unha"/>
                            <figcaption className="flex justify-center absolute w-full">
                                <h3 className="text-white text-[1rem] w-2/4 pb-4 font-bold text-shadow-(--shadow-unhas)">Esmaltação em Gel</h3>
                            </figcaption>
                        </figure>
                    </article>
                    <article className="flex box-unhas snap-start grow-0 shrink-0 basis-80 h-64 flex-col rounded-2xl text-white justify-end text-center md:w-50 xl:basis-[32%]">
                        <figure className="flex w-full relative flex-col justify-end items-end ">
                            <img className="w-full object-fill h-64 rounded-2xl" src={imgManicure} alt="Imagem de Unha"/>
                            <figcaption className="flex justify-center absolute w-full">
                                <h3 className="text-white text-[1rem] w-2/4 pb-4 font-bold text-shadow-(--shadow-unhas)">Manicure Tradicional</h3>
                            </figcaption>
                        </figure>
                    </article>
                    <article className="flex box-unhas snap-start grow-0 shrink-0 basis-80 h-64 flex-col rounded-2xl text-white justify-end text-center md:w-50 xl:basis-[32%]">
                        <figure className="flex w-full relative flex-col justify-end items-end  ">
                            <img className="w-full object-fill h-64 rounded-2xl" src={imgEsmaltacaoComum} alt="Imagem de Unha"/>
                            <figcaption className="flex justify-center absolute w-full">
                                <h3 className="text-white text-[1rem] w-2/4 pb-4 font-bold text-shadow-(--shadow-unhas)">Esmaltação Comum</h3>
                            </figcaption>
                        </figure>
                    </article>
                    <article className="flex box-unhas snap-start grow-0 shrink-0 basis-80 h-64 flex-col rounded-2xl text-white justify-end text-center md:w-50 xl:basis-[32%]">
                        <figure className="flex w-full relative flex-col justify-end items-end  ">
                            <img className="w-full object-fill h-64 rounded-2xl" src={imgManutencao} alt="Imagem de Unha"/>
                            <figcaption className="flex justify-center absolute w-full">
                                <h3 className="text-white text-[1rem] w-2/4 pb-4 font-bold text-shadow-(--shadow-unhas)">Manutenção</h3>
                            </figcaption>
                        </figure>
                    </article>
                    <article className="flex box-unhas snap-start grow-0 shrink-0 basis-80 h-64 flex-col rounded-2xl text-white justify-end text-center md:w-50 xl:basis-[32%]">
                        <figure className="flex w-full relative flex-col justify-end items-end  ">
                            <img className="w-full object-fill h-64 rounded-2xl" src={imgBlindagem} alt="Imagem de Unha"/>
                            <figcaption className="flex justify-center absolute w-full">
                                <h3 className="text-white text-[1rem] w-2/4 pb-4 font-bold text-shadow-(--shadow-unhas)">Blindagem</h3>
                            </figcaption>
                        </figure>
                    </article>
                </section>
            </section>

            <section className="frase-efeito flex items-center w-[85%] text-center gap-[.3rem] mt-8 justify-center">
                <picture className="star"><img className="w-6" src={imgEsterlaAlone} alt="Imagem estrela"/></picture>
                <p className="text-[1rem] tracking-[.3rem] text-(--rose)">UNHAS COM ATITUDE,<br />NÃO COM REGRA</p>
                <picture className="star"><img className="w-6" src={imgEsterlaAlone} alt="Imagem estrela"/></picture>
            </section>

            <section className="hidden md:flex flex-col md:py-5 w-full text-center">
                <h2 className="text-(--rose) text-2xl pb-2 font-bold">Contate-nos</h2>
                <p className="text-(--rose) font-semibold">O caminho até seu destino</p>
            </section>

            <section className="flex w-full flex-col items-center md:flex-row md:bg-(--fundo-maps) md:rounded-2xl md:p-6 gap-4 xl:max-w-6xl">
                <section className="box-contato flex items-center flex-col w-4/5 pt-12 md:p-0">
                    <h2 className="text-(--rose) text-2xl pb-2 font-bold md:hidden">Contate-nos</h2>
                    <p className="text-(--marrom) md:hidden">O caminho até seu destino</p>
                    <section className="flex w-full flex-col pt-6 gap-[.7rem] md:gap-6">
                        <article className="contato flex items-center justify-center bg-(--fundo-contato) rounded-2xl p-2 text-center">
                            <address className='w-full text-(--marrom) '>
                                <h4 className='font-semibold text-(--rose)'>Nosso endereço:</h4>
                                R. Américo Vespúcio, 12 - Sala 01
                                Parque Imperial, Barueri - SP
                            </address>
                        </article>
                        <article className="contato flex items-center justify-center bg-(--fundo-contato) rounded-2xl p-2 text-center">
                            <address className='w-full text-(--marrom)'>
                                <h4 className='font-semibold text-(--rose)'>Horário de atendimento:</h4>
                                Segunda a Sábado: 09h às 18h
                            </address>
                        </article>
                        <article className="contato flex items-center justify-center bg-(--fundo-contato) rounded-2xl p-2 text-center">
                            <address className='w-full text-(--marrom)'>
                                <h4 className='font-semibold text-(--rose)'>WhatsApp:</h4>
                                (11) 98931-6769
                            </address>
                        </article>
                    </section>
                </section>
                <section className="flex items-center h-32 relative justify-end md:hidden">
                    {/* Eventos onClick adicionados no botão e no ícone */}
                    <button onClick={handleWhatsAppClick} className="btn-whats bg-(--whats) text-white w-52 h-[3.1rem] rounded-[10px] font-semibold text-[1rem] cursor-pointer hover:opacity-[.5]">
                        Falar no WhatsApp
                    </button>
                    <picture onClick={handleWhatsAppClick} className="cursor-pointer absolute top-0 right-[-18%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-whatsapp text-(--whats-claro)">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18.497 4.409a10 10 0 0 1 -10.36 16.828l-.223 -.098l-4.759 .849l-.11 .011a1 1 0 0 1 -.11 0l-.102 -.013l-.108 -.024l-.105 -.037l-.099 -.047l-.093 -.058l-.014 -.011l-.012 -.007l-.086 -.073l-.077 -.08l-.067 -.088l-.056 -.094l-.034 -.07l-.04 -.108l-.028 -.128l-.012 -.102a1 1 0 0 1 0 -.125l.012 -.1l.024 -.11l.045 -.122l1.433 -3.304l-.009 -.014a10 10 0 0 1 1.549 -12.454l.215 -.203a10 10 0 0 1 13.226 -.217m-8.997 3.09a1.5 1.5 0 0 0 -1.5 1.5v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0 -3h-1l-.144 .007a1.5 1.5 0 0 0 -1.128 .697l-.042 .074l-.022 -.007a4.01 4.01 0 0 1 -2.435 -2.435l-.008 -.023l.075 -.041a1.5 1.5 0 0 0 .704 -1.272v-1a1.5 1.5 0 0 0 -1.5 -1.5" />
                        </svg>
                    </picture>
                </section>
                <section className="flex w-full flex-col bg-(--fundo-maps) rounded-2xl relative mb-16 text-center md:bg-transparent md:m-0">
                    <h2 className="py-4 font-bold text-white md:hidden">Como chegar?</h2>
                    <iframe className="mb-6 rounded-t-2xl md:m-0 md:rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7318.8524275638465!2d-46.806084!3d-23.481153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefde82bc83913%3A0xe17397a729bbf3dc!2sR.%20Am%C3%A9rico%20Vesp%C3%BAcio%2C%20N%C2%B0%2012%20-%20Parque%20Imperial%2C%20Barueri%20-%20SP%2C%2006462-300!5e0!3m2!1spt-BR!2sbr!4v1789925617671!5m2!1spt-BR!2sbr" width="100%" height="336" style={{ border: 0 }} loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </section>
            </section>
            <section className="items-center h-32 relative justify-end hidden md:flex md:mt-4 xl:hidden">
                    {/* Eventos onClick adicionados no botão e no ícone */}
                    <button onClick={handleWhatsAppClick} className="btn-whats bg-(--whats) text-white w-52 h-[3.1rem] rounded-[10px] font-semibold text-[1rem] cursor-pointer hover:opacity-[.5]">
                        Falar no WhatsApp
                    </button>
                    <picture onClick={handleWhatsAppClick} className="cursor-pointer absolute top-0 right-[-18%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-whatsapp text-(--whats-claro)">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18.497 4.409a10 10 0 0 1 -10.36 16.828l-.223 -.098l-4.759 .849l-.11 .011a1 1 0 0 1 -.11 0l-.102 -.013l-.108 -.024l-.105 -.037l-.099 -.047l-.093 -.058l-.014 -.011l-.012 -.007l-.086 -.073l-.077 -.08l-.067 -.088l-.056 -.094l-.034 -.07l-.04 -.108l-.028 -.128l-.012 -.102a1 1 0 0 1 0 -.125l.012 -.1l.024 -.11l.045 -.122l1.433 -3.304l-.009 -.014a10 10 0 0 1 1.549 -12.454l.215 -.203a10 10 0 0 1 13.226 -.217m-8.997 3.09a1.5 1.5 0 0 0 -1.5 1.5v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0 -3h-1l-.144 .007a1.5 1.5 0 0 0 -1.128 .697l-.042 .074l-.022 -.007a4.01 4.01 0 0 1 -2.435 -2.435l-.008 -.023l.075 -.041a1.5 1.5 0 0 0 .704 -1.272v-1a1.5 1.5 0 0 0 -1.5 -1.5" />
                        </svg>
                    </picture>
                </section>
        </section>
    );
}

export default Home;