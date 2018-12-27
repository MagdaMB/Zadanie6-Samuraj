const button = document.querySelector(".button");
const names = ["Ewa", "Lena", "Asia", "Helenka", "Grzes", "Tomek", "Szymon"];
const result = document.querySelector(".result");

const showChildName = () => {
    const index = Math.floor(Math.random() * names.length);
    result.textContent = `Najfajniejsze imię to: ${names[index]}`;
}

button.addEventListener('click', showChildName);