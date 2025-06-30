const marutiVehicles = [
  {
    name: "Maruti Suzuki Ertiga",
    price: "₹9.3 Lakh",
    fuel: "Petrol",
    year: "2021",
    image: "images/ertiga.jpg"
  },
  {
    name: "Maruti Suzuki Swift",
    price: "₹6.1 Lakh",
    fuel: "Petrol",
    year: "2022",
    image: "images/swift.jpg"
  },
  {
    name: "Maruti Suzuki Baleno",
    price: "₹7.9 Lakh",
    fuel: "Petrol",
    year: "2023",
    image: "images/baleno.jpg"
  },
  {
    name: "Maruti Suzuki WagonR",
    price: "₹5.6 Lakh",
    fuel: "Petrol",
    year: "2022",
    image: "images/wagonr.jpg"
  },
  {
    name: "Maruti Suzuki Brezza",
    price: "₹8.9 Lakh",
    fuel: "Petrol",
    year: "2023",
    image: "images/brezza.jpg"
  }
];



const container = document.querySelector(".card-container");

marutiVehicles.forEach(vehicle => {
  const card = document.createElement("div");
  card.className = "vehicle-card";

  const img = document.createElement("img");
  img.src = vehicle.image;
  img.alt = vehicle.name;

  const title = document.createElement("h3");
  title.textContent = vehicle.name;

  const price = document.createElement("p");
  price.innerHTML = `<strong>Price:</strong> ${vehicle.price}`;

  const fuel = document.createElement("p");
  fuel.innerHTML = `<strong>Fuel:</strong> ${vehicle.fuel}`;

  const year = document.createElement("p");
  year.innerHTML = `<strong>Year:</strong> ${vehicle.year}`;

  const btn = document.createElement("button");
  btn.textContent = "View Details";
  btn.className = "card-btn";

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(fuel);
  card.appendChild(year);
  card.appendChild(btn);

  container.appendChild(card);
});
