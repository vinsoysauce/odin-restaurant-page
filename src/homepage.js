import "./css/styles.css";
import "./css/homepage.css"
import steakImage from "./images/steak.jpg"

const home = (() => {
  const content = document.querySelector("#content")
  const container = document.createElement("div");
  container.classList.add("homepage-container")
  const description = document.createElement("div");
  description.classList.add('description')
  const header = document.createElement("h1");
  header.classList.add('homepage-header')
  header.textContent = "Steaks & Stones";
  description.appendChild(header)
  const para = document.createElement("p");
  para.classList.add('homepage-para')
  para.setAttribute('style', 'white-space: pre;');
  para.textContent = "Signature Steak served with a marble slab,\r\n"
  para.textContent += "seasonal dishes, and warm hospitality.\r\n"
  para.textContent += "Make yourself at home at our table."
  description.appendChild(para)
  container.appendChild(description);
  const image = document.createElement("img");
  image.classList.add('img')
  image.src = steakImage
  container.appendChild(image)

  content.appendChild(container)
})

export { home }

