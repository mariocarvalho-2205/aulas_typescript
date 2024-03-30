// a declaração do tipo implicito na propria função

function soma (a: number, b: number, c?: number):number {
    return a + b + (c ? c : 0)
}

console.log(soma(5, 6, 9))

const sub = (a: number, b: number, c?: number) => a - b - (c ? c : 0)

console.log(sub(20, 5, 6))

// declaração usando type

type Callback = (event: MouseEvent) => void

// Void
/* No JavaScript, uma função sem return irá retornar undefined. 
No TypeScript o retorno é definido como void. Isso evita usos 
errados como checagens booleanas de métodos que não 
possuem retorno. */

// O retorno de void e acontece quando uma função nao retorna nada

function pintarTela(cor: string) {
    document.body.style.backgroundColor = cor
}

pintarTela("gray")
// dessa forma nao conseguimos fazer validação booleana

const btn = document.querySelector('button')

btn?.click()

// retornando a função como underfined
function isString (value: any) {
    if (typeof value === "string") {
        return true
    }
}

console.log(isString("teste"))
console.log(isString(10))

/*
Never
O never é utilizado em casos onde a 
função gera um erro ou termina a aplicação.
Ou seja, para toda a aplicação
reduzindo ate a opacidade do codigo 
que segue apos a função
*/

function abortar (mensagem: string): never {
    throw new Error (mensagem)
}

abortar('um erro ocorreu')
console.log('tente novamente')