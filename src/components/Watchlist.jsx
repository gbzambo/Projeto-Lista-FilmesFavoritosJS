const Watchlist = ({ watchlist, filmes, abrirFilme }) => {
  const filmesWatchlist = filmes.filter((filme) =>
    watchlist.includes(filme.id)
  )

  return (
    <section className="filmes-container relative z-10 px-6 pb-24 pt-4">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-end justify-between border-b border-[#7A1620]/50 pb-4">

          <div>
            <h2 className="fonte-marquise text-4xl tracking-wide text-[#F5E8E4]">
              Minha Watchlist
            </h2>

            <p className="fonte-corpo mt-1 text-sm text-[#C89A9C]">
              Filmes que quero assistir
            </p>
          </div>

          <span className="fonte-corpo rounded-full border border-[#FF6F6F]/40 bg-[#1A0A0D] px-3 py-1 text-xs text-[#FF6F6F]">
            {watchlist.length}{" "}
            {watchlist.length === 1 ? "filme" : "filmes"}
          </span>

        </div>

        {filmesWatchlist.length === 0 && (
          <div className="border border-[#3a1418] bg-[#1A0A0D] px-6 py-10 text-center">

            <p className="fonte-corpo text-sm text-[#F5E8E4]">
              Sua watchlist está vazia.
            </p>

            <p className="fonte-corpo mt-2 text-xs text-[#C89A9C]">
              Adicione filmes que você pretende assistir.
            </p>

          </div>
        )}

        {filmesWatchlist.length > 0 && (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

            {filmesWatchlist.map((filme) => (
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

                </div>

                <div className="perfuracoes" />

                <div className="fonte-corpo p-4">

                  <h3 className="fonte-marquise text-2xl tracking-wide text-[#F5E8E4]">
                    {filme.nome}
                  </h3>

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

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </section>
  )
}

export default Watchlist