let max = 10; //1
for (let i = 0; i < max; i++) { //1+1+10+10
    console.log(i); //10
    console.log(i * 2); //10
} //Total=43

for (let i = 0; i < n; i++) { //1+1+n+n
    console.log(i); //n
} //Total=3n+2

/* 
----- Questão 02)
O (1) : de ordem constante
- As instruções são executadas sempre com o mesmo número de
instruções, ou seja, esse número não depende do tamanho dos
dados de entrada 

O (log n): de ordem logarítmica
- Característicos de soluções algoritmos que transformam o
problema a ser resolvido em problemas menores

O (n) : de ordem linear
- O mesmo número de instruções é executado para cada um dos
elementos de entrada

O (2^n) : de ordem exponencial
- algoritmos que possuem soluções de força bruta 

O (n2) : de ordem quadrática
- algoritmos que possuem aninhamentos de laços, para trabalhar
com os dados de entrada em pares

----- Questão 03)
O(log n)

----- Questão 04)
A implementação desse algoritmo segue a ordem de O(n²), e já na sua primeira implementação
através de dois laços 'for' ele repete a checagem por todo vetor. Na segunda implementação,
a diferença está na adição duma variável que verifica se houve troca ou não, podendo diminuir
a ordem do algoritmo para O(n) quando viável, pois caso não haja trocas, é entendido que todo
vetor está organizado. A terceira e última implementação conta com o uso do laço 'do-while'
enquanto houver mudanças acontecendo para ordenar o vetor, seguindo a ordem de O(n²) e podendo ser
O(n) em alguns casos.
*/

let binarySearch = function (vector, value) {
    let min = 0;
    let max = vector.length - 1;
    let guess;
    let i = 1;
    while (max >= min) {
        guess = Math.floor((max + min) / 2);
        if (vector[guess] === value) {
            console.log("Total de palpites " + i);
            return guess;
        }
        else if (vector[guess] < value) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }
        i = i + 1;
        console.log(vector[guess]);
    }
    return -1;
};
   
let v = [10,20,15,30,35,40,45,50,75,80,85,90,95,100,105];
binarySearch(v, 105);

//---- Questão 05
function do_selectionSort(vetor) {
    let posicao_inicial = 0;
    let posicao_final = vetor.length;
    let posicao_menor;

    let comparacoes = 0;
    let trocas = 0;
    do {
        posicao_menor = posicao_inicial;
        for (let comparador=posicao_inicial+1; comparador < posicao_final; comparador++) {
            comparacoes++;
            if (vetor[posicao_menor] > vetor[comparador]) {
                posicao_menor = comparador;
            }
            console.log('i (posicao/valor):'+posicao_inicial,'/',vetor[posicao_inicial], '\tj:'+comparador,'/',vetor[comparador], '\tmenor (posicao):'+posicao_menor,'/',vetor[posicao_menor]);
        }
        if (posicao_inicial != posicao_menor) {
            trocas++;
            [vetor[posicao_inicial], vetor[posicao_menor]] = [vetor[posicao_menor], vetor[posicao_inicial]];
        }
        posicao_inicial++;
        console.log('vetor: '+vetor);
    } while(posicao_inicial < posicao_final);
    console.log('Trocas: '+trocas, '\tComparacoes: '+comparacoes);
    return vetor;
}

let vetor = [9,11,10,16,7,5,2];
vetor = do_selectionSort(vetor);
console.log(vetor);
//FIM---- Questão 05

//----- Questão 06
function selectionSort(vetor) {
    let trocas = 0;
    let comparacoes = 0;
    let maior;

    console.log(vetor);
    //[9,11,10,16,7,5,2]
    for(let i = vetor.length - 1; i > 0; i--) {
        maior = i;
        for(let j = vetor.length - i - 1; j < vetor.length; j++) {
            comparacoes++;
            if (vetor[maior] < vetor[j]) {
                maior = j;
            }
            console.log('i (posicao/valor):'+i,'/',vetor[i], '\tj:'+j,'/',vetor[j], '\tmenor (posicao):'+menor,'/',vetor[menor]);
            /*
            console.log('i (posicao):'+i, '\tj:'+j, '\tmenor (posicao):'+menor);
            console.log('i:'+vetor[i], '\tj:'+vetor[j], '\tmenor:'+vetor[menor]);
            */
        }
        if (i != maior) {
            trocas++;
            [vetor[i], vetor[maior]] = [vetor[maior], vetor[i]];
        }
        console.log('vetor: '+vetor);
    }
    console.log('Trocas: '+trocas, '\tComparacoes: '+comparacoes);
    return vetor;
}
vetor = [9,11,10,16,7,5,2];
vetor = selectionSort(vetor);
console.log(vetor);
//FIM---- Questão 06

//----- Questão 07
//----- ALGORITMO
function insertionSort(vetor) {
    let atual;
    for (let i = 1; i < vetor.length; i++) {
        console.log("Vetor inicio: "+vetor);
        let j = i - 1;
        atual = vetor[i];
        console.log("atual (valor): "+atual,"\ti (posicao): "+i,"\tj (posicao): "+j);
        console.log("i (valor): "+vetor[i],"\tj (valor): "+vetor[j]);
        while(j >= 0 && atual < vetor[j]) {
            vetor[j+1] = vetor[j];
            j--;
            console.log("while j (posicao): "+j);
            console.log("while j (valor): "+vetor[j]);
            console.log("Vetor while: "+vetor);
        }
        vetor[j+1] = atual;
        console.log("Vetor final: "+vetor);
    }
    return vetor;
}

let vetor = [11, 10, 16, 7, 5, 2];
vetor = insertionSort(vetor);
console.log(vetor);
/*
b) Escreva os elementos do vetor {11, 10, 16, 7, 5, 2}, ao final de cada passo
deste laço principal.
[11, 10, 16, 7, 5, 2] (Atual: 10, Posição Atual: 1, Iteração: 1)
[11, 11, 16, 7, 5, 2]
[10, 11, 16, 7, 5, 2]
[10, 11, 16, 7, 5, 2] (Atual: 16, Posição Atual: 2, Iteração: 2)
[10, 11, 16, 7, 5, 2] (Atual: 7, Posição Atual: 3, Iteração: 3)
[10, 11, 16, 16, 5, 2]
[10, 11, 11, 16, 5, 2]
[10, 10, 11, 16, 5, 2]
[7, 10, 11, 16, 5, 2]
[7, 10, 11, 16, 5, 2] (Atual: 5, Posição Atual: 4, Iteração: 4)
[7, 10, 11, 16, 16, 2]
[7, 10, 11, 11, 16, 2]
[7, 10, 10, 11, 16, 2]
[7, 7, 10, 11, 16, 2]
[5, 7, 10, 11, 16, 2]
[5, 7, 10, 11, 16, 2] (Atual: 2, Posição Atual: 5, Iteração: 5)
[5, 7, 10, 11, 16, 16]
[5, 7, 10, 11, 11, 16]
[5, 7, 10, 10, 11, 16]
[5, 7, 7, 10, 11, 16]
[5, 5, 7, 10, 11, 16]
[2, 5, 7, 10, 11, 16] (FIM)

c) Qual o máximo de posições que o elemento “atual” pode ter que se deslocar
em cada passo do laço principal? Dica: este valor é dado em função de i.
Resposta: n-1

d) Qual o mínimo de posições que o elemento “atual” pode ter que se deslocar
em cada passo do laço principal?
Resposta: 1

e) Dê dois exemplos de seqüências de inteiros com 7 elementos. No primeiro,
o método de ordenação por inserção realiza o menor número de instruções
possível e no segundo, o maior número.
Primeiro caso: [2,5,7,10,11,16]
Segundo caso: [16,11,10,7,5,2]
*/
//FIM---- Questão 07