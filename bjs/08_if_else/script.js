
let minValue = 0;
let maxValue = 100;
let answerNumber = 0;
let orderNumber = 0;
let gameRun = false;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
function startFunc(){
    let inputMinValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    let inputMaxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    minValue = inputMinValue || 0;
    maxValue = inputMaxValue || 100;
    minValue = (inputMinValue >= -999 && inputMinValue <= 999) ? inputMinValue : -999;
    maxValue = (inputMaxValue >= -999 && inputMaxValue <= 999) ? inputMaxValue : 999;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
}
startFunc();

document.getElementById('btnRetry').addEventListener('click', startFunc)

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 4);
            const answerPhrase = (phraseRandom === 1) ? 'Вы загадали неправильное число!\n\u{1F914}' :
            (phraseRandom === 2) ? 'Я не смог отгадать\n\u{1F61F}' :
            (phraseRandom === 3) ? 'Я пытался\n\u{1F61E}' :
                'Я сдаюсь..\n\u{1F92F}';
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 4);
            const answerVersion = (phraseRandom === 1) ? `Вы загадали число ${answerNumber}?` :
            (phraseRandom === 2) ? `Быть может ваше число ${answerNumber }?` :
            (phraseRandom === 3) ? `А что если это число ${answerNumber }?` :
                `Наверняка вы загадали число ${answerNumber }?`;
            answerField.innerText = answerVersion;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (answerNumber - 1 < minValue) {
            const phraseRandom1 = Math.round( Math.random() * 4);
            const answerPhrase1 = (phraseRandom1 === 1) ? 'Вы загадали неправильное число!\n\u{1F914}' :
            (phraseRandom1 === 2) ? 'Я не смог отгадать\n\u{1F61F}' :
            (phraseRandom1 === 3) ? 'Я пытался\n\u{1F61E}' :
            'Я сдаюсь..\n\u{1F92F}';
            answerField.innerText = answerPhrase1;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom2 = Math.round( Math.random() * 4);
            const answerVersion2 = (phraseRandom2 === 1) ? `Вы загадали число ${answerNumber}?` :
            (phraseRandom2 === 2) ? `Быть может ваше число ${answerNumber }?` :
            (phraseRandom2 === 3) ? `А что если это число ${answerNumber }?` :
            `Наверняка вы загадали число ${answerNumber }?`;           
            answerField.innerText = answerVersion2;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 4);
            const answerPhrase = (phraseRandom === 1) ? 'Ха! я знал!\n\u{1F60E}' :
            (phraseRandom === 2) ? 'А я хорош\n\u{1F60C}' :
            (phraseRandom === 3) ? 'Я так и думал\n\u{1F609}' :
                'Было сложно, но я справился\n\u{1F600}';

            answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

