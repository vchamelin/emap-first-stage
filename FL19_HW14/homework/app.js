const root = document.getElementById('root');
const input = document.getElementById('search-input');
const btnSearch = document.getElementById('search-btn');
const btnLoadMore = document.getElementsByClassName('load-more')[0];
const charactersWrap = document.getElementById('characters-wrap');

input.setAttribute('placeholder', 'Input id characters')

btnSearch.addEventListener('click', getById);
btnLoadMore.addEventListener('click', addNum);

renderCards();

function getById(){
  const id = input.value;
  const maxId = 826;
  let idPerson = localStorage.getItem('idPerson') ? localStorage.getItem('idPerson') : '';

  if(isNaN(+id)){
    alert('Please, input a number')
  } else if (+id < 1 || +id > maxId) {
    alert('Character not found')
  } else if(idPerson.split(' ').includes(input.value)){
    alert('Character is already in the list');
  } else{
    idPerson = `${idPerson} ${id}`;
    localStorage.setItem('idPerson', idPerson);
    renderCards();
    input.value = '';
  }
}

let nums = 5;

function addNum(){
  nums += 5;
  renderCards(nums);
}

function renderCards(num = 5){
  let idPerson = localStorage.getItem('idPerson') ? localStorage.getItem('idPerson') : '';
  const arrIdPerson = idPerson.split(' ').filter(Boolean);
  if (arrIdPerson.length > 0) {
    charactersWrap.innerHTML = '';
    let ind = arrIdPerson.length;
    arrIdPerson.forEach((id) => {
      ind = renderCharacterById(id, ind, num);
    })
  }

}

function renderCharacterById(id, ind, num) {
  fetch('https://rickandmortyapi.com/api/character/' + id)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const obj = data;
    charactersWrap.innerHTML = `
    <div id="character-id-${obj.id}" class="character-card ${ind > num ? 'hidden' : ''}">
      <button class="btn-delete" id="btn-delete-${obj.id}">Delete</button>
      <img src="${obj.image}" class="character-img" alt="${obj.name} img">
      <h2 class="character-name">${obj.name}</h2>
      <h3 class="character-status">Status: <em class="${obj.status}">${obj.status}</em></h3>
    </div>` + charactersWrap.innerHTML;
    window.scrollTo(0, document.body.scrollHeight);
  });
  return ind - 1;
}