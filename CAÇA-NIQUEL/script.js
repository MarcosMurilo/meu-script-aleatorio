
// declarando as variaves que irão preencher os quadros 1, 2, 3 da roleta
var eleQuadro3 = document.querySelector('#img-3')
var eleQuadro2 = document.querySelector('#img-2')
var eleQuadro1 = document.querySelector('#img-1')



function rodarRoleta(){
    

    // ARRAY FONTE img/img-001.jpeg     
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
    "img/img-010.jpeg"
]
     var w = emoj[7]

    eleQuadro3.innerHTML = ''
    eleQuadro2.innerHTML = ''
    eleQuadro1.innerHTML = ''
     //for(let x = 0; x < 3; x++ ){
         let ran3 =  Math.floor(Math.random() * 10)
         let ran2 =  Math.floor(Math.random() * 10)
         let ran1 =  Math.floor(Math.random() * 10)

         // ADICIONA UM INDEX DE FORMA RANDÔMICA
        // adiciona as fotos aleatóriamente quadro 3
         if(emoj.length == 10) {
            var quadro3 = document.createElement('img')
            quadro3.setAttribute('src',`${emoj[ran3]}`)
            quadro3.setAttribute('width','200')
            quadro3.setAttribute('height','200')
            eleQuadro3.appendChild(quadro3)

        // adiciona as fotos aleatóriamente quadro 2
         var quadro2 = document.createElement('img')
         quadro2.setAttribute('src',`${emoj[ran2]}`)
         quadro2.setAttribute('width','200')
         quadro2.setAttribute('height','200')
         eleQuadro2.appendChild(quadro2)

         // adiciona as fotos aleatóriamente quadro 1
         var quadro1 = document.createElement('img')
        quadro1.setAttribute('src',`${emoj[ran1]}`)
        quadro1.setAttribute('width','200')
        quadro1.setAttribute('height','200')
        eleQuadro1.appendChild(quadro1)
         } 
     //}

    
    

    

     
    
}  
function myFunction() {
    document.getElementById('img-2').style.backgroundImage = "url('img/img-006.jpeg')";
  }






