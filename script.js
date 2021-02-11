
const LABS_DONE = 5;
const labsArr = ["lab1.html"];

const buttonDiv = document.getElementById('buttonDiv1');

for(let i = 0; i < LABS_DONE; i++){
  let button = document.createElement('button');
  button.class = "button-1";
  button.innerHTML = "Лабораторна робота " + (i + 1);
  buttonDiv.append(button);
}
