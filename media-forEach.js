const notas = [10, 6.5, 8, 7.5];

somaDasNotas = 0;

//a vantagem é que usando o forEach, pode passar mais de um parâmetro, como nesse caso, que utilizamos a nota e seu índice.

notas.forEach (function (nota, indice) {
    somaDasNotas += nota;
    console.log (indice);
})

const media= somaDasNotas/notas.length;

console.log (`A média das notas é: ${media}`);
