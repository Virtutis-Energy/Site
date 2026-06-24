export const ptBRTranslations = {
  common: {
    home: 'Home',
    about: 'Sobre nós',
    clients: 'Clientes',
    investors: 'Investidores',
    associate: 'Associado',
    contact: 'Fale Conosco',
    privacy: 'Política de Privacidade',
    workWithUs: 'Trabalhe Conosco',
    signUp: 'Cadastro',
    submit: 'Cadastrar-se',
    sending: 'Enviando...',
    successMessage: 'Cadastro realizado com sucesso!',
    usefulLinks: 'Links úteis',
    address: 'Endereço',
    allRightsReserved: 'Todos os direitos reservados',
    learnMore: 'Saiba mais',
    openAccount: 'Abra sua conta',
    monthLabel: (month: number) => `Mês ${month}`,
    portuguese: 'PT',
    english: 'ENG',
  },
  header: {
    downloadApp: 'Baixe o App',
    whatsappText:
      'https://wa.me/5585984831512?text=Hello%2C%20I%20would%20like%20to%20download%20the%20Virtutis%20Energy%20app%21',
    languageSwitcherLabel: 'Idioma',
  },
  footer: {
    addressLine1: 'Av. Humberto Monte s/n',
    addressLine2: 'Bloco 334 - Condomínio de Empreendedorismo e Inovação',
    addressLine3: 'Campus do Pici - Universidade Federal do Ceará',
    addressLine4: 'Pici, Fortaleza - CE. CEP: 60440-593',
    taxId: '40.121.761/0001-16',
  },
  home: {
    heroTitle: 'Virtutis Energy',
    heroSubtitle: 'Gerando a Melhor Energia!',
    heroText:
      'Soluções em energia renovável para quem quer economizar na conta de luz e investir em usinas fotovoltaicas com retorno mensal.',
    aboutTitle: 'Sobre a Virtutis Energy',
    aboutText:
      'A Virtutis Energy é uma fintech global com atuação internacional, conectando tecnologia, energia e serviços financeiros para operar em vários continentes e expandir sua presença em mercados estratégicos.',
    openAccountTitle: 'Abra sua conta',
    openAccountText:
      'Se você está interessado em reduzir seus custos com eletricidade ou investir em energia renovável, a Virtutis Energy é a escolha certa. Queremos conhecê-lo melhor e ajudá-lo a aproveitar nossas soluções inovadoras. Preencha o formulário com seus dados, e nossa equipe entrará em contato com você para discutir como podemos atender às suas necessidades.',
    openAccountNote:
      'Ao fazer o cadastro, o usuário terá acesso a nossas propostas de locação e investimento em usinas.',
    formTitle: 'Realize seu Cadastro',
    customerTab: 'Cliente',
    investorTab: 'Investidor',
    associateTab: 'Associado',
    customerFeatureTitle: 'Economia para o Cliente',
    customerFeatureText1:
      'A Virtutis Energy é uma fintech de energia solar que desenvolve, gerencia e aluga usinas fotovoltaicas próprias. Oferecemos redução de custos com energia elétrica para nossos clientes, sem a necessidade de que eles paguem pela construção e manutenção de placas solares. Além disso, proporcionamos aos investidores a oportunidade de participar do desenvolvimento dos sistemas de geração de energia, oferecendo-lhes participação nos lucros oriundos da locação das usinas.',
    customerFeatureText2:
      'Com a Virtutis Energy, você aproveita uma solução sustentável que combina economia, rentabilidade e impacto positivo no meio ambiente. Junte-se a nós e faça parte do futuro da energia renovável!',
    investorFeatureTitle: 'Turbine seus Investimentos',
    investorFeatureText:
      'Invista em nossas usinas fotovoltaicas e desfrute de uma rentabilidade de até 2,35% ao mês. Com a Virtutis Energy, você garante economia e rentabilidade em um só lugar. Potencialize seus investimentos e faça parte do futuro da energia renovável!',
    associateFeatureTitle: 'Faça parte como Associado',
    associateFeatureText:
      'Como associado da Virtutis Energy, você participa do desenvolvimento de projetos de energia renovável, contribui com rotinas estratégicas e acompanha de perto a expansão das nossas usinas fotovoltaicas. É uma oportunidade para aprender, colaborar com equipes multidisciplinares e gerar impacto positivo no setor de energia sustentável.',
  },
  associatePage: {
    title: 'Associado',
    headline: 'Área do Associado',
    body:
      'O associado acompanha a operação por níveis de usina e por faixas de potência. A página resume como potência, locação, emissão de Vitis e faturamento se conectam, sem expor toda a composição financeira em detalhes.',
    feature1Title: 'Níveis de usina',
    feature1Text:
      'Os níveis 1, 2 e 3 representam faixas progressivas de participação, com referência financeira crescente para cada etapa.',
    feature2Title: 'Potências disponíveis',
    feature2Text:
      'As usinas são apresentadas nas potências de 20 kW, 40 kW e 60 kW, mantendo proporção operacional entre capacidade, locação e emissão de Vitis.',
    feature3Title: 'Locação e Vitis',
    feature3Text:
      'A locação segue uma base proporcional à potência escolhida, enquanto os proventos acompanham a quantidade de Vitis emitida por cada faixa.',
    feature4Title: 'Faturamento do associado',
    feature4Text:
      'O faturamento estimado combina potência e nível selecionados, usando a base operacional definida para a simulação.',
    plantsTitle: 'Potências e Níveis',
    plantsText:
      'Escolha uma potência para visualizar uma simulação resumida. Os cards mostram apenas a lógica principal de cada faixa, sem abrir todos os valores de composição.',
    plantLabel: 'Usina',
    plantDescription: (power: string) =>
      `Faixa operacional de ${power}, vinculada aos níveis de usinas 1, 2 e 3 da área do associado.`,
    referenceValue: 'Resumo:',
    choosePlant: 'Selecionar usina',
    calculatorTitle: 'Simulação do associado',
    calculatorText:
      'Selecione uma potência e um nível para visualizar um resumo básico da operação do associado.',
    baseLeaseLabel: 'Locação:',
    baseLeaseText: 'opções disponíveis para as faixas de potência da usina.',
    baseLevelLabel: 'Níveis:',
    baseLevelText: 'níveis 1, 2 e 3 disponíveis para o associado.',
    currentPlantLabel: 'Usina atual:',
    selectedPlant: 'Selecione a usina',
    selectPlantGuidance:
      'Sem a API do servidor configurada, a área usa a referência local das usinas para manter a leitura da operação do associado.',
    associateLevel: 'Nível da usina',
    leasedEnergy: 'Potência e emissão',
    powerSummary: (power: number, vitis: number) => `${power} kW com emissão de ${vitis} Vitis`,
    levelLabel: (level: number) => `Nível ${level}`,
    leaseRevenue: 'Aluguel estimado',
    vitisRevenue: 'Proventos',
    levelRevenue: 'Faturamento',
    managementFee: 'Taxa de gestão',
    managementFeePending: 'Em definição',
    backendConfigError:
      'A API do servidor nao está configurada. As usinas exibidas abaixo estao usando a referência local da página do associado.',
    service1Title: 'Locações',
    service1Text:
      'A locação acompanha a potência contratada e mantém a proporção entre as faixas de 20 kW, 40 kW e 60 kW.',
    service2Title: 'Pagamentos',
    service2Text:
      'Os proventos são estimados pela emissão de Vitis de cada potência, usando a referência unitária definida para a simulação.',
    service3Title: 'Operação',
    service3Text:
      'A taxa de gerenciamento da usina permanece como informação temporária até a definição final da regra operacional.',
  },
  forms: {
    cpfCnpj: 'CPF/CNPJ',
    cpf: 'CPF',
    name: 'Nome',
    email: 'Email',
    phone: 'Telefone',
  },
  aboutPage: {
    title: 'Sobre nós',
    since: 'Desde 2020',
    story: 'Uma fintech global em expansão',
    intro:
      'A Virtutis Energy é uma fintech global que integra tecnologia, operação e inteligência de mercado para entregar soluções escaláveis em diferentes países. Nossa apresentação institucional reflete essa visão: uma empresa construída para crescer além das fronteiras e conectar oportunidades em vários continentes.',
    bullet1: 'Atuação internacional com presença em mercados da América, Europa, Ásia, África e Oceania',
    bullet2: 'Expansão estruturada com foco em escala, tecnologia e relacionamento local',
    bullet3: 'Aplicativo e operação preparados para atender usuários em múltiplos países',
    body:
      'Hoje, a Virtutis posiciona sua marca como uma fintech com vocação global, capaz de operar com consistência institucional, leitura de contexto regional e visão de longo prazo. Nossa proposta é consolidar uma presença internacional sólida, com comunicação unificada, experiência digital consistente e capacidade de expansão em mercados estratégicos.',
    footprint:
      'Nosso aplicativo acompanha essa presença internacional e reforça a atuação da Virtutis entre diferentes países. O ecossistema da marca já dialoga com operações e oportunidades na África do Sul, Bélgica, Chile, Portugal, Colômbia, Brasil, Estados Unidos, Hong Kong, Macau, China, Singapura e Austrália.',
    stat1Value: '5',
    stat1Label: 'continentes com presença estratégica',
    stat2Value: '12',
    stat2Label: 'países destacados no mapa global',
    stat3Value: '1',
    stat3Label: 'aplicativo conectando mercados internacionais',
  },
  clientsPage: {
    title: 'Clientes',
    question: 'Qual o valor médio que você costuma pagar em sua conta de energia?',
    billPlaceholder: 'Digite o valor da conta',
    calculate: 'Calcular',
    economyResult: (value: string) => `Economia de aproximadamente R$ ${value} por mês!`,
    calculationError: 'Erro ao calcular.',
    serverError: 'Erro ao conectar com o servidor.',
    feature1Title: 'Redução dos gastos',
    feature1Text:
      'Redução dos gastos com Energia Elétrica, a partir da contabilização de créditos de energia gerados pela usina alugada.',
    feature2Title: 'Sem Burocracia',
    feature2Text:
      'Nenhuma burocracia na construção de usinas próprias, toda a construção e jurisdição é responsabilidade da Virtutis Energy.',
    feature3Title: 'Aluguel de Espaços',
    feature3Text:
      'Explore locais alugados para implementar sistemas de geração de energia renovável, promovendo sustentabilidade e eficiência.',
    feature4Title: 'Oportunidades em Locais Ideais',
    feature4Text:
      'Descubra oportunidades em locais estratégicos alugados para construção de usinas, impulsionando a produção energética sustentável.',
    service1Title: 'Economia de até 30%',
    service1Text:
      'Ao optar pelas nossas usinas fotovoltaicas, você pode reduzir seus gastos com energia elétrica em até 30%, obtendo assim vantagens no uso da nossa energia solar.',
    service2Title: 'Contratação Online',
    service2Text:
      'Interessados em ser Clientes e/ou Investidores precisam se cadastrar em nossa base de dados. A partir desse cadastramento, nosso Setor Comercial entrará em contato para proceder com todo o funcionamento da usina e aquisição de Vitis.',
    service3Title: 'Sem Obras',
    service3Text:
      'Com a Virtutis Energy, garantimos a tranquilidade sem preocupações com obras ou instalações elétricas. Nossas Usinas Fotovoltaicas oferecem condições ideais para investidores e clientes, atendendo a diversas demandas de energia com eficiência.',
    service4Title: 'Sem Fidelização',
    service4Text:
      'Oferecemos liberdade total aos investidores da Virtutis Energy. Você pode retirar seu investimento nos Vitis a qualquer momento, sem a necessidade de esperar os 20 anos. Ao investir, você recebe bonificações, porém ao realizar a retirada, as bonificações são canceladas.',
    service5Title: 'Primeira Mensalidade GRÁTIS',
    service5Text:
      'Garantimos a nossos clientes a primeira mensalidade gratuita, sendo assim uma oportunidade perfeita para conhecer melhor nossos produtos e serviços.',
  },
  investorsPage: {
    title: 'Investidores',
    headline: 'Venha ser Investidor Virtutis Energy',
    vitisTitle: 'Como funcionam os Vitis?',
    vitisText:
      'Os Vitis são notas comerciais emitidas pelas usinas da Virtutis Energy, proporcionando uma rentabilidade de até 2,35% a.m., em proventos mensais. Com os Vitis, os investidores desfrutam de total liberdade para realizar aportes e cessões conforme desejarem, maximizando sua flexibilidade financeira!',
    levelsTitle: 'Como ler os níveis de usina',
    levelsIntro:
      'Os níveis de usina organizam a operação do investimento em faixas progressivas. Eles ajudam a entender como porte da usina, quantidade de Vitis e horizonte de retorno se relacionam dentro da proposta apresentada ao investidor.',
    level1Title: 'Nível 1',
    level1Text:
      'O nível 1 representa a porta de entrada para a leitura da usina. Ele funciona como uma referência inicial para quem deseja visualizar a dinâmica do investimento com uma base mais enxuta de participação.',
    level2Title: 'Nível 2',
    level2Text:
      'O nível 2 amplia essa referência e indica uma faixa intermediária de operação. Nessa etapa, o investidor consegue comparar melhor a evolução entre volume aportado, emissão de Vitis e projeção de rendimento.',
    level3Title: 'Nível 3',
    level3Text:
      'O nível 3 corresponde à faixa mais robusta dentro da estrutura comparativa da usina. Ele serve para leitura de cenários com maior intensidade operacional, oferecendo uma visão mais ampla da capacidade da usina e do potencial acumulado ao longo do período escolhido.',
    levelsGuidance:
      'Na prática, os níveis não devem ser lidos isoladamente. O ideal é observar o nível em conjunto com a usina selecionada, a quantidade de Vitis e o prazo da simulação, porque é essa combinação que dá contexto real ao resultado estimado.',
    simulatePrompt: 'Faça aqui sua simulação',
    selectPlant: 'Selecione a usina',
    selectPlantGuidance:
      'Escolha primeiro uma usina para liberar a simulação e comparar os níveis dentro da faixa operacional correspondente.',
    analysisTitle: 'Análise de Investimento',
    investedValue: 'Valor Investido',
    quantity: 'Quantidade de Vitis',
    period: 'Período (em meses)',
    plantLevel: 'Nível da usina',
    levelOption: (level: number) => `Nível ${level}`,
    backendConfigError:
      'A API do servidor nao esta configurada. Configure a API para carregar usinas, validar cupom e calcular o investimento.',
    coupon: 'Cupom de Desconto',
    optional: 'Opcional',
    validating: 'Validando...',
    validCoupon: 'Cupom válido!',
    invalidCoupon: 'Cupom inválido',
    simulateButton: 'Simular Investimento',
    accumulatedYield: 'Proventos Acumulados',
    finalDate: 'Data Final',
    chartTitle: 'Evolução Mensal do Rendimento',
    chartDataset: 'Rendimento total',
    chartYAxis: 'Rendimento Acumulado (R$)',
    chartXAxis: 'Meses',
    fillFieldsAlert: 'Preencha todos os campos corretamente.',
    errorPrefix: 'Erro',
    serverError: 'Erro ao se comunicar com o servidor.',
  },
  signUpPage: {
    title: 'Cadastro',
    formTitle: 'Realize seu Cadastro',
    whatsapp: 'WhatsApp',
  },
  workWithUsPage: {
    title: 'Trabalhe Conosco',
    branch: 'Filial VE.1 - Ceará',
    headOffice: 'Matriz',
    subdivisions: 'Subdivisões (pode selecionar mais de uma):',
    loadingSubdivisions: 'Carregando subdivisões...',
    learnMore: 'Saiba mais sobre o Trabalho Conosco',
    branchAddress: 'Av. Humberto Monte s/n, Fortaleza, CE',
    headOfficeAddress: 'Av. Barão de Studart, 1980 - Aldeota, Fortaleza - CE, 60120-024',
  },
  subdivisionsPage: {
    title: 'Trabalhe Conosco',
    positionsTab: 'Cargos',
    rolesTab: 'Vínculos',
    partnerAdmin: 'Sócio-Administração',
    generalManagement: 'Direção Geral',
    localManagement: 'Gerência Local',
    secretaryEconomy: 'Secretaria de Economia',
    secretaryEconomyDesc:
      'Designada a estabelecer o controle financeiro da Virtutis Energy, destinando e acompanhando recursos voltados às Secretarias, aos Setores e aos Departamentos, seguindo planejamento prévio correspondente à estratégia de crescimento da empresa.',
    secretaryHr: 'Secretaria de Recursos Humanos',
    secretaryHrDesc:
      'Responsável pelo relacionamento interno entre os membros da Virtutis Energy, realizando a incorporação de novos colaboradores e o remanejamento de seus vínculos e cargos.',
    administrativeSector: 'Setor Administrativo',
    administrativeSectorDesc:
      'Designado a gerenciar a empresa por meio do controle de frequência e produtividade dos membros das secretarias, setores e departamentos.',
    legalSector: 'Setor Jurídico',
    legalSectorDesc:
      'Responsável pela elaboração de contratos e pelo acompanhamento da regulamentação voltada para o mercado de geração de energia.',
    structuralSector: 'Setor Estrutural',
    structuralSectorDesc:
      'Dedica-se à estruturação material, à realização de parcerias e à promoção pessoal e profissional dos membros da empresa.',
    technologySector: 'Setor Tecnológico',
    technologySectorDesc:
      'Coleta, gerencia e direciona dados de maneira eficiente e segura, posicionando a Virtutis Energy no mercado como Fintech de Energia.',
    commercialSector: 'Setor Comercial',
    commercialSectorDesc:
      'Conduz o relacionamento com clientes e investidores, organiza ações de marketing e divulga atualizações da empresa.',
    accountingDepartment: 'Departamento de Contabilidade',
    accountingDepartmentDesc:
      'Gerencia o fluxo de caixa relativo à Locação de Usinas e ao Aporte ou Cessão de Vitis.',
    landDepartment: 'Departamento de Terrenos',
    landDepartmentDesc:
      'Responsável pela prospecção e adequação dos terrenos para as usinas da filial, incluindo regularização, limpeza e análise técnica.',
    projectsDepartment: 'Departamento de Projetos',
    projectsDepartmentDesc:
      'Desenvolve os projetos básico e executivo das usinas, detalhando layout e conexão à rede elétrica.',
    worksDepartment: 'Departamento de Obras',
    worksDepartmentDesc:
      'Executa a construção das usinas, gerencia cronograma de obras, estoque e comissionamento.',
    operationsDepartment: 'Departamento de Operação',
    operationsDepartmentDesc:
      'Conduz o relacionamento com clientes, acompanha a performance das usinas e divulga atualizações.',
    intern: 'Estagiário',
    levelI: 'Nível I',
    levelII: 'Nível II',
    employee: 'Funcionário',
    partnerCollaborator: 'Sócio-Colaborador',
    internLevelIDesc:
      'Colabora com rotinas operacionais com carga horária mínima de 8 horas semanais, participando de projetos práticos para seu desenvolvimento acadêmico e profissional dentro da Virtutis Energy.',
    internLevelIIDesc:
      'Atua em projetos de pesquisa, inovação ou desenvolvimento institucional, com carga horária mínima de 12 horas semanais, recebendo incentivo mediante desempenho técnico e científico.',
    employeeLevelIDesc:
      'Integra o time da Virtutis Energy em diversas áreas com foco em aprendizado intensivo e progressão para cargos estratégicos, com carga horária mínima de 16 horas semanais.',
    employeeLevelIIDesc:
      'Desempenha funções técnicas e administrativas dentro de sua área, contribuindo diretamente com os resultados da empresa, com carga horária mínima de 20 horas semanais.',
    partnerCollaboratorDesc:
      'Participa das atividades estratégicas da empresa, com envolvimento parcial, oferecendo expertise, rede de contatos ou capital, com carga horária mínima de 24 horas semanais.',
  },
  privacyPage: {
    title: 'Política de Privacidade',
    updatedAt: 'Atualizado em 2024',
    introTitle: '1. Introdução',
    introText:
      'A Virtutis Energy valoriza a privacidade e a segurança dos dados pessoais de nossos clientes e usuários. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD) do Brasil (Lei nº 13.709/2018).',
    collectTitle: '2. Coleta de Dados Pessoais',
    collectText: 'Coletamos dados pessoais que você nos fornece diretamente ao utilizar nossos serviços, como:',
    collectAutoText: 'Também podemos coletar dados automaticamente quando você navega em nosso site, incluindo:',
    useTitle: '3. Uso dos Dados Pessoais',
    useText: 'Utilizamos seus dados pessoais para as seguintes finalidades:',
    shareTitle: '4. Compartilhamento de Dados Pessoais',
    shareText: 'Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto:',
    securityTitle: '5. Segurança dos Dados',
    securityText:
      'Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, perda, destruição ou alteração. Isso inclui:',
    rightsTitle: '6. Direitos dos Titulares de Dados',
    rightsText: 'Em conformidade com a LGPD, você tem os seguintes direitos:',
    retentionTitle: '7. Retenção de Dados',
    retentionText:
      'Manteremos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados ou conforme exigido por lei.',
    changesTitle: '8. Alterações na Política de Privacidade',
    changesText:
      'Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas de tratamento de dados. Publicaremos qualquer alteração em nosso site e, se as mudanças forem significativas, notificaremos você por e-mail.',
    contactTitle: '9. Contato',
    contactText:
      'Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco:',
    list: {
      fullName: 'Nome completo',
      email: 'Endereço de e-mail',
      phone: 'Número de telefone',
      address: 'Endereço',
      payment: 'Informações de pagamento',
      ip: 'Endereço IP',
      browser: 'Tipo de navegador',
      pages: 'Páginas visitadas',
      time: 'Tempo gasto em cada página',
      serviceManagement: 'Fornecimento e gestão de nossos serviços',
      paymentProcessing: 'Processamento de pagamentos',
      communication: 'Comunicação com você sobre nossos serviços e atualizações',
      improvement: 'Melhoria e personalização de nossos serviços',
      legal: 'Cumprimento de obrigações legais e regulatórias',
      processors: 'Quando necessário para fornecer nossos serviços (por exemplo, processadores de pagamento)',
      obligations: 'Para cumprir obrigações legais ou regulatórias',
      consent: 'Com seu consentimento explícito',
      encryption: 'Criptografia de dados',
      accessControl: 'Controle de acesso restrito',
      monitoring: 'Monitoramento contínuo de segurança',
      access: 'Acessar seus dados pessoais',
      correction: 'Solicitar a correção de dados incompletos, inexatos ou desatualizados',
      anonymization: 'Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos',
      portability: 'Solicitar a portabilidade dos dados para outro fornecedor de serviço',
      deletion: 'Solicitar a eliminação dos dados pessoais tratados com seu consentimento',
      sharedInfo: 'Obter informações sobre as entidades com as quais compartilhamos seus dados',
      revoke: 'Revogar seu consentimento, quando aplicável',
      addressLine: 'Endereço: Campus do Pici s/n - Pici, Fortaleza - CE. CEP: 60355-636',
    },
  },
}
