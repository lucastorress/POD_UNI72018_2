function selectionSort(vetor) {
    let trocas = 0;
    let comparacoes = 0;
    let menor;

    console.log(vetor);

    for(let i = 0; i < vetor.length - 1; i++) {
        menor = i;
        for(let j = i+1; j < vetor.length; j++) {
            comparacoes++;
            if (vetor[menor] > vetor[j]) {
                menor = j;
            }
            console.log('i (posicao/valor):'+i,'/',vetor[i], '\tj:'+j,'/',vetor[j], '\tmenor (posicao):'+menor,'/',vetor[menor]);
            /*
            console.log('i (posicao):'+i, '\tj:'+j, '\tmenor (posicao):'+menor);
            console.log('i:'+vetor[i], '\tj:'+vetor[j], '\tmenor:'+vetor[menor]);
            */
        }
        if (i != menor) {
            trocas++;
            [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]];
        }
        console.log('vetor: '+vetor);
    }
    console.log('Trocas: '+trocas, '\tComparacoes: '+comparacoes);
    return vetor;
}

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

function invertedSelectionSort(vetor) {
    let trocas = 0;
    let comparacoes = 0;
    let maior;

    console.log(vetor);
    for(let i = vetor.length - 1; i >= 0; i--) {
        maior = i;
        for(let j = i - 1; j >= 0; j--) {
            comparacoes++;
            if (vetor[maior] < vetor[j]) {
                maior = j;
            }
            console.log(
                'i (posicao/valor):'+i,'/',vetor[i],
                '\tj:'+j,'/',vetor[j],
                '\tmaior (posicao):'+maior,'/',vetor[maior]
            );
        }
        if (i != maior) {
            trocas++;
            [vetor[i], vetor[maior]] = [vetor[maior], vetor[i]];
        } else {
            console.log('Trocas: '+trocas, '\tComparacoes: '+comparacoes);
            return vetor;
        }
        console.log('vetor: '+vetor);
    }
    console.log('Trocas: '+trocas, '\tComparacoes: '+comparacoes);
    return vetor;
}

function invertedSelectionSort2(vetor) {
    let maior;
    for(let i = vetor.length-1; i >= 0; i--) {
        maior = i;
        for(let j = i-1; j >= 0; j--) {
            if(vetor[maior] < vetor[j]) {
                maior = j;
            }
        }
        if(maior != i) {
            [vetor[i], vetor[maior]] = [vetor[maior], vetor[i]];
        }
    }
    return vetor;
}

//let vetor = [9,11,10,16,7,5,2];
let vetor = [2,9,7,1,3,5,8,4];
vetor = invertedSelectionSort2(vetor);
console.log(vetor);
/*
vetor = [12,6,9,8,7,10];
vetor = selectionSort(vetor);
console.log(vetor);

vetor = [10,20,30,40,50,60];
vetor = selectionSort(vetor);
console.log(vetor);

vetor = [11,9,7,5,3,1];
vetor = selectionSort(vetor);
console.log(vetor);*/