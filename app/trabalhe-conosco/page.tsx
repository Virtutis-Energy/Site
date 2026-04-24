'use client'

  import { useCadastrarIngressante } from '@/hooks/useCadastroIngressante'
  import { useSubdivisoes } from '@/hooks/useSubdivisoes'
  import { useRouter } from 'next/navigation'
  import { useState } from 'react'

  export default function FormularioIngressante() {
    const router = useRouter()
    const { cadastrar, sucesso, erro, loading } = useCadastrarIngressante()
    const { subdivisoes, loading: loadingSub } = useSubdivisoes()

    const ordemSubdivisoes = [
      'Secretaria de Economia',
      'Secretaria de Recursos Humanos',
      'Setor Administrativo',
      'Setor Jurídico',
      'Setor Estrutural',
      'Setor Tecnológico',
      'Setor Comercial',
      'Departamento de Contabilidade',
      'Departamento de Terreno',
      'Departamento de Projeto',
      'Departamento de Obra',
      'Departamento de Operação',
    ]

    const normalizarTexto = (texto: string) =>
      texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase()

    const [formData, setFormData] = useState({
      cpf: '',
      nome: '',
      email: '',
      telefone: '',
      subdivisoes: [] as number[],
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, checked } = e.target

      if (name === 'subdivisoes') {
        const id = parseInt(value)

        setFormData((prev) => {
          const novaLista = checked
            ? [...prev.subdivisoes, id]
            : prev.subdivisoes.filter((item) => item !== id)

          return { ...prev, subdivisoes: novaLista }
        })
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }))
      }
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      await cadastrar(formData)
    }

    const subdivisoesOrdenadas = [...subdivisoes].sort((a, b) => {
      const indexA = ordemSubdivisoes.findIndex(
        (nome) => normalizarTexto(nome) === normalizarTexto(a.nome)
      )
      const indexB = ordemSubdivisoes.findIndex(
        (nome) => normalizarTexto(nome) === normalizarTexto(b.nome)
      )

      const posA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA
      const posB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB

      return posA - posB
    })

    return (
      <main className="main">
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
                    type="button"
                    onClick={() => router.push('/')}
                    style={{ color: 'white' }}
                  >
                    Home
                  </button>
                </li>
                <li className="current">Trabalhe Conosco</li>
              </ol>
            </nav>
          </div>
        </div>

        <section id="contact" className="contact section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div
                  className="info-item d-flex flex-column justify-content-center align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-geo-alt"></i>
                  <h3>Filial VE.1 - Ceará</h3>
                  <p>Av. Humberto Monte s/n, Fortaleza, CE</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="info-item d-flex flex-column justify-content-center align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-geo-alt"></i>
                  <h3>Matriz</h3>
                  <p>Av. Barão de Studart, 1980 - Aldeota, Fortaleza - CE, 60120-024</p>
                </div>
              </div>
            </div>

            <br />

            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row gy-3">
                  <div className="col-12">
                    <input
                      type="text"
                      name="cpf"
                      placeholder="CPF"
                      required
                      className="form-control"
                      value={formData.cpf}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome"
                      required
                      className="form-control"
                      value={formData.nome}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      name="telefone"
                      placeholder="Telefone"
                      required
                      className="form-control"
                      value={formData.telefone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Subdivisões (pode selecionar mais de uma):
                    </label>

                    {loadingSub ? (
                      <p>Carregando subdivisões...</p>
                    ) : (
                      subdivisoesOrdenadas.map((sub) => (
                        <div className="form-check" key={sub.id}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="subdivisoes"
                            value={sub.id}
                            onChange={handleChange}
                            checked={formData.subdivisoes.includes(sub.id)}
                          />
                          <label className="form-check-label">{sub.nome}</label>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="col-12">
                    <button
                      onClick={() => router.push('/subdivisoes')}
                      className="setor-link"
                      type="button"
                      style={{
                        textDecoration: 'underline',
                        cursor: 'pointer',
                      }}
                    >
                      Saiba mais sobre o Trabalho Conosco
                    </button>
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" disabled={loading}>
                      {loading ? 'Enviando...' : 'Cadastrar-se'}
                    </button>

                    {sucesso && (
                      <p className="text-success mt-2">Cadastro realizado com sucesso!</p>
                    )}

                    {erro && <p className="text-danger mt-2">{erro}</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    )
  }
