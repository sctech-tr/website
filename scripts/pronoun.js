const pronouns = ["xe/xem", "they/them", "it/its"]; // you can change this to your pronouns

function getRandomPronoun() {
    const randomIndex = Math.floor(Math.random() * pronouns.length);
    return pronouns[randomIndex];
}

async function modifyHTMLWithPronoun() {
    const pronoun = getRandomPronoun();
    const response = await fetch(`https://en.pronouns.page/api/pronouns/${pronoun}`); // pronouns.page api
    const data = await response.json();
    const examples = data.examples;

    const pronounElement = document.getElementById("pronoun");
    if (pronounElement) {
        pronounElement.textContent = pronoun;
    }

    const examplesElement = document.getElementById("examples");
    if (examplesElement) {
        examplesElement.innerHTML = examples.map(example => `<li>${example}</li>`).join('');
    }
}

document.addEventListener("DOMContentLoaded", modifyHTMLWithPronoun);
