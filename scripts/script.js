// Task 1
/*
Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти,
чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені",
якщо ні — "Не всі поля заповнені".
*/ 


const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const btn = document.getElementById("btn");

function checkInput(){
    if(firstInput.value && secondInput.value){
        alert("Обидва поля заповнені");
    } 
    else{
        alert("Не всі поля заповнені");
    }
}
btn.addEventListener("click", checkInput);