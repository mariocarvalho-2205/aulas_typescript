/**
 * Guard, Safety e Narrowing
O Type Guard (defesa) garante a 
Type Safety (segurança) do dado dentro do 
bloco condicional. 
Esse processo é chamado de Type Narrowing 
(estreitamento).

O TypeScript faz Control Flow (controle de fluxo) para entender qual o dado dentro da condicional.
 */

/**
Unknown
Indica que não sabemos o tipo de dados que 
pode ser passado. Diferente do any, o unknown 
só irá permitir o uso de métodos quando a 
Type Safety estiver garantida.

ou seja ele deixa passar 
 */
function typeGuard(value: any) {
    // return value.toLowerCase() // para a funçao
    if (typeof value === 'string') {

        return value.toLowerCase()
    }
    if (typeof value === "number") {
        return value.toFixed(2)
    }
    if (value instanceof HTMLElement) {
        return value.innerText
    }
}

console.log(typeGuard('ss'))
console.log(typeGuard(200))
console.log(typeGuard(document.body))

/**
 * in
O operador in verifica se o objeto possui uma 
propriedade com o mesmo nome da string comparada 
"propriedade" in obj.
 */

const obj = {
    nome: "Mario"
}

if ('nome' in obj) {
    console.log("sim")
}
if ('preço' in obj) {
    console.log("sim")
}

// verificando em uma api
interface Produto{
    nome: string;
    preco: number;
}
async function fetchProduto () {
    const response = await fetch("https://api.origamid.dev/json/notebook.json")
    const data = await response.json()
    handleProduto(data)
}

function handleProduto (data: Produto) {
    // o type guard faz a verificação para ver se realmente existe o dado passado
    if ('preco' in data) {
        document.body.innerHTML += `
        <p>Nome: ${data.nome}</p>
        <p>Preço R$ ${data.preco + 100}</p>
        `
    } else {
        document.body.innerHTML = `
            <p>Produto nao encontrado</p>
        `
    }
}

fetchProduto()
