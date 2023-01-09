const notas = [10, 9.5, 8, 7, 6];

//.map vc pode fazer uma incrementação de forma automática para todos os itens ao mesmo tempo.

const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);