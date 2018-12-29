const button = document.querySelector(".button");
const input = document.querySelector(".input");
let result = document.querySelector(".result");
let names = [];

const addName = (e) => {
    e.preventDefault();
    let name = input.value;

    if (name === "") {
        return;
    } else {
        for (i of names) {
            if (name === i) {
                return;
            }
        }
        names.push(name);
        result.textContent += `${name}, `;
    }
}

button.addEventListener('click', addName);