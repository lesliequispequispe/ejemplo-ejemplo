const userNameBtn = document.getElementById('user-name-btn');
const intro = document.getElementById('intro');
const welcome = document.getElementById('welcome');
const welcomeText = document.getElementById('welcome-text');
const redWedding = document.getElementById('red-wedding');
const winterIsComing = document.getElementById('winter-is-coming');
const question11 = document.getElementById('question-11');
const question12 = document.getElementById('question-12');
const question13 = document.getElementById('question-13');
const next11 = document.getElementById('next-11');
const next12 = document.getElementById('next-12');
const resultsBtn = document.getElementById('results-btn');
const results = document.getElementById('results');
const answers = document.getElementsByClassName('okidoki');
const rightAnswers = document.getElementById('right-answers');
const winnerText = document.getElementById('winner-text');
const loserText = document.getElementById('loser-text');
const playAgain = document.getElementById('play-again');
const sam = document.getElementById('sam');

// variables animales
const pregunta1 = document.getElementById('pregunta-1');
const pregunta2 = document.getElementById('pregunta-2');
const pregunta3 = document.getElementById('pregunta-3');
const botonNext1 = document.getElementById('boton-next-1');
const botonNext2 = document.getElementById('boton-next-2');
const botonNext3 = document.getElementById('boton-next-3');
const resultsAnimals = document.getElementById('results-animals');
const playAgainAnimals = document.getElementById('play-again-animals');



// hago click en ¡Dracarys! y pasa a la segunda pantalla
// con mi nombre
userNameBtn.addEventListener('click',() => {
    const userName = document.getElementById('user-name').value;
    intro.style.display = "none";
    welcome.style.display = "block";
    document.getElementById("welcome-text").innerHTML = '¡Bienvenidx, ' + userName + '!';
})

redWedding.addEventListener('click', () => {
    welcome.style.display = "none";
    question11.style.display = "block";
})

winterIsComing.addEventListener('click', () => {
    welcome.style.display = "none";
    pregunta1.style.display = "block";

})

next11.addEventListener('click', () => {
    question11.style.display = "none";
    question12.style.display = "block";
})

next12.addEventListener('click', () => {
    question12.style.display = "none";
    question13.style.display = "block";
})

// Funcion para contar el numero de respuestas correctas

function countAnswers () {
    let amountCorrect = 0;          
    for(let i = 1; i <= 3; i++) {
        const radios = document.getElementsByName('question'+i);
        for(let j = 0; j < radios.length; j++) {
            let radio = radios[j];
            if(radio.value == "correct" && radio.checked) {
                amountCorrect++;
            }
        }
    }
    return amountCorrect;
    
}

resultsBtn.addEventListener('click', () => {
    question13.style.display = "none";
    results.style.display = "block";
    const amountCorrect = countAnswers();
    document.getElementById('right-answers').innerHTML = 'Tienes ' + amountCorrect + ' respuesta(s) correcta(s).';
    if (amountCorrect === 3) {
        document.getElementById("winner-text").innerHTML = 'Sabes más que Juan Nieve. ¡Felicidades!';
    } else {
        document.getElementById("loser-text").innerHTML = 'Lamentable. Servirás de comida a Dracarys.';
    }
    
})


playAgain.addEventListener('click', () => {
    results.style.display = "none";
    welcome.style.display = "block";
})

// botones animales
botonNext1.addEventListener('click', () => {
    pregunta1.style.display = "none";
    pregunta2.style.display = "block";
})

botonNext2.addEventListener('click', () => {
    pregunta2.style.display = "none";
    pregunta3.style.display = "block";
})

function countAnimals () {
    let amountCorrect = 0;          
    for(let i = 1; i <= 3; i++) {
        const radios = document.getElementsByName('animal-'+i);
        for(let j = 0; j < radios.length; j++) {
            let radio = radios[j];
            if(radio.value == "correct" && radio.checked) {
                amountCorrect++;
            }
        }
    }
    return amountCorrect;
    
}

botonNext3.addEventListener('click', () => {
    pregunta3.style.display = "none";
    resultsAnimals.style.display = "block";
    const amountCorrect = countAnimals();
    document.getElementById('right-answers-animals').innerHTML = 'Tienes ' + amountCorrect + ' respuesta(s) correcta(s).';
    document.getElementById("animal-text").innerHTML = '¿Quieres intentarlo otra vez?';
})

playAgainAnimals.addEventListener('click', () => {
    resultsAnimals.style.display = "none";
    welcome.style.display = "block";
})
