import "./styles.css";
import steakImage from "./images/steak.jpg"

const home = (() => {
  const container = document.querySelector("#content")
  const description = document.createElement("div");
  description.classList.add('description')
  const header = document.createElement("h1");
  header.textContent = "Steaks & Stones";
  description.appendChild(header)
  const para = document.createElement("p");
  para.textContent = `Signature Steak served with a marble plate,
  seasonal dishes, and warm hospitality. Make yourself at home at our table.`
  description.appendChild(para)
  const image = document.createElement("img");
  image.classList.add('img')
  image.src = steakImage
  container.appendChild(image)
  container.appendChild(description)
})

export { home }

