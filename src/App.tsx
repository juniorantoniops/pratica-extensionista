import { TrendingDown, GraduationCap, DollarSign, Users, BarChart3, ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-900">Educar para Transformar</span>
          </div>
          <button ref="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAARicUhlUNFdEWkRaRDZPSUZPVUlRRVJETU9JMTFaMC4u" className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2">
            Participar da Pesquisa
            <ArrowRight className="w-4 h-4" />
          </button>
        </nav>
      </header>

      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <GraduationCap className="w-4 h-4" />
                Projeto de Extensão Universitária
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                A Educação e o <span className="text-emerald-600">Investimento</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Compreender diferentes contextos e como impactam as decisões financeiras, ouvindo experiências e mapeando motivações do dia a dia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Responder Pesquisa
                  <ChevronRight className="w-5 h-5" />
                </button>
                <a href="#sobre" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all inline-flex items-center justify-center">
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">O que é o Projeto</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Este é uma pesquisa da prática extensionista da faculdade que busca compreender, como a desigualdade social e o acesso à informação impactam a educação financeira e influenciam escolhas sobre o uso do dinheiro (investimentos, apostas, cripto e outras). O objetivo é reunir dados e relatos para produzir materiais claros e acessíveis que apoiem decisões mais informadas, independentemente da realidade de cada pessoa.
          </p>
        </div>
      </section>


      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pilares da Educação Financeira</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Conhecimento Básico</h4>
                    <p className="text-gray-600">Ensinar conceitos fundamentais como juros compostos, inflação, diversificação e perfil de risco. Capacitar para decisões financeiras informadas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Acesso Democrático</h4>
                    <p className="text-gray-600">Desmistificar investimentos mostrando que é possível começar com valores baixos. Plataformas digitais democratizaram o acesso ao mercado financeiro.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Proteção e Segurança</h4>
                    <p className="text-gray-600">Orientar sobre investimentos regulados pela CVM e garantidos pelo FGC. Alertar sobre esquemas fraudulentos e promessas de ganhos irreais.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Alternativas de Investimento</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">Tesouro Direto</h4>
                  <p className="text-gray-600 text-sm mb-2">Investimento do governo brasileiro com rendimento garantido</p>
                  <p className="text-emerald-600 font-semibold text-sm">A partir de R$ 30 | Risco baixíssimo</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">CDB e LCI/LCA</h4>
                  <p className="text-gray-600 text-sm mb-2">Títulos de renda fixa com proteção do FGC</p>
                  <p className="text-emerald-600 font-semibold text-sm">A partir de R$ 100 | Risco baixo</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">Fundos de Investimento</h4>
                  <p className="text-gray-600 text-sm mb-2">Gestão profissional e diversificação automática</p>
                  <p className="text-emerald-600 font-semibold text-sm">A partir de R$ 50 | Risco moderado</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">Ações (B3)</h4>
                  <p className="text-gray-600 text-sm mb-2">Participação em empresas com potencial de valorização</p>
                  <p className="text-emerald-600 font-semibold text-sm">A partir de R$ 10 | Risco variável</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">O Impacto da Educação Financeira</h3>
            <p className="text-lg text-emerald-50 max-w-4xl mx-auto mb-8">
              Quando pessoas de todas as classes sociais têm acesso ao conhecimento sobre investimentos, não apenas constroem patrimônio individual, mas contribuem para uma sociedade mais justa e equilibrada. A educação financeira é uma ponte para a mobilidade social e a redução das desigualdades estruturais que afetam milhões de brasileiros.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-3xl font-bold mb-2">+68%</p>
                <p className="text-emerald-50">Aumento na poupança familiar com educação financeira</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-3xl font-bold mb-2">-42%</p>
                <p className="text-emerald-50">Redução de endividamento em comunidades educadas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-3xl font-bold mb-2">5x</p>
                <p className="text-emerald-50">Mais chances de ascensão social com educação financeira</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Participe da Pesquisa</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Sua participação é essencial para entendermos, como diferentes realidades influenciam a educação financeira e as decisões sobre o dinheiro. Esta é uma pesquisa de prática extensionista da faculdade.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">100% Anônimo</h4>
                  <p className="text-sm text-gray-300">Seus dados são confidenciais e não serão compartilhados</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-emerald-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Rápido e Fácil</h4>
                  <p className="text-sm text-gray-300">Apenas 2 minutos para completar o formulário</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-emerald-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Impacto Social</h4>
                  <p className="text-sm text-gray-300">Contribua para pesquisa científica sobre desigualdade</p>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-2xl hover:shadow-emerald-500/50 inline-flex items-center gap-3">
            Responder o Formulário Agora
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-gray-400 text-sm mt-6">
            Ao participar, você está concordando com os termos de pesquisa acadêmica e uso de dados anonimizados
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-8 h-8 text-emerald-600" />
                <span className="text-xl font-bold text-white">Educar para Transformar</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Compreender diferentes contextos e como impactam as decisões financeiras, ouvindo experiências e mapeando motivações do dia a dia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Instituição</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Faculdade UniAnchieta</li>
                <li>Ciência da Computação</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Educar para Transformar. Projeto de Extensão Universitária.</p>
            <p className="mt-2">Desenvolvido para fins de pesquisa sobre como a desigualdade social impacta na educação financeira.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
