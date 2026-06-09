import type { Locale } from './i18n/types'

export * from './i18n/types'
export * from './i18n/routes'
export * from './i18n/subdivisions'

export const translations = {
  'pt-BR': {
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
        'https://wa.me/5585984831512?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20de%20servi%C3%A7os',
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
        'A Virtutis Energy é uma fintech de energia que desenvolve e gerencia usinas fotovoltaicas de microgeração distribuída, proporcionando, a partir de sua locação, redução dos custos com eletricidade a seus clientes e retorno financeiro mensal a seus investidores.',
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
      choosePlant: 'Escolher potência',
      calculatorTitle: 'Simulação do associado',
      calculatorText:
        'Selecione uma potência e um nível para visualizar um resumo básico da operação do associado.',
      baseLeaseLabel: 'Locação:',
      baseLeaseText: 'opções disponíveis para as faixas de potência da usina.',
      baseLevelLabel: 'Níveis:',
      baseLevelText: 'níveis 1, 2 e 3 disponíveis para o associado.',
      currentPlantLabel: 'Potência atual:',
      selectedPlant: 'Potência selecionada',
      associateLevel: 'Nível da usina',
      leasedEnergy: 'Potência e emissão',
      powerSummary: (power: number, vitis: number) => `${power} kW com emissão de ${vitis} Vitis`,
      levelLabel: (level: number) => `Nível ${level}`,
      leaseRevenue: 'Aluguel estimado',
      vitisRevenue: 'Proventos',
      levelRevenue: 'Faturamento',
      managementFee: 'Taxa de gestão',
      managementFeePending: 'Em definição',
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
      story: 'Nossa história',
      intro:
        'A história da Virtutis Energy reflete nosso compromisso com a inovação e a sustentabilidade no setor de energia elétrica. Fundada em 15 de dezembro de 2020, a empresa nasceu com a missão de transformar a maneira como a energia é produzida, distribuída e consumida.',
      bullet1: 'Combinamos tecnologia e preservação ambiental',
      bullet2: 'Entre 2022 e 2023 implementamos nossa primeira filial',
      body:
        'Desde o início, a Virtutis Energy tem se esforçado para se estabelecer como uma referência no mercado energético. Em 2021, estruturamos setores e departamentos estratégicos para direcionar nossas atividades, com foco especial no mercado de energia elétrica. Sob a coordenação de uma direção geral e gerência local, a base sólida da Virtutis Energy começou a se formar.',
      latin:
        'Veni, Sancte Spiritus, et emitte caelitus lucis tuae radium.\n\nVeni, pater pauperum, veni, dator munerum, veni, lumen cordium.\n\nConsolator optime, dulcis hospes animae, dulce refrigerium. In labore requies, in aestu temperies, in fletu solatium.\n\nO lux beatissima, reple cordis intima tuorum fidelium. Sine tuo numine, nihil est in homine, nihil est innoxium.\n\nLava quod est sordidum, riga quod est aridum, sana quod est saucium. Flecte quod est rigidum, fove quod est frigidum, rege quod est devium.\n\nDa tuis fidelibus, in te confidentibus, sacrum septenarium. Da virtutis meritum, da salutis exitum, da perenne gaudium.\n\nAmen. Alleluia.',
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
      simulatePrompt: 'Faça aqui sua simulação',
      selectPlant: 'Selecione a usina',
      analysisTitle: 'Análise de Investimento',
      investedValue: 'Valor Investido',
      quantity: 'Quantidade de Vitis',
      period: 'Período (em meses)',
      plantLevel: 'Nível da usina',
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
  },
  'en-US': {
    common: {
      home: 'Home',
      about: 'About us',
      clients: 'Clients',
      investors: 'Investors',
      associate: 'Associate',
      contact: 'Contact us',
      privacy: 'Privacy Policy',
      workWithUs: 'Work with Us',
      signUp: 'Sign Up',
      submit: 'Sign up',
      sending: 'Sending...',
      successMessage: 'Registration completed successfully!',
      usefulLinks: 'Useful links',
      address: 'Address',
      allRightsReserved: 'All Rights Reserved',
      learnMore: 'Learn more',
      openAccount: 'Open your account',
      monthLabel: (month: number) => `Month ${month}`,
      portuguese: 'PT',
      english: 'ENG',
    },
    header: {
      downloadApp: 'Download the App',
      whatsappText:
        'https://wa.me/5585984831512?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20de%20servi%C3%A7os',
      languageSwitcherLabel: 'Language',
    },
    footer: {
      addressLine1: 'Humberto Monte Ave, no number',
      addressLine2: 'Block 334 - Entrepreneurship and Innovation Hub',
      addressLine3: 'Pici Campus - Federal University of Ceara',
      addressLine4: 'Pici, Fortaleza - CE. ZIP: 60440-593',
      taxId: '40.121.761/0001-16',
    },
    home: {
      heroTitle: 'Virtutis Energy',
      heroSubtitle: 'Generating the Best Energy!',
      heroText:
        'Renewable energy solutions for people who want to lower electricity costs and invest in photovoltaic plants with monthly returns.',
      aboutTitle: 'About Virtutis Energy',
      aboutText:
        'Virtutis Energy is an energy fintech that develops and manages distributed microgeneration photovoltaic plants, providing lower electricity costs to clients through plant leasing and monthly financial returns to investors.',
      openAccountTitle: 'Open your account',
      openAccountText:
        'If you are interested in lowering your electricity costs or investing in renewable energy, Virtutis Energy is the right choice. We want to get to know you better and help you benefit from our innovative solutions. Fill out the form with your details and our team will contact you to discuss how we can meet your needs.',
      openAccountNote:
        'By signing up, the user will gain access to our plant leasing and investment proposals.',
      formTitle: 'Complete your registration',
      customerTab: 'Client',
      investorTab: 'Investor',
      associateTab: 'Associate',
      customerFeatureTitle: 'Savings for Clients',
      customerFeatureText1:
        'Virtutis Energy is a solar energy fintech that develops, manages, and leases its own photovoltaic plants. We help our clients reduce electricity costs without needing to pay for the construction and maintenance of solar panels. We also provide investors with the opportunity to participate in the development of energy generation systems and share in the profits from plant leasing.',
      customerFeatureText2:
        'With Virtutis Energy, you get a sustainable solution that combines savings, profitability, and positive environmental impact. Join us and be part of the future of renewable energy!',
      investorFeatureTitle: 'Boost Your Investments',
      investorFeatureText:
        'Invest in our photovoltaic plants and enjoy returns of up to 2.35% per month. With Virtutis Energy, you get savings and profitability in one place. Strengthen your investments and be part of the future of renewable energy!',
      associateFeatureTitle: 'Join as an Associate',
      associateFeatureText:
        'As a Virtutis Energy associate, you take part in renewable energy projects, support strategic routines, and follow the expansion of our photovoltaic plants closely. It is an opportunity to learn, collaborate with multidisciplinary teams, and create positive impact in sustainable energy.',
      },
    associatePage: {
      title: 'Associate',
      headline: 'Associate Area',
      body:
        'Associates follow operations by plant level and power range. This page summarizes how power, leasing, Vitis issuance, and revenue connect without exposing the full financial composition in detail.',
      feature1Title: 'Plant levels',
      feature1Text:
        'Levels 1, 2, and 3 represent progressive participation ranges, with increasing financial references for each stage.',
      feature2Title: 'Available capacities',
      feature2Text:
        'Plants are presented in 20 kW, 40 kW, and 60 kW capacities, keeping capacity, leasing, and Vitis issuance proportional.',
      feature3Title: 'Leasing and Vitis',
      feature3Text:
        'Leasing follows a power-based reference, while returns track the amount of Vitis issued by each range.',
      feature4Title: 'Associate revenue',
      feature4Text:
        'Estimated revenue combines the selected power and level using the operational base defined for the simulation.',
      plantsTitle: 'Capacities and levels',
      plantsText:
        'Choose a capacity to view a summarized simulation. Cards show only the core logic for each range without opening every composition value.',
      plantLabel: 'Plant',
      plantDescription: (power: string) =>
        `${power} operational range connected to associate area levels 1, 2, and 3.`,
      referenceValue: 'Summary:',
      choosePlant: 'Choose capacity',
      calculatorTitle: 'Associate simulation',
      calculatorText:
        'Select a capacity and level to view a basic summary of the associate operation.',
      baseLeaseLabel: 'Leasing:',
      baseLeaseText: 'available options for the plant capacity ranges.',
      baseLevelLabel: 'Levels:',
      baseLevelText: 'levels 1, 2, and 3 available to associates.',
      currentPlantLabel: 'Current capacity:',
      selectedPlant: 'Selected capacity',
      associateLevel: 'Plant level',
      leasedEnergy: 'Capacity and issuance',
      powerSummary: (power: number, vitis: number) => `${power} kW with ${vitis} Vitis issued`,
      levelLabel: (level: number) => `Level ${level}`,
      leaseRevenue: 'Estimated rent',
      vitisRevenue: 'Returns',
      levelRevenue: 'Revenue',
      managementFee: 'Management fee',
      managementFeePending: 'To be defined',
      service1Title: 'Leases',
      service1Text:
        'Leasing follows the contracted capacity and keeps the proportion between the 20 kW, 40 kW, and 60 kW ranges.',
      service2Title: 'Payments',
      service2Text:
        'Returns are estimated from the Vitis issued by each capacity, using the unit reference defined for the simulation.',
      service3Title: 'Operation',
      service3Text:
        'The plant management fee remains temporary information until the final operating rule is defined.',
    },
    forms: {
      cpfCnpj: 'CPF/CNPJ',
      cpf: 'CPF',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
    },
    aboutPage: {
      title: 'About us',
      since: 'Since 2020',
      story: 'Our story',
      intro:
        'The history of Virtutis Energy reflects our commitment to innovation and sustainability in the electric power sector. Founded on December 15, 2020, the company was born with the mission of transforming the way energy is produced, distributed, and consumed.',
      bullet1: 'We combine technology and environmental preservation',
      bullet2: 'Between 2022 and 2023 we launched our first branch',
      body:
        'From the beginning, Virtutis Energy has worked to establish itself as a benchmark in the energy market. In 2021, we structured strategic sectors and departments to guide our activities, with special focus on the electric energy market. Under the coordination of general leadership and local management, the solid foundation of Virtutis Energy began to take shape.',
      latin:
        'Veni, Sancte Spiritus, et emitte caelitus lucis tuae radium.\n\nVeni, pater pauperum, veni, dator munerum, veni, lumen cordium.\n\nConsolator optime, dulcis hospes animae, dulce refrigerium. In labore requies, in aestu temperies, in fletu solatium.\n\nO lux beatissima, reple cordis intima tuorum fidelium. Sine tuo numine, nihil est in homine, nihil est innoxium.\n\nLava quod est sordidum, riga quod est aridum, sana quod est saucium. Flecte quod est rigidum, fove quod est frigidum, rege quod est devium.\n\nDa tuis fidelibus, in te confidentibus, sacrum septenarium. Da virtutis meritum, da salutis exitum, da perenne gaudium.\n\nAmen. Alleluia.',
    },
    clientsPage: {
      title: 'Clients',
      question: 'What is the average amount you usually pay on your electricity bill?',
      billPlaceholder: 'Enter your bill amount',
      calculate: 'Calculate',
      economyResult: (value: string) => `Estimated savings of R$ ${value} per month!`,
      calculationError: 'Unable to calculate.',
      serverError: 'Unable to connect to the server.',
      feature1Title: 'Lower expenses',
      feature1Text:
        'Lower electricity expenses through the accounting of energy credits generated by the leased plant.',
      feature2Title: 'No bureaucracy',
      feature2Text:
        'No bureaucracy involved in building your own plants; all construction and jurisdiction are the responsibility of Virtutis Energy.',
      feature3Title: 'Space leasing',
      feature3Text:
        'Explore leased locations to implement renewable energy generation systems, promoting sustainability and efficiency.',
      feature4Title: 'Opportunities in ideal locations',
      feature4Text:
        'Discover opportunities in strategically leased locations for plant construction, boosting sustainable energy production.',
      service1Title: 'Up to 30% savings',
      service1Text:
        'By choosing our photovoltaic plants, you can reduce your electricity costs by up to 30%, gaining clear advantages from solar energy.',
      service2Title: 'Online contracting',
      service2Text:
        'Anyone interested in becoming a Client and/or Investor needs to register in our database. After registration, our Commercial Team will contact you to explain the plant operation and Vitis acquisition process.',
      service3Title: 'No construction work',
      service3Text:
        'With Virtutis Energy, you can enjoy peace of mind without worrying about construction work or electrical installations. Our photovoltaic plants offer ideal conditions for investors and clients, meeting different energy demands efficiently.',
      service4Title: 'No lock-in',
      service4Text:
        'We offer total freedom to Virtutis Energy investors. You can withdraw your investment in Vitis at any time, without having to wait 20 years. When you invest, you receive bonuses, but those bonuses are cancelled if you withdraw.',
      service5Title: 'First monthly payment FREE',
      service5Text:
        'We guarantee our clients the first monthly payment free of charge, creating the perfect opportunity to get to know our products and services better.',
    },
    investorsPage: {
      title: 'Investors',
      headline: 'Become a Virtutis Energy Investor',
      vitisTitle: 'How do Vitis work?',
      vitisText:
        'Vitis are commercial notes issued by Virtutis Energy plants, offering returns of up to 2.35% per month in monthly proceeds. With Vitis, investors enjoy full freedom to make contributions and transfers whenever they want, maximizing financial flexibility.',
      simulatePrompt: 'Run your simulation here',
      selectPlant: 'Select the plant',
      analysisTitle: 'Investment Analysis',
      investedValue: 'Invested Value',
      quantity: 'Quantity of Vitis',
      period: 'Period (in months)',
      plantLevel: 'Plant level',
      coupon: 'Discount coupon',
      optional: 'Optional',
      validating: 'Validating...',
      validCoupon: 'Valid coupon!',
      invalidCoupon: 'Invalid coupon',
      simulateButton: 'Simulate Investment',
      accumulatedYield: 'Accumulated Returns',
      finalDate: 'Final Date',
      chartTitle: 'Monthly Return Growth',
      chartDataset: 'Total return',
      chartYAxis: 'Accumulated Return (R$)',
      chartXAxis: 'Months',
      fillFieldsAlert: 'Please fill in all fields correctly.',
      errorPrefix: 'Error',
      serverError: 'Unable to communicate with the server.',
    },
    signUpPage: {
      title: 'Sign Up',
      formTitle: 'Complete your registration',
      whatsapp: 'WhatsApp',
    },
    workWithUsPage: {
      title: 'Work with Us',
      branch: 'VE.1 Branch - Ceara',
      headOffice: 'Head Office',
      subdivisions: 'Departments (you can select more than one):',
      loadingSubdivisions: 'Loading departments...',
      learnMore: 'Learn more about working with us',
      branchAddress: 'Humberto Monte Ave, no number, Fortaleza, CE',
      headOfficeAddress: 'Barao de Studart Ave, 1980 - Aldeota, Fortaleza - CE, 60120-024',
    },
    subdivisionsPage: {
      title: 'Work with Us',
      positionsTab: 'Roles',
      rolesTab: 'Engagements',
      partnerAdmin: 'Partner Administration',
      generalManagement: 'General Management',
      localManagement: 'Local Management',
      secretaryEconomy: 'Economics Office',
      secretaryEconomyDesc:
        'Responsible for establishing Virtutis Energy financial control, allocating and monitoring resources for offices, sectors, and departments according to the company growth strategy.',
      secretaryHr: 'Human Resources Office',
      secretaryHrDesc:
        'Responsible for internal relationships among Virtutis Energy members, onboarding new collaborators, and reallocating roles and engagements.',
      administrativeSector: 'Administrative Sector',
      administrativeSectorDesc:
        'Responsible for managing the company through attendance and productivity control across offices, sectors, and departments.',
      legalSector: 'Legal Sector',
      legalSectorDesc:
        'Responsible for drafting contracts and monitoring regulations related to the energy generation market.',
      structuralSector: 'Structural Sector',
      structuralSectorDesc:
        'Focused on material structuring, partnership building, and the personal and professional development of company members.',
      technologySector: 'Technology Sector',
      technologySectorDesc:
        'Collects, manages, and directs data efficiently and securely, positioning Virtutis Energy in the market as an Energy Fintech.',
      commercialSector: 'Commercial Sector',
      commercialSectorDesc:
        'Leads relationships with clients and investors, organizes marketing actions, and shares company updates.',
      accountingDepartment: 'Accounting Department',
      accountingDepartmentDesc:
        'Manages the cash flow related to Plant Leasing and Vitis contributions or transfers.',
      landDepartment: 'Land Department',
      landDepartmentDesc:
        'Responsible for prospecting and preparing land for branch plants, including regularization, cleaning, and technical analysis.',
      projectsDepartment: 'Projects Department',
      projectsDepartmentDesc:
        'Develops the basic and executive plant projects, detailing the layout and grid connection.',
      worksDepartment: 'Construction Department',
      worksDepartmentDesc:
        'Executes plant construction, manages the work schedule, inventory, and commissioning.',
      operationsDepartment: 'Operations Department',
      operationsDepartmentDesc:
        'Leads client relationships, monitors plant performance, and communicates updates.',
      intern: 'Intern',
      levelI: 'Level I',
      levelII: 'Level II',
      employee: 'Employee',
      partnerCollaborator: 'Partner Collaborator',
      internLevelIDesc:
        'Supports operational routines with a minimum workload of 8 hours per week, participating in practical projects for academic and professional development within Virtutis Energy.',
      internLevelIIDesc:
        'Works on research, innovation, or institutional development projects with a minimum workload of 12 hours per week, receiving incentives based on technical and scientific performance.',
      employeeLevelIDesc:
        'Joins the Virtutis Energy team in several areas, focused on intensive learning and progression to strategic roles, with a minimum workload of 16 hours per week.',
      employeeLevelIIDesc:
        'Performs technical and administrative duties within their area, directly contributing to company results, with a minimum workload of 20 hours per week.',
      partnerCollaboratorDesc:
        'Participates in the company strategic activities with partial involvement, offering expertise, networking, or capital, with a minimum workload of 24 hours per week.',
    },
    privacyPage: {
      title: 'Privacy Policy',
      updatedAt: 'Updated in 2024',
      introTitle: '1. Introduction',
      introText:
        'Virtutis Energy values the privacy and security of the personal data of our clients and users. This Privacy Policy describes how we collect, use, store, and protect your personal information in compliance with Brazil’s General Data Protection Law (LGPD - Law No. 13,709/2018).',
      collectTitle: '2. Collection of Personal Data',
      collectText: 'We collect personal data that you provide directly when using our services, such as:',
      collectAutoText: 'We may also automatically collect data when you browse our website, including:',
      useTitle: '3. Use of Personal Data',
      useText: 'We use your personal data for the following purposes:',
      shareTitle: '4. Sharing of Personal Data',
      shareText: 'We do not sell, rent, or share your personal data with third parties, except:',
      securityTitle: '5. Data Security',
      securityText:
        'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, destruction, or alteration. This includes:',
      rightsTitle: '6. Data Subject Rights',
      rightsText: 'In compliance with the LGPD, you have the following rights:',
      retentionTitle: '7. Data Retention',
      retentionText:
        'We will keep your personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law.',
      changesTitle: '8. Changes to the Privacy Policy',
      changesText:
        'We may update this Privacy Policy periodically to reflect changes in our data processing practices. We will publish any changes on our website and, if the changes are significant, notify you by email.',
      contactTitle: '9. Contact',
      contactText:
        'If you have any questions or concerns about this Privacy Policy or the processing of your personal data, please contact us:',
      list: {
        fullName: 'Full name',
        email: 'Email address',
        phone: 'Phone number',
        address: 'Address',
        payment: 'Payment information',
        ip: 'IP address',
        browser: 'Browser type',
        pages: 'Visited pages',
        time: 'Time spent on each page',
        serviceManagement: 'Provision and management of our services',
        paymentProcessing: 'Payment processing',
        communication: 'Communication with you about our services and updates',
        improvement: 'Improvement and personalization of our services',
        legal: 'Compliance with legal and regulatory obligations',
        processors: 'When necessary to provide our services (for example, payment processors)',
        obligations: 'To comply with legal or regulatory obligations',
        consent: 'With your explicit consent',
        encryption: 'Data encryption',
        accessControl: 'Restricted access control',
        monitoring: 'Continuous security monitoring',
        access: 'Access your personal data',
        correction: 'Request correction of incomplete, inaccurate, or outdated data',
        anonymization: 'Request anonymization, blocking, or deletion of unnecessary or excessive data',
        portability: 'Request data portability to another service provider',
        deletion: 'Request deletion of personal data processed with your consent',
        sharedInfo: 'Obtain information about the entities with which we share your data',
        revoke: 'Revoke your consent, when applicable',
        addressLine: 'Address: Campus do Pici s/n - Pici, Fortaleza - CE. ZIP: 60355-636',
      },
    },
  },
} as const

export type Translation = (typeof translations)[Locale]
