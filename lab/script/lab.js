
const dropupTab = document.getElementById('dropupTab');

for(const i in content){
  const div = document.createElement('div');
  div.className = 'dropup';

  const contentDiv = document.createElement('div');
  contentDiv.className = 'dropup-content';

  const button = document.createElement('button');
  button.innerHTML = content[i].name;

  if(content[i].content.length === 0){
    button.className = 'tablinks';
    const name = `${i}-1`;
    button.onclick = openTab.bind(null, name);
    button.id = 'button-' + name;
  }

  for(const j in content[i].content){
    const button = document.createElement('button');
    button.className = 'tablinks';
    const l = + j + 1;
    const name = `${i}-${l}`;
    button.onclick = openTab.bind(null, name);
    button.id = 'button-' + name;
    button.innerHTML = content[i].content[j]
    contentDiv.append(button);
  }
  div.append(contentDiv);
  div.append(button);
  dropupTab.append(div);
}

function openTab(name) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(name).style.display = 'block';
  document.getElementById('button-' + name).className += ' active';
}

document.getElementById("button-1-1").click();
