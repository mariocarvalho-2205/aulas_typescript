"use strict";
/**
 * Guard, Safety e Narrowing
O Type Guard (defesa) garante a
Type Safety (segurança) do dado dentro do
bloco condicional.
Esse processo é chamado de Type Narrowing
(estreitamento).

O TypeScript faz Control Flow (controle de fluxo) para entender qual o dado dentro da condicional.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
Unknown
Indica que não sabemos o tipo de dados que
pode ser passado. Diferente do any, o unknown
só irá permitir o uso de métodos quando a
Type Safety estiver garantida.

ou seja ele deixa passar
 */
function typeGuard(value) {
    // return value.toLowerCase() // para a funçao
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    if (typeof value === "number") {
        return value.toFixed(2);
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
console.log(typeGuard('ss'));
console.log(typeGuard(200));
console.log(typeGuard(document.body));
/**
 * in
O operador in verifica se o objeto possui uma
propriedade com o mesmo nome da string comparada
"propriedade" in obj.
 */
const obj = {
    nome: "Mario"
};
if ('nome' in obj) {
    console.log("sim");
}
if ('preço' in obj) {
    console.log("sim");
}
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/notebook.json");
        const data = yield response.json();
        handleProduto(data);
    });
}
function handleProduto(data) {
    // o type guard faz a verificação para ver se realmente existe o dado passado
    if ('preco' in data) {
        document.body.innerHTML += `
        <p>Nome: ${data.nome}</p>
        <p>Preço R$ ${data.preco + 100}</p>
        `;
    }
    else {
        document.body.innerHTML = `
            <p>Produto nao encontrado</p>
        `;
    }
}
fetchProduto();
