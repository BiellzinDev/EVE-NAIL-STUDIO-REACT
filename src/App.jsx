import { useState, useEffect } from 'react'
import Header from './Header.jsx'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Studio from './Studio.jsx'
import Service from './Service.jsx'
import Faq from './Faq.jsx'
import Contato from './Contato.jsx'
import Feedback from './Feedback.jsx'
import Footer from './Footer.jsx'
import './index.css'

function App() {
  // Inicializamos com 'hero', que é o id correspondente à Home na Nav
  const [activeSection, setActiveSection] = useState('hero');

  // Rola suavemente até o topo ao alternar de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ⚠️ CORRIGIDO: Agora passamos as props para o Header também! */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className='flex flex-col items-center justify-center bg-(--fundo) w-full flex-1 overflow-x-hidden'>
        {activeSection === 'hero' && <Home />}
        {activeSection === 'studio' && <Studio />}
        {activeSection === 'servico' && <Service />}
        {activeSection === 'contatos' && <Contato />}
        {activeSection === 'feedback' && <Feedback />}
        {activeSection === 'faq' && <Faq />}
      </main>

      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />

      <Footer/>
    </div>
  );
}

export default App;