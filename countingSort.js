function countingSort(vetor) {
    let tamanho = vetor.length;
    let max = searchHead(vetor);
    
    /*
    Cria um array que receberá a contagem das posições (índice = valor)
    Inicializa todas as posições com valor zero.
    O tamanho do array será igual ao valor do maior valor contido no vetor original.
    */
    let contagem = []
    for(let i = 0; i <= max; i++) {
        contagem[i] = 0;
    }
    console.log("Passo 1:", contagem);

    /*
    Percorre o vetor original do início ao fim,
    Acrescentando 1 no valor, a cada posição do índice no vetor de contagem
    Onde satisfaça a igualdade com valor do vetor original em questão
    (índice do vetor contagem = valor em questão do vetor original)
    */
    for(let i = 0; i < tamanho; i++) {
        ++contagem[vetor[i]];
    }
    console.log("Passo 2:", contagem);

    /*
    Calcula quantos números antecedem o valor em questão,
    Percorrendo todo o vetor de contagem, iniciando da primeira posição;
    Soma o valor anterior ao valor atual.
    */
    for(let i = 1; i <= max; i++) {
        contagem[i] += contagem[i-1];
    }
    console.log("Passo 3:", contagem);
    
    /*
    Inicializa um terceiro vetor que será o vetor final de ordenação
    */
    let ordenado = new Array(tamanho);
    console.log(ordenado);
    for(let i = 0; i < tamanho; i++) {
        ordenado[contagem[vetor[i]]-1] = vetor[i];
        --contagem[vetor[i]];
    }

    console.log("Vetor original:", vetor);
    console.log("Ordenado:", ordenado);
    return ordenado;
}

//Procura o maior valor do vetor
function searchHead(vetor) {
    let maior = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }
    //console.log(maior);
    return maior;
}

vetor = [2, 9, 7, 1, 3, 5, 8, 4];
countingSort(vetor);