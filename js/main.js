const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


// day 1

console.log(document.querySelector('.button-auth'))

'use strict';

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');
const cardsRestaurants = document.querySelector('.cards-restaurants');
const containerPromo = document.querySelector('.container-promo');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const logo =  document.querySelector('.logo');

let login = localStorage.getItem('foodDelivery');

function toggleModalAuth() {
  loginInput.style.borderdColor = '';
  modalAuth.classList.toggle('is-open');
}




function authorized() {
  console.log('Authorized');

  function logOut() {
    login = null;
    localStorage.removeItem('foodDelivery');
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }

  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut)
}
 

function notAuthorized() {
  console.log('Not authorized');
}

function logIn(event) {
  event.preventDefault();
  
  if (loginInput.value.trim()) {
    

    login = loginInput.value;
    localStorage.setItem('foodDelivery', login);
    toggleModalAuth();
    buttonAuth.removeEventListener('click', toggleModalAuth);
    closeAuth.removeEventListener('click', toggleModalAuth);
    logInForm.removeEventListener('submit', logIn)
    logInForm.reset();
    checkAuth();
  } else {
    loginInput.style.borderdColor = 'red';
  }
}

buttonAuth.addEventListener('click', toggleModalAuth);
closeAuth.addEventListener('click', toggleModalAuth);
logInForm.addEventListener('submit', logIn)



function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}
checkAuth();

function createCardRestaurant() {

  const card = `
						<img src="img/pizza-plus/pizza-vesuvius.jpg" alt="image" class="card-image"/>
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">Pizza Vezuvius</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">List of ingredients.
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">Cart</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">545 $</strong>
							</div>
						</div>
  `;

  console.log(card);
}

function openGoods(event) {
  const target = event.target;
  
  const restaurant = target.closest('.card-restaurant');
  
  if (restaurant) {
      containerPromo.classList.add('hide')
      restaurants.classList.add('hide')
      menu.classList.remove('hide')
  }
  
  createCardGood()
  const card = document.createElement('div');
  card.classname = 'card';

  card.insertAdjacentHTML('beforeend', `
  <img src="img/pizza-plus/pizza-classic.jpg" alt="image" class="card-image"/>
  <div class="card-text">
    <div class="card-heading">
      <h3 class="card-title card-title-reg">Pizza Classic</h3>
    </div>
    <div class="card-info">
      <div class="ingredients">List of ingredients.
      </div>
    </div>
    <div class="card-buttons">
      <button class="button button-primary button-add-cart">
        <span class="button-card-text">Cart</span>
        <span class="button-cart-svg"></span>
      </button>
      <strong class="card-price-bold">510 $</strong>
    </div>
  </div>
  `)
}





cardsRestaurants.addEventListener('click', openGoods);
logo.addEventListener('click', function() {
  containerPromo.classList.remove('hide');
  restaurants.classList.remove('hide');
  menu.classList.add('hide');
})

createCardGood();
createCardGood();
createCardGood();
