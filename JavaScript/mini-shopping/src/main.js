'use strict';
function loadItems() {
  return fetch('data/data.json')
    .then(response => { // fetch의 결과인 response를
      return response.json()  // response.json()으로 return한다.
    })  // 이 코드는 .then(response => response.json()) 이거와 동일
    .then(json => json.items);
}

function displayItems(items) {
  const container = document.querySelector('.items2');
  container.innerHTML = items
      .map(item => {
        return createHTMLString(item)
      })
      .join('');

// const html = items.map(item => createHTMLString(item)).join('');
  // console.log(html);
}

function createHTMLString(item) {
  return `           
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items) {
  const target = event.target;
  const key = target.dataset.key;
  const value = target.dataset.value;
  if (key == null || value == null) {
    return;
  }
  updateItems(items, key, value);
   // displayItems(items.filter(item => item[key] === value));
}

//Make the items matching {key: value} invisible.
function updateItems(items, key, value) {
  items.forEach(item => {
    if (item.dataset[key] === value) {
      item.classList.remove('invisible');
    } else {
      item.classList.add('invisible');
    }
  });
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

//main
loadItems()
  .then(items => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);


function sum(a, b) {
  return a+b;
}
