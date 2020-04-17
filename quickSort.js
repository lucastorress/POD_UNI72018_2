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
    console.log('i = ' + i, 'Vetor: ' + vetor);
    return (i+1);
}

vetor = [18, 22, 20, 26, 17, 19];
quickSort(vetor, 0, vetor.length-1);
console.log('Final: ' + vetor);