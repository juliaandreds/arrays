var nomes= ["Ana", "julia","Marcelo"];

//3 maneiras para usar callback, mas a segunda é a mais usual

nomes.forEach (function(nome) {
    console.log(nome)
})

nomes.forEach((nome) => {
    console.log(nome);
})
    
function imprimeNome (nome) {
    console.log (nome);
}