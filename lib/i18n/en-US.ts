import type { Translation } from './translations'

export const enUSTranslations: Translation = {
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
    openAccount: 'Download the App',
    monthLabel: (month: number) => `Month ${month}`,
    portuguese: 'PT',
    english: 'EN',
    spanish: 'ES',
  },
  header: {
    downloadApp: 'Download the App',
    whatsappText:
      'https://wa.me/5585984831512?text=Hello%2C%20I%20would%20like%20to%20download%20the%20Virtutis%20Energy%20app%21',
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
    aboutEyebrow: 'Virtutis Energy digital ecosystem',
    aboutTitle: 'Energy, technology, and digital experience in one ecosystem.',
    aboutHeadline: 'Energy, technology, and finance in one ecosystem.',
    aboutText:
      'Virtutis Energy connects users, investors, and photovoltaic plants through a modern, secure, and intuitive digital experience. Through the app, users can follow balances, transactions, opportunities, returns, and ecosystem content with convenience and a global view.',
    aboutPrimaryCta: 'Explore the app',
    aboutSecondaryCta: 'Open your account',
    aboutStatLabelTop: 'Connected ecosystem',
    aboutStatValueTop: 'App, energy, and finance within one digital journey.',
    aboutStatLabelBottom: 'Experience in expansion',
    aboutStatValueBottom: 'A modern operation with global vision and intuitive access.',
    aboutAppAlt: 'Virtutis Energy app screen displayed on a smartphone',
    audienceSelectorLabel: 'Select how you want to connect with Virtutis Energy',
    aboutHighlights: [
      {
        title: 'Track your balance',
        text: 'Track your balance and your transactions with ease.',
        icon: 'bi bi-wallet2',
      },
      {
        title: 'Manage opportunities',
        text: 'Make deposits with more convenience and security.',
        icon: 'bi bi-graph-up-arrow',
      },
      {
        title: 'Everything in the app',
        text: 'Convert values between currencies quickly and intuitively.',
        icon: 'bi bi-phone',
      },
      {
        title: 'Experience in expansion',
        text: 'Move your balance with control, agility, and security.',
        icon: 'bi bi-globe-americas',
      },
    ],
    openAccountTitle: 'Open your account',
    openAccountSubtitle:
      'Sign up with Virtutis Energy and access solar energy solutions, power plant leasing, and Vitis investment opportunities through the app.',
    openAccountImageBadge: 'Energy, technology, and investment in one place',
    openAccountReasonTitle: 'Why create your account?',
    openAccountReasonText:
      'Get a personalized account based on your profile, with access to opportunities, solutions, and information tailored to your needs inside the Virtutis Energy app.',
    openAccountAppTitle: 'What can you do in the app?',
    openAccountAppText:
      'Explore opportunities, check plant information, and view contributions, proceeds, and transactions in an organized environment.',
    openAccountExperienceTitle: 'What is the experience like?',
    openAccountExperienceText:
      'A simple, clear, and secure digital journey designed to support decision-making and keep important information within reach.',
    openAccountText:
      'If you are interested in lowering your electricity costs or investing in renewable energy, Virtutis Energy is the right choice. We want to get to know you better and help you benefit from our innovative solutions. Fill out the form with your details and our team will contact you to discuss how we can meet your needs.',
    openAccountNote:
      'By signing up, the user will gain access to our plant leasing and investment proposals.',
    formTitle: 'Complete your registration',
    customerTab: 'Customer',
    investorTab: 'Investor',
    associateTab: 'Associate',
    customerFeatureTitle: 'Savings for Customers',
    customerFeatureText1:
      'Virtutis Energy offers solar energy solutions to lower electricity costs without requiring the customer to build, install, or maintain a private structure.',
    customerFeatureText2:
      'Through our photovoltaic plants, we connect savings, sustainability, and convenience in a simple and accessible experience.',
    customerFeatureBenefits: ['Energy savings', 'No private construction required', 'Sustainable solution'],
    investorFeatureTitle: 'Investment in Vitis',
    investorFeatureText:
      'Virtutis Energy connects investors to Vitis opportunities linked to renewable energy generation projects.',
    investorFeatureText2:
      'Through the app, you can follow plant information, contributions, proceeds, and transactions in an organized and transparent way.',
    investorFeatureBenefits: ['Vitis opportunities', 'Contribution tracking', 'Renewable energy'],
    associateFeatureTitle: 'Join as an Associate',
    associateFeatureText:
      'As an associate, you stay close to the development of Virtutis Energy and take part in initiatives linked to the expansion of our photovoltaic plants.',
    associateFeatureText2:
      'It is an opportunity to learn, collaborate with multidisciplinary teams, and contribute to impactful projects in sustainable energy.',
    associateFeatureBenefits: ['Strategic participation', 'Learning and collaboration', 'Sustainable impact'],
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
    choosePlant: 'Select the plant',
    calculatorTitle: 'Associate simulation',
    calculatorText:
      'Select a capacity and level to view a basic summary of the associate operation.',
    baseLeaseLabel: 'Leasing:',
    baseLeaseText: 'available options for the plant capacity ranges.',
    baseLevelLabel: 'Levels:',
    baseLevelText: 'levels 1, 2, and 3 available to associates.',
    currentPlantLabel: 'Current plant:',
    selectedPlant: 'Select the plant',
    selectPlantGuidance:
      'Without the server API configured, this area uses the local plant reference to keep the associate operation view available.',
    associateLevel: 'Plant level',
    leasedEnergy: 'Capacity and issuance',
    powerSummary: (power: number, vitis: number) => `${power} kW with ${vitis} Vitis issued`,
    levelLabel: (level: number) => `Level ${level}`,
    leaseRevenue: 'Estimated rent',
    vitisRevenue: 'Returns',
    levelRevenue: 'Revenue',
    managementFee: 'Management fee',
    managementFeePending: 'To be defined',
    backendConfigError:
      'The server API is not configured. The plants shown below are using the local reference from the associate page.',
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
    story: 'A global fintech in expansion',
    intro:
      'Virtutis Energy is a global fintech that combines technology, operations, and market intelligence to deliver scalable solutions in different countries. Our institutional presentation reflects that vision: a company built to grow beyond borders and connect opportunities across continents.',
    bullet1: 'International presence across markets in the Americas, Europe, Asia, Africa, and Oceania',
    bullet2: 'Structured expansion with focus on scale, technology, and local relationships',
    bullet3: 'An app and operating model prepared to serve users in multiple countries',
    body:
      'Today, Virtutis Energy positions its brand as a fintech with a global vocation, able to operate with institutional consistency, regional awareness, and long-term vision. Our proposal is to consolidate a strong international presence through unified communication, a consistent digital experience, and the capacity to scale in strategic markets.',
    footprint:
      'Our app reinforces that international reach and highlights Virtutis Energy across different countries. The brand ecosystem already connects with operations and opportunities in South Africa, Belgium, Chile, Portugal, Colombia, Brazil, the United States, Hong Kong, Macau, China, Singapore, and Australia.',
    stat1Value: '5',
    stat1Label: 'continents with strategic presence',
    stat2Value: '12',
    stat2Label: 'countries highlighted on the global map',
    stat3Value: '1',
    stat3Label: 'app connecting international markets',
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
    levelsTitle: 'How to read plant levels',
    levelsIntro:
      'Plant levels organize the investment operation into progressive ranges. They help explain how plant size, Vitis quantity, and return horizon relate to each other inside the proposal presented to the investor.',
    level1Title: 'Level 1',
    level1Text:
      'Level 1 represents the entry point for reading the plant structure. It works as an initial reference for investors who want to understand the investment dynamics with a lighter participation base.',
    level2Title: 'Level 2',
    level2Text:
      'Level 2 expands that reference and indicates an intermediate operating range. At this stage, the investor can compare more clearly the evolution between contributed volume, Vitis issuance, and projected yield.',
    level3Title: 'Level 3',
    level3Text:
      'Level 3 corresponds to the most robust range in the plant comparison structure. It is useful for reading scenarios with stronger operating intensity, offering a broader view of plant capacity and accumulated potential over the selected period.',
    levelsGuidance:
      'In practice, levels should not be read in isolation. The best way is to evaluate the level together with the selected plant, the amount of Vitis, and the simulation term, because that combination gives real context to the estimated result.',
    simulatePrompt: 'Run your simulation here',
    selectPlant: 'Select the plant',
    selectPlantGuidance:
      'Choose a plant first to enable the simulation and compare levels within the corresponding operating range.',
    analysisTitle: 'Investment Analysis',
    investedValue: 'Invested Value',
    quantity: 'Quantity of Vitis',
    period: 'Period (in months)',
    plantLevel: 'Plant level',
    levelOption: (level: number) => `Level ${level}`,
    backendConfigError:
      'The server API is not configured. Configure the API to load plants, validate coupons, and calculate the investment.',
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
}
