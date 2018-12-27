const button = document.querySelector(".button");
const result = document.querySelector(".result");
const chars = 'ABCDEFGHIJK0123456789';
const codesNumber = 1000;
const charsNumber = 10;

const generateCodes = () => {
    result.innerHTML = "";
    for (let j = 0; j < codesNumber; j++) {
        let code = "";
        for (let i = 0; i < charsNumber; i++) {
            let index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }

        const div = document.createElement('div');
        div.textContent = code;
        result.appendChild(div);
    }
}

button.addEventListener('click', generateCodes);