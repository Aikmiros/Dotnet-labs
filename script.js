
const LABS_DONE = 5;

const buttonDiv = document.getElementById('buttonDiv1');
const labDiv = document.getElementById('labDiv');

let currentLab = null;

function buttonClicked(labId) {
  if(currentLab){
    currentLab.remove();
  }
  const lab = document.createElement('iframe');
  lab.src = `Lab${labId}.html`
  lab.style.width = "100%";
  currentLab = lab;
  labDiv.append(lab);
}

for(let i = 1; i <= LABS_DONE; i++){
  const button = document.createElement('button');
  button.className = "button-1";
  button.innerHTML = "Лабораторна робота " + i;
  button.onclick = buttonClicked.bind(null, i);
  buttonDiv.append(button);
}
