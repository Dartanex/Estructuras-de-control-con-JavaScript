//Evento para inicializar select con materialize
document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
});

//Funcion para obtener descuento
document.querySelector('#getcardiscount').addEventListener('change', (event) => {
    //let selectCar = document.querySelector('#getcardiscount')
    //let car = selectCar.value
    
    if (event.target.value === 'fiesta') {
        //img.src = 
        //img.alt = "Auto Ford Fiesta 2023"
        console.log("Fiesta");
        document.getElementById('imgchange').src = "https://res.cloudinary.com/dbhtbf2uu/image/upload/v1700645575/actividad2_Kodigo/teduffpk8dlblmpcrgh2.jpg"
        document.getElementById('spanuotput').textContent = "FORD FIESTA 2023"
        document.getElementById('output').textContent = "Haste acreedor de un Ford Fiesta último modelo hoy, y recibe un 15% de descuento"
    } else if (event.target.value == 'focus') {
        console.log("Focus");
        document.getElementById('imgchange').src = "https://res.cloudinary.com/dbhtbf2uu/image/upload/v1700645575/actividad2_Kodigo/ldu8ynre86hk35fib7up.jpg"
        document.getElementById('spanuotput').textContent = "FORD FOCUS 2023"
        document.getElementById('output').textContent = "Haste con el deportivo de tus sueños adiquiere tu Ford Focus último modelo hoy, y recibe un 10% de descuento"
    } else if (event.target.value == 'scape') {
        console.log("Escape");
        document.getElementById('imgchange').src = "https://res.cloudinary.com/dbhtbf2uu/image/upload/v1700645575/actividad2_Kodigo/owvdb0hhqgvsxpjagppk.jpg"
        document.getElementById('spanuotput').textContent = "FORD ESCAPE 2023"
        document.getElementById('output').textContent = "Conquista los terrenos dentro y fuera de la ciudad con una Ford Escape último modelo hoy, y recibe un 50% de descuento"
    } else {
        alert("Opción no válida")
    }
})