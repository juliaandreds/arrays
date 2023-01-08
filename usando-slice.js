const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

let quantidadeSalas= 0;

quantidadeSalas = 3;

/* alunos.pop ();
alunos.pop(); */

if (quantidadeSalas == 3) {
    const sala1 = alunos.slice (0, alunos.length / quantidadeSalas);
    const sala2 = alunos.slice (alunos.length / quantidadeSalas, (alunos.length / quantidadeSalas)*2);
    const sala3 = alunos.slice((alunos.length / quantidadeSalas)*2);

    console.log ("sala1: " + sala1);
    console.log ("sala2: " + sala2);
    console.log ("sala3: " + sala3);
} else if(quantidadeSalas == 2){
    const sala1 = alunos.slice (0, alunos.length / quantidadeSalas);
    const sala2 = alunos.slice (alunos.length / quantidadeSalas);

    console.log ("sala1: " + sala1);
    console.log ("sala2: " + sala2);
}