//Ejerccio 1
//Funcion que en base a la edad se devuelva un mensaje para saber si es menor o no
document.querySelector('#submit').addEventListener('click', (event) => {
    let age = document.getElementById('ages').value
    let adult = age >= 18

    return adult ? document.getElementById('output').innerHTML = "Eres mayor de edad" : document.getElementById('output').innerHTML = "No eres mayor de edad"
})
 