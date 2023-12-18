//Handler for submission form
let studentForm = document.getElementById('studentinfo')

//Funcion para procesar los datos

studentForm.querySelector('#processdata').addEventListener('click', (event) => {
    event.preventDefault()
    let fullname = document.getElementById('studentname')
    let id = document.getElementById('carnet')
    let examGrade = document.getElementById('examgrade')
    let homeworkGrade = document.getElementById('homeworkgrade')
    let attendance = document.getElementById('attendance')
    let investigation = document.getElementById('investigation')

    if (fullname.value === '') {
        alert ('Favor de ingresar nombre del alumno!')
    } else if (id.value === '') {
        alert ('Favor de ingresar el carnet del estudiante!')
    } else if (examGrade.value === '') {
        alert('Favor de ingresar la nota de examen!')
    } else if (homeworkGrade.value === '') {
        alert('Favor de ingresar nota de tarea!')
    } else if (attendance.value === '') {
        alert('Favor de ingresar asistencia del alumno!')
    } else if (investigation.value === '') {
        alert('Favor de ingresar nota de investigación!')
    }
    
    let finalGrades = ((examGrade.value * 0.20) + (homeworkGrade.value * 0.40) + ((attendance.value / 20) * 0.10) + (investigation.value * 0.30))

    console.log(id.value, fullname.value, finalGrades);
    document.getElementById('showstudentid').innerHTML = id.value
    document.getElementById('showname').innerHTML = fullname.value
    document.getElementById('showfinalgrade').innerHTML = finalGrades
})
