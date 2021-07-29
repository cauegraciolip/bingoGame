var numeros = JSON.parse(localStorage.getItem('numeros')) || [];

var numB = JSON.parse(localStorage.getItem('numB')) || [];
var numI = JSON.parse(localStorage.getItem('numI')) || [];
var numN = JSON.parse(localStorage.getItem('numN')) || [];
var numG = JSON.parse(localStorage.getItem('numG')) || [];
var numO = JSON.parse(localStorage.getItem('numO')) || [];

function random(min, max) {

    return Math.floor(Math.random(min, max) * (max - min + 1) + min)

}

function cartela() {

    numeroB = ""
    numeroI = ""
    numeroN = ""
    numeroG = ""
    numeroO = ""

    while ( numB.length < 5 ) {

        numeroB = random(1, 15)
        numB.push(numeroB)

        if ( numB.indexOf(numeroB) == -1 ) {
            numeroB = random(1, 15)
            numB.push(numeroB)
            localStorage.setItem('numB', JSON.stringify(numB))
        }
    }
    
    if ( numI.indexOf(numeroI) == -1 ) {

        while ( numI.length < 5) {
            numeroI = random(16, 30)
            numI.push(numeroI)
            localStorage.setItem('numI', JSON.stringify(numI))
        }
    }

    if ( numN.indexOf(numeroN) == -1 ) {

        while ( numN.length < 5 ) {
            
            numeroN = random(31, 45)
            numN.push(numeroN)
            localStorage.setItem('numN', JSON.stringify(numN))
        }
    }

    if ( numG.indexOf(numeroG) == -1 ) {

        while ( numG.length < 5 ) {

            numeroG = random(46, 60)
            numG.push(numeroG)
            localStorage.setItem('numG', JSON.stringify(numG))
        }
    }

    if ( numO.indexOf(numeroO) == -1 ) {

        while ( numO.length < 5 ) {

            numeroO = random(61, 75)
            numO.push(numeroO)
            localStorage.setItem('numO', JSON.stringify(numO))

        }

        

    }
}

cartela()

console.log(numB)
console.log(numI)
console.log(numN)
console.log(numG)
console.log(numO)

function preencher() {

    let cartela = document.getElementById('ul')

    let content = ""

    numeros.forEach(element => {
        
        content += `<li class="numSort">${element}</li>`
 
    });
    cartela.innerHTML = content
}

preencher()

function sortear(min, max) {

    var numSort = random(min, max)

    if ( numeros.indexOf(numSort) == -1 ){

        numeros.push(numSort)
        localStorage.setItem('numeros', JSON.stringify(numeros))
        location.reload()

    }

}

function reset() {

    localStorage.removeItem('numeros')
    localStorage.removeItem('numB')
    localStorage.removeItem('numN')
    localStorage.removeItem('numI')
    localStorage.removeItem('numG')
    localStorage.removeItem('numO')
    location.reload()
    onload()

}

console.log(numeros)