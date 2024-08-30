// Task 2
/*
Створити розмітку  з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти,
чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10",
якщо ні — "Сума менша або дорівнює 10".
*/

const firstNumInput = document.getElementById("firstNumInput");
const secondNumInput = document.getElementById("secondNumInput");
const btnSum = document.getElementById("btnSum");

function checkSum(){
    const num1 = Number(firstNumInput.value);
    const num2 = Number(secondNumInput.value);
    const sumInput = num1 + num2;
    if(sumInput > 10){
        alert("Сума більша за 10");
    }
    else{
        alert("Сума менша або дорівнює 10");
    }
}
btnSum.addEventListener("click", checkSum);