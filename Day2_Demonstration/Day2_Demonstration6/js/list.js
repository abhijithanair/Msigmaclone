const fruits = ['apple','banana','orange','grape','melon'];
const fruitsList = document.getElementById('fruitsList');

fruits.forEach((fruit) => {
  const listItem = document.createElement('li');
  listItem.textContent = fruit;
  listItem.classList.add('fruit');
  fruitsList.appendChild(listItem);
});

//SELECTORS
const fruitsUlItem = document.querySelector('.fruitsList');
const fruitsLiItems = document.querySelectorAll('.fruits');