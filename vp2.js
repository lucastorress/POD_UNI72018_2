function bubbleSort(vetor) {
    for(let i = 0; i < vetor.length - 1; i++) {
        let changed = false;
        for(let j = 0; j < vetor.length - i - 1; j++) {
            if (vetor[j] > vetor[j+1]) {
                [vetor[j], vetor[j+1]] = [vetor[j+1], vetor[j]];
                changed = true;
            }
        }
        if (changed === false) {
            return vetor;
        }
    }
    return vetor;
}

function selectionSort(vetor) {
    let menor;
    for(let i = 0; i < vetor.length - 1; i++) {
        menor = i;
        for(let j = i+1; j < vetor.length; j++) {
            if (vetor[menor] > vetor[j]) {
                menor = j;
            }
        }
        if (i != menor) {
            [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]];
        }
    }
    return vetor;
}

function insertionSort(vetor) {
    let atual;
    for (let i = 1; i < vetor.length; i++) {
        let j = i - 1;
        atual = vetor[i];
        while(j >= 0 && atual < vetor[j]) {
            vetor[j+1] = vetor[j];
            j--;
        }
        vetor[j+1] = atual;
    }
    return vetor;
}

function countingSort(vetor, max) {
    let tamanho = vetor.length;
    //let max = searchHead(vetor);
    
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
        console.log(ordenado);
    }

    console.log("Vetor original:", vetor);
    console.log("Ordenado:", ordenado);
    return ordenado;
}

// Split the array into halves and merge them recursively 
function mergeSort (arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr
    }
  
    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
  
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
  }
  
// compare the arrays item by item and return the concatenated result
function merge (left, right) {
    let indexLeft = 0
    let indexRight = 0
    let result = []

while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
    } else {
        result.push(right[indexRight])
        indexRight++
    }
}
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

function quickSort(vetor, ini, fim) {
    if (ini < fim) {
        let pi = particionar(vetor, ini, fim);
        quickSort(vetor, ini, pi-1);
        quickSort(vetor, pi+1, fim);
    }
}

function particionar(vetor, ini, fim) {
    let pivo = vetor[fim];
    let i = (ini-1);

    for(let j = ini; j < fim; j++) {
        if(vetor[j] <= pivo) {
            i++;
            [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
        }
    }
    [vetor[i+1], vetor[fim]] = [vetor[fim], vetor[i+1]];
    return (i+1);
}

vetor = [18, 22, 20, 26, 17, 19];
quickSort(vetor, 0, vetor.length-1);
console.log('Final: ' + vetor);