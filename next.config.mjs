/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pt-br',
        permanent: true,
      },
      {
        source: '/sobre',
        destination: '/pt-br/sobre',
        permanent: true,
      },
      {
        source: '/clientes',
        destination: '/pt-br/clientes',
        permanent: true,
      },
      {
        source: '/investidores',
        destination: '/pt-br/investidores',
        permanent: true,
      },
      {
        source: '/cadastro',
        destination: '/pt-br/cadastro',
        permanent: true,
      },
      {
        source: '/privacidade',
        destination: '/pt-br/privacidade',
        permanent: true,
      },
      {
        source: '/trabalhe-conosco',
        destination: '/pt-br/trabalhe-conosco',
        permanent: true,
      },
      {
        source: '/subdivisoes',
        destination: '/pt-br/subdivisoes',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
