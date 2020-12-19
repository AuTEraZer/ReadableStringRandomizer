window.onload = function () {

    
    const input = document.querySelector('input');
    const log = document.getElementById('values');
    input.addEventListener('input', updateValue);
    function updateValue(e) {
        log.textContent = e.target.value;
    }


    var lastWord = ""

    console.log(input.value.substring(1, input.value.length-1));

    input.onkeyup = function(e) {
        if (e.code == "ShiftLeft" || e.code == "LeftShift") return;

        if (e.code == "Backspace") {
            const l = input.value.split(" ");
            lastWord = l[l.length - 1];
            return;
        }

        if (e.code == "Space") {
            const inputValueWithoutLastWord = input.value.substring(0, input.value.length - lastWord.length - 1);
            const rendomizedWord = randomizeStringWithoutFirstAndLastChar(lastWord);
            lastWord = "";
            input.value = inputValueWithoutLastWord + rendomizedWord + " ";
            console.log(inputValueWithoutLastWord);
        } else {
            lastWord += input.value[input.value.length - 1];
            console.log(lastWord);
        } 
    }
    
    function randomizeStringWithoutFirstAndLastChar(str) {
        if (str.length <= 3) return str;
        firstLetter = str[0];
        lastLetter = str[str.length - 1];
        middlePart = str.substring(1, str.length - 1);
        const k = randomizeString(middlePart);
        const randomizedWord = firstLetter + k + lastLetter;
        return randomizedWord;
    }

    function randomizeString(str) {
        const array = Array.from(str);
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        const randWord = array.join("");
        return randWord;
    }




}