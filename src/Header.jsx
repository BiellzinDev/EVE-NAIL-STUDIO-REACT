import imgLogo from "../src/Images/Logo-certo.webp"
import imgTextLogo from "../src/Images/Texto-Logo.webp"
import imgStars from "../src/Images/star1.svg"

// Mapeamento dos itens do menu desktop
const MENU_ITEMS = [
  { id: 'hero', label: 'Início' },
  { id: 'servico', label: 'Serviços' },
  { id: 'studio', label: 'Studio' },
  { id: 'contatos', label: 'Contatos' },
  { id: 'feedback', label: 'Feedback' },
  { id: 'faq', label: 'FAQ' },
];

function Header({ activeSection, setActiveSection }) {

    // ⚠️ Configuração do número e da mensagem do WhatsApp
    const numeroWhatsApp = "5511989316769"; 

    // Função que lida com o clique e abre o WhatsApp
    const handleWhatsAppClick = () => {
        const mensagem = "Olá! Gostaria de agendar meu *momento Nail* e saber os horários disponíveis.";
        const mensagemFormatada = encodeURIComponent(mensagem);
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;
        
        window.open(urlWhatsApp, '_blank');
    };

    // Trata o clique no menu trocando a seção ativa no App.jsx
    const handleClick = (e, id) => {
        e.preventDefault(); // Impede a alteração da URL pela âncora
        if (setActiveSection) {
            setActiveSection(id); // Atualiza a seção ativa instantaneamente
        }
    };

    return(
        <header className="flex header w-full z-10 fixed">
            <section className="flex todo spa-section active-section w-full justify-center relative">
                <article className="flex justify-center items-center absolute bg-(--fundo) shadow-(--shadow-nav) w-[95%] h-[3.2rem] rounded-2xl top-4 opacity-[.9] gap-4 md:justify-between md:px-5 md:h-20">
                    
                    {/* Logo / Título */}
                    <article className="flex items-center justify-center gap-2">
                        <h1 className="font-light text-2xl text-(--rose)"><i>EVENS</i></h1>
                        <h2 className="text-(--rose) font-bold md:hidden">EVE NAIL STUDIO</h2>
                        <picture className="md:hidden"><img src={imgStars} alt="Imagem com 3 estrelas" /></picture>
                    </article>

                    {/* Navegação Desktop */}
                    <article className="hidden md:flex md:gap-4 items-center lg:w-[80%] lg:justify-around">
                        <ul className="flex items-center text-(--rose) gap-4 font-bold">
                            {MENU_ITEMS.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <li key={item.id}>
                                        <a 
                                            href={`#${item.id}`} 
                                            onClick={(e) => handleClick(e, item.id)}
                                            className={`cursor-pointer no-underline transition-all ${
                                                isActive ? 'border-b-2 border-(--rose) opacity-100' : 'opacity-80 hover:opacity-100'
                                            }`}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Botão WhatsApp */}
                        <article className="flex justify-center items-center h-14">
                            <button 
                                onClick={handleWhatsAppClick} 
                                className="flex items-center justify-center bg-(--rose) cursor-pointer rounded-[50px] text-center text-white hover:opacity-[.7] h-full px-4 gap-2">
                                <span className="text-[.75rem] font-bold">Agende seu momento</span>
                                <picture><i className="fi fi-br-angle-right flex items-center justify-center text-[1rem] h-full"></i></picture>
                            </button>
                        </article>
                    </article>

                </article>
            </section>
        </header>
    )
}

export default Header;