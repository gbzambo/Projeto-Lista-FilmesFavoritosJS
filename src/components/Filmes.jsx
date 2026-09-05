import { useState, useEffect, useCallback } from "react"

import "../styles/filmes.css"

import leSamourai from "../assets/poster le samourai.webp"
import taxiDriver from "../assets/poster taxi driver.jpg"

const Perfuracoes = ({ className = "" }) => (
  <div className={`perfuracoes ${className}`} />
)

const Filmes = () => {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)
  const [modalVisivel, setModalVisivel] = useState(false)

  const filmes = [
    {
      id: 1,
      nome: "Le Samourai",
      diretor: "Jean-Pierre Melville",
      sinopse:
        "Um assassino profissional extremamente metódico e solitário recebe a missão de matar um homem, mas acaba sendo envolvido em uma situação que ameaça expor sua identidade e sua forma de trabalhar.",
      genero: "Noir",
      data: "1967",
      poster: leSamourai,
      review: "...",
    },
    {
      id: 2,
      nome: "Taxi Driver",
      diretor: "Martin Scorsese",
      sinopse:
        "Um veterano de guerra que trabalha como taxista em Nova York passa a enxergar a cidade como um lugar decadente e corrupto, ficando cada vez mais obcecado com a ideia de fazer algo a respeito.",
      genero: "Drama / Neo-Noir",
      data: "1976",
      poster: taxiDriver,
      review: "...",
    },
  ]

  const abrirFilme = (filme) => {
    setFilmeSelecionado(filme)

    requestAnimationFrame(() =>
      requestAnimationFrame(() => setModalVisivel(true))
    )
  }

  const fecharModal = useCallback(() => {
    setModalVisivel(false)
    setTimeout(() => setFilmeSelecionado(null), 300)
  }, [])

  useEffect(() => {
    if (!filmeSelecionado) return

    const aoApertarTecla = (e) => {
      if (e.key === "Escape") {
        fecharModal()
      }
    }

    window.addEventListener("keydown", aoApertarTecla)

    return () =>
      window.removeEventListener("keydown", aoApertarTecla)
  }, [filmeSelecionado, fecharModal])

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
            <Perfuracoes />

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

            <Perfuracoes />

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

            </div>
          </div>
        ))}
      </main>

      {filmeSelecionado && (
        <div
          onClick={fecharModal}
          className={`overlay-modal ${
            modalVisivel ? "overlay-aberto" : "overlay-fechado"
          }`}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className={`filme-modal flex-col sm:flex-row ${
              modalVisivel ? "modal-aberto" : "modal-fechado"
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

export default Filmes