// Task 4
/*Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, 
чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення 
"Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".*/


const input = document.getElementById("input");
const btn = document.getElementById("btn");

function checkRange(){
    const num = Number(input.value);
    if(num > 10 && num < 20){
        alert("Число входить в діапазон від 10 до 20");
    }
    else{
        alert("Число не входить в діапазон від 10 до 20");
    }
}
btn.addEventListener("click", checkRange);