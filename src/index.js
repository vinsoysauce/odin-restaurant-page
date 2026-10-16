import "./styles.css";
import steakImage from "./images/steak.jpg"

console.log('hello')

export const content = (() => {
  const container = document.querySelector("#content")
  const description = document.createElement("div");
  description.classList.add('description')
  const header = document.createElement("h1");
  header.textContent = "Steaks & Stones";
  description.appendChild(header)
  const para = document.createElement("p");
  para.textContent = `
  Seasonal dishes, thoughtful details, 
  and warm hospitality. Make yourself at home 
  at our table 
  `
  description.appendChild(para)
  const image = document.createElement("img");
  image.classList.add('img')
  image.src = steakImage
  container.appendChild(image)
  container.appendChild(description)
})

content()


        // <!-- <div class="description">
        // <h1>Steaks & Stones</h1>
        // <p>Seasonal dishes, thoughtful details, </p>
        // <p>and warm hospitality. Make yourself at home</p>
        // <p>at our table</p>
        // </div>
        // <img src="/src/images/steak.jpg"> --></img>