function maxHeap(vetor, i, tamanho) {
    console.log(vetor)
    let max = i;
    let l = 2*i+1;
    let r = 2*i+2;

    if(l < tamanho && vetor[l] > vetor[max])
    {
        max = l;
    }
    if(r < tamanho && vetor[r] > vetor[max])
    {
        max = r;
    }
    if(max != i)
    {
        [vetor[max], vetor[i]] = [vetor[i], vetor[max]];
        maxHeap(vetor, max, tamanho)
    }
}
function minHeap(vetor, i, tamanho) {
    console.log(vetor)
    let min = i;
    let l = 2*i+1;
    let r = 2*i+2;

    if(l < tamanho && vetor[l] < vetor[min])
    {
        min = l;
    }
    if(r < tamanho && vetor[r] < vetor[min])
    {
        min = r;
    }
    if(min != i)
    {
        [vetor[min], vetor[i]] = [vetor[i], vetor[min]];
        minHeap(vetor, min, tamanho)
    }
}
function maxHeapfy(vetor, i, tamanho) {
    console.log(vetor)
    let max = i;
    let l = 2*i+1-i;
    let r = 2*i+2-i;

    if(l < tamanho && vetor[l] > vetor[max])
    {
        max = l;
    }
    if(r < tamanho && vetor[r] > vetor[max])
    {
        max = r;
    }
    if(max !== i)
    {
        [vetor[max], vetor[i]] = [vetor[i], vetor[max]];
        maxHeap(vetor, max, tamanho)
    }
}


const heapSortMin = vetor => {
    for (let i = (vetor.length/2)-1; i >= 0; i--)
    {
        minHeap(vetor, i, vetor.length);
    }
    for (let i = (vetor.length-1); i >= 0; i--)
    {
        [vetor[0], vetor[i]] = [vetor[i], vetor[0]];
        minHeap(vetor, 0, i);
    }
}

const heapSortMax = vetor => {
    for (let i = (vetor.length/2)-1; i >= 0; i--)
    {
        maxHeap(vetor, i, vetor.length);
    }
    for (let i = (vetor.length-1); i >= 0; i--)
    {
        [vetor[0], vetor[i]] = [vetor[i], vetor[0]];
        maxHeap(vetor, 0, i);
    }
}

const heapSortDesc = vetor => {
    for (let i = Math.floor(vetor.length/2)-1; i >= 0; i--)
    {
        maxHeapfy(vetor, i, vetor.length);
    }
    for (let i = 1; i < vetor.length; i++)
    {
        maxHeapfy(vetor, i, vetor.length);
    }
}

let numero = [4,1,3,2,9,10,14,8,7];
heapSortDesc(numero);