/*
var ini = 5
var fim = 20
var pass = 5

while(ini < fim){
    console.log(`ini ${ini}`)
    ini += pass
}

// CONCATENANDO ARRAY
let girls = ["ana", "rosa", "33"]
let boys = ["fabio","azul","34"]
let x = girls.concat(boys);
console.log(x)

let pessoa = {nome:"Murilo",
sobrenome:"Matos",
 idade:40,
nomeCompleto: function(){
 return this.nome + " " + this.sobrenome
 } 
}//fim OBJ

console.log(pessoa.nomeCompleto())
console.log(pessoa["idade"],pessoa["nome"], pessoa.sobrenome)

let texto2 = "O dia de hoje foi muito \\cansativo\\ porque\
 trabalhei muito"
let texto1 = "O dia de hoje foi muito \'cansativo\' porque" + 
"trabalhei muito"
let texto = "O dia de hoje foi muito \"cansativo\" porque trabalhei muito"
console.log(texto2)
console.log(texto1)
console.log(texto)
*/

function aleatorio(){
    

    // ARRAY FONTE      
    let emoj = ["\u{1F603}","\u{1F601}","\u{1F606}","\u{1F605}","\u{1F607}","\u{1F60D}","\u{1F929}","\u{1F61A}","\u{1F61B}","\u{1F92A}"]
    // ARRAY FILHO
    let novoEmoj = []
    res.innerHTML = ''
    for(let x = 0; x < 10; x++ ){
        let ran =  Math.floor(Math.random() * 10) 
        // ADICIONA UM INDEX DE FORMA RANDÔMICA
        novoEmoj.push(emoj[ran])
        if(novoEmoj.length == 10) {
            let res = document.getElementById('res').innerHTML += `${novoEmoj}`
        } 
    }
    /* NÃO FICOU COMO EU QUERIA
    for (let x = 0; x <10; x++){ 
        if (x == 9) {
            let res = document.getElementById('res').innerHTML += `${emoj[ran]}</br>`
        } else {
            let res = document.getElementById('res').innerHTML += `${emoj[ran]}`
        }  
    
   
    }*/

}  
 
