// DESAFIO - validador de cartão de crédito

// Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo 
//chamado Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), 
//siga os seguintes passos:

// 1. Retire o último dígito do número. Ele é o verificador;

const cartao = [5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 4]
 cartao.pop
 console.log(cartao) 

// 2. Escreva os números na ordem inversa;

 const numero = ['5485755481460022']
 console.log('5485755481460022'.split('').reverse().join(''))