import { useState, useEffect, useCallback } from "react"

import "../styles/filmes.css"

const Filmes = ({
  filmes,
  watchlist,
  setWatchlist,
  abrirFilme,
}) => {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)

  const adicionarWatchlist = (id) => {
    if (!watchlist.includes(id)) {
      setWatchlist([...watchlist, id])
    }
  }

  const removerWatchlist = (id) => {
    setWatchlist(
      watchlist.filter((filmeId) => filmeId !== id)
    )
  }

  return (
    <div className="filmes-container">

      <header className="relative z-10 px-6 pb-10 pt-16 text-center">
        <h1 className="fonte-marquise text-5xl tracking-wide text-[#F5E8E4] md:text-6xl">
          Filmes Favoritos de Gabriel Zambo
        </h1>

        <div className="mx-auto mt-3 h-px w-24 bg-[#FF6F6F]/60" />

        <p className="fonte-corpo mt-3 text-sm text-[#C89A9C]">
          Obras primas que valem a pena serem vistas, clique no filme para
          saber mais
        </p>
      </header>

      <main className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">

        {filmes.map((filme) => (
          <div
            key={filme.id}
            onClick={() => abrirFilme(filme)}
            className="filme-card"
          >
            <div className="perfuracoes" />

            <div className="relative aspect-[2/3] overflow-hidden">

              <img
                src={filme.poster}
                alt={filme.nome}
                className="filme-poster h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="filme-sinopse">
                <p className="fonte-corpo line-clamp-5 text-xs leading-relaxed text-[#F5E8E4]/90">
                  {filme.sinopse}
                </p>
              </div>

            </div>

            <div className="perfuracoes" />

            <div className="fonte-corpo p-4">

              <h2 className="fonte-marquise text-2xl tracking-wide text-[#F5E8E4]">
                {filme.nome}
              </h2>

              <p className="mt-1 text-sm text-[#C89A9C]">
                {filme.diretor}
              </p>

              <div className="mt-2 flex items-center gap-2">

                <span className="rounded-full border border-[#FF6F6F]/40 px-2 py-0.5 text-[11px] text-[#FF6F6F]">
                  {filme.genero}
                </span>

                <span className="text-[11px] text-[#C89A9C]">
                  {filme.data}
                </span>

              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation()

                  if (watchlist.includes(filme.id)) {
                    removerWatchlist(filme.id)
                  } else {
                    adicionarWatchlist(filme.id)
                  }
                }}
                className="mt-4 w-full rounded-md bg-[#FF6F6F] px-4 py-2 font-semibold text-[#12080a] transition-all hover:bg-[#ff8585]"
              >
                {watchlist.includes(filme.id)
                  ? "Remover da Watchlist"
                  : "Assistir depois"}
              </button>

            </div>
          </div>
        ))}

      </main>
    </div>
  )
}

export default Filmes