import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.css'

function Feedback() {
  const formRef = useRef()

  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    nome: '',
    experiencia: 'Muito satisfatória',
    comentario: '',
  })

  // Estado para controlar a nota das estrelas (0 a 5)
  const [rating, setRating] = useState(0)

  // Estados de envio (loading e mensagem de aviso)
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' })

  // Função para atualizar os inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Função para tratar o clique nas estrelas
  const handleStarClick = (starValue) => {
    if (rating === starValue) {
      setRating(0) // Desmarca se clicar na mesma estrela
    } else {
      setRating(starValue) // Define a nova quantidade de estrelas
    }
  }

  // Função para enviar o e-mail via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatusMessage({ type: '', text: '' })

    // ATENÇÃO: Substitua pelos seus IDs reais do EmailJS
    const SERVICE_ID = 'service_sxnyr62'
    const TEMPLATE_ID = 'template_a20ewwr'
    const PUBLIC_KEY = 'xyuDmIMfDCGCgz6ra'

    // Parâmetros personalizados enviados ao e-mail
    const templateParams = {
      name: formData.nome,
      experience: formData.experiencia,
      comments: formData.comentario || 'Nenhum comentário enviado.',
      rating: rating > 0 ? `${rating} estrela(s)` : 'Não avaliou com estrelas',
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('E-mail enviado:', result.status, result.text)
          setStatusMessage({
            type: 'success',
            text: 'Obrigada pelo seu feedback! Ele foi enviado com sucesso. 💕',
          })
          // Limpa o formulário
          setFormData({
            nome: '',
            experiencia: 'Muito satisfatória',
            comentario: '',
          })
          setRating(0)
        },
        (error) => {
          console.error('Erro ao enviar:', error)
          setStatusMessage({
            type: 'error',
            text: 'Ops! Ocorreu um erro ao enviar. Tente novamente em instantes.',
          })
        }
      )
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section id="feedback" className="todo flex items-center justify-center flex-col overflow-x-hidden bg-(--fundo) pb-2 font-[Montserrat]">
      <section className="flex bg-(--fundo) spa-section w-[90%] items-center justify-center flex-col text-center gap-4 mt-20 pb-16 md:mt-24">
        <h2 className="text-center w-full text-[2rem] uppercase text-(--rose) font-bold">Feedback</h2>
        <p className="w-[80%] text-center text-(--marrom) font-semibold">
          Sua opinião é muito importante para nós! Conte como foi sua experiência e nos ajude a melhorar cada vez mais.
        </p>

        {/* Mensagem de confirmação/erro na página */}
        {statusMessage.text && (
          <div
            className={`w-[90%] max-w-md p-3 rounded-[10px] text-sm font-bold transition-all ${
              statusMessage.type === 'success'
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-rose-100 text-rose-800 border border-rose-300'
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="caixa-feed flex items-center justify-center flex-col w-full gap-6 xl:flex-wrap xl:flex-row"
        >
          {/* Nome da cliente */}
          <article className="limiter-feed flex w-[90%] bg-(--fundo) rounded-[10px] py-2 xl:basis-md">
            <article className="box-feed flex w-[95%] flex-col items-start gap-2">
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
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                className="placeholder:text-[#9e3154] text-[#9e3154] w-full py-1 px-2 h-10 rounded-[10px] border border-[#c58592] focus:outline-[#c58592]"
              />
            </article>
          </article>

          {/* Experiência */}
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
                value={formData.experiencia}
                onChange={handleChange}
                className="text-[#9e3154] w-full py-1 px-2 h-10 rounded-[10px] border border-[#c58592] focus:outline-[#c58592] bg-transparent"
              >
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

          {/* Comentário */}
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
                name="comentario"
                id="comentario"
                value={formData.comentario}
                onChange={handleChange}
                placeholder="Conte-nos o que você achou do atendimento, do serviço, do ambiente...."
                className="text-[#9e3154] py-1 px-2 w-full h-24 rounded-[10px] border border-[#9e3154] resize-none placeholder:text-[#9e3154] focus:outline-[#c58592]"
              ></textarea>
            </article>
          </article>

          {/* Estrelas - Desktop (XL) */}
          <article className="hidden w-[90%] bg-(--fundo) rounded-[10px] py-2 xl:flex xl:basis-md">
            <article className="flex w-[95%] flex-col items-start gap-2 xl:gap-4 xl:pt-8">
              <article className="flex justify-center items-center w-full">
                <label className="font-bold text-[1.2rem] text-(--rose)">Avalie seu atendimento:</label>
              </article>
              
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
                      <i className={`fi ${isFilled ? 'fi-sr-star' : 'fi-rr-star'}`}></i>
                    </button>
                  )
                })}
              </article>
            </article>
          </article>

          {/* Estrelas - Mobile */}
          <article className="flex w-[90%] bg-(--fundo) rounded-[10px] py-2 xl:hidden">
            <article className="flex w-[95%] flex-col items-start gap-2">
              <article className="flex justify-center items-center w-full">
                <label className="font-bold text-[1.2rem] text-(--rose)">Avalie seu atendimento:</label>
              </article>
              
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
                      <i className={`fi ${isFilled ? 'fi-sr-star' : 'fi-rr-star'}`}></i>
                    </button>
                  )
                })}
              </article>
            </article>
          </article>

          {/* Botão de envio */}
          <button
            type="submit"
            disabled={loading}
            className="btn-send-feed flex items-center justify-center bg-[#9e3154] text-white gap-[.6rem] w-[90%] rounded-[20px] border-none h-10 mb-4 hover:bg-[#c58592] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <p className="text-white font-bold">Enviando...</p>
            ) : (
              <>
                <picture>
                  <i className="fi fi-rr-paper-plane icon-plane text-xl"></i>
                </picture>
                <p className="text-white font-bold">Enviar Feedback</p>
              </>
            )}
          </button>
        </form>
      </section>
    </section>
  )
}

export default Feedback