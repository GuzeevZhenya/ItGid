let textInput = document.querySelector('#text-input');

const key = {
    'a': '1',
    'b': '2',
    ' ': ' y',
    'h': 't',
    'e': 'u',
    'l': 'i',
    'o': 'p',
};


document.querySelector('button').onclick = () => {
    let str = textInput.value; // то что в input
    let str2 = "";


    for (let i = 0; i < str.length; i++) {
        console.log(key[str[i]]);
        if (key[str[i]]) {
            str2 += key[str[i]];
        } else {
            str2 += str[i];
        }
    }

    document.querySelector('#out').textContent = str2;
}