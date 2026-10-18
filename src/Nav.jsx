import { useEffect, useRef } from 'react'

// Mapeamento dos botões exatamente com os seus ícones do Flaticon
const NAV_ITEMS = [
  { id: 'hero', icon: 'home' },
  { id: 'servico', icon: 'manicure' },
  { id: 'studio', icon: 'couch' },
  { id: 'contatos', icon: 'marker' },
  { id: 'feedback', icon: 'memo-pad' },
  { id: 'faq', icon: 'comments-question' },
]

function Nav({ activeSection, setActiveSection }) {
  // Trata o clique no botão trocando a seção ativa no App.jsx
  const handleClick = (e, id) => {
    e.preventDefault() // Impede a alteração da URL pelo link âncora
    if (setActiveSection) {
      setActiveSection(id)
    }
  }

  return (
    <nav className="nav flex w-full fixed h-fit bottom-0 rounded-t-xlp py-2 justify-center items-center md:hidden">
      <article className='relative flex w-[95%] justify-end items-center bg-(--fundo-claro) rounded-4xl h-16 shadow-(--shadow-nav) opacity-90'>
        <article className='flex w-full items-center justify-evenly absolute z-10'>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                data-target={item.id}
                className={`comon navegacao no-underline`}
              >
                {/* Mantém a troca de classe entre solid (fi-sr-) e regular (fi-rr-) */}
                <i
                  className={`fi ${
                    isActive ? `fi-sr-${item.icon}` : `fi-rr-${item.icon}`
                  } icon-${item.id} text-(--rose) text-[2.5rem] leading-0`}
                ></i>
              </a>
            )
          })}
        </article>
      </article>
    </nav>
  )
}

export default Nav