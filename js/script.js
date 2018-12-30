const addBtn = document.querySelector(".addBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const showBtn = document.querySelector(".showBtn");
const showAll = document.querySelector(".showAll");
const result = document.querySelector(".result");
const input = document.querySelector(".input");

let solutions = ["walcz", "przemyśl to jeszcze raz"];

const addFunction = (e) => {
    e.preventDefault();
    solutions.push(input.value);
    input.value = "";
    console.log(solutions);
}

const delFunction = (e) => {
    e.preventDefault();
    solutions = [];
    console.log(solutions);
    alert("nie masz żadnych możliwości");
}

const showFunction = () => {
    let index = Math.floor(Math.random() * solutions.length);
    alert(solutions[index]);
}

const showAllFunction = () => {
    alert(solutions);
}

addBtn.addEventListener('click', addFunction);
deleteBtn.addEventListener('click', delFunction);
showBtn.addEventListener('click', showFunction);
showAll.addEventListener('click', showAllFunction);