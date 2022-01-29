document.body.style.background = "rgb(16, 23, 61)";


const wrapper = document.createElement("div");
wrapper.id = "wrapper";
document.body.append(wrapper);
wrapper.style.backgroundColor = "#09323D";
wrapper.style.width = "360px";
wrapper.style.fontFamily = "Outfit";
wrapper.style.borderRadius = "15px";
wrapper.style.height = "580px";
wrapper.style.margin = "auto";
wrapper.style.marginTop = "100px";
wrapper.style.marginBottom = "100px";
 
const image = document.createElement("img");
wrapper.append(image);
image.setAttribute("src", "image.jpg");
image.style.width = "300px";
image.style.heigth = "300px";
image.style.marginLeft = "20px";
image.style.borderRadius = "10px";
image.style.marginTop = "20px";



const title = document.createElement("a");
title.href = "#";
wrapper.append(title);
title.innerText = "Equilibrium #3429";
title.style.color = "#fff";
title.style.fontFamily = "Outfit";
title.style.fontSize = "25px";
title.style.marginLeft = "20px";
title.style.fontWeight = "700";
title.style.textDecoration = "none";
title.style.display = "Block";
title.style.marginTop = "20px";



const link = document.createElement("p");
wrapper.append(link);
link.innerText = "Our Equilibrium collection promotes balance and calm";
link.style.fontFamily = "Outfit";
link.style.color = "hsl(215, 32%, 35%)";
link.style.fontSize = "18px";
link.style.fontWeight = "600";
link.style.marginLeft = "20px";



const innerWrapper = document.createElement("ul");
wrapper.append(innerWrapper);
innerWrapper.className = "innerWrapper";
innerWrapper.style.display = "flex";
innerWrapper.style.justifyContent = "space-around";
innerWrapper.style.listStyle = "none";



const innerItem = document.createElement("li");
innerWrapper.append(innerItem);
innerItem.innerText = "0.041ETH";
innerItem.style.color = "hsl(178, 100%, 50%)";
innerItem.style.fontSize = "15px";
innerItem.style.fontFamily = "Outfit";
innerItem.style.fontWeight = "700";
innerItem.style.marginLeft = "-55px";



const img = document.createElement("img");
img.setAttribute("src", "");
innerItem.append(img);
img.style.position = "absolute";
img.style.top = "567px";
img.style.left = "480px";

const innerItem2 = document.createElement("li");
innerWrapper.append(innerItem2);
innerItem2.innerText = "3 days left";
innerItem2.style.fontSize = "15px";
innerItem2.style.fontFamily = "Outfit";
innerItem2.style.fontWeight = "500";
innerItem2.style.color = "hsl(215, 51%, 70%)";



const img2 = document.createElement("img");
img2.setAttribute("src", "images.jpeg");
innerItem2.append(img2);
img2.style.position = "absolute";
img2.style.top = "567px";
img2.style.left = "658px";

const avatar = document.createElement("img");
wrapper.append(avatar);
avatar.setAttribute("src", " images/image.png");
avatar.style.width = "40px";
avatar.style.border = "1.5px solid white";
avatar.style.borderRadius = "50%";
avatar.style.marginLeft = "25px";
avatar.style.marginTop = "12px";


const footer= document.createElement("span");
wrapper.append(footer);
footerSpan.innerText = "Creation of";
footerSpan.style.color = "hsl(215, 51%, 40%)";
footerSpan.style.fontWeigth = "bold";
footerSpan.style.fontSize = "18px";
footerSpan.style.fontFamily = "Outfit";
footerSpan.style.marginLeft = "75px";
footerSpan.style.display = "block";
footerSpan.style.marginTop = "-32px";


const strong = document.createElement("strong");
footer.appendChild(strong);
strong.innerText = "Jules Wyvern";
strong.style.marginLeft = "8px";
strong.style.color = "white";
strong.style.fontWeight = "500";



alert("Я оцениваю свою работу на 90баллов");
