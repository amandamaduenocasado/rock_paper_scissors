/* INSTRUCCIONES

- Localizar los elementos implicados del DOM
- Crear los datos del programa necesarios

FLUJO DEL PROGRAMA
 
- Detectar dónde hacemos click (Si tenéis problemas al hacer click porque detectáis cosas que no os interesan, podéis usar la propiedad "pointer-events:none" en CSS para facilitaros la vida)
- Guardar nuestra jugada
- Generar una jugada aleatoria para el ordenador y guardarla
- Comparar jugadas
- Mostrar resultado
- Asignar puntos 

SE NECESITA 

Pagina principal 
- Pagina simple 
    - Primer contenedor fijo/contador
        Dos contadores 
            Dos variables que guardan los puntos, en las que cambiará el textcontent
        Texto
    - Segundo contenedor/play "game-items"
        Tres botones 
    - Tercer contenedor/result "game-results"
        Botón play again
    - Extra contenedor/ventana modal 

- Pagina advanced
- */

/* BUTTONS */

const gameContainerElement = document.getElementById('game');
const playagainElement = document.getElementById('play-again');

/* YOUR CHOICE */
const yourChoiceElement = document.getElementById('your-choice');
const pcChoiceElement = document.getElementById('pc-choice');

/* PC CHOICE */
const chooseScissorsPcEl = document.getElementById('choose-scissors-pc');
const choosePaperPcEl = document.getElementById('choose-paper-pc');
const chooseRockPcEl = document.getElementById('choose-rock-pc');

/* POINTS */
const chooseTextEl = document.getElementById('choose-text');
const yourScoreEl = document.getElementById('your-score');
const pcScoreEl = document.getElementById('pc-score');

/* BOXES */
const startEl = document.getElementById('start');
const endEl = document.getElementById('end');

/* OBJETO CON LAS REGLAS */
const rules = {
  scissors: {
    paper: true,
    rock: false,
  },
  rock: {
    scissors: true,
    paper: false,
  },
  paper: {
    rock: true,
    scissors: false,
  },
};

/* CREATE RANDOMS RESULTS  */
let youChoice = '';
let pcPlay = '';
let pcPoints = 0;
let youPoints = 0;

/* OBJETO CON LOS ICONS PARA QUE APAREZCAN CUANDO HAGAS CLIC */
const gameIcons = {
  paper: '../assets/images/icon-paper.svg',
  rock: '../assets/images/icon-rock.svg',
  scissors: '../assets/images/icon-scissors.svg',
};

const pcHand = ['paper', 'rock', 'scissors'];

/* START! */
const showStart = () => {
  startEl.classList.remove('hidewindow');
  endEl.classList.add('hidewindow');
};

showStart();

const randomPlay = () => {
  /* GENERATE RANDOM PLAY */
  const random = Math.floor(Math.random() * pcOptions.length);
  pcPlay = pcOptions[random];
  pcChoiceElement.src = gameIcons[pcPlay];

  result();
};

const setPlayerChoice = event => {
  youChoice = event.target.dataset.item;
  yourChoiceElement.src = gameIcons[youChoice];

  console.log(youChoice);
  randomPlay();
};

/* SHOW YOUR CHOICE */
const showYouRock = () => {
  startEl.classList.add('hidewindow');
  endEl.classList.remove('hidewindow');
  choosePaperEl.classList.add('hide');
  chooseScissorsEl.classList.add('hide');
  chooseRockEl.classList.remove('hide');
  youChoice = 'rock';
  randomPlay();
};

rockButtonEl.addEventListener('click', showYouRock);

const showYouPaper = () => {
  startEl.classList.add('hidewindow');
  endEl.classList.remove('hidewindow');
  chooseRockEl.classList.add('hide');
  chooseScissorsEl.classList.add('hide');
  choosePaperEl.classList.remove('hide');
  youChoice = 'paper';
  randomPlay();
};

paperButtonEl.addEventListener('click', showYouPaper);

const showYouScissors = () => {
  startEl.classList.add('hidewindow');
  endEl.classList.remove('hidewindow');
  chooseRockEl.classList.add('hide');
  choosePaperEl.classList.add('hide');
  chooseScissorsEl.classList.remove('hide');
  youChoice = 'scissors';
  randomPlay();
};

scissorsButtonEl.addEventListener('click', showYouScissors);

/* NEXT, WE COMPARE BOTH PLAYS */
const result = () => {
  if (youChoice === pcPlay) {
    resultElement.textContent = `IT'S A TIE`;
  } else if (
    (youChoice === 'rock' && pcPlay === 'scissors') ||
    (youChoice === 'scissors' && pcPlay === 'paper') ||
    (youChoice === 'paper' && pcPlay === 'rock')
  ) {
    youPoints = youPoints + 1;
    yourScoreEl.textContent = youPoints;
    resultEl.textContent = `YOU WIN`;
  } else {
    pcPoints = pcPoints + 1;
    resultEl.textContent = `YOU LOSE`;
    pcScoreEl.textContent = pcPoints;
  }
};

/* SHOW AND HIDE BOXES */
playAgainEl.addEventListener('click', showStart);
