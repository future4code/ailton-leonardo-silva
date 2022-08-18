type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) tsc && node ./build/exercicio4.js

//c) Idem... já configurado as pastas build e src

//d) tsc exercicio1 exercicio2 exercicio3 exercicio4
// por definição no tsconfig.json a transpilação ocorrerá no diretório build