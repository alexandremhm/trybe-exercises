1- O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

Os códigos sincronos são executados na ordem em que estão dispostos. Dessa maneira, se temos vários códigos sincronos um depois do outro, um código só será executado depois que o anterior a ele tiver terminado a sua execução. As funções assincronas trazem uma nova possibilidade. A de mover determinado código assincrono para uma área separada do fluxo normal de execução e continuar a execução do código, sem parar o fluxo de execução do código. 

2- Quando você tem que enfileirar várias callbacks , que problema surge?

O grande enfileiramento de callbacks?

3- Por que as Promises são uma forma de se resolver esse problema?

As promises são funções assincronas o que resolve alguns problemas quanto a execução do código. Elas possuem funções auxiliares que ajudam a tornar o fluxo de execução mais lógico e performático.

4- Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.

Assíncrono.

5- Dada a resposta anterior, o que é fetch e para que ele serve?

A função fetch é uma função assíncrona utilizada para enviar requisições a API's. Ela também possui algumas funções auxiliares para tratar os dados recebidos e lidar com possíveis erros na sua requisição.