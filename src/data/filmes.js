const filmes = [
{
id: 1,
nome: "Le Samourai",
tituloBusca: "Le Samouraï",
diretor: "Jean-Pierre Melville",
data: 1967,
genero: "Noir",
sinopse:
"Jef Costello é um assassino profissional extremamente metódico que, após matar um homem em um apartamento, deixa pistas que fazem a polícia começar a persegui-lo. Enquanto tenta descobrir quem o traiu, ele precisa lidar com uma investigação cada vez mais próxima.",
review: "...",
},

{
id: 2,
nome: "Taxi Driver",
tituloBusca: "Taxi Driver",
diretor: "Martin Scorsese",
data: 1976,
genero: "Drama / Neo-Noir",
sinopse:
"Travis Bickle é um veterano solitário que trabalha como taxista durante a noite pelas ruas violentas de Nova York. Cada vez mais perturbado com o que vê, ele passa a acreditar que precisa limpar a cidade e começa a planejar uma ação violenta.",
review: "...",
},

{
id: 3,
nome: "À bout de souffle",
tituloBusca: "À bout de souffle",
diretor: "Jean-Luc Godard",
data: 1960,
genero: "Crime / Drama",
sinopse:
"Michel Poiccard rouba um carro e mata um policial durante a fuga, tornando-se procurado pela polícia. Ele se esconde em Paris enquanto tenta convencer sua amante americana, Patricia, a fugir com ele, mas ela começa a questionar se pode confiar nele.",
review: "...",
},

{
id: 4,
nome: "Amadeus",
tituloBusca: "Amadeus",
diretor: "Milos Forman",
data: 1984,
genero: "Drama / Biográfico",
sinopse:
"O compositor Antonio Salieri conta sua história e sua obsessão por Wolfgang Amadeus Mozart, um músico que considera vulgar e imaturo, mas cujo talento reconhece como extraordinário. Consumido pela inveja, Salieri começa a enxergar Mozart como uma ameaça à sua própria existência.",
review: "...",
},

{
id: 5,
nome: "Chinatown",
tituloBusca: "Chinatown",
diretor: "Roman Polanski",
data: 1974,
genero: "Crime / Mistério / Noir",
sinopse:
"O detetive particular J. J. Gittes é contratado para investigar uma suposta traição envolvendo um importante engenheiro de Los Angeles. O caso rapidamente revela uma conspiração envolvendo corrupção, água, política e segredos familiares muito mais sombrios do que ele imaginava.",
review: "...",
},

{
id: 6,
nome: "Halloween",
tituloBusca: "Halloween",
diretor: "John Carpenter",
data: 1978,
genero: "Terror / Slasher",
sinopse:
"Quinze anos depois de matar a própria irmã, Michael Myers escapa do hospital psiquiátrico e retorna à sua cidade natal. Na noite de Halloween, ele começa a perseguir Laurie Strode e suas amigas enquanto o médico que o acompanhava tenta encontrá-lo.",
review: "...",
},

{
id: 7,
nome: "The Long Goodbye",
tituloBusca: "The Long Goodbye",
diretor: "Robert Altman",
data: 1973,
genero: "Crime / Mistério / Noir",
sinopse:
"O detetive Philip Marlowe acorda no meio da noite para ajudar seu amigo Terry Lennox a fugir para o México. Quando Lennox é acusado de assassinato, Marlowe começa a investigar o caso e descobre que está cercado por pessoas mentirosas e perigosas.",
review: "...",
},

{
id: 8,
nome: "Eyes Wide Shut",
tituloBusca: "Eyes Wide Shut",
diretor: "Stanley Kubrick",
data: 1999,
genero: "Drama / Mistério / Thriller",
sinopse:
"Depois de sua esposa revelar uma fantasia envolvendo outro homem, o médico Bill Harford passa a noite vagando por Nova York. Sua curiosidade o leva a uma misteriosa sociedade secreta onde presencia uma cerimônia sexual e acaba envolvido em uma situação cada vez mais perigosa.",
review: "...",
},

{
id: 9,
nome: "O Sol por Testemunha",
tituloBusca: "Plein Soleil",
diretor: "René Clément",
data: 1960,
genero: "Crime / Drama / Thriller",
sinopse:
"Tom Ripley é um jovem ambicioso contratado para trazer de volta um homem rico que vive despreocupadamente na Itália. Fascinado pela vida luxuosa dele, Tom começa a desejar sua identidade e percebe que o assassinato pode ser o caminho para conseguir tudo o que quer.",
review: "...",
},

{
id: 10,
nome: "Collateral",
tituloBusca: "Collateral",
diretor: "Michael Mann",
data: 2004,
genero: "Crime / Thriller",
sinopse:
"Max é um taxista de Los Angeles que aceita levar um passageiro chamado Vincent durante uma noite. Ele logo descobre que Vincent é um assassino profissional que pretende realizar vários assassinatos pela cidade e obriga Max a transportá-lo de um alvo para outro.",
review: "...",
},

{
id: 11,
nome: "Fogo Contra Fogo",
tituloBusca: "Heat",
diretor: "Michael Mann",
data: 1995,
genero: "Crime / Drama / Thriller",
sinopse:
"Neil McCauley lidera uma equipe de criminosos profissionais em grandes assaltos enquanto o detetive Vincent Hanna tenta capturá-lo. Os dois passam a se reconhecer como adversários semelhantes, enquanto suas vidas pessoais e profissionais caminham para um inevitável confronto.",
review: "...",
},

{
id: 12,
nome: "Carlito's Way",
tituloBusca: "Carlito's Way",
diretor: "Brian De Palma",
data: 1993,
genero: "Crime / Drama / Thriller",
sinopse:
"Carlito Brigante sai da prisão decidido a abandonar o crime e começar uma nova vida ao lado de sua antiga namorada. Porém, seus antigos contatos e seu sócio advogado Dave Kleinfeld o puxam novamente para o mundo criminoso, dificultando cada vez mais sua tentativa de escapar desse passado.",
review: "...",
},

{
id: 13,
nome: "Blade Runner 2049",
tituloBusca: "Blade Runner 2049",
diretor: "Denis Villeneuve",
data: 2017,
genero: "Ficção Científica / Neo-Noir",
sinopse:
"K é um replicante que trabalha como policial caçando outros replicantes. Ao descobrir um segredo capaz de mudar a sociedade, ele começa a investigar o desaparecimento de Rick Deckard e questiona sua própria identidade e o significado de ser humano.",
review: "...",
},

{
id: 14,
nome: "Barry Lyndon",
tituloBusca: "Barry Lyndon",
diretor: "Stanley Kubrick",
data: 1975,
genero: "Drama / Épico",
sinopse:
"O irlandês Redmond Barry abandona sua terra natal após um conflito amoroso e passa por guerras, golpes e aventuras para subir socialmente. Ao assumir a identidade de Barry Lyndon, ele consegue entrar na aristocracia, mas sua ambição e seus excessos começam a destruir tudo o que conquistou.",
review: "...",
},

{
id: 15,
nome: "The Man Who Sleeps",
tituloBusca: "Un homme qui dort",
diretor: "Georges Perec / Bernard Queysanne",
data: 1974,
genero: "Drama / Experimental",
sinopse:
"Um jovem estudante decide se afastar completamente da sociedade e abandona suas obrigações, amigos e estudos. Aos poucos, ele passa a observar o mundo de maneira distante e indiferente, tentando existir sem participar da vida ao seu redor.",
review: "...",
},

{
id: 16,
nome: "Mulholland Drive",
tituloBusca: "Mulholland Drive",
diretor: "David Lynch",
data: 2001,
genero: "Mistério / Thriller / Neo-Noir",
sinopse:
"Após um acidente de carro em Los Angeles, uma mulher perde a memória e recebe ajuda de Betty, uma aspirante a atriz. As duas começam a investigar a identidade dela, mas a busca por respostas mistura sonhos, memórias, desejos e acontecimentos misteriosos.",
review: "...",
},

{
id: 17,
nome: "La Haine",
tituloBusca: "La Haine",
diretor: "Mathieu Kassovitz",
data: 1995,
genero: "Crime / Drama",
sinopse:
"Após um jovem ser gravemente ferido pela polícia durante uma revolta em Paris, três amigos passam um dia pelas ruas de um bairro pobre marcado pela violência. Conforme a tensão aumenta, os três enfrentam conflitos com a polícia e entre si, enquanto a possibilidade de vingança cresce.",
review: "...",
},

{
id: 18,
nome: "O Cavaleiro das Trevas",
tituloBusca: "The Dark Knight",
diretor: "Christopher Nolan",
data: 2008,
genero: "Ação / Crime / Drama",
sinopse:
"Batman tenta acabar com o crime organizado de Gotham ao lado do comissário Gordon e do promotor Harvey Dent. Porém, a chegada do Coringa cria uma ameaça diferente, que busca destruir a ordem da cidade e provar que qualquer pessoa pode ser corrompida.",
review: "...",
},

{
id: 19,
nome: "Os Bons Companheiros",
tituloBusca: "Goodfellas",
diretor: "Martin Scorsese",
data: 1990,
genero: "Crime / Drama",
sinopse:
"Henry Hill cresce admirando os mafiosos de seu bairro e começa a trabalhar para a máfia ainda jovem. Ao lado de Jimmy Conway e Tommy DeVito, ele entra em uma vida de crimes, dinheiro e poder, mas sua ambição, drogas e traições acabam colocando tudo em risco.",
review: "...",
},

{
id: 20,
nome: "The Fire Within",
tituloBusca: "Le Feu follet",
diretor: "Louis Malle",
data: 1963,
genero: "Drama",
sinopse:
"Alain está internado em uma clínica para tratar o alcoolismo, mas acredita que não consegue mais encontrar sentido em sua vida. Pouco antes de deixar a clínica, ele visita antigos amigos em busca de alguma razão para continuar vivendo.",
review: "...",
},

{
id: 21,
nome: "They Live",
tituloBusca: "They Live",
diretor: "John Carpenter",
data: 1988,
genero: "Ficção Científica / Terror",
sinopse:
"John Nada encontra um par de óculos que revela uma realidade escondida: alienígenas controlam a sociedade enquanto manipulam os humanos por meio de mensagens subliminares. Ao descobrir a conspiração, ele decide lutar contra o sistema e revelar a verdade.",
review: "...",
},

{
id: 22,
nome: "Before Sunrise",
tituloBusca: "Before Sunrise",
diretor: "Richard Linklater",
data: 1995,
genero: "Romance / Drama",
sinopse:
"Jesse conhece Céline em um trem pela Europa e a convence a descer com ele em Viena. Sabendo que precisam se separar na manhã seguinte, os dois passam a noite caminhando pela cidade, conversando sobre amor, vida, medo e o futuro.",
review: "...",
},

{
id: 23,
nome: "Janela Indiscreta",
tituloBusca: "Rear Window",
diretor: "Alfred Hitchcock",
data: 1954,
genero: "Mistério / Thriller",
sinopse:
"Preso em casa com a perna quebrada, o fotógrafo Jeff passa o tempo observando os vizinhos pela janela. Quando acredita ter testemunhado um assassinato, começa a investigar o apartamento suspeito, envolvendo sua namorada e sua enfermeira no perigo.",
review: "...",
},

{
id: 24,
nome: "Mirror",
tituloBusca: "Zerkalo",
diretor: "Andrei Tarkovsky",
data: 1975,
genero: "Drama",
sinopse:
"Um homem próximo da morte relembra sua infância, sua mãe, seus relacionamentos e acontecimentos históricos que marcaram sua vida. O filme mistura memórias, sonhos e imagens do passado sem seguir uma narrativa linear tradicional.",
review: "...",
},

{
id: 25,
nome: "After Hours",
tituloBusca: "After Hours",
diretor: "Martin Scorsese",
data: 1985,
genero: "Comédia Negra / Thriller",
sinopse:
"Paul é um trabalhador comum que conhece uma mulher em um café e decide visitá-la naquela mesma noite. O que deveria ser um encontro simples se transforma em uma sequência absurda de acontecimentos, fazendo Paul tentar desesperadamente voltar para casa.",
review: "...",
},

{
id: 26,
nome: "Se Meu Apartamento Falasse",
tituloBusca: "The Apartment",
diretor: "Billy Wilder",
data: 1960,
genero: "Comédia / Drama / Romance",
sinopse:
"C.C. Baxter empresta seu apartamento para que seus chefes tenham encontros secretos em troca de vantagens profissionais. Quando descobre que a mulher que ama está envolvida com um de seus superiores, ele precisa decidir entre continuar buscando sucesso ou fazer o que considera certo.",
review: "...",
},

{
id: 27,
nome: "Um Corpo que Cai",
tituloBusca: "Vertigo",
diretor: "Alfred Hitchcock",
data: 1958,
genero: "Mistério / Romance / Thriller",
sinopse:
"O detetive aposentado John Ferguson é contratado para seguir Madeleine, uma mulher que parece estar sendo influenciada pelo espírito de uma antepassada. Depois de um acontecimento trágico, John fica obcecado por ela e tenta recriar sua imagem em outra mulher.",
review: "...",
},

{
id: 28,
nome: "O Iluminado",
tituloBusca: "The Shining",
diretor: "Stanley Kubrick",
data: 1980,
genero: "Terror / Drama",
sinopse:
"Jack Torrance aceita trabalhar como zelador de um hotel isolado durante o inverno e leva sua esposa e seu filho Danny para lá. Enquanto a família fica presa pela neve, a influência sobrenatural do hotel começa a afetar Jack e transformar seu comportamento.",
review: "...",
},

{
id: 29,
nome: "O Império Contra-Ataca",
tituloBusca: "The Empire Strikes Back",
diretor: "Irvin Kershner",
data: 1980,
genero: "Ficção Científica / Aventura",
sinopse:
"Após o ataque do Império à base rebelde, Luke Skywalker viaja para aprender os caminhos da Força com Yoda. Enquanto isso, Han Solo, Leia e Chewbacca tentam escapar das forças imperiais, até que Darth Vader prepara uma armadilha para os heróis.",
review: "...",
},

{
id: 30,
nome: "12 Homens e uma Sentença",
tituloBusca: "12 Angry Men",
diretor: "Sidney Lumet",
data: 1957,
genero: "Drama",
sinopse:
"Doze jurados precisam decidir se um jovem acusado de matar o próprio pai é culpado. Quando um deles questiona as provas apresentadas no julgamento, o grupo começa a discutir cada detalhe do caso, revelando preconceitos, dúvidas e contradições.",
review: "...",
},

{
id: 31,
nome: "Era Uma Vez... em Hollywood",
tituloBusca: "Once Upon a Time... in Hollywood",
diretor: "Quentin Tarantino",
data: 2019,
genero: "Comédia / Drama",
sinopse:
"O ator em decadência Rick Dalton e seu dublê e amigo Cliff Booth tentam encontrar seu lugar em Hollywood no final dos anos 1960. Enquanto Rick luta para manter sua carreira, os dois acabam envolvidos com pessoas ligadas à família de Charles Manson.",
review: "...",
},

{
id: 32,
nome: "Oldboy",
tituloBusca: "Oldboy",
diretor: "Park Chan-wook",
data: 2003,
genero: "Crime / Thriller / Mistério",
sinopse:
"Oh Dae-su é sequestrado e mantido em cativeiro por quinze anos sem saber quem o prendeu ou por quê. Libertado de repente, ele recebe cinco dias para descobrir a identidade de seu inimigo e a razão por trás de seu sofrimento.",
review: "...",
},

{
id: 33,
nome: "São Paulo, Sociedade Anônima",
tituloBusca: "São Paulo, Sociedade Anônima",
diretor: "Luís Sérgio Person",
data: 1965,
genero: "Drama",
sinopse:
"Carlos trabalha em uma indústria automobilística e consegue ascender socialmente dentro de uma São Paulo em rápida transformação. Apesar do dinheiro e do sucesso profissional, ele se sente preso a uma vida mecânica e começa a questionar suas escolhas.",
review: "...",
},

{
id: 34,
nome: "Harakiri",
tituloBusca: "Harakiri",
diretor: "Masaki Kobayashi",
data: 1962,
genero: "Drama / Samurai",
sinopse:
"Um samurai sem mestre chega a uma casa de um poderoso clã pedindo permissão para cometer seppuku. Enquanto os líderes tentam desencorajá-lo, ele revela acontecimentos do passado que colocam em dúvida a honra e os valores defendidos pelo clã.",
review: "...",
},

{
id: 35,
nome: "O Exorcista",
tituloBusca: "The Exorcist",
diretor: "William Friedkin",
data: 1973,
genero: "Terror / Drama",
sinopse:
"Regan, uma menina de doze anos, começa a apresentar comportamentos cada vez mais estranhos e violentos. Depois que médicos não conseguem explicar o que acontece, sua mãe procura a Igreja, que envia dois padres para tentar libertá-la de uma possível possessão demoníaca.",
review: "...",
},

{
id: 36,
nome: "Pânico",
tituloBusca: "Scream",
diretor: "Wes Craven",
data: 1996,
genero: "Terror / Slasher / Mistério",
sinopse:
"Uma série de assassinatos começa a acontecer em uma pequena cidade, cometidos por um assassino mascarado que conhece as regras dos filmes de terror. A estudante Sidney Prescott e seus amigos tentam descobrir quem está por trás da máscara antes que sejam as próximas vítimas.",
review: "...",
},

{
id: 37,
nome: "Drive",
tituloBusca: "Drive",
diretor: "Nicolas Winding Refn",
data: 2011,
genero: "Crime / Drama / Neo-Noir",
sinopse:
"Um motorista anônimo trabalha como dublê de cinema durante o dia e como motorista de fuga para criminosos à noite. Ao se aproximar de sua vizinha Irene, ele decide ajudá-la quando seu marido sai da prisão, mas acaba envolvido em uma guerra entre criminosos.",
review: "...",
},

{
id: 38,
nome: "Scarface",
tituloBusca: "Scarface",
diretor: "Brian De Palma",
data: 1983,
genero: "Crime / Drama",
sinopse:
"Tony Montana chega aos Estados Unidos como imigrante cubano e começa a construir seu império no tráfico de drogas. Conforme conquista dinheiro e poder, sua ambição cresce até colocá-lo em conflito com antigos aliados, rivais e consigo mesmo.",
review: "...",
},

{
id: 39,
nome: "The Good, the Bad and the Ugly",
tituloBusca: "The Good, the Bad and the Ugly",
diretor: "Sergio Leone",
data: 1966,
genero: "Western",
sinopse:
"Três pistoleiros — Blondie, Angel Eyes e Tuco — descobrem que cada um possui parte das informações sobre um tesouro escondido. Apesar de serem inimigos, precisam seguir o mesmo caminho durante a Guerra Civil Americana para encontrar o ouro.",
review: "...",
},

{
id: 40,
nome: "As Pontes de Madison",
tituloBusca: "The Bridges of Madison County",
diretor: "Clint Eastwood",
data: 1995,
genero: "Drama / Romance",
sinopse:
"Francesca vive uma vida tranquila e rotineira em uma fazenda de Iowa quando conhece Robert, um fotógrafo que está na região para fotografar as pontes de Madison County. Durante alguns dias, os dois desenvolvem uma relação intensa que muda suas vidas para sempre.",
review: "...",
},

{
id: 41,
nome: "Psicopata Americano",
tituloBusca: "American Psycho",
diretor: "Mary Harron",
data: 2000,
genero: "Crime / Drama / Thriller",
sinopse:
"Patrick Bateman é um jovem banqueiro rico que mantém uma aparência perfeita enquanto leva uma vida secreta marcada por violência e assassinatos. Conforme sua obsessão por status, aparência e poder aumenta, fica cada vez mais difícil distinguir realidade de sua mente perturbada.",
review: "...",
},

{
id: 42,
nome: "Pacto de Sangue",
tituloBusca: "Double Indemnity",
diretor: "Billy Wilder",
data: 1944,
genero: "Crime / Noir / Thriller",
sinopse:
"O vendedor de seguros Walter Neff conhece Phyllis Dietrichson e se envolve com ela em um plano para matar seu marido e receber o dinheiro do seguro. Para executar o crime, os dois precisam enganar a própria companhia de seguros, mas as suspeitas começam a surgir.",
review: "...",
},

{
id: 43,
nome: "Um Tiro na Noite",
tituloBusca: "Blow Out",
diretor: "Brian De Palma",
data: 1981,
genero: "Mistério / Thriller",
sinopse:
"Jack é um técnico de som que grava acidentalmente o momento em que um carro sofre um acidente, matando um político. Ao analisar a gravação, ele percebe que captou um tiro antes da explosão e começa a investigar uma possível conspiração.",
review: "...",
},

{
id: 44,
nome: "Enigma de Outro Mundo",
tituloBusca: "The Thing",
diretor: "John Carpenter",
data: 1982,
genero: "Terror / Ficção Científica",
sinopse:
"Uma equipe de pesquisadores americanos na Antártida encontra uma criatura alienígena capaz de imitar perfeitamente qualquer ser vivo. Presos e isolados, os membros da equipe começam a desconfiar uns dos outros enquanto tentam descobrir quem ainda é humano.",
review: "...",
},

{
id: 45,
nome: "O Lobo de Wall Street",
tituloBusca: "The Wolf of Wall Street",
diretor: "Martin Scorsese",
data: 2013,
genero: "Crime / Comédia / Drama",
sinopse:
"Jordan Belfort começa como corretor da bolsa e rapidamente constrói uma enorme fortuna usando métodos agressivos e fraudulentos. Cercado por drogas, festas e excessos, ele transforma sua empresa em um império enquanto chama a atenção das autoridades.",
review: "...",
},

{
id: 46,
nome: "The Night of the Hunter",
tituloBusca: "The Night of the Hunter",
diretor: "Charles Laughton",
data: 1955,
genero: "Crime / Thriller / Noir",
sinopse:
"Um falso pregador chamado Harry Powell se casa com uma viúva para descobrir onde seu falecido marido escondeu uma grande quantia de dinheiro. Seus dois filhos percebem suas verdadeiras intenções e precisam fugir para proteger o segredo do pai.",
review: "...",
},

{
id: 47,
nome: "Veludo Azul",
tituloBusca: "Blue Velvet",
diretor: "David Lynch",
data: 1986,
genero: "Mistério / Thriller / Neo-Noir",
sinopse:
"Jeffrey Beaumont encontra uma orelha humana em um terreno e decide investigar o caso por conta própria. Sua investigação o leva até a cantora Dorothy Vallens e a um criminoso violento chamado Frank Booth, revelando um lado sombrio escondido por trás da aparência tranquila de sua cidade.",
review: "...",
},

{
id: 48,
nome: "Pulp Fiction",
tituloBusca: "Pulp Fiction",
diretor: "Quentin Tarantino",
data: 1994,
genero: "Crime / Drama / Comédia Negra",
sinopse:
"A história acompanha diversos criminosos de Los Angeles cujas vidas se cruzam através de assaltos, drogas, violência e traições. Entre eles estão os assassinos Vincent e Jules, o boxeador Butch e o casal de pequenos criminosos Pumpkin e Honey Bunny.",
review: "...",
},

{
id: 49,
nome: "Era Uma Vez na América",
tituloBusca: "Once Upon a Time in America",
diretor: "Sergio Leone",
data: 1984,
genero: "Crime / Drama / Épico",
sinopse:
"David 'Noodles' Aaronson relembra sua infância e sua ascensão no mundo do crime organizado em Nova York. Décadas depois, ele retorna à cidade e confronta seu passado, seus antigos amigos e as consequências das escolhas que fez.",
review: "...",
},

{
id: 50,
nome: "Curtindo a Vida Adoidado",
tituloBusca: "Ferris Bueller's Day Off",
diretor: "John Hughes",
data: 1986,
genero: "Comédia",
sinopse:
"Ferris Bueller decide matar aula e convence seu melhor amigo Cameron e sua namorada Sloane a passarem um dia inteiro se divertindo em Chicago. Enquanto os três aproveitam a cidade, o diretor da escola tenta desesperadamente provar que Ferris está mentindo.",
review: "...",
},

{
id: 51,
nome: "Memórias de um Assassinato",
tituloBusca: "Memories of Murder",
diretor: "Bong Joon-ho",
data: 2003,
genero: "Crime / Mistério / Drama",
sinopse:
"Dois detetives investigam uma série de assassinatos de mulheres em uma pequena cidade da Coreia do Sul. Enquanto tentam encontrar o responsável, enfrentam falta de provas, métodos policiais violentos e a crescente frustração de não conseguirem identificar o assassino.",
review: "...",
},

{
id: 52,
nome: "Juventude Transviada",
tituloBusca: "Rebel Without a Cause",
diretor: "Nicholas Ray",
data: 1955,
genero: "Drama",
sinopse:
"Jim Stark é um adolescente rebelde que chega a uma nova cidade tentando começar de novo. Lá, ele se envolve com outros jovens problemáticos e enfrenta conflitos familiares, rivalidades e uma crescente sensação de isolamento e incompreensão.",
review: "...",
},

{
id: 53,
nome: "Le Cercle Rouge",
tituloBusca: "Le Cercle Rouge",
diretor: "Jean-Pierre Melville",
data: 1970,
genero: "Crime / Thriller / Noir",
sinopse:
"Após sair da prisão, Corey se une ao criminoso Vogel e ao ex-policial Jansen para realizar um sofisticado roubo de joias. Enquanto a polícia tenta capturá-los, os três precisam confiar uns nos outros para executar o plano perfeito.",
review: "...",
},
]

export default filmes
