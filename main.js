window.onload = function () {

    
    const input = document.querySelector('input');
    const log = document.getElementById('values');
    input.addEventListener('input', updateValue);
    function updateValue(e) {
        log.textContent = e.target.value;
    }

    var lastWord = ""
    document.addEventListener('keydown', function(event) {
        if (event.key == ' ') {
            const randomizedWord = randomizeStringWithoutFirstAndLastChar(lastWord);    
            addWordToInput(randomizedWord, input);
            console.log(randomizedWord);
            lastWord = "";
        } else if (event.key == 'Backspace') {
            lastWord = lastWord.substring(0, lastWord.length - 1);

        } else {
            if (event.key.length == 1)
                lastWord += event.key;
        }
    });
    

    function addWordToInput(word, input_field) {
        const prefix = input_field.value.substring(0, input_field.value.length - word.length);
        input_field.value = prefix + word + " ";
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