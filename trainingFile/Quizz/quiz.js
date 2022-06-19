let play = document.querySelector(".start");
let question = document.querySelector(".question");
let answers = document.querySelector(".reponses");
let boutonA = document.querySelector("#A");
let boutonB = document.querySelector("#B");
let boutonC = document.querySelector("#C");
let boutonD = document.querySelector("#D");
let boutons = answers.children;
let title = document.querySelector(".title");
let para = document.querySelector("p");
let restartButton = document.querySelector(".restart");
let lossMessage = document.querySelector(".message");
let divGameOver = document.querySelector(".game-over");

// Array contenant les questions de niveau facile
let easyQuestions = [
    {
        Q: "Quelle est la capitale du Gabon?",
        Reponses: ["Libreville", "Moanda", "Ntoum", "Mouila"],
        reply: "Libreville",
    },
    {
        Q: "Dans quel département se trouve la ville de Ntoum ?",
        Reponses: ["Douya-Onoye", "Louetsi", "Le var", "Komo-Mondah"],
        reply: "Komo-Mondah",
    },
    {
        Q: "Qui fut le premier président du Gabon ?",
        Reponses: [
            "Leon Mba",
            "Ali Bongo",
            "Jean Ping",
            "Rose Francine Rogombé",
        ],
        reply: "Leon Mba",
    },
    {
        Q: "Quel parti est au pouvoir au Gabon depuis son indépendance?",
        Reponses: ["PDG", "RPG", "UN", "CLR"],
        reply: "PDG",
    },
    {
        Q: "En quelle année le président Omar BONGO est-il décédé ?",
        Reponses: ["2020", "2008", "2009", "2010"],
        reply: "2008",
    },
    {
        Q: "Quel est le plus grand fleuve du Gabon ?",
        Reponses: ["La Ngounié", "Le Ntem", "L'Ogouée", "La Nyanga"],
        reply: "L'Ogouée",
    },
    {
        Q: "Quel jour célèbre t-on la fête nationale au Gabon ?",
        Reponses: [
            "Le 31 décembre",
            "Le 12 mars",
            "Le 14 février",
            "Le 17 août",
        ],
        reply: "Le 17 août",
    },
    {
        Q: "Combien de provinces compte le Gabon ?",
        Reponses: ["8", "10", "9", "5"],
        reply: "9",
    },
    {
        Q: "Quel artiste, auteur et compositeur gabonais a chanté 'Muetse' ?",
        Reponses: ["Akendengue", "Patience", "Oliver Ngoma", "Amandine"],
        reply: "Oliver Ngoma",
    },
];
// Array contenant les questions de niveau moyen
let mediumQuestions = [];

// Array contenant les questions de niveau difficile
let hardQuestions = [];

// indices questions aléatoires
let intEasyQuestions = Math.floor(Math.random() * easyQuestions.length);
let intMediumQuestions = Math.floor(Math.random() * mediumQuestions.length);
let intHardQuestions = Math.floor(Math.random() * hardQuestions.length);

//logique fonctionnelle
const reponseA = (e) => {
    // e.target.style.backgroundColor = "orange";
    if (easyQuestions[intEasyQuestions].reply == e.target.textContent) {
        e.target.classList.add("btn-clicked");
        boutonB.disabled = true;
        boutonC.disabled = true;
        boutonD.disabled = true;
        timer();
        window.setTimeout(endOfQuestion, 5000);
        window.setTimeout(nextQuestion, 7000);
    } else {
        e.target.classList.add("btn-wrong");
        boutonB.disabled = true;
        boutonC.disabled = true;
        boutonD.disabled = true;
        window.setTimeout(gameOver, 5000);
    }
};
const reponseB = (e) => {
    // e.target.style.backgroundColor = "orange";
    if (easyQuestions[intEasyQuestions].reply == e.target.textContent) {
        e.target.classList.add("btn-clicked");
        boutonA.disabled = true;
        boutonC.disabled = true;
        boutonD.disabled = true;
        timer();
        window.setTimeout(endOfQuestion, 5000);
        window.setTimeout(nextQuestion, 7000);
    } else {
        e.target.classList.add("btn-wrong");
        boutonA.disabled = true;
        boutonC.disabled = true;
        boutonD.disabled = true;
        window.setTimeout(gameOver, 5000);
    }
};
const reponseC = (e) => {
    if (easyQuestions[intEasyQuestions].reply == e.target.textContent) {
        e.target.classList.add("btn-clicked");
        boutonB.disabled = true;
        boutonA.disabled = true;
        boutonD.disabled = true;
        timer();
        window.setTimeout(endOfQuestion, 5000);
        window.setTimeout(nextQuestion, 7000);
    } else {
        e.target.classList.add("btn-wrong");
        boutonB.disabled = true;
        boutonA.disabled = true;
        boutonD.disabled = true;
        window.setTimeout(gameOver, 5000);
    }
};
const reponseD = (e) => {
    if (easyQuestions[intEasyQuestions].reply == e.target.textContent) {
        e.target.classList.add("btn-clicked");
        boutonB.disabled = true;
        boutonC.disabled = true;
        boutonA.disabled = true;
        timer();
        window.setTimeout(endOfQuestion, 5000);
        window.setTimeout(nextQuestion, 7000);
    } else {
        e.target.classList.add("btn-wrong");
        boutonB.disabled = true;
        boutonC.disabled = true;
        boutonA.disabled = true;
        window.setTimeout(gameOver, 5000);
    }
};
function timer() {
    setTimeout(() => {
        e.target.style.backgroundColor = "green";
    }, 4000);
}

const endOfQuestion = () => {
    easyQuestions.splice(intEasyQuestions, 1);
    question.textContent = "";
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].textContent = "";
        boutons[i].classList.remove("btn-clicked");
    }
    intEasyQuestions = null;
    question.style.visibility = "hidden";
    answers.style.visibility = "hidden";
};

//Jeu terminé
const gameOver = () => {
    divGameOver.style.display = "grid";
    question.style.visibility = "hidden";
    answers.style.visibility = "hidden";
    lossMessage.textContent = "GAME OVER !!!";
    restartButton.style.display = "block";
};
// Recharger la page
const restart = () => {
    window.location.reload();
    return false;
};
// Appeler la question suivante
const nextQuestion = () => {
    clearTimeout(timer, 4500);
    intEasyQuestions = Math.floor(Math.random() * easyQuestions.length);
    question.textContent = easyQuestions[intEasyQuestions].Q;
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].textContent += easyQuestions[intEasyQuestions].Reponses[i];
        boutons[i].disabled = false;
    }
    question.style.display = "block";
    answers.style.display = "grid";
    question.style.visibility = "visible";
    answers.style.visibility = "visible";
};

const commencer = () => {
    title.style.display = "none";
    para.style.display = "none";
    play.style.visibility = "hidden";
    question.classList.add("question-start");
    answers.classList.add("reponses-start");
    question.textContent = easyQuestions[intEasyQuestions].Q;
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].textContent += easyQuestions[intEasyQuestions].Reponses[i];
    }
};
// //les click events

play.addEventListener("click", commencer);
boutonA.addEventListener("click", reponseA);
boutonB.addEventListener("click", reponseB);
boutonC.addEventListener("click", reponseC);
boutonD.addEventListener("click", reponseD);
restartButton.addEventListener("click", restart);
