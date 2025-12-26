import homePizzaImg from "../assets/images/Home-img.jpg";
import varietyPizza from "../assets/images/pizza-box.png";
import freshFood from "../assets/images/fruit.png";
import flavor from "../assets/images/full.png";
import deliveryPizza from "../assets/images/delivery.png";

export function displayHome(){
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    const sectionOne = document.createElement("section");
    sectionOne.classList.add("home-section-one");

    const sectionTwo = document.createElement("section");
    sectionTwo.classList.add("home-section-two");

    // Section 1 display
    const homeImg = document.createElement("img");
    homeImg.src = homePizzaImg;

    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero-container");

    const heroTitle = document.createElement("h1");
    heroTitle.classList.add("hero-title");

    const heroParagraph = document.createElement("p");
    heroParagraph.classList.add("hero-paragraph");

    const orderNowBtn = document.createElement("button");
    orderNowBtn.classList.add("order-now-btn");

    heroTitle.textContent = "Golden Crust";
    heroParagraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra imperdiet arcu, eget placerat nulla volutpat in. 
                                Sed euismod nunc eu dolor vehicula convallis. Quisque auctor magna sed mi tincidunt egestas. 
                                Curabitur sit amet faucibus enim, eu placerat neque. Fusce vulputate mi pretium arcu aliquam, sed tincidunt risus eleifend. 
                                Maecenas finibus imperdiet massa id lacinia. Proin ullamcorper, lacus molestie ultrices efficitur, risus purus lacinia libero, id rutrum arcu sapien ac dolor. 
                                Vestibulum pellentesque dui ac purus ullamcorper, in rutrum massa porta. Morbi fermentum dolor lorem, et iaculis velit interdum at. 
                                Nulla quis velit nec dui varius sodales ac quis metus.`;
    orderNowBtn.textContent = "Order Now";

    sectionOne.appendChild(homeImg);
    sectionOne.appendChild(heroContainer);
    heroContainer.appendChild(heroTitle);
    heroContainer.appendChild(heroParagraph);
    heroContainer.appendChild(orderNowBtn);


    // Section 2 display
    const sectionTwoTitle = document.createElement("h2");
    sectionTwoTitle.classList.add("section-two-title");

    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("cards-container");

    sectionTwoTitle.textContent = "Our Strengths";
    const cardData = [
        {
            icon: varietyPizza,
            title: "Wide Variety",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum et massa id sapien ullamcorper fermentum. Suspendisse est orci, dictum et tincidunt ut, convallis tincidunt felis. 
                        Quisque non est sit amet mauris vehicula molestie quis non est.`
        },
        {
            icon: freshFood,
            title: "Fresh Ingredients",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus iaculis elit ut pretium. 
                        Suspendisse id dolor ligula. Curabitur euismod ut lectus vel ornare. Nullam consectetur est at lorem ultrices vestibulum.`
        },
        {
            icon: flavor,
            title: "Full of Flavor",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id semper nisi, non volutpat nisl. 
                        Duis ac ipsum quis turpis ultricies rhoncus. Phasellus elementum velit purus. `
        },
        {
            icon: deliveryPizza,
            title: "On Time Delivery",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus ex hendrerit tortor convallis, nec ultricies elit finibus. 
                        Praesent eu porta eros. Vestibulum tincidunt accumsan risus, ac semper dui vehicula eget. Sed eget eleifend turpis.`
        }
    ];

    cardData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");

        const iconImg = document.createElement("img");
        iconImg.classList.add("icon-img");

        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("card-title");

        const cardParagraph = document.createElement("p");
        cardParagraph.classList.add("card-paragraph");

        iconImg.src = item.icon;
        cardTitle.textContent = item.title;
        cardParagraph.textContent = item.description;

        cardHeader.appendChild(iconImg);
        cardHeader.appendChild(cardTitle);
        card.appendChild(cardHeader);
        card.appendChild(cardParagraph);
        cardsContainer.appendChild(card);

    });

    sectionTwo.appendChild(sectionTwoTitle);
    sectionTwo.appendChild(cardsContainer);

    homeContainer.appendChild(sectionOne);
    homeContainer.appendChild(sectionTwo);

    return homeContainer;
}