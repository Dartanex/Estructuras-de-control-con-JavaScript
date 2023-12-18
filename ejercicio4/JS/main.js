document.querySelector('#compare').addEventListener('click', (event) => {
  let firstNum = document.getElementById('firstnumber').value
  let secondNum = document.getElementById('secondnumber').value
  let flag = firstNum > secondNum
  console.log(firstNum, secondNum, flag);
  if (flag) {
    document.getElementById('output').innerHTML = "El mayor número entre " + firstNum + 
    " y " + secondNum + " es: " + secondNum
  } else if (!flag) {
    document.getElementById('output').innerHTML = "El mayor número entre " + firstNum + 
    " y " + secondNum + " es: " + firstNum
  } else if (firstNum == secondNum) {
    document.getElementById('output').innerHTML = "Ambos números son iguales"
  } else {
    document.getElementById('output').innerHTML = "Favor de ingeresar números"
  }
  document.getElementById('firstnumber').value = ''
  document.getElementById('secondnumber').value = ''
})