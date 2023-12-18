document.querySelector('#createtable').addEventListener('click', (event) => {
    let number = document.getElementById('number').value
    console.log("El botón funciona " + number);
    let arrayNumber = []
    for (let i = 1; i <= 10; i++) {
        arrayNumber[i - 1] = number * i
    }
    document.querySelector('#showtable').innerHTML = `
    <div class="row">
        <div class="col s12 m6 push-l3 blue-grey white-text">
          <p class="center-algin">1 x ${number} = ${arrayNumber[0]}</p>
          <p class="center-algin">2 x ${number} = ${arrayNumber[1]}</p>
          <p class="center-algin">3 x ${number} = ${arrayNumber[2]}</p>
          <p class="center-algin">4 x ${number} = ${arrayNumber[3]}</p>
          <p class="center-algin">5 x ${number} = ${arrayNumber[4]}</p>
          <p class="center-algin">6 x ${number} = ${arrayNumber[5]}</p>
          <p class="center-algin">7 x ${number} = ${arrayNumber[6]}</p>
          <p class="center-algin">8 x ${number} = ${arrayNumber[7]}</p>
          <p class="center-algin">9 x ${number} = ${arrayNumber[8]}</p>
          <p class="center-algin">10 x ${number} = ${arrayNumber[9]}</p>
        </div>
      </div>
    `
})