import { useState } from 'react'
import './index.css'

// Sub-item (Perguntas)
function FaqSubItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="accordion-body flex flex-col w-full">
      <button 
        className="accordion-sub flex items-center bg-[#fbf3ec] text-[#9e3154] text-[.9rem] gap-0.5 relative w-full cursor-pointer py-0 px-3 justify-between rounded-xl h-10 border-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-full text-left">{question}</span>
        <i className={`fi fi-sr-angle-down transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      {/* Exibe a resposta se ativo */}
      {isOpen && (
        <div className="accordion-sub-body px-3 py-2 justify-between">
          <p className="py-0 pr-2 text-left text-[.9rem] font-medium relative text-(--marrom)">{answer}</p>
        </div>
      )}
    </div>
  )
}

// Categoria Principal
function FaqCategory({ iconClass, title, items }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className="container-sanfona flex items-center justify-center w-full xl:basis-md">
      <div className="accordion flex items-center justify-center flex-col w-[90%] gap-2">
        <button 
          className="accordion-header flex items-center justify-between w-full bg-[#9e3154] border-none h-10 rounded-xl text-white px-3 text-[1.2rem] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="limiter-calendar flex gap-2 items-start justify-start">
            <picture className="calendar"><i className={iconClass}></i></picture>
            <span className="max-w-full whitespace-nowrap overflow-hidden text-ellipsis">{title}</span>
          </div>
          <i className={`fi fi-sr-angle-down transition-transform duration-200 h-5 ${isOpen ? 'rotate-180' : ''}`}></i>
        </button>

        {/* Renderiza as perguntas apenas quando a categoria é aberta */}
        {isOpen && items.map((item, index) => (
          <FaqSubItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </article>
  )
}

// Componente Principal
function Faq() {
  const faqData = [
    {
      id: "agendamento",
      title: "Agendamentos",
      icon: "fi fi-rr-calendar icon-calendar",
      items: [
        { question: "Como faço para agendar um horário?", answer: "Pelo telefone ou WhatsApp" },
        { question: "Outras formas de contato?", answer: "Instagram, WhatsApp, Facebook" },
        { question: "Posso remarcar ou cancelar meu horário?", answer: "Sim, desde que seja avisado com 24h de antecedência" }
      ]
    },
    {
      id: "servicos",
      title: "Procedimentos",
      icon: "fi fi-rs-finger-nail",
      items: [
        { question: "Quanto tempo dura o procedimento?", answer: "Varia do procedimento mas em torno de 30 min a 01:30 min." },
        { question: "Quais os cuidados após a aplicação?", answer: "Mantenha as unhas hidratadas com cremes e ingestão de água." },
        { question: "Vocês trabalham com alongamento?", answer: "Sim, para mais informações acesse a seção serviços." }
      ]
    },
    {
      id: "pagamento",
      title: "Pagamentos",
      icon: "fi fi-br-credit-card",
      items: [
        { question: "Quais as formas de pagamento?", answer: "Débito, Crédito e Pix." },
        { question: "É possível parcelar o pagamento?", answer: "Sim, em até 3x sem juros." }
      ]
    },
    {
      id: "local",
      title: "Endereço",
      icon: "fi fi-rs-marker",
      items: [
        { question: "Onde fica o studio?", answer: "R. Américo Vespúcio, 12 - Sala 01." },
        { question: "Qual o horário de funcionamento?", answer: "Terça à sábado, das 08:00 às 18:00." },
        { question: "Há estacionamento próximo?", answer: "Estacionamento no local." }
      ]
    }
  ]

  return (
    <section id="faq" className="todo flex flex-col overflow-x-hidden font-[Montserrat] justify-start items-center text-center xl:w-4/5">
      <section className="flex flex-col gap-4 w-[90%] pb-4 spa-section bg-(--fundo-faq) items-center justify-start mt-20 mb-20 rounded-2xl pt-8 md:mt-24 xl:max-w-6xl">
        <h2 className='text-center w-full text-[2rem] uppercase text-(--rose) font-bold'>FAQ</h2>
        <p className=" w-[80%] text-center text-(--marrom) font-semibold">Tire suas dúvidas sobre nossos serviços, agendamentos e muito mais</p>
        
        <section className="limiter-faq flex items-center justify-center flex-col w-full gap-4 font-medium pb-4 xl:flex-wrap xl:flex-row">
          {faqData.map((category) => (
            <FaqCategory 
              key={category.id} 
              title={category.title} 
              iconClass={category.icon} 
              items={category.items} 
            />
          ))}
        </section>
      </section>
    </section>
  )
}

export default Faq