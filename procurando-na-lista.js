const alunos = ["Julia", "Beto", "Marcelo", "Ana", "Francisca"];
const notas = [10, 6.5, 8, 6.3, 7 ];

const listaAlunosENotas = [alunos,notas];

function exibeAluno (aluno) {
    if (listaAlunosENotas[0].includes(aluno)) {
        console.log (`${aluno} já está cadastrado(a)!`);

        const indice = listaAlunosENotas[0].indexOf(aluno);
        //console.log (indice);

        const nota = listaAlunosENotas [1][indice];
        console.log (`A nota de ${aluno} é: ${nota}`);

    } else {
        console.log ("Aluno não cadastrado!");
    }

}

exibeAluno ("Julia")