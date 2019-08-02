 
// declarando as variaves que irão preencher os quadros 1, 2, 3 da roleta
var eleQuadro3 = document.querySelector('#img-3')
var eleQuadro2 = document.querySelector('#img-2')
var eleQuadro1 = document.querySelector('#img-1')
var saldo = document.getElementById('saldo')
var mostraCredito = document.getElementById('saldo')
var recebeRoleta




function rodarRoleta(){
    

    // ARRAY FONTE img/img-001.jpeg     
    let bancoImg = [

   "img/img-001.jpeg",
   "img/img-002.jpeg",
   "img/img-003.jpeg",
   "img/img-004.jpeg",
   "img/img-005.jpeg",
   "img/img-006.jpeg",
   "img/img-007.jpeg",
   "img/img-008.jpg",
   "img/img-009.jpg",
   "img/img-010.jpeg",
   "img/img-011.jpg",
   "img/img-012.jpg",
   "img/img-013.jpg"
]
let bancoImg2 = [

   "img/img-001.jpeg",
   "img/img-002.jpeg",
   "img/img-003.jpeg",
   "img/img-004.jpeg",
   "img/img-005.jpeg",
   "img/img-006.jpeg",
   "img/img-007.jpeg",
   "img/img-008.jpg",
   "img/img-009.jpg",
   "img/img-010.jpeg",
   "img/img-011.jpg",
   "img/img-012.jpg",
   "img/img-013.jpg"
]

let bancoImg3 = [

   "img/img-001.jpeg",
   "img/img-002.jpeg",
   "img/img-003.jpeg",
   "img/img-004.jpeg",
   "img/img-005.jpeg",
   "img/img-006.jpeg",
   "img/img-007.jpeg",
   "img/img-008.jpg",
   "img/img-009.jpg",
   "img/img-010.jpeg",
   "img/img-011.jpg",
   "img/img-012.jpg",
   "img/img-013.jpg"
]
   // limpa os quadroscom as fotos a cada vez q o botão é acionado
         eleQuadro3.innerHTML = ''
         eleQuadro2.innerHTML = ''
         eleQuadro1.innerHTML = ''
       
         // "girando a roleta das imagens"
         let ran3 =  Math.floor(Math.random() * bancoImg.length) //mesmo valor ***
         let ran2 =  Math.floor(Math.random() * bancoImg.length)
         let ran1 =  Math.floor(Math.random() * bancoImg.length)
         
         // COLOCANDO OS VALORES DO SALDO CONFORME RESULTADO DA ROLETA
         if ( ran1 == ran2 && ran1 == ran3 ){
            recebeRoleta =  300
       } else if (ran1 == ran2 && ran1 != ran3){
            recebeRoleta = 100  
       } else if (ran1 == ran3 )
            recebeRoleta =  100
         else if (ran2 == ran3 )
            recebeRoleta = 100
         else {
            
            recebeRoleta = 50
              
       }
      

         // ADICIONA UM INDEX DE FORMA RANDÔMICA
        // adiciona as fotos aleatóriamente quadro 3
      if(bancoImg.length == bancoImg.length) { // mesmo valor ***
         var quadro3 = document.createElement('img')
         quadro3.setAttribute('src',`${bancoImg3[ran3]}`)
         quadro3.setAttribute('width','200')
         quadro3.setAttribute('height','200')
         eleQuadro3.appendChild(quadro3)

        // adiciona as fotos aleatóriamente quadro 2
         var quadro2 = document.createElement('img')
         quadro2.setAttribute('src',`${bancoImg2[ran2]}`)
         quadro2.setAttribute('width','200')
         quadro2.setAttribute('height','200')
         eleQuadro2.appendChild(quadro2)

         // adiciona as fotos aleatóriamente quadro 1
         var quadro1 = document.createElement('img')
        quadro1.setAttribute('src',`${bancoImg[ran1]}`)
        quadro1.setAttribute('width','200')
        quadro1.setAttribute('height','200')
        eleQuadro1.appendChild(quadro1)
         } 
        
} //  FIM  rodarRoleta()

    // função faz correr as fotos nos 3 quadros
  function roda() {       
      rodandoRoleta = setInterval(rodarRoleta, 100)
  }

 

  // função faz parar as fotos nos quadros
  function para() {
   var recebeInput = document.getElementById('credito').value
      
      saldo.innerHTML =''
      var credito = parseInt(recebeInput)
      let item = document.createElement('option')
      item.text = `digitado ${credito} + sorteado ${recebeRoleta} = ${credito + recebeRoleta}`
      item.value = credito
      mostraCredito.appendChild(item)
      var para = clearInterval(rodandoRoleta)
      
  }
  

/*
let emoj = [
    "img/img-001.jpeg",
    "img/img-002.jpeg",
    "img/img-003.jpeg",
    "img/img-004.jpeg",
    "img/img-005.jpeg",
    "img/img-006.jpeg",
    "img/img-007.jpeg",
    "img/img-008.jpg",
    "img/img-009.jpg",
    "img/img-010.jpeg",
    "img/img-011.jpg",
    "img/img-012.jpg",
    "img/img-013.jpg"
]


*/

console.log(r)


