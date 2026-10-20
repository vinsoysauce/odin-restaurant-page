import "./css/contact.css";

const contact = (() => {
  const content = document.querySelector("#content")
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  const contactHeaderContainer = document.createElement("div");
  contactHeaderContainer.classList.add("header-container")
  contactContainer.appendChild(contactHeaderContainer)

  const headerIntro = document.createElement("h1");
  headerIntro.classList.add("contact-header-intro");
  headerIntro.textContent = "Dine with Us"
  contactHeaderContainer.appendChild(headerIntro);
  const contactHeaderPara = document.createElement("p");
  contactHeaderPara.classList.add("header-contact-para");
  contactHeaderPara.setAttribute('style', 'white-space: pre;');
  contactHeaderPara.textContent = "A quiet dinner, a special occasion, or an evening with friends.\r\n"
  contactHeaderPara.textContent += "We look forward to welcoming you."
  contactHeaderContainer.appendChild(contactHeaderPara);


  const contactItemsContainer = document.createElement("div");
  contactItemsContainer.classList.add("contact-items-container");

  const contactCardContainer = document.createElement("div");
  contactCardContainer.classList.add("contact-card-container");

  const addressContainer = document.createElement("div");
  addressContainer.classList.add('card-container')
  const addressHeader = document.createElement("h2");
  addressHeader.textContent = "Visit Us";
  addressContainer.appendChild(addressHeader)
  const addressOne = document.createElement("p");
  addressOne.textContent = "Steaks & Stones";
  addressContainer.appendChild(addressOne)
  const addressTwo = document.createElement("p");
  addressTwo.textContent = "128 Olive Lane";
  addressContainer.appendChild(addressTwo)
  const addressThree = document.createElement("p");
  addressThree.textContent = "Willowbrook, Oregon";
  addressContainer.appendChild(addressThree)
  contactCardContainer.appendChild(addressContainer)

  const openingContainer = document.createElement("div");
  openingContainer.classList.add('card-container')
  const openingHeader = document.createElement("h2");
  openingHeader.textContent = "Opening Hours";
  openingContainer.appendChild(openingHeader)
  const openingOne = document.createElement("p");
  openingOne.textContent = "Monday: Closed";
  openingContainer.appendChild(openingOne)
  const openingTwo = document.createElement("p");;
  openingTwo.textContent = "Tuesday–Thursday: 5:00 PM–10:00 PM";
  openingContainer.appendChild(openingTwo)
  const openingThree = document.createElement("p");
  openingThree.textContent = "Friday–Saturday: 5:00 PM–11:00 PM";
  openingContainer.appendChild(openingThree)
  const openingFour = document.createElement("p");
  openingFour.textContent = "Sunday: 4:00 PM–9:00 PM";
  openingContainer.appendChild(openingFour)
  contactCardContainer.appendChild(openingContainer)

  const reservationContainer = document.createElement("div");
  reservationContainer.classList.add('reservation-container')
  const reservationHeader = document.createElement("h2");
  reservationHeader.textContent = "Reservations & Inquiries";
  reservationContainer.appendChild(reservationHeader)
  const reservationOne = document.createElement("p");
  reservationOne.textContent = "Phone: (503) 555-0148";
  reservationContainer.appendChild(reservationOne)
  const reservationTwo = document.createElement("p");
  reservationTwo.textContent = "Email: hello@steaksandstones.example";
  reservationContainer.appendChild(reservationTwo)
  const reservationThree = document.createElement("p");
  reservationThree.textContent = "Call or email to request a table.";
  reservationContainer.appendChild(reservationThree)
  const reservationFour = document.createElement("p");
  reservationFour.textContent = "For parties of six or more, please contact us in advance.";
  reservationContainer.appendChild(reservationFour)
  contactItemsContainer.appendChild(reservationContainer)



  contactItemsContainer.appendChild(contactCardContainer);
  contactContainer.appendChild(contactItemsContainer);
  content.appendChild(contactContainer)
})

export { contact }