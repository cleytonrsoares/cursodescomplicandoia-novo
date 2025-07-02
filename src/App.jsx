import { useState } from 'react'

function App() {
  const [currentPlan, setCurrentPlan] = useState('basico')

  const plans = {
    basico: {
      name: 'Plano Básico',
      price: 'R$ 39,99',
      installments: '3x de R$ 13,33',
      features: [
        '4 módulos completos',
        '20 aulas práticas',
        'Certificado de conclusão',
        'Suporte via WhatsApp',
        'Acesso por 6 meses'
      ]
    },
    completo: {
      name: 'Plano Completo',
      price: 'R$ 69,99',
      installments: '5x de R$ 13,99',
      features: [
        'Tudo do Plano Básico',
        '3 módulos extras',
        'Aulas sobre outras IAs',
        'Técnicas avançadas',
        'Acesso por 12 meses'
      ]
    },
    premium: {
      name: 'Plano Premium',
      price: 'R$ 99,99',
      installments: '7x de R$ 14,28',
      features: [
        'Tudo do Plano Completo',
        'Módulo futuro da IA',
        'Consultoria individual',
        'Grupo VIP no WhatsApp',
        'Acesso vitalício'
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Descomplicando IA</h1>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Inscreva-se Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Aprenda Inteligência Artificial
            <span className="text-blue-600"> aos 60+</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            O primeiro curso de IA generativa pensado especialmente para pessoas com mais de 60 anos. 
            Simples, prático e sem complicação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Começar Agora
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              Ver Demonstração
            </button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Escolha Seu Plano
          </h3>
          
          {/* Plan Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg">
              {Object.keys(plans).map((planKey) => (
                <button
                  key={planKey}
                  onClick={() => setCurrentPlan(planKey)}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    currentPlan === planKey
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {plans[planKey].name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Plan Details */}
          <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                {plans[currentPlan].name}
              </h4>
              <div className="mb-4">
                <span className="text-4xl font-bold text-blue-600">
                  {plans[currentPlan].price}
                </span>
                <p className="text-gray-600 mt-1">
                  ou {plans[currentPlan].installments}
                </p>
              </div>
              
              <ul className="text-left space-y-3 mb-8">
                {plans[currentPlan].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Escolher {plans[currentPlan].name}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que Escolher Nosso Curso?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Foco no Público 60+</h4>
              <p className="text-gray-600">
                Metodologia especialmente desenvolvida para pessoas com mais experiência de vida.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Funcionalidades de Voz</h4>
              <p className="text-gray-600">
                Aprenda a conversar com IA por voz, mais natural e acessível.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Suporte WhatsApp</h4>
              <p className="text-gray-600">
                Tire suas dúvidas diretamente pelo WhatsApp, de forma simples e rápida.
              </p>
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

