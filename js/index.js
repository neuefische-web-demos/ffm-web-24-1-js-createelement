console.clear();

const form = document.querySelector('[data-js="card-form"]');
const textInput = document.querySelector('[data-js="text-input"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

const root = document;
// console.log(document.children[0].children[1].children[1]); // <- DOM accessing the html elements from the root down the DOM tree

const users = [
  {
    id: "0",
    name: "Alen",
    email: "test@test.de",
  },
  {
    id: "1",
    name: "Maria",
    email: "Maria@test.de",
  },
  {
    id: "2",
    name: "Roland",
    email: "roland@test.de",
  },
  {
    id: "3",
    name: "Kaya",
    email: "kaya@test.de",
  },
];

function createCard(userData) {
  const newCard = document.createElement("li");

  //Dangerous! Never use with user generated data!!
  newCard.innerHTML = `
  <h2>${userData.name}</h2>
  <button>${userData.email}</button>
`;
  newCard.classList.add("card");

  const cardButton = newCard.querySelector("button");
  cardButton.addEventListener("click", () => {
    console.log(userData.email);
  });

  cardContainer.append(newCard);
}

// createCard(users[0]);
// createCard(users[1]);
// createCard(users[2]);

users.forEach(function (userItem) {
  createCard(userItem);
});
