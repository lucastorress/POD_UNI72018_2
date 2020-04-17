/*
1. Considere a sequência {18, 22, 20, 26, 17, 19}.
a) Aplique o Quicksort sobre ela e escreva os seus elementos após cada
vez que “Particione” for executado.
b) Aplique o Mergesort sobre ele e escreva os seus elementos após cada
vez que “Intercale” for executado.

2. Forneça duas sequências com 7 elementos. Na primeira, o Quicksort deverá
apresentar uma execução de melhor caso e, na segunda, de pior caso. Justifique
as suas escolhas.
Pior caso = [1,2,3,4,5,6,7] (Pivor nos extremos e o vetor já ordenado ou muito próximo da ordenação)
Melhor caso = [5,3,1,7,4,2,6] (Pivor já ordenado nos extremos, desordenado nas demais posições)
[1,2,3,4] [5,6,7]
[3,1,4,2] [6,7,5]
[3,1,4,2,6,7,5]

3. Por que a complexidade do Quicksort pode variar enquanto a do Mergesort é
constante? No entanto, qual a vantagem do Quicksort em relação ao Mergesort?
4. De acordo com os algoritmos Mergesort e Quicksort, responda as seguintes
questões.
a) Por que não consideramos que o Mergesort possui um pior e um melhor
caso?
b) Considere uma sequência com 1.000.000 de elementos a ser ordenada.
Os elementos estão dispostos de maneira aleatória quanto à sua chave
de ordenação. Por que, numa situação como essa, seria mais vantajosa
a utilização do Quicksort em relação à utilização do Mergesort?
5. Qual a grande desvantagem da ordenação por contagem ao ser aplicada sobre
o vetor de inteiros {3, 4, 7, 2, 1, 1200, 6, 16}?
6. Em qual conjunto de elementos a seguir o método de ordenação por contagem
poderia ser aplicado? Justifique de acordo com o algoritmo.
a) {1.4, 2.3, 1.0, 4.6, 9.9}
b) {kyle, kenny, cartman, stan}
c) {12, 8, 16, 28, 44, 1, 9}
*/