// 1. Напишіть скрипт зміни кольору кнопки при натискані на неї.

const button = document.getElementById('button')

button.addEventListener('click', function () {
button.style.backgroundColor = 'green'
})

// 2. Напиши скрипт реалізації додавання класу до заголовка при кліку на кнопку ‘Додати стилі’.

const buttonStyles = document.getElementById('buttonStyles')
const title = document.getElementById('title')

buttonStyles.addEventListener('click', function(){
   title.classList.add('title') 
})


// 3. Написати програму яка буде виводити данні введені в інпут в інтерфейс сторінки.

const enterData = prompt('Enter data')
const buttonPrompt = document.getElementById('buttonPrompt')
buttonPrompt.addEventListener('click', function(event){
  
    const newText = document.createElement('p')
    event.preventDefault()
    console.log(newText);
    newText.textContent = enterData;
    document.body.append(newText)
 })


 document.addEventListener('keydown', function(){
    document.querySelector('body').style.background = `rgb(${Math.round(Math.random()*255)},
    ${Math.round(Math.random()*255)},
    ${Math.round(Math.random()*255)}
    ` 
})