import { useState } from 'react'
import './index.css'

function Feedback() {
  // Estado para controlar a nota das estrelas (0 a 5)
  const [rating, setRating] = useState(0)

  // Função para tratar o clique nas estrelas
  const handleStarClick = (starValue) => {
    if (rating === starValue) {
      setRating(0) // Desmarca se clicar na mesma estrela
    } else {
      setRating(starValue) // Define a nova quantidade de estrelas
    }
  }

  return (
    <section id="feedback" className="todo flex items-center justify-center flex-col overflow-x-hidden bg-(--fundo) pb-2 font-[Montserrat]">
      <section className="flex bg-(--fundo) spa-section w-[90%] items-center justify-center flex-col text-center gap-4 mt-20 pb-16 md:mt-24">
        <h2 className="text-center w-full text-[2rem] uppercase text-(--rose) font-bold">Feedback</h2>
        <p className="w-[80%] text-center text-(--marrom) font-semibold">
          Sua opinião é muito importante para nós! Conte como foi sua experiência e nos ajude a melhorar cada vez mais.
        </p>
        <section className="caixa-feed flex items-center justify-center flex-col w-full gap-6 xl:flex-wrap xl:flex-row">
          <article className="limiter-feed flex w-[90%] bg-(--fundo) rounded-[10px] py-2 xl:basis-md">
            <article className="box-feed flex w-[95%] flex-col items-start gap-2 ">
              <article className="flex justify-center gap-[.3rem] items-baseline">
                <picture>
                  <i className="fi fi-rr-user icon-user font-bold text-[2rem] text-(--rose)"></i>
                </picture>
                <label htmlFor="nome" className="text-2xl font-bold text-[1.2rem] text-(--rose)">
                  Seu nome:
                </label>
              </article>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome completo"
                className="placeholder:text-[#9e3154] w-full py-1 px-2 h-10 rounded-[10px] border border-[#c58592] focus:outline-[#c58592]"
              />
            </article>
          </article>

          <article className="limiter-feed flex w-[90%] bg-(--fundo) rounded-[10px] py-2 xl:basis-md">
            <article className="box-feed flex w-[95%] flex-col items-start gap-2">
              <article className="flex justify-center gap-[.3rem] items-baseline">
                <picture>
                  <i className="fi fi-rr-smile icon-rosto font-bold text-[2rem] text-(--rose)"></i>
                </picture>
                <label htmlFor="experiencia" className="text-2xl font-bold text-[1.2rem] text-(--rose)">
                  Experiência:
                </label>
              </article>
              <select
                name="experiencia"
                id="experiencia"
                className="text-[#9e3154] w-full py-1 px-2 h-10 rounded-[10px] border border-[#c58592] focus:outline-[#c58592]"
              >
                <option value="opcao" className="option text-[#9e3154]">
                  Selecione uma opção
                </option>
                <option value="Muito satisfatória" className="text-[#9e3154]">
                  Muito satisfatória
                </option>
                <option value="Satisfatória" className="text-[#9e3154]">
                  Satisfatória
                </option>
                <option value="Insatisfatória" className="text-[#9e3154]">
                  Insatisfatória
                </option>
              </select>
            </article>
          </article>

          <article className="limiter-feed flex w-[90%] bg-(--fundo) rounded-[10px] py-2 xl:basis-md">
            <article className="box-feed flex w-[95%] flex-col items-start gap-2">
              <article className="flex justify-center gap-[.3rem] items-baseline">
                <picture>
                  <i className="fi fi-rr-comment icon-feedb font-bold text-[2rem] text-(--rose)"></i>
                </picture>
                <label htmlFor="comentario" className="text-2xl font-bold text-[1.2rem] text-(--rose)">
                  Seu comentário:
                </label>
              </article>
              <textarea
                name="feedback"
                id="comentario"
                placeholder="Conte-nos o que você achou do atendimento, do serviço, do ambiente...."
                className="text-[#9e3154] py-1 px-2 w-full h-24 rounded-[10px] border border-[#9e3154] resize-none placeholder:text-[#9e3154] focus:outline-[#c58592] "
              ></textarea>
            </article>
          </article>

          <article className="hidden w-[90%] bg-(--fundo) rounded-[10px] py-2 xl:flex xl:basis-md ">
            <article className="flex w-[95%] flex-col items-start gap-2 xl:gap-4 xl:pt-8">
              <article className="flex justify-center items-center w-full">
                <label className="font-bold text-[1.2rem] text-(--rose)">Avalie seu atendimento:</label>
              </article>
              
              {/* Seção das Estrelas reativa com useState */}
              <article className="flex items-center justify-center gap-2 w-full">
                {[1, 2, 3, 4, 5].map((starValue) => {
                  const isFilled = starValue <= rating

                  return (
                    <button
                      key={starValue}
                      type="button"
                      onClick={() => handleStarClick(starValue)}
                      className="btn-star border-none bg-transparent text-[1.2rem] text-[#9e3154] cursor-pointer xl:text-3xl"
                    >
                      {/* Altera dinamicamente entre fi-sr-star (preenchida) e fi-rr-star (contorno) */}
                      <i className={`fi ${isFilled ? 'fi-sr-star' : 'fi-rr-star'}`}></i>
                    </button>
                  )
                })}
              </article>
            </article>
          </article>

          <article className="flex w-[90%] bg-(--fundo) rounded-[10px] py-2 xl:hidden">
            <article className="flex w-[95%] flex-col items-start gap-2">
              <article className="flex justify-center items-center w-full">
                <label className="font-bold text-[1.2rem] text-(--rose)">Avalie seu atendimento:</label>
              </article>
              
              {/* Seção das Estrelas reativa com useState */}
              <article className="flex items-center justify-center gap-2 w-full">
                {[1, 2, 3, 4, 5].map((starValue) => {
                  const isFilled = starValue <= rating

                  return (
                    <button
                      key={starValue}
                      type="button"
                      onClick={() => handleStarClick(starValue)}
                      className="btn-star border-none bg-transparent text-[1.2rem] text-[#9e3154] cursor-pointer"
                    >
                      {/* Altera dinamicamente entre fi-sr-star (preenchida) e fi-rr-star (contorno) */}
                      <i className={`fi ${isFilled ? 'fi-sr-star' : 'fi-rr-star'}`}></i>
                    </button>
                  )
                })}
              </article>
            </article>
          </article>

          <button
            type="button"
            className="btn-send-feed flex items-center justify-center bg-[#9e3154] text-white gap-[.6rem] w-[90%] rounded-[20px] border-none h-10 mb-4 hover:bg-[#c58592] cursor-pointer"
          >
            <picture>
              <i className="fi fi-rr-paper-plane icon-plane text-xl"></i>
            </picture>
            <p className="text-white font-bold">Enviar Feedback</p>
          </button>
        </section>
      </section>
    </section>
  )
}

export default Feedback