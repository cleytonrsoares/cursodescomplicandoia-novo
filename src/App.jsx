import { useState } from 'react'

function App() {
  const [selectedPlan, setSelectedPlan] = useState('completo')

  const testimonials = [
    {
      name: "Maria Silva, São Paulo",
      text: "Nunca imaginei que já usava IA! Agora converso com o ChatGPT todos os dias e impressiono meus netos!",
      rating: 5
    },
    {
      name: "João Santos, Rio de Janeiro", 
      text: "A IAsmim me ensinou de um jeito tão simples que até eu entendi! Agora sou o 'vovô tech' da família.",
      rating: 5
    }
  ]

  const plans = [
    {
      id: 'basico',
      name: 'Básico',
      price: 196,
      installments: '10x R$ 23,56',
      description: 'Ideal para começar',
      features: [
        'Acesso ao curso completo (7 módulos)',
        'Aulas via WhatsApp com a IAsmim',
        'Suporte humano por email',
        'Acesso ao curso por 12 semanas'
      ]
    },
    {
      id: 'completo',
      name: 'Completo',
      price: 294,
      installments: '10x R$ 35,33',
      originalPrice: 497,
      description: 'Mais escolhido',
      popular: true,
      features: [
        'Tudo do Plano Básico',
        'Laboratório prático com IAs',
        'ChatGPT integrado ao WhatsApp durante o curso',
        'Suporte humano por email e whatsapp',
        'Certificado digital de conclusão do curso',
        'Acesso ao curso por 52 semanas'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 490,
      installments: '10x R$ 58,89',
      originalPrice: 797,
      description: 'Experiência completa',
      features: [
        'Tudo do Plano Completo',
        'Acesso antecipado a novidades',
        'Acesso a 1 aula de monetização com IA (com mentor)',
        'Certificador digital e físico de conclusão do curso',
        'Acesso vitalício ao curso'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-lg sm:text-2xl font-bold text-gray-900">Descomplicando IA</span>
            </div>
            <span className="text-xs sm:text-base px-2 py-1 sm:px-4 sm:py-2 whitespace-nowrap bg-gray-100 text-gray-800 border border-gray-200 rounded-full">
              🔥 Oferta Especial
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="mb-6 sm:mb-8 bg-green-100 text-green-800 border border-green-200 text-sm sm:text-lg px-3 py-2 sm:px-6 sm:py-3 mx-auto block w-fit rounded-full">
            ✨ Primeiro curso de IA do Brasil 100% no WhatsApp
          </span>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
            Chegou a hora de você{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              dominar IA!
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
            O único curso que ensina Inteligência Artificial de forma simples, divertida e direto no seu WhatsApp. 
            Sem complicação, sem termos técnicos, só descobertas incríveis!
          </p>

          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-2">
            <button 
              className="text-lg sm:text-xl px-8 py-6 sm:px-12 sm:py-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto text-white rounded-lg font-semibold transition-all duration-200 cursor-pointer"
              onClick={() => {
                document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              🚀 Quero Começar Agora
            </button>
            <div className="flex items-center text-gray-600 text-base sm:text-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <span>Não perca tempo - faça como dezenas de pessoas: inscreva-se!</span>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="bg-gray-900 rounded-2xl sm:rounded-3xl aspect-video max-w-4xl mx-auto flex items-center justify-center mb-8 sm:mb-12">
            <div className="text-center text-white px-4">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <div className="w-0 h-0 border-l-8 sm:border-l-10 border-l-white border-y-6 sm:border-y-8 border-y-transparent ml-1"></div>
              </div>
              <p className="text-lg sm:text-xl">Vídeo: Conheça a IAsmim e o Método Revolucionário</p>
              <p className="text-sm sm:text-base text-gray-300 mt-2 sm:mt-3">3 minutos que vão mudar sua visão sobre tecnologia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-8 px-2">
              Você já se sentiu assim?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Medo da Tecnologia */}
            <div className="border border-red-200 bg-red-50 p-4 sm:p-6 rounded-lg">
              <div className="pt-4 sm:pt-6">
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-red-800 text-center">
                    Medo da Tecnologia
                  </h3>
                  <div className="w-full">
                    <img 
                      src="./images/idoso-medo-tecnologia.jpg" 
                      alt="Pessoa idosa confusa olhando para computador"
                      className="w-full h-40 sm:h-48 object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg text-center">
                    "IA é muito complicado para mim. Isso é coisa de jovem."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sentimento de Exclusão */}
            <div className="border border-orange-200 bg-orange-50 p-4 sm:p-6 rounded-lg">
              <div className="pt-4 sm:pt-6">
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-orange-800 text-center">
                    Sentimento de Exclusão
                  </h3>
                  <div className="w-full">
                    <img 
                      src="./images/idoso-sozinho-banco.jpg" 
                      alt="Pessoa idosa sozinha em banco de praça"
                      className="w-full h-40 sm:h-48 object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg text-center">
                    "Todo mundo fala de ChatGPT, mas eu não entendo nada."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Não Sabe Por Onde Começar */}
            <div className="border border-yellow-200 bg-yellow-50 p-4 sm:p-6 rounded-lg">
              <div className="pt-4 sm:pt-6">
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-yellow-800 text-center">
                    Não Sabe Por Onde Começar
                  </h3>
                  <div className="w-full">
                    <img 
                      src="./images/idosa-confusa.jpg" 
                      alt="Pessoa idosa confusa e em dúvida"
                      className="w-full h-40 sm:h-48 object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg text-center">
                    "Quero aprender, mas os cursos são muito técnicos."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 px-2">
              A Solução que Você Estava Esperando!
            </h2>
            <p className="text-lg sm:text-2xl opacity-90 max-w-4xl mx-auto px-2">
              Conheça a IAsmim, sua assistente virtual que vai te ensinar IA de forma simples e divertida!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <img 
                    src="./images/iasmim.png" 
                    alt="IAsmim - Sua assistente virtual especializada em IA"
                    className="w-full sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain max-w-[85%] mx-auto sm:max-w-none"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Conheça a IAsmim</h3>
                <p className="text-lg sm:text-xl opacity-90 text-center">
                  "Oi! Eu sou a IAsmim, sua assistente virtual especializada em ensinar IA de forma simples! 
                  Vou te mostrar que você já usa inteligência artificial há anos sem saber, e te ensinar muito mais!"
                </p>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 sm:mt-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">100% no WhatsApp</h4>
                  <p className="opacity-90 text-base sm:text-lg">Aprenda onde você já se sente confortável. Sem apps complicados!</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 sm:mt-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">Linguagem Simples</h4>
                  <p className="opacity-90 text-base sm:text-lg">Sem termos técnicos. Como uma conversa com uma amiga querida.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 sm:mt-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">Método "Descoberta"</h4>
                  <p className="opacity-90 text-lg">Não é estudo chato. São descobertas incríveis sobre o que você já faz!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section - Pessoas felizes com tecnologia */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="./images/idosos-neta-computador.jpg" 
                alt="Avós aprendendo tecnologia com neta" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Aprender Nunca Foi Tão Divertido!
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Junte-se a milhares de pessoas que descobriram que tecnologia pode ser simples, 
                divertida e uma ótima forma de se conectar com a família!
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Nossos alunos não apenas aprendem IA - eles se tornam os "experts" da família 
                e ensinam os próprios netos!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              O que Você Vai Descobrir
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              7 módulos repletos de descobertas que vão transformar sua relação com a tecnologia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Módulo 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-blue-600 font-semibold text-lg">Módulo 1</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Descobrindo que Já Sou Tech!</h3>
                <p className="text-gray-600 text-lg">Revelação: você já usa IA no Google, WhatsApp, GPS...</p>
              </div>
            </div>

            {/* Módulo 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-purple-600 font-semibold text-lg">Módulo 2</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Laboratório de IA</h3>
                <p className="text-gray-600 text-lg">Experimente ChatGPT, Claude e Manus na prática</p>
              </div>
            </div>

            {/* Módulo 3 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-green-600 font-semibold text-lg">Módulo 3</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">IA que "Vê" Fotos</h3>
                <p className="text-gray-600 text-lg">Tire foto de qualquer coisa e pergunte o que é</p>
              </div>
            </div>

            {/* Módulo 4 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-yellow-600 font-semibold text-lg">Módulo 4</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">IA no Meu Dia a Dia</h3>
                <p className="text-gray-600 text-lg">Organize vida, saúde, finanças com IA</p>
              </div>
            </div>

            {/* Módulo 5 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-red-600 font-semibold text-lg">Módulo 5</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">IA que Cria Conteúdo</h3>
                <p className="text-gray-600 text-lg">Textos, emails, mensagens perfeitas</p>
              </div>
            </div>

            {/* Módulo 6 */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl border border-indigo-200">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-indigo-600 font-semibold text-lg">Módulo 6</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">IA Segura e Ética</h3>
                <p className="text-gray-600 text-lg">Use IA com segurança e responsabilidade</p>
              </div>
            </div>

            {/* Módulo 7 */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl border border-pink-200 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-pink-600 font-semibold text-lg">Módulo 7</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Futuro da IA</h3>
                <p className="text-gray-600 text-lg">Prepare-se para as próximas novidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              O que Nossos Alunos Dizem
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-lg mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Escolha Seu Plano
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Metodologia especialmente desenvolvida para pessoas com mais experiência de vida.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 bg-white'
                } ${selectedPlan === plan.id ? 'ring-4 ring-blue-200' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Mais Escolhido
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  {plan.originalPrice && (
                    <p className="text-lg text-gray-400 line-through mb-2">
                      De R$ {plan.originalPrice}
                    </p>
                  )}
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                    <span className="text-gray-600"> à vista</span>
                  </div>
                  
                  <p className="text-xl text-blue-600 font-semibold">
                    ou {plan.installments}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                  onClick={() => {
                    setSelectedPlan(plan.id);
                    window.open('https://pay.kiwify.com.br/BPJAAN2', '_blank');
                  }}
                >
                  Começar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Preciso saber usar computador?
              </h3>
              <p className="text-gray-600">
                Não! O curso é 100% pelo WhatsApp. Se você já usa WhatsApp, já tem tudo que precisa para aprender IA.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                É muito difícil para minha idade?
              </h3>
              <p className="text-gray-600">
                Pelo contrário! O curso foi criado especialmente para pessoas com mais experiência de vida. Usamos linguagem simples e exemplos do dia a dia.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quanto tempo por dia preciso dedicar?
              </h3>
              <p className="text-gray-600">
                Apenas 10-15 minutos por dia. As aulas são curtas e você pode fazer no seu ritmo, quando quiser.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                E se eu não conseguir acompanhar?
              </h3>
              <p className="text-gray-600">
                Temos suporte humano para te ajudar sempre que precisar. Além disso, você pode repetir as aulas quantas vezes quiser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Pronto para Descobrir o Mundo da IA?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Junte-se a centenas de pessoas que já descobriram como a IA pode facilitar suas vidas!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="bg-white text-blue-600 px-12 py-6 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all duration-200"
              onClick={() => window.open('https://pay.kiwify.com.br/BPJAAN2', '_blank')}
            >
              🚀 Começar Agora
            </button>
            
            <div className="text-center sm:text-left">
              <p className="text-lg opacity-90">💳 Parcelamento em até 10x</p>
              <p className="text-lg opacity-90">🔒 Compra 100% segura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-lg">
            <p>&copy; 2024 Descomplicando IA. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">CLEYTON RIBEIRO SOARES SERVIÇOS ADMINISTRATIVOS - CNPJ: 09.640.600/0001-99</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

