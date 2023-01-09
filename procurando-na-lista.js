const alunos = ["Julia", "Beto", "Marcelo", "Ana", "Francisca"];
const notas = [10, 6.5, 8, 6.3, 7 ];

const listaAlunosENotas = [alunos,notas];

function exibeAluno (aluno) {
    if (listaAlunosENotas[0].includes(aluno)) {
        console.log (`${aluno} já está cadastrado(a)!`);

       /*  const alunos = listaAlunosENotas [0];
        const notas = listaAlunosENotas [1]; */
        //desestruturando uma lista

        const [alunos,notas] = listaAlunosENotas

        const indice = alunos.indexOf(aluno);
        //console.log (indice);

        const nota = notas[indice];
        console.log (`A nota de ${aluno} é: ${nota}`);

    } else {
        console.log ("Aluno não cadastrado!");
    }

}

exibeAluno ("Julia")