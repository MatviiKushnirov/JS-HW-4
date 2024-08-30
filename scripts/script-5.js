// Task 5
/*
Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти,
чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, 
якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, 
email містить символ @ та крапку після неї, пароль містить не менше 6 символів.
*/

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
function checkForm(){
    if(name.value.length < 3){
        alert("Ім'я має містити не менше 3 символів")
    } 
    if(!email.value.includes("@.")){
        alert("Email має містити символ @ та крапку після неї")
    } 
    if(password.value.length < 6){
        alert("Пароль має містити не менше 6 символів");
    } else{
        alert("Перевірку пройдено!")
    }
}
btn.addEventListener("click", checkForm);