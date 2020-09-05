
// 1) Crie uma função que receba 3 parâmetros: o nome de um livro, a quantidade de páginas e a autoria. 
//Retorne um objeto no formato:
// {titulo: "nome do livro", paginas: "número de páginas", autoria: "nome da pessoa"}


function objLivro(titulo, paginas, autoria){
    
    const livro = {
    titulo: 'Antes do Baile Verde',
    paginas: 234,
    autoria: 'Lygia Fagundes Telles'
    }
    return 
}
console.log(objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles'))


// 2) Aproveite a função acima em outra função, que deve retornar a seguinte frase:
// "O livro XXXX foi escrito por XXX e tem XXX páginas". 
// Você deve utilizar a função que já está pronta, e não reescrever a lógica dela dentro dessa nova função.

function objFrase(){
    const novoObj = objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles')

    const frase = "O livro " + novoObj.titulo + " foi escrito por " + novoObj.autoria + "e tem " + novoObj.paginas + "páginas".

    return frase
}

console.log(objFrase())



// 3) Crie uma função que receba um objeto como o abaixo:

// const pessoa = {
//   nome: 'Nazaré',
//   sobrenome: 'Tedesco',
// }

// Dado um objeto que tem uma propriedade 'nome' e uma propriedade 'sobrenome', a função deve retornar um novo objeto com as mesmas propriedades 
//que o objeto recebido e mais uma propriedade, chamada 'nomeCompleto', cujo valor é uma string com o nome e sobrenome separados por um espaço.

// Exemplo de retorno:
// {
//   nome: 'Nazaré',
//   sobrenome: 'Tedesco',
//   nomeCompleto: 'Nazaré Tedesco'
// }

function ObjPersona(nome, sobrenome, nomecompleto)

const pessoa = {
      nome: 'Nazaré',
      sobrenome: 'Tedesco',
      nomeCompleto: 'Nazaré Tedesco'
 }
    return

    console.log(ObjPersona()