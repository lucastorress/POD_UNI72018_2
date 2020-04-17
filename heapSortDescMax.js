function heapSortDesc(vetor){
    for (let i = Math.floor(vetor.length/2) - 1; i >= 0; i--) {
      maxHeapfy(vetor, i, vetor.length);
    }
  
    for (let maior = 1; maior < vetor.length; maior++) {
      maxHeapfy(vetor, maior, vetor.length)
    }
  }
  
  
  function maxHeapfy(vetor, i, fim){
      console.log(vetor)
    let maior = i;
    let esquerdo = 2 * i + 1 - i;
    let direito = 2 * i + 2 - i;
  
    if (esquerdo < fim && vetor[esquerdo] > vetor[maior]) {
      maior = esquerdo
    }
  
    if (direito < fim && vetor[direito] > vetor[maior]) {
      maior = direito
    }
  
    if (maior !== i) {
      [vetor[maior], vetor[i]] = [vetor[i], vetor[maior]]
      maxHeapfy(vetor, maior, fim)
    }
  }
  
  let vetor = [4,1,3,2,9,10,14,8,7];
  let vetor2 = [6,13,27,100,44,19,16,22,9];
  heapSortDesc(vetor2);
  console.log(vetor2)