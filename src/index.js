import { displayHome } from "./pages/home.js";
import { displayMenu } from "./pages/menu.js";

const navBtns = document.querySelector("nav");
const contentBody = document.querySelector("div#content");

// Initial page render
contentBody.appendChild(displayHome());

navBtns.addEventListener("click", (event) =>{
    const target = event.target;

    switch (target.id) {
        case "home":
            contentBody.innerHTML = '';
            contentBody.appendChild(displayHome());
            break;

        case "menu":
            contentBody.innerHTML = '';
            contentBody.appendChild(displayMenu());
            break;
    
        default:
            break;
    }
});

