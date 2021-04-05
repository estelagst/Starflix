alert("Bem vindo ao StarFlix. Temos no momento 24 séries, caso deseje ver um número que não está na lista (de 1 a 24) basta digitar que terá suas informações")
var listaSeries = ["https://m.media-amazon.com/images/M/MV5BNzY1YjIxOGMtOTAyZC00YTcyLWFhMzQtZTJkYTljYzU0MGRlXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_UY268_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNmYwNmYxYjgtZGEwYi00MzkxLTkwYWQtMTQ3Njk5NWRjN2ExXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTI0NTMwMDgtYTMzZC00YmJhLTg4NzMtMTc1NjI4MWY4NmQ4XkEyXkFqcGdeQXVyNTY3MTYzOTA@._V1_UY268_CR16,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNjBmZmI0ZDktODI2MS00MDU1LTk0NDYtNGE0MDc0OWVkYzcwXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BM2Q1MDhjYzQtZmNmYS00ZmUyLWFmYjgtZTkyMzU0ZjcyMDNmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UY268_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMzZjMWEwMGMtODdhMi00NGRkLTkwZTEtNmM4NjA3M2FlNzc2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMzFiNjdhODItZjhlMS00YWZlLWJhYWUtMGViODdmOGY2ZDhhXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMGE5ZTM5MjEtYTVjNS00OTU4LWI1YzItMGI1OWQ2ZmEzODc1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY268_CR9,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNGIzOGQxZDEtOTVhNC00YzgyLWE2ZjItNDM5YjQ0MTZlZTUwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNDllZjc2NjEtOGMwZS00ZmNkLTg2NDgtZjJkYjg0YjMxM2FmXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNjExMTJkMWEtYTM1Yy00YjBlLWEzOWItNGM0YzZjNzFkMjlkXkEyXkFqcGdeQXVyMTE2OTE2MzE1._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjgwNGNkZGYtMWQyYS00YjEzLWFmZTctODUzYWMxOWJkNTAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMWQzM2E3NTUtNmU1Yi00ZTcxLWI1OGYtMTE4YTRkYTAxNzM5XkEyXkFqcGdeQXVyMjgyMDEwOTQ@._V1_UY268_CR13,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMGY5NTA0YjQtZTE5NS00M2FiLWIzMmQtOTFiYzc5YWM2OTdiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR4,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZDAwZWVhOTAtNmExMS00MTU3LWJmZTgtY2U4NjIyY2E1ZThhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMGJiYjIyZDItNDc3Ny00ZWRjLWI2ZTctZGRmZmRmNDYzNTk1XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_UY268_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOGUxOWQ4MzAtMmJjYS00M2U5LWEwZTAtYTc1YmZhNjg2NDRlXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTg1NzUzNmQtMWI2ZC00YzdlLWI5ZTgtMGM3MjJlZTgwYTVlXkEyXkFqcGdeQXVyMTIzMzY2NDQ2._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYzMxZWM4ZmEtZWFmMS00NGZlLWI5ZWEtMzhlZDVhNGIwNWRhXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var nomeSeries = ["Lucifer", "Supergirl", "Flash", "Arrow", "Once Upon a Time", "Chicago Fire", " The Vampires Diaries", "The Good Doctor", "Chicago PD", "Manifest", "Shera e as princesas do poder", "The Originals", "Good Witch", "Grey's Anatomy", "Kally's Mashup", "Everbody hates Chris", "Malibu rescue", "Julie and the Phantons", "Prison Break", "Um maluco no pedaco", " Friends", "MacGyver", "Chicago Med", "Stranger Things"] 
 var catalogo = parseInt(prompt("Digite 1 para ver o catálogo e 2 para ver a sinopse de um dos itens "))
 if (catalogo == 1){
   for (var i = 0; i < listaSeries.length; i++){
  document.write("<img src=" + listaSeries[i] + ">")
}
 }  if (catalogo == 2){
   var series = parseInt(prompt("Selecione o número  para ver a sinopse da série: \n1:Lucifer \n2:Supergirl \n3:Flash \n4:Arrow \n5:Once Upon a Time \n6:Chicago Fire  \n7:The Vampires Diaries \n8:The Good Doctor \n9:Chicago PD \n10:Manifest \n11:Shera e as princesas do poder \n12:The Originals \n13:Good Witch \n14:Grey's Anatomy \n15:Kally's Mashup \n16:Everbody hates Chris \n17:Malibu rescue \n18:Julie and the Phantons \n19:Prison Break \n20:Um maluco no pedaco \n21:Friends \n22:MacGyver \n23:Chicago Med \n24:Stranger Things"))
  if (series == 1) {
document.write("<h2>" + nomeSeries[0] +"</h2>")
document.write("<img src=" + listaSeries[0] + ">")
document.write("<h3>"+"Lucifer está entediado e infeliz como o Senhor do Inferno e decide tirar férias em Los Angeles, onde vira dono de uma casa noturna com ajuda de sua serva Mazikeen."+"</h3>")
  } else if (series == 2) {
document.write("<h2>" + nomeSeries[1] +"</h2>")
document.write("<img src=" + listaSeries[1] + ">")
document.write("<h3>"+"Kara Zor-El escapou de seu planeta quando tinha 12 anos de idade. Desde que chegou à Terra, ela conseguiu esconder seus poderes, os quais compartilha com seu primo, o Super-Homem. Mas agora, ela ajuda a proteger os cidadãos de National City."+"</h3>")
  }else if (series == 3) {
document.write("<h2>" + nomeSeries[2] +"</h2>")
document.write("<img src=" + listaSeries[2] + ">")
document.write("<h3>"+"Acompanhe as aventuras do homem mais veloz do planeta, o cientista da Central City Police Barry Allen, que após um trágico acidente adquire o poder da velocidade."+"</h3>")

  }else if (series == 4) {
document.write("<h2>" + nomeSeries[3] +"</h2>")
document.write("<img src=" + listaSeries[3] + ">")
document.write("<h3>"+"Após um violento naufrágio, o playboy milionário Oliver Queen é dado como morto. Cinco anos depois, é resgatado de uma ilha do Pacífico e enviado de volta para Starling City, onde passa a agir como vigilante secreto"+"</h3>")

  }else if (series == 5) {
document.write("<h2>" + nomeSeries[4] +"</h2>")
document.write("<img src=" + listaSeries[4] + ">")
document.write("<h3>"+"A história de um mundo novo, onde contos de fadas e vida moderna colidem. Emma Swan está feliz com sua vida; seu filho Henry, que ela deixou há mais de dez anos, reaparece e acha que ela é a filha de Branca de Neve e do Príncipe Encantado."+"</h3>")

  }else if (series == 6) {
document.write("<h2>" + nomeSeries[5] +"</h2>")
document.write("<img src=" + listaSeries[5] + ">")
document.write("<h3>"+"Integrantes do corpo de bombeiros de Chicago se culpam pela morte de um companheiro e enfrentam problemas pessoais, mas, apesar das tensões, na hora de enfrentar os desafios, deixam as diferenças de lado e arriscam suas vidas"+"</h3>")

  }else if (series == 7) {
document.write("<h2>" + nomeSeries[6] +"</h2>")
document.write("<img src=" + listaSeries[6] + ">")
document.write("<h3>"+"Alguns meses depois que seus pais são mortos em um trágico acidente de carro, Elena Gilbert e seu irmão Jeremy tentam aplacar sua dor. Para Elena, que sempre foi popular e envolvida com a escola e amigos, é uma luta esconder sua tristeza do mundo. Ela se vê atraída por um novo estudante bonitão e misterioso, Stefan, sem saber que o jovem é um vampiro centenário fazendo o melhor para viver em paz entre os humanos. Seu irmão Damon, porém, é o típico estereótipo de vampiro, incluindo a violência e a brutalidade. Os irmãos travam uma guerra pelas almas de Elena e de todos na pequena cidade do estado da Virginia"+"</h3>")

  }else if (series == 8) {
document.write("<h2>" + nomeSeries[7] +"</h2>")
document.write("<img src=" + listaSeries[7] + ">")
document.write("<h3>"+"Um jovem médico com autismo vindo da calma vida do interior começa a trabalhar em um famoso hospital. Além dos desafios da profissão, Shaun Murphy precisa provar sua capacidade a seus colegas e superiores."+"</h3>")

  }else  if (series == 9) {
document.write("<h2>" + nomeSeries[8] +"</h2>")
document.write("<img src=" + listaSeries[8] + ">")
document.write("<h3>"+"O Distrito 21 do Departamento de Polícia de Chicado é composto pelos policiais uniformizados que lidam com o crime nas ruas e pela Unidade de Inteligência, que lida com crimes maiores como tráfico de drogas e assassinatos."+"</h3>")

  }else  if (series == 10) {
document.write("<h2>" + nomeSeries[9] +"</h2>")
document.write("<img src=" + listaSeries[9] + ">")
document.write("<h3>"+"Um voo aparentemente normal chega ao seu destino cerca de três horas após a partida, passando por algumas turbulências. No entanto, ao desembarcarem, os passageiros descobrem que foram dados como mortos e se passaram cinco anos desde a decolagem."+"</h3>")

  }else if (series == 11) {
document.write("<h2>" + nomeSeries[10] +"</h2>")
document.write("<img src=" + listaSeries[10] + ">")
document.write("<h3>"+"She-Ra e as Princesas do Poder conta a história de uma órfã chamada Adora, que deixa para trás sua antiga vida quando descobre uma espada mágica que a transforma na mítica princesa guerreira She-Ra."+"</h3>")

  }else if (series == 12) {
document.write("<h2>" + nomeSeries[11] +"</h2>")
document.write("<img src=" + listaSeries[11] + ">")
document.write("<h3>"+"O vampiro Klaus retorna a Nova Orleans, que sua família ajudou a construir, para investigar rumores de uma conspiração contra ele. Ele encontra seu antigo protegido, Marcel, que reina poderosamente sobre os seus habitantes, causando uma tensão crescente na comunidade sobrenatural. Klaus e seu irmão, Elijah, descobrem que o lobisomem Hayley caiu nas mãos de uma bruxa. Klaus e Elijah pretendem recuperar a cidade e, enquanto esperam para ver se o seu irmão, Rebekah, vai deixar Mystic Falls para se juntar a eles, decidem formar uma aliança com as bruxas para ajudar a promover sua causa."+"</h3>")
  }else if (series == 13) {
document.write("<h2>" + nomeSeries[12] +"</h2>")
document.write("<img src=" + listaSeries[12] + ">")
document.write("<h3>"+"“Good Witch” conta a história da viúva Cassandra Nightingale, uma mulher com poderes especiais e muito  querida na cidade, e de sua filha Grace, uma inteligente e meiga menina de 15 anos, que está aprendendo a lidar com os poderes herdados da mãe."+"</h3>")
  }else if (series == 14) {
document.write("<h2>" + nomeSeries[13] +"</h2>")
document.write("<img src=" + listaSeries[13] + ">")
document.write("<h3>"+"A série médica de enorme sucesso foca em um grupo de jovens médicos do Hospital Grace Mercy West, de Seattle, que começaram a carreira na própria instituição como residentes. Um dos jovens médicos que dá nome ao show, Meredith Grey, é filha de um famoso cirurgião. Meredith luta para manter as relações com seus colegas, especialmente o chefe do centro cirúrgico, Richard Webber, devido ao relacionamento que já existia entre os dois -- Webber teve um caso com a mãe de Meredith na época em que ela era jovem."+"</h3>")

  }else if (series == 15) {
document.write("<h2>" + nomeSeries[14] +"</h2>")
document.write("<img src=" + listaSeries[14] + ">")
document.write("<h3>"+"Kally é um talento musical de 13 anos, que tenta encontrar o equilíbrio entre sua vida como uma pianista prodígio e uma adolescente comum, depois de sair de sua pequena cidade para a mais prestigiada universidade de música do país."+"</h3>")

  }else if (series == 16) {
document.write("<h2>" + nomeSeries[15] +"</h2>")
document.write("<img src=" + listaSeries[15] + ">")
document.write("<h3>"+"É uma série de televisão estadunidense de comédia dramática inspirado nas experiências pessoais do ator e comediante Chris Rock no bairro de Bed-Stuy, em Nova Iorque, durante a década de 1980."+"</h3>")

  }else if (series == 17) {
document.write("<h2>" + nomeSeries[16] +"</h2>")
document.write("<img src=" + listaSeries[16] + ">")
document.write("<h3>"+"Após terminarem o treinamento de Resgate Júnior, um grupo inexperiente de aspirantes a salva-vidas, chamado Equipe dos Linguados, decide voltar ao trabalho e enfrentar outro time em uma competição pela melhor torre na praia de Malibu."+"</h3>")

  }else if (series == 18) {
document.write("<h2>" + nomeSeries[17] +"</h2>")
document.write("<img src=" + listaSeries[17] + ">")
document.write("<h3>"+"A história gira em torno de Julie Molina, uma estudante de 15 anos que perdeu o amor à música com a morte de sua mãe. Ela volta a cantar depois de conhecer três fantasmas de músicos dos anos 90, Luke, Reggie e Alex, que morreram de forma trágica, antes de estreiarem em um show de sucesso."+"</h3>")
  
  }else if (series == 19) {
document.write("<h2>" + nomeSeries[18] +"</h2>")
document.write("<img src=" + listaSeries[18] + ">")
document.write("<h3>"+"Michael Scofield é um homem desesperado em uma situação desesperada. Seu irmão, Lincoln Burrows, foi condenado por um crime que não cometeu e colocado no corredor da morte. Michael rende um banco para conseguir ser encarcerado junto ao irmão na penitenciária estadual de Fox River e coloca em ação uma série de planos elaborados para permitir a fuga de Lincoln e provar sua inocência. Mesmo fora da prisão, seus perigos não acabam -- os irmãos precisam fugir para evitar a recaptura e lutar contra uma intricada conspiração policial que coloca a vida de todo mundo em risco."+"</h3>")

  }else if (series == 20) {
document.write("<h2>" + nomeSeries[19] +"</h2>")
document.write("<img src=" + listaSeries[19] + ">")
document.write("<h3>"+"A série conta a história de Will (Will Smith), um jovem de origem humilde que se muda para um luxuoso bairro na Califórnia. ... Contudo, por ser um garoto humilde e não ligar para os estudos, Will vive se comportando de maneira inadequada e provocando trapalhadas aos seus tios e primos na mansão."+"</h3>")

  }else if (series == 21) {
document.write("<h2>" + nomeSeries[20] +"</h2>")
document.write("<img src=" + listaSeries[20] + ">")
document.write("<h3>"+"Ross, Rachel, Mônica, Chandler, Joey e Phoebe formam um grupo de seis amigos que lutam para se sobressair e progredir na competitiva vida de Manhattan. Seu humor inteligente e apoio mútuo incondicional fazem com sua amizade seja cada vez mais forte, superando assim todos os obstáculos que a vida lhes apresenta."+"</h3>")

  }else if (series == 22) {
document.write("<h2>" + nomeSeries[21] +"</h2>")
document.write("<img src=" + listaSeries[21] + ">")
document.write("<h3>"+"É um drama de ação-aventura sobre Angus Mac MacGyver, de 20 e poucos anos, que cria uma organização clandestina dentro do governo dos Estados Unidos onde usa o seu talento extraordinário para resolver problemas com métodos pouco convencionais e o seu conhecimento"+"</h3>")

  }else if (series == 23) {
document.write("<h2>" + nomeSeries[22] +"</h2>")
document.write("<img src=" + listaSeries[22] + ">")
document.write("<h3>"+"A equipe de médicos, enfermeiros e funcionários do Gaffney Chicago Medical Center enfrenta desafios diários enquanto faz o que é necessário para tratar seus pacientes."+"</h3>")

  }else if (series == 24) {
document.write("<h2>" + nomeSeries[23] +"</h2>")
document.write("<img src=" + listaSeries[23] + ">")
document.write("<h3>"+"Will, um garoto de 12 anos, desaparece em Montauk, Long Island. Enquanto a polícia, família e amigos procuram respostas, eles mergulham em um extraordinário mistério, envolvendo um experimento secreto do governo, forças sobrenaturais e uma garotinha."+"</h3>")
  } 
   else {
    alert("Opção inválida")
  }

 




 }