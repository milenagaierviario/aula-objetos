const filme = {
	direcão : "Studio Ghibli" ,
	nome : "Castelo Animado" ,
	anoLançamento : 2004 ,
	elenco : ["Takuya Kimura" , "Emily Mortimer" , "Tatsuya Gashuin"] ,
	visto: true
}

console.log(filme.nome)
console.log(filme.direcão)
console.log(filme.elenco)
console.log(filme["visto"])
console.log(filme["anoLançamento"])

const pessoa = {
	nome : "mmm", 
	idade : 58 ,
	musica : "rock"
}
console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.musica}`) 


filme.personagens = ["Howl" , "Calcifer" , "Sophie"]

console.log(filme['personagens'])

console.log(filme.elenco [0], filme.personagens[0])
console.log(filme.elenco [1], filme.personagens[1])
console.log(filme.elenco [2], filme.personagens[2])

filme.elenco[0] = 'Xuxa'

function mostrarPessoa(pessoa) {
	const copiaPessoa = {
	...pessoa ,	

	comidas : ["Lentilha" , "Pure" , "Sorvete"] ,
	melhorAmigo : {
		nomeAmigo : "Ruan" ,
		idadeAmigo : 23
	}
	}
	console.log("O nome da pessoa é" , copiaPessoa.nome , "e suas comidas preferidas são" , copiaPessoa.comidas[0] , copiaPessoa.comidas[1] , "e" , copiaPessoa.comidas[2] , "Seu melhor amigo se chama", copiaPessoa.melhorAmigo.nomeAmigo , "e tem" , copiaPessoa.melhorAmigo.idadeAmigo , "anos")
}
mostrarPessoa(pessoa)

