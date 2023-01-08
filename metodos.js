const notas = [10, 6, 5.5, 4]

// filyer --> esse método pega apenas o que está dentro da função
/* const resultado = notas.filter (analisaNotas) */

/* function analisaNotas (nota) {
    return nota >=6
} */

/* console.log (resultado) */

 // for Each (-- => {})--> para cada
/* let acumulador = 0;

notas.forEach (nota => {
    acumulador = acumulador + nota;
})
console.log (acumulador); */

notas.splice(2,2, "Julia");
console.log (" nota escolhida foi: " +notas)
