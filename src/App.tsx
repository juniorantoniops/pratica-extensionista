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
          <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2">
            Participar da Pesquisa
            <ArrowRight className="w-4 h-4" />
          </button>
        </nav>
      </header>

      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <GraduationCap className="w-4 h-4" />
                Projeto de Extensão Universitária
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Da Aposta ao <span className="text-emerald-600">Investimento</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Combater a desigualdade social através da educação financeira: compreendendo por que pessoas de baixa renda escolhem apostas em vez de investimentos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Responder Pesquisa
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                    <TrendingDown className="w-10 h-10 text-red-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Casas de Apostas</p>
                      <p className="text-sm text-gray-600">Retorno médio: -15% a -30%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <BarChart3 className="w-10 h-10 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Investimentos</p>
                      <p className="text-sm text-gray-600">Retorno médio: +10% a +15% ao ano</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que é o Projeto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma iniciativa para entender e combater a falta de educação financeira que perpetua a desigualdade social
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nosso Objetivo</h3>
              <p className="text-gray-700 leading-relaxed">
                Investigar como a ausência de conhecimento sobre investimentos leva populações vulneráveis a recorrerem às casas de apostas como tentativa de melhoria financeira, perpetuando um ciclo de perdas e desigualdade.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Abordagem</h3>
              <p className="text-gray-700 leading-relaxed">
                Através de pesquisa quantitativa e qualitativa, mapeamos o conhecimento financeiro da população, identificando barreiras educacionais e propondo estratégias de inclusão financeira que promovam mobilidade social.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <div className="bg-amber-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impacto Social</h3>
              <p className="text-gray-700 leading-relaxed">
                Educação financeira é uma ferramenta de empoderamento. Ao democratizar o conhecimento sobre investimentos, contribuímos para reduzir a desigualdade e oferecer alternativas reais de construção de patrimônio para todas as classes sociais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dados e Estatísticas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Números que revelam a urgência da educação financeira no Brasil
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">52%</div>
              <p className="text-gray-600 font-semibold">da população brasileira é inadimplente</p>
              <p className="text-sm text-gray-500 mt-2">Fonte: Serasa, 2024</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">R$ 100bi</div>
              <p className="text-gray-600 font-semibold">movimentados em apostas online em 2023</p>
              <p className="text-sm text-gray-500 mt-2">Fonte: Banco Central</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">71%</div>
              <p className="text-gray-600 font-semibold">dos brasileiros não têm educação financeira básica</p>
              <p className="text-sm text-gray-500 mt-2">Fonte: S&P Global, 2023</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">3%</div>
              <p className="text-gray-600 font-semibold">da população de baixa renda investe</p>
              <p className="text-sm text-gray-500 mt-2">Fonte: B3, 2024</p>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">O Ciclo da Desigualdade</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <p className="text-gray-700"><span className="font-semibold">Falta de educação financeira</span> nas escolas e famílias de baixa renda</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <p className="text-gray-700"><span className="font-semibold">Desconhecimento sobre investimentos</span> acessíveis e seguros</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <p className="text-gray-700"><span className="font-semibold">Busca por ganhos rápidos</span> através de apostas e jogos de azar</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <p className="text-gray-700"><span className="font-semibold">Perdas financeiras</span> que agravam a situação de vulnerabilidade</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Comparativo de Retorno (10 anos)</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-semibold">Apostas Esportivas</span>
                      <span className="text-red-600 font-bold">-R$ 5.000</span>
                    </div>
                    <div className="bg-red-200 h-3 rounded-full w-full"></div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-semibold">Poupança</span>
                      <span className="text-amber-600 font-bold">+R$ 2.100</span>
                    </div>
                    <div className="bg-amber-300 h-3 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-semibold">Tesouro Direto</span>
                      <span className="text-emerald-600 font-bold">+R$ 6.800</span>
                    </div>
                    <div className="bg-emerald-400 h-3 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-semibold">Fundos de Índice</span>
                      <span className="text-blue-600 font-bold">+R$ 9.200</span>
                    </div>
                    <div className="bg-blue-400 h-3 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">*Simulação com aporte mensal de R$ 100</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como Conscientizar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estratégias para promover educação financeira e reduzir desigualdades
            </p>
          </div>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Alternativas às Apostas</h3>
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
            Sua participação é fundamental para entendermos como a falta de educação financeira impacta diferentes grupos sociais. Este estudo subsidiará políticas públicas e iniciativas de inclusão financeira.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-6 text-left">
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
                  <p className="text-sm text-gray-300">Apenas 5-7 minutos para completar o formulário</p>
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
              <div className="flex items-start gap-3">
                <div className="bg-emerald-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Resultados Publicados</h4>
                  <p className="text-sm text-gray-300">Acesso aos resultados finais da pesquisa</p>
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
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-8 h-8 text-emerald-600" />
                <span className="text-xl font-bold text-white">Educar para Transformar</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Projeto de extensão universitária dedicado a combater a desigualdade social através da democratização do conhecimento sobre investimentos e educação financeira.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Instituição</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Universidade [Nome]</li>
                <li>Departamento de [Área]</li>
                <li>Coordenação de Extensão</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>projeto@universidade.edu.br</li>
                <li>(00) 0000-0000</li>
                <li className="pt-2 flex gap-3">
                  <a href="#" className="hover:text-emerald-600 transition-colors">Instagram</a>
                  <a href="#" className="hover:text-emerald-600 transition-colors">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Educar para Transformar. Projeto de Extensão Universitária.</p>
            <p className="mt-2">Desenvolvido com o objetivo de promover justiça social através da educação financeira.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
