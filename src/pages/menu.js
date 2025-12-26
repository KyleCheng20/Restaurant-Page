import supremePizza from "../assets/images/Supreme-pizza.jpg";
import margheritaPizza from "../assets/images/Margherita-pizza.jpg";
import hawaiianPizza from "../assets/images/Hawaiian-pizza.jpg";
import deepDishPizza from "../assets/images/Chicago-deep-dish-pizza.jpg";
import macAndCheese from "../assets/images/Mac-and-Cheese-.jpg";
import mozzarellaSticks from "../assets/images/Mozzarella-Sticks.jpg";
import buffaloWings from "../assets/images/Buffalo-wings.jpg";
import breadSticks from "../assets/images/Garlic-bread-sticks.jpg";

export function displayMenu(){
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const sectionOne = document.createElement("section");
    sectionOne.classList.add("menu-section-one");

    const sectionTwo = document.createElement("section");
    sectionTwo.classList.add("menu-section-two");

    function createMenuCard({image, name, price, description}){
        const card = document.createElement("div");
        card.classList.add("menu-card");

        const img = document.createElement("img");
        img.src = image;
        img.alt = name;

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");

        const cardInfoTop = document.createElement("div");
        cardInfoTop.classList.add("card-info-top");

        const cardInfoBottom = document.createElement("div");
        cardInfoBottom.classList.add("card-info-bottom");

        // Card info top
        const itemName = document.createElement("p");
        itemName.classList.add("item-name");
        itemName.textContent = name;

        const itemPrice = document.createElement("span");
        itemPrice.classList.add("item-price");
        itemPrice.textContent = price;

        // Card info bottom
        const itemDescription = document.createElement("p");
        itemDescription.classList.add("item-description");
        itemDescription.textContent = description;

        const itemOrderBtn = document.createElement("button");
        itemOrderBtn.classList.add("item-order-btn");
        itemOrderBtn.textContent = "Order Now";

        cardInfoTop.append(itemName, itemPrice);
        cardInfoBottom.append(itemDescription, itemOrderBtn);

        cardInfo.append(cardInfoTop, cardInfoBottom);

        card.append(img, cardInfo);

        return card;
    }

    // Section 1 display
    const pizzaCardsContainer = document.createElement("div");
    pizzaCardsContainer.classList.add("pizza-cards-container");

    const pizzaHeading = document.createElement("h2");
    pizzaHeading.classList.add("pizza-heading");
    pizzaHeading.textContent = "Specialty Pizzas";

    const pizzaData = [
        {
            image: supremePizza,
            name: "Supreme Pizza",
            price: "$17.00",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lacus at lacinia fermentum.
                        Nunc placerat nunc in mauris tincidunt vestibulum. 
                        Vestibulum tortor dolor, finibus eu metus quis, hendrerit condimentum purus.`
        },
        {
            image: margheritaPizza,
            name: "Margherita Pizza",
            price: "$18.00",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a consequat magna. 
                        Sed finibus tortor ut mollis mollis. Fusce luctus nibh felis, in placerat nisi fringilla.`
        },
        {
            image: hawaiianPizza,
            name: "Hawaiian Pizza",
            price: "$16.00",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus eget tortor non mauris luctus aliquam. Etiam at massa eu arcu gravida imperdiet. 
                        Duis metus metus, tincidunt ullamcorper elit quis, lobortis bibendum augue.`
        },
        {
            image: deepDishPizza,
            name: "Chicago Deep Dish Pizza",
            price: "$17.00",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac luctus libero. 
                        Nam dui urna, mattis convallis placerat id, tristique ac felis. Nullam fringilla orci lacus. 
                        Vivamus quis tortor enim. Phasellus laoreet porta metus, vel mollis mauris venenatis eu.`
        },
    ];

    pizzaData.forEach(pizza => {
        const pizzaCard = createMenuCard(pizza);
        pizzaCardsContainer.appendChild(pizzaCard);
    });

    sectionOne.append(pizzaHeading, pizzaCardsContainer);


    // Section 2 display
    const sidesCardsContainer = document.createElement("div");
    sidesCardsContainer.classList.add("sides-cards-container");

    const sidesHeading = document.createElement("h2");
    sidesHeading.classList.add("sides-heading");
    sidesHeading.textContent = "Sides";

    const sidesData = [
        {
            image: macAndCheese,
            name: "Mac and Cheese",
            price: "$4.00",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet urna ac mi laoreet fermentum. 
                        Nam tincidunt in quam at mattis. Praesent vel diam erat. Nam placerat faucibus sollicitudin.`
        },
        {
            image: mozzarellaSticks,
            name: "Mozzarella Sticks",
            price: "$4.00",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor nibh sed lectus molestie tempor eget sed eros. 
                        Mauris vitae efficitur tellus.`
        },
        {
            image: buffaloWings,
            name: "Buffalo Wings",
            price: "$8.00",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie suscipit tristique. Mauris mollis pretium sem porta ultrices. 
                        Nunc gravida massa ac elementum scelerisque. Nullam mollis non lacus id ultricies.`
        },
        {
            image: breadSticks,
            name: "Garlic Bread Sticks",
            price: "$5.00",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec facilisis enim. 
                        Integer ultricies rhoncus eros pellentesque pretium. Proin rutrum, arcu sed mattis dignissim, erat justo ornare purus.`
        },
    ];

    sidesData.forEach(side => {
        const sideCard = createMenuCard(side);
        sidesCardsContainer.appendChild(sideCard);
    });

    sectionTwo.append(sidesHeading, sidesCardsContainer);

    menuContainer.append(sectionOne, sectionTwo);

    return menuContainer;
}