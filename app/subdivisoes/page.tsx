'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

function InfoBox({
  icon,
  title,
  subtitle,
  description,
}: {
  icon: string
  title: string
  subtitle?: string
  description: string
}) {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="info-item d-flex flex-column justify-content-center align-items-center px-5 text-center h-100">
        <i className={icon}></i>
        <h3 className="info-box-title">{title}</h3>
        {subtitle && <span className="info-box-subtitle">{subtitle}</span>}
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function TrabalheConosco() {
  const router = useRouter()
  const [key, setKey] = useState('cargos')

  return (
    <div className="main">
      <div
        className="page-title dark-background"
        style={{ backgroundImage: 'url(/img/hero-carousel/hero-carousel-5.jpg)' }}
      >
        <div className="container position-relative">
          <h1>Trabalhe Conosco</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <button
                  onClick={() => router.push('/')}
                  style={{
                    color: 'white',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                >
                  Home
                </button>
              </li>
              <li className="current">Trabalhe Conosco</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container py-5">
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k || 'cargos')}
          className="mb-4 justify-content-center"
        >
          <Tab eventKey="cargos" title="Cargos">
            <h3 className="titulo-subdivisao">Sócio-Administração</h3>
            <div className="row gy-4 justify-content-center">
              <InfoBox
                icon="bi bi-person-fill-gear"
                title="Secretaria de Economia"
                description="Designada a estabelecer o controle financeiro da Virtutis Energy, destinando e acompanhando recursos voltados às Secretarias, aos Setores e aos Departamentos, seguindo planejamento prévio correspondente à estratégia de crescimento da empresa."
              />
              <InfoBox
                icon="bi bi-file-earmark-text-fill"
                title="Secretaria de Recursos Humanos"
                description="Responsável pelo relacionamento interno entre os membros da Virtutis Energy, realizando a incorporação de novos colaboradores e o remanejamento de seus vínculos e cargos."
              />
            </div>

            <h3 className="titulo-subdivisao mt-5">Direção Geral</h3>
            <div className="row gy-4 justify-content-center">
              <InfoBox
                icon="bi bi-person-fill-gear"
                title="Setor Administrativo"
                description="Designado a gerenciar a empresa por meio do controle de frequência e produtividade dos membros das secretarias, setores e departamentos."
              />
              <InfoBox
                icon="bi bi-file-earmark-text-fill"
                title="Setor Jurídico"
                description="Responsável pela elaboração de contratos e pelo acompanhamento da regulamentação voltada para o mercado de geração de energia."
              />
              <InfoBox
                icon="bi bi-building-gear"
                title="Setor Estrutural"
                description="Dedica-se à estruturação material, à realização de parcerias e à promoção pessoal e profissional dos membros da empresa."
              />
              <InfoBox
                icon="bi bi-cpu-fill"
                title="Setor Tecnológico"
                description="Coleta, gerencia e direciona dados de maneira eficiente e segura, posicionando a Virtutis Energy no mercado como Fintech de Energia."
              />
              <InfoBox
                icon="bi bi-megaphone-fill"
                title="Setor Comercial"
                description="Conduz o relacionamento com clientes e investidores, organiza ações de marketing e divulga atualizações da empresa."
              />
            </div>

            <h3 className="titulo-subdivisao mt-5">Gerência Local</h3>
            <div className="row gy-4 justify-content-center">
              <InfoBox
                icon="bi bi-person-fill-gear"
                title="Departamento de Contabilidade"
                description="Gerencia o fluxo de caixa relativo à Locação de Usinas e ao Aporte ou Cessão de Vitis."
              />
              <InfoBox
                icon="bi bi-file-earmark-text-fill"
                title="Departamento de Terrenos"
                description="Responsável pela prospecção e adequação dos terrenos para as usinas da filial, incluindo regularização, limpeza e análise técnica."
              />
              <InfoBox
                icon="bi bi-building-gear"
                title="Departamento de Projetos"
                description="Desenvolve os projetos básico e executivo das usinas, detalhando layout e conexão à rede elétrica."
              />
              <InfoBox
                icon="bi bi-cpu-fill"
                title="Departamento de Obras"
                description="Executa a construção das usinas, gerencia cronograma de obras, estoque e comissionamento."
              />
              <InfoBox
                icon="bi bi-speedometer2"
                title="Departamento de Operação"
                description="Conduz o relacionamento com clientes, acompanha a performance das usinas e divulga atualizações."
              />
              <InfoBox
                icon="bi bi-chat-left-text-fill"
                title="Departamento de Usuários"
                description="Responsável pela comunicação da empresa com os clientes, marketing e atendimento ao mercado."
              />
            </div>
          </Tab>

          <Tab eventKey="vinculos" title="Vínculos">
            <div className="row gy-4 justify-content-center">
              <InfoBox
                icon="bi bi-mortarboard-fill"
                title="Estagiário"
                subtitle="Nível I"
                description="Colabora com rotinas operacionais com um carga horária mínima de 8 horas semanais, participando de projetos práticos para seu desenvolvimento acadêmico e profissional dentro da Virtutis Energy."
              />
              <InfoBox
                icon="bi bi-award-fill"
                title="Estagiário"
                subtitle="Nível II"
                description="Atua em projetos de pesquisa, inovação ou desenvolvimento institucional, com uma carga horária mínima de 12 horas semanais, recebendo incentivo mediante desempenho técnico e científico."
              />
              <InfoBox
                icon="bi bi-lightbulb-fill"
                title="Funcionário"
                subtitle="Nível I"
                description="Integra o time da Virtutis Energy em diversas áreas com foco em aprendizado intensivo e progressão para cargos estratégicos,  com uma carga horária mínima de 16 horas semanais."
              />
              <InfoBox
                icon="bi bi-person-vcard-fill"
                title="Funcionário"
                subtitle="Nível II"
                description="Desempenha funções técnicas e administrativas dentro de sua área, contribuindo diretamente com os resultados da empresa,  com uma carga horária mínima de 20 horas semanais."
              />
              <InfoBox
                icon="bi bi-people-fill"
                title="Sócio Colaborador"
                description="Participa das atividades estratégicas da empresa, com envolvimento parcial, oferecendo expertise, rede de contatos ou capital,  com uma carga horária mínima de 24 horas semanais."
              />
            </div>
          </Tab>
        </Tabs>
      </div>







      <style jsx>{
      `
  .info-item {
    min-height: 260px;
    border-radius: 18px;
  }

  .info-box-title {
    margin: 12px 0 0 0;
    font-size: 1.35rem;
    font-weight: 700;
    color: #1c2430;
    line-height: 1.2;
    text-align: left;
  }

  .info-box-subtitle {
    display: block;
    margin-top: 4px;
    margin-bottom: 10px;
    font-size: 0.95rem;
    font-weight: 500;
    color: #6b7280;
    line-height: 1.2;
    text-align: left;
  }

  .info-item p {
    margin-top: 6px;
    margin-bottom: 0;
    text-align: left;
    line-height: 1.6;
    word-break: normal;
    overflow-wrap: break-word;
    hyphens: auto;
  }

  @media (max-width: 768px) {
    .info-item {
      min-height: auto;
      padding: 20px 18px;
    }

    .info-box-title {
      font-size: 1.2rem;
    }

    .info-box-subtitle {
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    .info-item p {
      font-size: 0.95rem;
      line-height: 1.55;
    }
  }
`}</style>
    </div>
  )
}