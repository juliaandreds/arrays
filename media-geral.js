const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia (notaDasSalas) {
    const somaDasNotas = notaDasSalas.reduce ((acumulador,nota) => acumulador + nota,0);
    
    const media = somaDasNotas / notaDasSalas.length;
        return media;

}
    

    
console.log (`A média da sala JavaScript é: ${calculaMedia (salaJS)}`);
console.log (`A média da salava Java é: ${calculaMedia(salaJava)}`);
console.log (`A média da sala Python é: ${calculaMedia(salaPython)}`);



