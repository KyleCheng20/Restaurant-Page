import aboutImg from "../assets/images/About-img.jpg";

export function displayAbout(){
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const img = document.createElement("img");
    img.src = aboutImg;

    const aboutInfo = document.createElement("div");
    aboutInfo.classList.add("about-info");

    const aboutHeader = document.createElement("h2");
    aboutHeader.classList.add("about-header");
    aboutHeader.textContent = "Our Story";

    const paragraphOne = document.createElement("p");
    paragraphOne.classList.add("paragraph-one");
    paragraphOne.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis arcu ac iaculis semper. 
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla in diam lobortis, euismod nulla a, dapibus ex. 
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam faucibus purus at cursus pellentesque. 
                                Suspendisse consectetur purus sit amet felis lobortis, eget gravida nunc bibendum. Curabitur efficitur luctus enim, ut blandit magna pretium eu. 
                                Nam volutpat venenatis urna tincidunt facilisis. Aenean ut urna eu turpis accumsan tincidunt vitae id quam.`;

    const paragraphTwo = document.createElement("p");
    paragraphTwo.classList.add("paragraph-two");
    paragraphTwo.textContent = `Mauris auctor sapien in eros blandit, vitae porttitor urna pretium. Sed feugiat nec justo et maximus. 
                                Nunc sit amet ultricies ipsum. Nullam semper gravida diam, ac auctor sem hendrerit et. Donec aliquam lacus in iaculis varius. 
                                Praesent imperdiet sapien vel dui mattis tincidunt. Pellentesque luctus purus diam, sit amet tristique quam tempus pellentesque.
                                Vivamus vel metus in lectus auctor fringilla vitae nec dolor. Vestibulum scelerisque ante eu nisl bibendum tempus. 
                                Phasellus sodales, mauris at aliquam bibendum, velit dolor lacinia tellus, et vestibulum eros lacus eget justo. 
                                Integer eget magna in tellus faucibus blandit at ut turpis. 
                                Donec fermentum, ligula vitae rhoncus porttitor, nibh massa sagittis purus, at semper erat nisi ac mi. 
                                Maecenas ut nisi tempor, aliquet est at, gravida leo. Mauris venenatis fermentum nisi, id auctor ex tempor vitae. 
                                Aenean viverra lacus convallis risus bibendum accumsan. Pellentesque eget ultrices enim, eu maximus erat.`;

    aboutInfo.append(aboutHeader, paragraphOne, paragraphTwo);
    aboutContainer.append(img, aboutInfo);

    return aboutContainer;
}