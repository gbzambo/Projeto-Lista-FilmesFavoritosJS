import { useState } from "react"

import Filmes from "./components/Filmes"
import Watchlist from "./components/Watchlist"
import filmes from "./data/filmes"

const App = () => {
  const [watchlist, setWatchlist] = useState([])
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)
  const [modalVisivel, setModalVisivel] = useState(false)

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
        filmes={filmes}
        watchlist={watchlist}
        setWatchlist={setWatchlist}
        abrirFilme={abrirFilme}
      />

      <Watchlist
        filmes={filmes}
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

            <img
              src={filmeSelecionado.poster}
              alt={filmeSelecionado.nome}
              className="h-64 w-full object-cover sm:h-auto sm:w-48"
            />

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