// const container = document.querySelector(".card-container");

// marutiVehicles.forEach(vehicle => {
//   const card = document.createElement("div");
//   card.className = "vehicle-card";

//   const img = document.createElement("img");
//   img.src = vehicle.image;
//   img.alt = vehicle.name;

//   const title = document.createElement("h3");
//   title.textContent = vehicle.name;

//   const price = document.createElement("p");
//   price.innerHTML = `<strong>Price:</strong> ${vehicle.price}`;

//   const fuel = document.createElement("p");
//   fuel.innerHTML = `<strong>Fuel:</strong> ${vehicle.fuel}`;

//   const year = document.createElement("p");
//   year.innerHTML = `<strong>Year:</strong> ${vehicle.year}`;

//   const btn = document.createElement("button");
//   btn.textContent = "View Details";
//   btn.className = "card-btn";

//   card.appendChild(img);
//   card.appendChild(title);
//   card.appendChild(price);
//   card.appendChild(fuel);
//   card.appendChild(year);
//   card.appendChild(btn);

//   container.appendChild(card);
// });

let cardcont = document.querySelector(".card_container");

let brand = localStorage.getItem("brand") || "maruti";

function displaycars(cars){
  cars.forEach(car => {
    let cardiv = document.createElement("div");
    cardiv.classList.add("cardiv");

    cardiv.innerHTML = `
  <img src="${car.image}" alt="${car.name}" />
  <p class="vehicle-name">${car.name}</p>
  <p><strong>Price:</strong> ${car.price}</p>
  <p><strong>Fuel:</strong> ${car.fuel}</p>
  <p><strong>Year:</strong> ${car.year}</p>
  <button>View Details</button>
`;


    cardcont.appendChild(cardiv);
  });
}

fetch(`Objects/${brand}.json`)
  .then(res => res.json())
  .then(data => {
    displaycars(data);
  })
  .catch(err => {
    console.log("Fetch Error:", err);
  });