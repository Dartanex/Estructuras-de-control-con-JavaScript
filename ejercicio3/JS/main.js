const getCategory = () => {
    let category = document.querySelector('input[name="category"]:checked').value
    console.log(category);  
    if (category == 15) {
        document.getElementById('showrisepercent').value = "15%"  
    } else if (category == 30) {
        document.getElementById('showrisepercent').value = '30%'
    } else if (category == 10) {
        document.getElementById('showrisepercent').value = '10%'
    } else if (category == 20) {
        document.getElementById('showrisepercent').value = '20%'
    } else {
        alert('Opción no valida')
    }
}
    
let calculateRiseSalary = document.getElementById('employeerise')
document.getElementById('employeerise').addEventListener('submit', (event) => {
    event.preventDefault()
    let bSalary = document.getElementById('salary').value
    let category = document.querySelector('input[name="category"]:checked').value
    const employees = []
    let employ = {
        fullname: document.getElementById('fullname').value,
        baseSalary: bSalary,
        rise: category + "%",
        totsalary: bSalary * (category/100)
    }
    employees.push(employ)
    let tablebody = document.getElementById("showdata")
    employees.forEach(employee => {

        tablebody.innerHTML += "<tr><td>" + employee.fullname + "</td><td>$" + employee.baseSalary + "</td><td>" 
        + employee.rise + "</td><td>$" + employee.totsalary + "</td></tr>"

    });
    resetForm();
})

const resetForm = () => {
    calculateRiseSalary.reset()
}