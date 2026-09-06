import leSamourai from "../assets/poster le samourai.webp"
import taxiDriver from "../assets/poster taxi driver.jpg"

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

export default filmes