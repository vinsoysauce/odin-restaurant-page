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
  headerIntro.textContent = "Come Join Us"
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

  const addressHeader = document.createElement("h3");
  addressHeader.classList.add("contact-card-header");
  addressHeader.textContent = "Visit Us";
  contactCardContainer.appendChild(addressHeader)
  const addressOne = document.createElement("p");
  addressOne.classList.add("contact-card-para");
  addressOne.textContent = "Steaks & Stones";
  contactCardContainer.appendChild(addressOne)
  const addressTwo = document.createElement("p");
  addressTwo.classList.add("contact-card-para");
  addressTwo.textContent = "128 Olive Lane";
  contactCardContainer.appendChild(addressTwo)
  const addressThree = document.createElement("p");
  addressThree.classList.add("contact-card-para");
  addressThree.textContent = "Willowbrook, Oregon";
  contactCardContainer.appendChild(addressThree)

  const openingHeader = document.createElement("h3");
  openingHeader.classList.add("opening-card-header");
  openingHeader.textContent = "Opening Hours";
  contactCardContainer.appendChild(openingHeader)
  const openingOne = document.createElement("p");
  openingOne.classList.add("contact-card-para");
  openingOne.textContent = "Monday: Closed";
  contactCardContainer.appendChild(openingOne)
  const openingTwo = document.createElement("p");
  openingTwo.classList.add("contact-card-para");
  openingTwo.textContent = "Tuesday–Thursday: 5:00 PM–10:00 PM";
  contactCardContainer.appendChild(openingTwo)
  const openingThree = document.createElement("p");
  openingThree.classList.add("contact-card-para");
  openingThree.textContent = "Friday–Saturday: 5:00 PM–11:00 PM";
  contactCardContainer.appendChild(openingThree)
  const openingFour = document.createElement("p");
  openingFour.classList.add("contact-card-para");
  openingFour.textContent = "Sunday: 4:00 PM–9:00 PM";
  contactCardContainer.appendChild(openingFour)

  const reservationHeader = document.createElement("h3");
  reservationHeader.classList.add("reservation-card-header");
  reservationHeader.textContent = "Reservations & Inquiries";
  contactCardContainer.appendChild(reservationHeader)
  const reservationOne = document.createElement("p");
  reservationOne.classList.add("contact-card-para");
  reservationOne.textContent = "Phone: (503) 555-0148";
  contactCardContainer.appendChild(reservationOne)
  const reservationTwo = document.createElement("p");
  reservationTwo.classList.add("contact-card-para");
  reservationTwo.textContent = "Email: hello@saffronandstone.example";
  contactCardContainer.appendChild(reservationTwo)
  const reservationThree = document.createElement("p");
  reservationThree.classList.add("contact-card-para");
  reservationThree.textContent = "Call or email to request a table. For parties of six or more, please contact us in advance.";
  contactCardContainer.appendChild(reservationThree)



  contactItemsContainer.appendChild(contactCardContainer);
  contactContainer.appendChild(contactItemsContainer);
  content.appendChild(contactContainer)
})

export { contact }