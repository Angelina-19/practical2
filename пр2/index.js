let age = prompt("Введіть ваш вік:");

if (age === null || age === "" || isNaN(age)) {
    alert("Будь ласка, введіть ваш вік");
}

    if (age < 18) {
    alert("Вам заборонено вхід");
} else if (age >= 18 && age <= 65) {
    alert("Ласкаво просимо!");
} else {
    alert("Будь ласка, будьте обережні!");
}


let n = prompt("Введіть число n:");

if (n === null || n === "" || isNaN(n)) {
console.log("Будь ласка, введіть ваш вік");
} else {
    n = parseInt(n);
}

for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}


let number = prompt("Введіть число:");

if (number === null || number === "" || isNaN(number)) {
    console.log("Будь ласка, введіть число:"); 
} else {
number = parseInt(number);


if (number < 0) {
    console.log("Факторіал від'ємного числа не існує");
} else {
    let factorial = 1;
    let i = 1;
    
    while (i <= number) {
  factorial = factorial * i;
    i++;
}
console.log("Факторіал " + number + " = " + factorial);
}
}

let a = prompt("Введіть число a:");
let b = prompt("Введіть число b:");
let operation = prompt("Введіть операцію(+, -, *, /):");

if (a === null || a === "" || isNaN(a) || b === null || b === "" || isNaN(b)) {
    alert("Будь ласка, введіть коректне число:"); 
} else {
    a = parseFloat(a);
    b = parseFloat(b);

    let result;
    switch (operation) {
        case "+":
            result = a + b;
            console.log(result);
            break;
        case "-":
            result = a - b;
            console.log(result);
            break; 
        case "*":
            result = a * b;
            console.log(result);
            break;
        case "/":
            if (b === 0) {
             result = "Не можна ділити на нуль";
            } else {
             result = a / b; 
         }
         console.log(result);
            break;
         default: 
            result = "Неправильна  оперія";
            console.log(result);
    }
    alert("Результат:" + result);
}


let game = 3;

let rand;

do {
    rand = prompt("Вгадайте число від 1 до 100:");

if (rand === null || rand === "" || isNaN(rand)) {
    alert("Будь ласка, введіть число:");
    continue;
}

 rand = parseInt(rand);

if (rand < game) {
    alert("Загадане число більше");
} else if (rand > game) {
    alert("Загадане число менше");
} 
} while (rand !== game);
alert("Вітаємо! Ви вгадали число!");