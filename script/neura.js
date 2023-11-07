const textToType = "The Powerful Programming Language for the Modern World, Java";
const javaTitle = document.createElement("h1");
document.body.appendChild(javaTitle);

let index = 0;
function typeText() {
    if (index < textToType.length) {
        javaTitle.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 50); // Velocidade de digitação em milissegundos
    }
}

typeText();
