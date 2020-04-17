function heapSortMin(vetor) {
    for (let i = Math.floor(vetor.length/2) - 1; i >= 0; i--) {
      minHeapify(vetor, i, vetor.length);
    }
    console.log('fim')
    for (let menor = 1; menor < vetor.length; menor++) {
        minHeapify(vetor, menor, vetor.length-menor)
      }
  }
  
  function minHeapify(vetor, i, fim){
    console.log(vetor);
    let menor = i;
    let esquerdo = 2 * i + 1;
    let direito = 2 * i + 2;
  
    if (esquerdo < fim && vetor[esquerdo] < vetor[menor]) {
        menor = esquerdo;
    }
  
    if (direito < fim && vetor[direito] < vetor[menor]) {
        menor = direito;
    }

    if (menor !== i) {
      [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]];
      minHeapify(vetor, menor, fim);
    }
    
  }
  
  let vetor = [4,1,3,2,9,10,14,8,7];
  let vetor2 = [6,13,27,100,44,19,16,22,9];
  heapSortMin(vetor2);
  console.log(vetor2)