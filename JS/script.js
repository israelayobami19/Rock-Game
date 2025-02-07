setTimeout(() => {
    document.body.classList.remove("preload");
}, 500);

const btnRules = document.querySelector('.rules_btn');
const btnClose = document.querySelector('.close_btn');
const modalRules = document.querySelector('modal');


const CHOICES = [
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    },
    {
        name: "rock",
        beats: "scissors"
    }
]

const choiceButtons = document.querySelectorAll('.choice_btn');
const gameDiv = document.querySelector('.game');
const resultDiv = document.querySelector('.results');
const resultDivs = document.querySelectorAll('.results_result');

const resultWinner = document.querySelector('.results_winner');
const resultText = document.querySelector('.results_text');

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const choiceName = button.dataset.choice;
        const choice = CHOICES.find(choice => choice.name == choiceName)
        choose(choice)
    })
})

function choose(choice) {
    const aichoice = aiChoose();
    displayResults([choice,aichoice]);
    displayWinner([choice,aichoice]);
}

function aiChoose() {
    const rand = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[rand]
}

function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
        setTimeout(() => {
            resultDiv.innerHTML ='<div class="choice ${results[idx].name}"><img src="IMG/icon-${results[idx].name}.svg" alt="${results[idx].name}" /></div>'
        }, idx * 1000) ;
    });

    gameDiv.classList.toggle("hidden")
    resultDiv.classList.toggle("hidden")
}

function displayWinner(results) {
    setTimeout(() => {
        const userWins = isWinner(results)
        const aiWins = isWinner(results.reverse());

        if(userWins) {
            resultText.innerText = "you win"
        } else if(aiWins) {
            resultText.innerText = "you lose"
        } else {
            resultText.innerText = "draw" 
        }
        resultWinner.classList.toggle('hidden');
        resultDiv.classList.toggle('show-winner');
    }, 1000);

}

function isWinner(results) {
    return results[0].beats == results[1].name;
}

btnRules.addEventListener('click', ()=> {
    modalRules.classList.toggle('show_modal')
})

btnClose.addEventListener('click', ()=> {
    modalRules.classList.toggle('show_modal')
})