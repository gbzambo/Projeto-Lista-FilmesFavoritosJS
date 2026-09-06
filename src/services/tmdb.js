const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_URL = "https://api.themoviedb.org/3"
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

const buscarFilme = async (nome, ano) => {
  try {
    const parametros = new URLSearchParams({
      api_key: API_KEY,
      query: nome,
      year: ano,
      language: "en-US",
    })

    const resposta = await fetch(
      `${API_URL}/search/movie?${parametros}`
    )

    if (!resposta.ok) {
      throw new Error(`Erro na API: ${resposta.status}`)
    }

    const dados = await resposta.json()

    if (dados.results.length === 0) {
      console.log(`Filme não encontrado: ${nome} (${ano})`)
      return null
    }

    const filme = dados.results[0]

    console.log(`Encontrado: ${nome} (${ano})`)

    if (!filme.poster_path) {
      console.log(`Sem poster: ${nome} (${ano})`)
      return null
    }

    return `${IMAGE_URL}${filme.poster_path}`
  } catch (erro) {
    console.error(`Erro ao buscar ${nome}:`, erro)
    return null
  }
}

export default buscarFilme