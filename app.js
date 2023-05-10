const nav_hamburger = document.querySelector(".nav-hamburger");
const nav_menu = document.querySelector(".nav-menu");

nav_hamburger.addEventListener("click", () => {
  nav_menu.classList.toggle("active");
});

const service_help_cards = document.querySelector(".service-help-cards");

fetch("http://localhost:5000/itemsData")
  .then((res) => res.json())
  .then((data) => {
    itemsData(data);
  });

function itemsData(data) {
  for (let i = 0; i < data.length; i++) {
    const service_card = document.createElement("div");
    const card_header = document.createElement("div");
    const card_header_content = document.createElement("h5");
    const card_text = document.createElement("div");
    const card_text_content = document.createElement("p");
    const card_more_text = document.createElement("div");
    const card_more_content = document.createElement("p");

    service_card.classList.add("service-card");
    card_header.classList.add("card-header");
    card_header_content.classList.add("card-header_content");
    card_text.classList.add("card-text");
    card_text_content.classList.add("card-text_content");
    card_more_content.classList.add("card-more-text_content");

    card_header_content.innerText = data[i].name;
    card_text_content.innerText = data[i].text;
    card_more_content.innerText = data[i].miniText;

    service_help_cards.append(service_card);
    service_card.append(card_header, card_text, card_more_text);
    card_header.appendChild(card_header_content);
    card_text.appendChild(card_text_content);
    card_more_text.appendChild(card_more_content);
  }
}
