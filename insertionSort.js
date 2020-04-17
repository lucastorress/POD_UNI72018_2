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

function insertionSort2(vetor) {
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

let vetor = [8,14,11,16,6,7,3];
vetor = insertionSort2(vetor);
console.log(vetor);