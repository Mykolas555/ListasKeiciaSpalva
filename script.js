// Sukurti laukelius i kuriuos vartototojas iveda srifto dydi ir spalva.
// Sie nustatymai turi buti pritaikyti kas antram li elementui.           

document.querySelector('#fontForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fontSizeValue = document.getElementById('fontSize').value;
    const fontColorValue = document.getElementById('fontColor').value;

    const liElements = document.querySelectorAll('li');

    for (let li of liElements) {
        li.style.fontSize = fontSizeValue + 'px';
        li.style.color = fontColorValue;
    }
});