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

// 5.	Створити кнопку на веб-сторінці, яка при натисканні на неї виводить повідомлення "Hello, world!" в спливаючому вікні.

const buttonHello = document.getElementById('buttonHello')

buttonHello.addEventListener('click', function() {
   alert('Hello world')
})

// 6.	Створити поле вводу на веб-сторінці, де користувач може ввести своє ім'я. При натисканні на кнопку "Привітатися" вивести в спливаючому вікні привітання з використанням введеного імені.

const buttonSayHello = document.getElementById('buttonSayHello')
const inputName = document.getElementById('inputName')

buttonSayHello.addEventListener('click', function() {
   alert(`Hello ${inputName.value}`)
})

// 7.	Створити кнопку на веб-сторінці, яка при натисканні на неї змінює колір фону сторінки на випадковий колір.



// 8.	Створити кнопку на веб-сторінці, яка при натисканні на неї показує або приховує певний елемент на сторінці (наприклад, блок з текстом або зображення).
// 9.	Створити функцію, яка вітає користувача при завантаженні сторінки. При виклику цієї функції вивести в спливаючому вікні привітання з використанням імені користувача.
// 10.	Створити веб-сторінку з кнопками для збільшення та зменшення розміру шрифту тексту на сторінці. При натисканні на кнопку "Збільшити" збільшувати розмір шрифту на 2 пікселі, при натисканні на кнопку "Зменшити" - зменшувати на 2 пікселі.
// 11.	Створити форму на веб-сторінці для введення інформації про користувача (ім'я, прізвище, адреса електронної пошти тощо). При натисканні на кнопку "Відправити" вивести в спливаючому вікні введену користувачем інформацію.
// 12.	Створити на сторінці область для малювання з допомогою канвасу. Дозволити користувачу малювати
