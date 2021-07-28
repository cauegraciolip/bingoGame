var numeros = JSON.parse(localStorage.getItem('numeros')) || []


function preencher() {

    let cartela = document.getElementById('ul')
    let content = ""

    numeros.forEach(element => {

        if ( numeros >= 1 && numeros <= 15 ) {

            content += `<li class="numSort">B - ${element}</li>`

        } else if ( numeros > 15 && numeros <= 30 ) {

            content += `<li class="numSort">I - ${element}</li>`

        } else if ( numeros > 30 && numeros <= 45 ) {

            content += `<li class="numSort">N - ${element}</li>`

        } else if ( numeros > 45 && numeros <= 60 ) {

            content += `<li class="numSort">G - ${element}</li>`

        } else if ( numeros > 60 && numeros <= 75 )  {

            content += `<li class="numSort">O - ${element}</li>`

        }
        cartela.innerHTML = content
    })

}
preencher()


function change() {
    

    let num = document.body.querySelector("li")

    numeros.forEach(element => {

        element.style.backgroundColor = "red"

    });

    console.log(num)

}

function sortear(min, max) {

    let num = Math.floor(Math.random(min, max) * (max - min) + min)

    numeros.push(num)

    localStorage.setItem('numeros', JSON.stringify(numeros))

    location.reload()
}

function reset() {

    localStorage.removeItem('numeros')
    location.reload()

}

console.log(numeros)


