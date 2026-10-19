
import emailjs from '@emailjs/browser'

export default function TesteEmail() {
  async function testarEnvio() {
    try {
      const resultado = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nome: 'Cliente de teste',
          experiencia: 'Muito satisfatória',
          nota: '5',
          comentarios: 'Teste do formulário EVE Nail Studio',
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )

      console.log('E-mail enviado:', resultado.status)
      alert('Teste enviado com sucesso!')
    } catch (erro) {
      console.error('Erro ao enviar:', erro)
      alert('Falha no envio. Confira o Console.')
    }
  }

  return (
    <button type="button" onClick={testarEnvio}>
      Testar envio de e-mail
    </button>
  )
}
