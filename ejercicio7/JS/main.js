const starting = () => {
    let arrayNumber = []
    let i = 0
    let getnumber
    //Pidiendo los 10 números y validando que sean número y no otros caracteres
    do {
        getnumber = parseInt(prompt("Ingrese número: " + (parseInt(i) + 1), ""))
        if (isNaN(getnumber)) {
            alert('El valor digitado no es númerico')
        } else {
            arrayNumber.push(getnumber)
            i++
        }
    } while (i < 10);
    console.log(arrayNumber);
    //Obteniendo cantidad de numeros negativos
    let negativeNumber = 0
    arrayNumber.forEach(number => {
        if (number < 0) negativeNumber = negativeNumber + 1
    })
    console.log("Cantidad negativos: "+negativeNumber);
    //Obteniendo cantidad de numeros positivos
    let positiveNumber = 0
    arrayNumber.forEach(number => {
        if (number > 0) positiveNumber = positiveNumber + 1
    })
    console.log("Cantidad positivos: " + positiveNumber);
    //Obteniendo cantidad de numeros multiplos de 15
    let multipleOfFifteen = 0
    arrayNumber.forEach(number => {
        if (number % 15 ===0) multipleOfFifteen = multipleOfFifteen + 1
    })
    console.log("Multiplos 15: "+multipleOfFifteen);
    //Obteniendo suma de numeros pares
    let sumPar = 0
    arrayNumber.forEach(number => {
        if (number % 2 === 0) {
            sumPar = sumPar + number
        }
    })
    console.log("Suma pares: " + sumPar);
    //Ingresando html que mostrará los datos
    document.querySelector('#showalldata').innerHTML = `
    <div class="row">
        <div class="col s12 m6 push-l3">
          <h3 class="center-align">N&uacute;meros ingresados</h3>
          <table class="showdata">
            <tr>
              <td>${arrayNumber[0]}</td>
              <td>${arrayNumber[1]}</td>
              <td>${arrayNumber[2]}</td>
              <td>${arrayNumber[3]}</td>
              <td>${arrayNumber[4]}</td>
              <td>${arrayNumber[5]}</td>
              <td>${arrayNumber[6]}</td>
              <td>${arrayNumber[7]}</td>
              <td>${arrayNumber[8]}</td>
              <td>${arrayNumber[9]}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="row blue-grey white-text">
        <div class="col s12 m6 push-l3">
          <h3 class="center-align">Cantidad de n&uacute;meros negativos</h3>
          <h3 class="center-align">${negativeNumber}</h3>
        </div>
      </div>
      <div class="row blue-grey white-text">
        <div class="col s12 m6 push-l3">
          <h3 class="center-align">Cantidad de n&uacute;meros positivos</h3>
          <h3 class="center-align">${positiveNumber}</h3>
        </div>
      </div>
      <div class="row blue-grey white-text">
        <div class="col s12 m6 push-l3">
          <h3 class="center-align">Cantidad de n&uacute;meros m&uacute;ltiplos de 15</h3>
          <h3 class="center-align">${multipleOfFifteen}</h3>
        </div>
      </div>
      <div class="row blue-grey white-text">
        <div class="col s12 m6 push-l3">
          <h3 class="center-align">Suma de n&uacute;meros pares en el arreglo</h3>
          <h3 class="center-align">${sumPar}</h3>
        </div>
      </div>
    `
}
window.onload = starting()