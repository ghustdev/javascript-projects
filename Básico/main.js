//          Declarar variáveis
let nome = "Ana"
let idade = 25
const PI = 3.1415


//          Dados primitivos
let texto = "Olá";       // string
let numero = 42;         // number -> int/float
let ativo = true;        // boolean
let indef;               // undefined
let vazio = null;        // null
let simbolo = Symbol();  // symbol -> função
let grande = 9007199254740991n; // BigInt


//          Estruturas de controle
if (idade >= 18) {
    console.log("Maior que idade");
} else {
    console.log("Menor de idade");
}

for (let i=0; i<3; i++) console.log(i);

let t = 5;
while (t--) {
    console.log(t);
}


//          Funções
function sum(a, b) {
    return a + b;
}

const mult = (a, b) => a*b;


//          Objetos (json / dicionário -> key and value)
const pessoa = {
    nome: "Gustavo",
    idade: 30,
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    },
    altura: 1.75
}

pessoa.falar();


//          Arrays e métodos
const nums = [1 ,2, 3, 4];


nums.map(x => x * 2); // Normalmente passa uma função como parametro
nums.filter(x => x > 2);
console.log(nums);


//          Classes
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} fala algo`);
    }
}

class Cachorro extends Animal {
    falar() {
        console.log(`${this.nome} late`);
    }
}

const rex = new Cachorro("Rex");
rex.falar();


//          Assincronismo
// Callbacks
setTimeout(() => console.log("Depois de 10s", 10000));
console.log("Executei antes");

// Promisses -> requisições, assincronos (não espera nada) 
// não bloqueia a thread principal -> dispara a requisição e fica livre
fetch("https://api.github.com/users/octocat")
    .then(request => request.json())
    // .then(data => console.log(data))
    .catch(err => console.log(err));

//--------------------------------------------------
// fetch → (Promise pendente)
//        ↓ resposta chegou
// .then(res => res.json()) → transforma em JSON
//        ↓ json convertido
// .then(data => console.log(data))
//        ↓ erro?
// .catch(err => console.error(err))
//--------------------------------------------------

// Versão moderna (mais limpa) usando async/await
async function carregarUser() {
    try {
        const request = await fetch("https://api.github.com/users/octocat");
        const data = await request.json();

        console.log(data);
        console.log("Nome: ", data.name);
        console.log("Seguidores: ", data.followers);
    } catch (err) {
        console.error(err);
    }
}

carregarUser();