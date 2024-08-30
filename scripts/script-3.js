// Task 3
/*
Створити розмітку  з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, 
чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", 
якщо ні — "Текст не містить слово JavaScript".
*/

const input = document.getElementById("input");
const btn = document.getElementById("btn");

function checkText(){
    if(input.value.includes("JavaScript")){
        alert("Текст містить слово JavaScript");
    }
    else{
        alert("Текст не містить слово JavaScript");
    }
}
btn.addEventListener("click", checkText);