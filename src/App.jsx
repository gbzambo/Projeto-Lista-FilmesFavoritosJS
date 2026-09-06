import { useEffect, useState } from "react"

import Filmes from "./components/Filmes"
import Watchlist from "./components/Watchlist"
import filmes from "./data/filmes"
import buscarFilme from "./services/tmdb"

const App = () => {
  const [watchlist, setWatchlist] = useState([])
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)
  const [modalVisivel, setModalVisivel] = useState(false)
  const [filmesComPoster, setFilmesComPoster] = useState(filmes)

  useEffect(() => {
    const carregarPosters = async () => {
      const filmesAtualizados = []

      for (const filme of filmes) {
        const poster = await buscarFilme(
          filme.nome,
          filme.data
        )

        filmesAtualizados.push({
          ...filme,
          poster,
        })

        setFilmesComPoster([...filmesAtualizados, ...filmes.slice(filmesAtualizados.length)])
      }
    }

    carregarPosters()
  }, [])

  const abrirFilme = (filme) => {
    setFilmeSelecionado(filme)

    requestAnimationFrame(() =>
      requestAnimationFrame(() => setModalVisivel(true))
    )
  }

  const fecharModal = () => {
    setModalVisivel(false)

    setTimeout(() => {
      setFilmeSelecionado(null)
    }, 300)
  }

  return (
    <div>
      <Filmes
        filmes={filmesComPoster}
        watchlist={watchlist}
        setWatchlist={setWatchlist}
        abrirFilme={abrirFilme}
      />

      <Watchlist
        filmes={filmesComPoster}
        watchlist={watchlist}
        abrirFilme={abrirFilme}
      />

      {filmeSelecionado && (
        <div
          onClick={fecharModal}
          className={`overlay-modal ${
            modalVisivel
              ? "overlay-aberto"
              : "overlay-fechado"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`filme-modal flex-col sm:flex-row ${
              modalVisivel
                ? "modal-aberto"
                : "modal-fechado"
            }`}
          >
            <button
              onClick={fecharModal}
              aria-label="Fechar"
              className="botao-fechar"
            >
              ×
            </button>

            {filmeSelecionado.poster ? (
              <img
                src={filmeSelecionado.poster}
                alt={filmeSelecionado.nome}
                className="h-64 w-full object-cover sm:h-auto sm:w-48"
              />
            ) : (
              <div className="flex h-64 w-full items-center justify-center bg-[#1A0A0D] sm:h-auto sm:w-48">
                <span className="fonte-marquise px-4 text-center text-2xl text-[#7A3A40]">
                  {filmeSelecionado.nome}
                </span>
              </div>
            )}

            <div className="flex-1 p-6">
              <h2 className="fonte-marquise text-3xl tracking-wide text-[#F5E8E4]">
                {filmeSelecionado.nome}
              </h2>

              <p className="mt-1 text-sm text-[#C89A9C]">
                {filmeSelecionado.diretor}
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full border border-[#FF6F6F]/40 px-2 py-0.5 text-[11px] text-[#FF6F6F]">
                  {filmeSelecionado.genero}
                </span>

                <span className="text-[11px] text-[#C89A9C]">
                  {filmeSelecionado.data}
                </span>
              </div>

              <div className="mt-4 h-px w-full bg-[#7A1620]/50" />

              <p className="mt-4 text-sm leading-relaxed text-[#F5E8E4]/90">
                {filmeSelecionado.sinopse}
              </p>

              {filmeSelecionado.review !== "..." && (
                <p className="mt-4 text-sm italic text-[#C89A9C]">
                  {filmeSelecionado.review}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App