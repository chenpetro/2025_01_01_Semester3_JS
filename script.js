// const showModal = document.querySelector('.showModal')
// const digits = document.querySelector('.digits')
// let i = 1
// showModal.addEventListener('click', function () {
//     digits.innerHTML = `${i++}`
// })

// document.addEventListener('keydown', function (event) {
//     console.log(event.key);
//     if (event.key == 'b') {
//         document.querySelector('body').style.background = 'green'    
//     }
// })

const inputName = document.getElementById('username')
const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')
const inputConfirmPassword = document.getElementById('confirm-password')
inputName.addEventListener('focus', function(){
    inputName.style.background = 'black'
     inputName.style.color = 'white'
})

const form = document.querySelector('form')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(inputName.value);
    // 4 Створити форму, після сабміту виводити на екран повідомлення ‘Ви зареєструвалися успішно! Дякую!’
    alert('Ви зареєструвалися успішно! Дякую!')
    // alert(`you entered name: ${inputName.value},
    //     email: ${inputEmail.value}, 
    //     password: ${inputPassword.value}, 
    //     confirm passwoord: ${inputConfirmPassword.value}`)
})



