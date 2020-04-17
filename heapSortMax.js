function heapSortMax(vetor) {
  for (let i = Math.floor(vetor.length/2) - 1; i >= 0; i--) {
    maxHeapify(vetor, i, vetor.length);
  }

  for (let maior = vetor.length - 1; maior >= 1; maior--) {
    [vetor[0], vetor[maior]] = [vetor[maior], vetor[0]]
    maxHeapify(vetor, 0, maior)
  }
}

function maxHeapify(vetor, i, fim){
  console.log(vetor)
  let maior = i
  let esquerdo = 2 * i + 1
  let direito = 2 * i + 2

  if (esquerdo < fim && vetor[esquerdo] > vetor[maior]) {
    maior = esquerdo
  }

  if (direito < fim && vetor[direito] > vetor[maior]) {
    maior = direito
  }

  if (maior !== i) {
    [vetor[maior], vetor[i]] = [vetor[i], vetor[maior]]
    maxHeapify(vetor, maior, fim)
  }
  
}

let vetor = [4,1,3,2,9,10,14,8,7];
let vetor2 = [6,13,27,100,44,19,16,22,9];
heapSortMax(vetor);