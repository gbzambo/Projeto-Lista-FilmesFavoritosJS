import "../styles/filmes.css"

const Filmes = ({
  filmes,
  watchlist,
  setWatchlist,
  abrirFilme,
}) => {
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
    <main className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">

      {filmes.map((filme) => (
        <div
          key={filme.id}
          onClick={() => abrirFilme(filme)}
          className="filme-card"
        >
          <div className="perfuracoes" />

          <div className="relative aspect-[2/3] overflow-hidden">

            {filme.poster ? (
              <img
                src={filme.poster}
                alt={filme.nome}
                className="filme-poster h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[#12080A]">
                <span className="fonte-marquise px-6 text-center text-3xl text-[#7A3A40]">
                  {filme.nome}
                </span>
              </div>
            )}

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
  )
}

export default Filmes