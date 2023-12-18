//Evento para inicializar select con materialize
document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
});
//Al dar click en el botón se cargan los elementos en la caja que los muestra
document.querySelector('#calculate').addEventListener('click', (event) => {
    console.log("Presionar el botón funciona");
    //Se obtiene el valor de los dos selects según la posicion al momento de dar click
    let departure = document.getElementById('departure').value
    let destination = document.getElementById('destination').value
    console.log(departure, destination);
    //Se determina que destino se esta recibiendo y se muestra determinado contenido
    if (destination == 'costasol') {
        document.getElementById('cardtitle').innerHTML = "Costa del Sol"
        document.getElementById('imagechanger').src = "https://res.cloudinary.com/dbhtbf2uu/image/upload/v1700695649/actividad2_Kodigo/ferebcu3rtyjfuvsnhp5.jpg"
        document.getElementById('imagechanger').alt = "Foto de la Costa del Sol"
        document.getElementById('outputone').innerHTML = "Disfruta de una playa popular para nadar, con palmeras y aguas poco profundas. También hay hoteles y" 
        + "marisquerías de los que se disfruta mucho."
        //Se determina desde cual destino saldra la persona para calcular precio
        if (departure == '') {
            alert('Agregue desde donde viaja para calcuar el costo!')
        } else if (departure == 'tecla') {
            document.getElementById('outputtwo').textContent = "El precio de este viaje es de $20"
        } else if (departure == 'sansalvador') {
            document.getElementById('outputtwo').textContent = "El precio de este viaje es de $25"
        } else if (departure == 'palma') {
            document.getElementById('outputtwo').textContent = "El precio de este viaje es de $30 y tenemos un descuento especial del 5% " 
            + "Con tu descuento el precio es: $" + (30 - (30 * 0.05))
        } else alert('Por favor seleccionar una opción válida!')

    } else if (destination == 'panchimalco') {
        console.log("Panchimalco");
        document.getElementById('cardtitle').innerHTML = "Panchimalco"
        document.getElementById('imagechanger').src = "https://res.cloudinary.com/dbhtbf2uu/image/upload/v1700695650/actividad2_Kodigo/pfz1tgedhitvwvexgpl1.jpg"
        document.getElementById('imagechanger').alt = "Foto de Panchimalco"
        document.getElementById('outputone').innerHTML = "Panchimalco es un municipio del departamento de San Salvador, El Salvador. Según el censo oficial de" 
        + " 2007, tiene una población de 41.260 habitantes. Es el único lugar en el departamento San Salvador donde todavía se habla Náhuat."
        //Se determina desde cual destino saldra la persona para calcular precio
        if (departure == '') {
            alert('Agregue desde donde viaja para calcuar el costo!')
        } else if (departure == 'tecla') {
            document.getElementById('outputtwo').textContent = "El precio de este viaje es de $20"
        } else if (departure == 'sansalvador') {
            document.getElementById('outputtwo').textContent = "El precio de este viaje es de $15"
        } else if (departure == 'palma') {
            document.getElementById('outputtwo').textContent = "El precio de este viaje es de $35 y tenemos un descuento especial del 10% " 
            + "Con tu descuento el precio es: $" + (35 - (35 * 0.10))
        } else alert('Por favor seleccionar una opción válida!')
    } else if (destination == 'puertotriunfo') {
        document.getElementById('cardtitle').innerHTML = "Puerto el Triunfo"
        document.getElementById('imagechanger').src = "https://res.cloudinary.com/dbhtbf2uu/image/upload/v1700695649/actividad2_Kodigo/osoeppxyabmx7aps7d8u.jpg"
        document.getElementById('imagechanger').alt = "Foto de Puerto el triunfo"
        document.getElementById('outputone').innerHTML = "Ubicado en Usulután, El Salvador. Puerto el Triunfo es hogar de una impresiva selección de atracciones" 
        + "y experiencias, haciendo que su visita valga la pena"
        //Se determina desde cual destino saldra la persona para calcular precio
        if (departure == '') {
            alert('Agregue desde donde viaja para calcuar el costo!')
        } else if (departure == 'tecla') {
            document.getElementById('outputtwo').textContent = "El precio de este viaje es de $25"
        } else if (departure == 'sansalvador') {
            document.getElementById('outputtwo').textContent = "El precio de este viaje es de $20"
        } else if (departure == 'palma') {
            document.getElementById('outputtwo').textContent = "El precio de este viaje es de $45 y tenemos un descuento especial del 15% " 
            + "Con tu descuento el precio es: $" + (45 - (45 * 0.10))
        } else alert('Por favor seleccionar una opción válida!')
    } else {
        alert('Opción escogida no es válida!')
    }
})