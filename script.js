// const showModal = document.querySelector('.showModal')
// const digits = document.querySelector('.digits')
// let i = 1
// showModal.addEventListener('click', function () {
//     digits.innerHTML = `${i++}`
// })

document.addEventListener('keydown', function (event) {
    console.log(event.key);
    if (event.key == 'b') {
        document.querySelector('body').style.background = 'green'    
    }
    // ? (event.key == 'b') => document.querySelector('body').style.background = 'green'

})