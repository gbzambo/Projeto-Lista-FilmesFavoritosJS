import { useState } from "react"
const Filmes = () => {

    const [filmeSelecionado, setFilmeSelecionado] = useState(null)

    const filmes = [{
        id: 1,
        nome: "Le Samourai",
        diretor: "Jean-Pierre-Melville",
        sinopse: "Um assassino profissional extremamente metódico e solitário recebe a missão de matar um homem, mas acaba sendo envolvido em uma situação que ameaça expor sua identidade e sua forma de trabalhar.",
        genero: "Noir",
        data: "1967",
        review: "..."
    },
    {
        id: 2,
        nome: "Taxi Driver",
        diretor: "Martin Scorsese",
        sinopse: "Um veterano de guerra que trabalha como taxista em Nova York passa a enxergar a cidade como um lugar decadente e corrupto, ficando cada vez mais obcecado com a ideia de fazer algo a respeito.",
        genero: "Drama/ Neo-Noir",
        data: "1976",
        review: "..."
    }
    ]
  return (
    <div>
        {filmeSelecionado && (
    <div>
        <h2>{filmeSelecionado.nome}</h2>
        <p>{filmeSelecionado.diretor}</p>
    <p>{filmeSelecionado.sinopse}</p>
    <p>{filmeSelecionado.genero}</p>
    <p>{filmeSelecionado.data}</p>
    <p>{filmeSelecionado.review}</p>
    </div>
    )}
    {filmes.map((filme) => (
        <div key={filme.id} onClick={() => setFilmeSelecionado(filme)}>
            <h2>{filme.nome}</h2>
            <p>{filme.diretor}</p>
            <p>{filme.data}</p>
        </div>
    ))}
</div>
  )
}

export default Filmes
