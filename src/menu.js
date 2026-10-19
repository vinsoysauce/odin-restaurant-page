import "./css/styles.css";
import "./css/menu.css";



const menu = (() => {
  const content = document.querySelector("#content")
  const container = document.createElement("div");
  const headerContainer = document.createElement("div");
  container.classList.add("menu-container")
  headerContainer.classList.add("header-container")
  const header = document.createElement("h1");
  header.classList.add("menu-header");
  header.textContent = "Our Menu"
  headerContainer.appendChild(header)
  const menuHeaderPara = document.createElement("p");
  menuHeaderPara.classList.add("menu-header-para");
  menuHeaderPara.setAttribute('style', 'white-space: pre;');
  menuHeaderPara.textContent = "Something to share, something to savor. Explore our kitchen's favorites, \r\n"
  menuHeaderPara.textContent += "from the first bite to the last sip."
  headerContainer.appendChild(menuHeaderPara);
  container.appendChild(headerContainer)

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("menu-items-container");
  const columnOneItems = document.createElement("div");
  const columnTwoItems = document.createElement("div");
  columnTwoItems.classList.add("column-two-items");
  columnOneItems.classList.add("column-one-items");

  
  const appetizers = document.createElement("h2");
  appetizers.classList.add("menu-cat-header");
  appetizers.textContent = "Appetizers";
  columnOneItems.appendChild(appetizers);
  const appContainerOne = document.createElement("div");
  appContainerOne.classList.add("appContainer")
  const appPriceContainerOne = document.createElement("div");
  appPriceContainerOne.classList.add("food-price-container");
  const appOneItem = document.createElement("p");
  appOneItem.classList.add("food-item-header");
  appOneItem.textContent = "Tomato Bruschetta";
  const appOnePrice = document.createElement("p");
  appOnePrice.classList.add('price');
  appOnePrice.textContent = "$12";
  appPriceContainerOne.appendChild(appOneItem);
  appPriceContainerOne.appendChild(appOnePrice);
  appContainerOne.appendChild(appPriceContainerOne);
  const appDescOne = document.createElement("p");
  appDescOne.classList.add("food-description");
  appDescOne.textContent = "Grilled sourdough, cherry tomatoes, fresh basil, garlic, and extra virgin olive oil."
  appContainerOne.appendChild(appDescOne)
  columnOneItems.appendChild(appContainerOne)

  const appContainerTwo = document.createElement("div");
  appContainerTwo.classList.add("foodContainer")
  const appPriceContainerTwo = document.createElement("div");
  appPriceContainerTwo.classList.add("food-price-container");
  const appTwoItem = document.createElement("p");
  appTwoItem.classList.add("food-item-header");
  appTwoItem.textContent = "Buratta & Peaches";
  const appTwoPrice = document.createElement("p");
  appTwoPrice.classList.add('price');
  appTwoPrice.textContent = "$16";
  appPriceContainerTwo.appendChild(appTwoItem);
  appPriceContainerTwo.appendChild(appTwoPrice);
  appContainerTwo.appendChild(appPriceContainerTwo);
  const appDescTwo = document.createElement("p");
  appDescTwo.classList.add("food-description");
  appDescTwo.textContent = "Creamy burrata, grilled peaches, arugula, toasted almonds, and balsamic glaze."
  appContainerTwo.appendChild(appDescTwo)
  columnOneItems.appendChild(appContainerTwo)

  const appContainerThree = document.createElement("div");
  appContainerThree.classList.add("foodContainer")
  const appPriceContainerThree = document.createElement("div");
  appPriceContainerThree.classList.add("food-price-container");
  const appThreeItem = document.createElement("p");
  appThreeItem.classList.add("food-item-header");
  appThreeItem.textContent = "Crispy Calamari";
  const appThreePrice = document.createElement("p");
  appThreePrice.classList.add('price');
  appThreePrice.textContent = "$15";
  appPriceContainerThree.appendChild(appThreeItem);
  appPriceContainerThree.appendChild(appThreePrice);
  appContainerThree.appendChild(appPriceContainerThree);
  const appDescThree = document.createElement("p");
  appDescThree.classList.add("food-description");
  appDescThree.textContent = "Lightly fried calamari, lemon, parsley, and house-made garlic aioli."
  appContainerThree.appendChild(appDescThree)
  columnOneItems.appendChild(appContainerThree)

  const desserts = document.createElement("h2");
  desserts.classList.add("menu-cat-header");
  desserts.textContent = "Desserts";
  columnOneItems.appendChild(desserts);
  const dessContainerOne = document.createElement("div");
  dessContainerOne.classList.add("foodContainer")
  const dessPriceContainerOne = document.createElement("div");
  dessPriceContainerOne.classList.add("food-price-container");
  const dessOneItem = document.createElement("p");
  dessOneItem.classList.add("food-item-header");
  dessOneItem.textContent = "Classic Tiramisu";
  const dessOnePrice = document.createElement("p");
  dessOnePrice.classList.add('price');
  dessOnePrice.textContent = "$11";
  dessPriceContainerOne.appendChild(dessOneItem);
  dessPriceContainerOne.appendChild(dessOnePrice);
  dessContainerOne.appendChild(dessPriceContainerOne);
  const dessDescOne = document.createElement("p");
  dessDescOne.classList.add("food-description");
  dessDescOne.textContent = "Espresso-soaked ladyfingers, mascarpone cream, and a dusting of cocoa."
  dessContainerOne.appendChild(dessDescOne)
  columnOneItems.appendChild(dessContainerOne)

  const dessContainerTwo = document.createElement("div");
  dessContainerTwo.classList.add("foodContainer")
  const dessPriceContainerTwo = document.createElement("div");
  dessPriceContainerTwo.classList.add("food-price-container");
  const dessTwoItem = document.createElement("p");
  dessTwoItem.classList.add("food-item-header");
  dessTwoItem.textContent = "Lemon Tart";
  const dessTwoPrice = document.createElement("p");
  dessTwoPrice.classList.add('price');
  dessTwoPrice.textContent = "$10";
  dessPriceContainerTwo.appendChild(dessTwoItem);
  dessPriceContainerTwo.appendChild(dessTwoPrice);
  dessContainerTwo.appendChild(dessPriceContainerTwo);
  const dessDescTwo = document.createElement("p");
  dessDescTwo.classList.add("food-description");
  dessDescTwo.textContent = "Buttery pastry, fresh lemon curd, vanilla cream, and seasonal berries."
  dessContainerTwo.appendChild(dessDescTwo)
  columnOneItems.appendChild(dessContainerTwo)

  const dessContainerThree = document.createElement("div");
  dessContainerThree.classList.add("foodContainer")
  const dessPriceContainerThree = document.createElement("div");
  dessPriceContainerThree.classList.add("food-price-container");
  const dessThreeItem = document.createElement("p");
  dessThreeItem.classList.add("food-item-header");
  dessThreeItem.textContent = "Chocolate Mousse";
  const dessThreePrice = document.createElement("p");
  dessThreePrice.classList.add('price');
  dessThreePrice.textContent = "$10";
  dessPriceContainerThree.appendChild(dessThreeItem);
  dessPriceContainerThree.appendChild(dessThreePrice);
  dessContainerThree.appendChild(dessPriceContainerThree);
  const dessDescThree = document.createElement("p");
  dessDescThree.classList.add("food-description");
  dessDescThree.textContent = "Dark chocolate mousse, whipped cream, and shaved chocolate."
  dessContainerThree.appendChild(dessDescThree)
  columnOneItems.appendChild(dessContainerThree)

  const main = document.createElement("h2");
  main.classList.add("menu-cat-header");
  main.textContent = "Main Course";
  columnTwoItems.appendChild(main);
  const mainContainerOne = document.createElement("div");
  mainContainerOne.classList.add("foodContainer")
  const mainPriceContainerOne = document.createElement("div");
  mainPriceContainerOne.classList.add("food-price-container");
  const mainOneItem = document.createElement("p");
  mainOneItem.classList.add("food-item-header");
  mainOneItem.textContent = "Signature Steak";
  const mainOnePrice = document.createElement("p");
  mainOnePrice.classList.add('price');
  mainOnePrice.textContent = "$32";
  mainPriceContainerOne.appendChild(mainOneItem);
  mainPriceContainerOne.appendChild(mainOnePrice);
  mainContainerOne.appendChild(mainPriceContainerOne);
  const mainDescOne = document.createElement("p");
  mainDescOne.classList.add("food-description");
  mainDescOne.textContent = "Angus Steak, colared greens, criss cut potatoes, asparagus, and extra virgin olive oil."
  mainContainerOne.appendChild(mainDescOne)
  columnTwoItems.appendChild(mainContainerOne)

  const mainContainerTwo = document.createElement("div");
  mainContainerTwo.classList.add("foodContainer")
  const mainPriceContainerTwo = document.createElement("div");
  mainPriceContainerTwo.classList.add("food-price-container");
  const mainTwoItem = document.createElement("p");
  mainTwoItem.classList.add("food-item-header");
  mainTwoItem.textContent = "Herb-Roasted Chicken";
  const mainTwoPrice = document.createElement("p");
  mainTwoPrice.classList.add('price');
  mainTwoPrice.textContent = "$26";
  mainPriceContainerTwo.appendChild(mainTwoItem);
  mainPriceContainerTwo.appendChild(mainTwoPrice);
  mainContainerTwo.appendChild(mainPriceContainerTwo);
  const mainDescTwo = document.createElement("p");
  mainDescTwo.classList.add("food-description");
  mainDescTwo.textContent = "Rosemary chicken, gravy dip, buttery mashed potatoes, seasonal vegetables, and pan jus."
  mainContainerTwo.appendChild(mainDescTwo)
  columnTwoItems.appendChild(mainContainerTwo)

  const mainContainerThree = document.createElement("div");
  mainContainerThree.classList.add("foodContainer")
  const mainPriceContainerThree = document.createElement("div");
  mainPriceContainerThree.classList.add("food-price-container");
  const mainThreeItem = document.createElement("p");
  mainThreeItem.classList.add("food-item-header");
  mainThreeItem.textContent = "Grilled Atlantic Salmon";
  const mainThreePrice = document.createElement("p");
  mainThreePrice.classList.add('price');
  mainThreePrice.textContent = "$28";
  mainPriceContainerThree.appendChild(mainThreeItem);
  mainPriceContainerThree.appendChild(mainThreePrice);
  mainContainerThree.appendChild(mainPriceContainerThree);
  const mainDescThree = document.createElement("p");
  mainDescThree.classList.add("food-description");
  mainDescThree.textContent = "Salmon fillet, lemon couscous, asparagus, and a citrus butter sauce."
  mainContainerThree.appendChild(mainDescThree)
  columnTwoItems.appendChild(mainContainerThree)

  const beverage = document.createElement("h2");
  beverage.classList.add("menu-cat-header");
  beverage.textContent = "Beverage";
  columnTwoItems.appendChild(beverage);
  const bevContainerOne = document.createElement("div");
  bevContainerOne.classList.add("foodContainer")
  const bevPriceContainerOne = document.createElement("div");
  bevPriceContainerOne.classList.add("food-price-container");
  const bevOneItem = document.createElement("p");
  bevOneItem.classList.add("food-item-header");
  bevOneItem.textContent = "Rosemary Lemonade";
  const bevOnePrice = document.createElement("p");
  bevOnePrice.classList.add('price');
  bevOnePrice.textContent = "$7";
  bevPriceContainerOne.appendChild(bevOneItem);
  bevPriceContainerOne.appendChild(bevOnePrice);
  bevContainerOne.appendChild(bevPriceContainerOne);
  const bevDescOne = document.createElement("p");
  bevDescOne.classList.add("food-description");
  bevDescOne.textContent = "Fresh lemon juice, rosemary syrup, sparkling water, and ice."
  bevContainerOne.appendChild(bevDescOne)
  columnTwoItems.appendChild(bevContainerOne)

  const bevContainerTwo = document.createElement("div");
  bevContainerTwo.classList.add("foodContainer")
  const bevPriceContainerTwo = document.createElement("div");
  bevPriceContainerTwo.classList.add("food-price-container");
  const bevTwoItem = document.createElement("p");
  bevTwoItem.classList.add("food-item-header");
  bevTwoItem.textContent = "Peach Iced Tea";
  const bevTwoPrice = document.createElement("p");
  bevTwoPrice.classList.add('price');
  bevTwoPrice.textContent = "$6";
  bevPriceContainerTwo.appendChild(bevTwoItem);
  bevPriceContainerTwo.appendChild(bevTwoPrice);
  bevContainerTwo.appendChild(bevPriceContainerTwo);
  const bevDescTwo = document.createElement("p");
  bevDescTwo.classList.add("food-description");
  bevDescTwo.textContent = "Freshly brewed black tea, peach purée, and mint."
  bevContainerTwo.appendChild(bevDescTwo)
  columnTwoItems.appendChild(bevContainerTwo)

  const bevContainerThree = document.createElement("div");
  bevContainerThree.classList.add("foodContainer")
  const bevPriceContainerThree = document.createElement("div");
  bevPriceContainerThree.classList.add("food-price-container");
  const bevThreeItem = document.createElement("p");
  bevThreeItem.classList.add("food-item-header");
  bevThreeItem.textContent = "Vanilla Latte";
  const bevThreePrice = document.createElement("p");
  bevThreePrice.classList.add('price');
  bevThreePrice.textContent = "$6";
  bevPriceContainerThree.appendChild(bevThreeItem);
  bevPriceContainerThree.appendChild(bevThreePrice);
  bevContainerThree.appendChild(bevPriceContainerThree);
  const bevDescThree = document.createElement("p");
  bevDescThree.classList.add("food-description");
  bevDescThree.textContent = "Double espresso, steamed milk, and vanilla syrup."
  bevContainerThree.appendChild(bevDescThree)
  columnTwoItems.appendChild(bevContainerThree)
  

  menuItemsContainer.appendChild(columnOneItems);
  menuItemsContainer.appendChild(columnTwoItems);
  container.appendChild(menuItemsContainer);
  content.appendChild(container)
})

export { menu }