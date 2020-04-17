function bubbleSort(vetor) {
  let total = 0;
  for(let i = 0; i < vetor.length - 1; i++) {
    let changed = false;
    for(let j = 0; j < vetor.length - i - 1; j++) {
      total++;
      if (vetor[j] > vetor[j+1]) {
        [vetor[j], vetor[j+1]] = [vetor[j+1], vetor[j]];
        changed = true;
      }
    }
    if (changed === false) {
      console.log('Total de passos: ' + total);
      return vetor;
    }
  }
  console.log('Total de passos: ' + total);
  console.log('Novo array: ' + vetor);
  return vetor
}

function do_bubbleSort(vetor) {
  let total = 0;
  let posicao = 0;
  let changed;
  do {
    changed = false;
    for (let i = 0; i < vetor.length-posicao-1; i++) {
      total++;
      if (vetor[i] > vetor[i+1]) {
        [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]];
        changed = true; 
      }
    }

    posicao++;
  } while(changed);
  console.log('Total de passos: ' + total);
  console.log('Novo array: ' + vetor);
  return vetor;
}

let vetor1 = [98, 39, 43, 23, 3];
vetor1 = bubbleSort(vetor1);
//vetor = do_bubbleSort(vetor);

/*
[39, 98, 43, 23, 3]
[39, 43, 98, 23, 3]
[39, 43, 23, 98, 3]
[39, 43, 23, 3, 98]

[39, 23, 49, 3, 98]
[39, 23, 3, 49, 98]
[23, 39, 3, 49, 98]
[23, 3, 39, 49, 98]
[3, 23, 39, 49, 98]

[3, 23, 39, 49, 98]
*/