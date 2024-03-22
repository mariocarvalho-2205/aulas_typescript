// Generic é uma forma dinamica de passar o tipo do argumento da função, 
// classe ou interface

function retorno<T> (a: T) {
    return a
}

// a tipagem generic ao chamar a função e opcional, pois o tipo 

console.log(retorno("A Game").toUpperCase())
console.log(retorno(500).toFixed(2))

function fisrtFive<T>(lista: T[]):T[] {
    return lista.slice(0, 4)
}

// lista de valores para ser passado para a função
const numeros: number[] = [1,2,3,4,5,6,7,8,9,0]
const frutas = ["maça", "pera", "uva", "laranja", "melancia", "abacaxi", "limão"]

const fiveNumbers = fisrtFive<number>(numeros) // nao precisa ser passado o tipo
const fiveFruits = fisrtFive(frutas)

// fiveFruits.forEach((fruit) => console.log(fruit[0].toUpperCase() + fruit.substring(1)))
// fiveFruits.forEach((fruit) => console.log(`${fruit[0].toUpperCase()}${fruit.substring(1)}`))
console.log(fiveNumbers)
console.log(fiveFruits)

// validação para saber se retorna null
function notNull<T>(arg: T) {
    if (arg !== null) return arg
    else return null
}

console.log(notNull("Mario")?.toLowerCase())
console.log(notNull(200))
