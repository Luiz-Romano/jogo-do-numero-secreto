let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

};

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número é menor...');
        } else {
            exibirTextoNaTela('p', 'O número é maior...');
        };
        tentativas++;
        limparCampo();
    }
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeELementosLista = listaDeNumerosSorteados.length;
    if (quantidadeELementosLista == numeroLimite) {
        listaDeNumerosSorteados = []
    };
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    };

};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};


// ---------------------------------------------------------------------------------------------------------
// 1 - Criar uma função que exibe "Olá, Mundo!" no console.

// function mensagem() {
//     console.log('Olá, Mundo!');
// };

// mensagem();

// ---------------------------------------------------------------------------------------------------------
// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// function mensagem() {
//     let nome = 'Lewiz';
//     console.log(`Olá, ${nome}!`);
// };

// mensagem();


// function exibirOlaNome(nome) {
//     console.log(`Olá, ${nome}!`);
// }

// exibirOlaNome("Lewiz");


// ---------------------------------------------------------------------------------------------------------
// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// function recebeNumero(numero) {
//     let dobro = numero * 2;
//     return dobro;
// }

// let resultadoDobro = recebeNumero(5);
// console.log(resultadoDobro);


// ---------------------------------------------------------------------------------------------------------
// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.

// function mediaTresNumeros(n1, n2, n3) {
//     return (n1 + n2 + n3) / 3;
// }

// let media = mediaTresNumeros(5, 9, 2);
// console.log(media);


// ---------------------------------------------------------------------------------------------------------
// 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function maiorNumero(n1, n2) {
//     if (n1 > n2) {
//         console.log(`O número1: ${n1} é maior que o número 2: ${n2}!`)
//     } else {
//         console.log(`O número1: ${n1} é menor que o número 2: ${n2}`)
//     }
// }

// let numero1 = parseInt(Math.random() * 100 + 1);
// let numero2 = parseInt(Math.random() * 100 + 1);
// let maior = maiorNumero(numero1, numero2);
// console.log(maior)


// function encontrarMaiorNumero(n1, n2) {
//     return n1 > n2 ? n1 : n2;
// }

// let maiorNumero = encontrarMaiorNumero(54, 67);
// console.log(maiorNumero);


// ---------------------------------------------------------------------------------------------------------
// 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

// function numeroMultiplicado(numero) {
//     console.log(`Numero da vez: ${numero}`)
//     return numero * numero;
// }

// let numeroAleatorio = numeroMultiplicado(parseInt(Math.random() * 10 + 1));
// console.log(numeroAleatorio);

// ---------------------------------------------------------------------------------------------------------
// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// imc = peso/(altura x altura)

// function calculoIMC(altura, peso) {
//     let imc = peso / (altura * altura);
//     return imc;
// };

// console.log(calculoIMC(1.87, 92));

// ---------------------------------------------------------------------------------------------------------
// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// function calculoFatorial(numero) {
//     if (numero == 0 || numero == 1) {
//         return numero;
//     } else {
//         return numero * calculoFatorial(numero - 1);
//     }
// };

// let numero = parseInt(Math.random() * 10 + 1);
// let fatorial = calculoFatorial(numero);
// console.log(`O fatorial de ${numero} é ${fatorial}`)

// ---------------------------------------------------------------------------------------------------------
// 3 - Crie uma função que converte um valor em dólar, passado como parâmnetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4.80

// function conversorDolar(reais) {
//     let cotacaoDolar = 4.80;
//     return reais * cotacaoDolar;
// }

// let reais = parseInt(Math.random() * 100 + 1);
// let dolarReal = conversorDolar(reais);
// console.log(dolarReal)

// ---------------------------------------------------------------------------------------------------------
// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// function calculoSala(base, altura) {
//     let area = base * altura;
//     let perimetro = 2 * (base + altura);

//     console.log(`Area ${area}`)
//     console.log(`Perimetro ${perimetro}`)
// }

// let altura = 2.5;
// let base = 4.2;
// calculoSala(base, altura)

// ---------------------------------------------------------------------------------------------------------
// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere PI = 3,14.
// P = 2 π . r
// P: perímetro
// π: constante de valor 3,14
// r: raio

// function perimetroSalaRedonda(raio) {
//     let area = 3.14 * raio * raio;
//     let perimetro = 2 * 3.14 * raio;

//     console.log(`Area: ${area}`);
//     console.log(`Perimetro: ${perimetro}`);
// };

// let raio = 4;
// console.log(`Raio: ${raio}`);
// perimetroSalaRedonda(raio);

// ---------------------------------------------------------------------------------------------------------
// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro

// function tabuada(numero) {
//     for (let iMult = 1; iMult <= 10; iMult++) {
//         let resultado = iMult * numero;
//         console.log(`${iMult} x ${numero} = ${resultado}`);
//     }
// }

// let numero = parseInt(Math.random() * 10 + 1);
// console.log(`Numero escolhido: ${numero}`)
// tabuada(numero);

// ---------------------------------------------------------------------------------------------------------
// 1 - Crie uma lista vazia, com o nome listaGenerica.

// let listaGenerica = [];

// ---------------------------------------------------------------------------------------------------------
// 2 - Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++','Kotlin','Python'.

// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']


// ---------------------------------------------------------------------------------------------------------
// 3 - Adicione à lista linguagensDeProgramacao os seguintes elemtnos: 'Java', 'Ruby' e 'GoLang'.

// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang')

// ---------------------------------------------------------------------------------------------------------
// 4 - Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

// let nomes = ['Luiz', 'Bruna', 'Nilza']
// console.log(nomes[0])

// ---------------------------------------------------------------------------------------------------------
// 5 - Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento

// let nomes = ['Luiz', 'Bruna', 'Nilza']
// console.log(nomes[1])

// ---------------------------------------------------------------------------------------------------------
// 6 - Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

// let nomes = ['Luiz', 'Bruna', 'Nilza']
// console.log(nomes[2])

// ---------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------