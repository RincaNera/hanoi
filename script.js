const WIDTH = 800;
const HEIGHT = 600;
const X_OFFSET = 30;
const Y_OFFSET = 30;
const SVGNS = "http://www.w3.org/2000/svg";

let canvas = document.getElementById('towers');

/**
 * Dessine des palets.
 * @param {*} tower Le numéro de la tour de 0 à 2
 * @param {*} position La position du palet sur la tour à partir de 0
 * @param {*} taille La taille du pallet à partir de 1
 * @param {*} tour Le numéro du tour en cours, à partir de 0
 */
function createPalet(tower, position, taille, tour, nb) {
    let palet = document.createElementNS(SVGNS, 'rect');
    let width = WIDTH / 3 / nbPalets * taille;
    let height = HEIGHT / nbPalets;
    palet.setAttribute('width', width);
    palet.setAttribute('height', height);
    palet.setAttribute('fill', 'red');
    // WIDTH / 3 * tower => Position au début de la tour
    // (WIDTH / 3 - width) / 2 => Décalage pour centrer le palet
    // X_OFFSET * tower => Décalage lié à l'espacement entre les tours (tower)
    palet.setAttribute('x', (WIDTH / 3 * tower + (WIDTH / 3 - width) / 2 + X_OFFSET * tower));
    // HEIGHT * (tour + 1) => Position en bas de la tour
    // height * (nb - position) => Positionnement sur la tour
    // Y_OFFSET * tour => Décalage lié à l'espacement entre les tours de jeu
    palet.setAttribute('y', HEIGHT * (tour + 1) - height * (nb - position) + Y_OFFSET * tour);
    canvas.appendChild(palet);
}

/**
 * Dessine des tours.
 * @param {*} tower Le numéro de la tour à partir de 0
 * @param {*} tour Le numéro du tour en cours, à partir de 0
 */
function drawTower(tower, tour) {
    let width = 30;
    let towerElement = document.createElementNS(SVGNS, 'rect');
    towerElement.setAttribute('width', width);
    towerElement.setAttribute('height', HEIGHT);
    towerElement.setAttribute('fill', 'black');
    towerElement.setAttribute('x', ((WIDTH / 3) * tower + (WIDTH / 3) / 2 - width / 2) + X_OFFSET * (tower));
    towerElement.setAttribute('y', HEIGHT * tour + Y_OFFSET * tour);
    canvas.appendChild(towerElement);
}

/**
 * Affiche le numéro du tour.
 * @param {*} tour Le numéro du tour à afficher
 */
function drawTourNumber(tour) {
    let textElement = document.createElementNS(SVGNS, 'text');
    textElement.setAttribute('width', 65);
    textElement.setAttribute('height', 35);
    textElement.setAttribute('x', WIDTH + 100);
    textElement.setAttribute('y', HEIGHT * tour + Y_OFFSET * tour + HEIGHT / 2);
    textElement.textContent = 'TOUR ' + tour;
    canvas.appendChild(textElement);
}

/**
 * Affiche un tour de jeu
 * @param {*} tour Le numéro du tour
 */
function playTour(tour) {
    for (let j = 0; j < 3; j++) {
        drawTower(j, tour);
    }
    tab1.forEach((palet, j) => {
        createPalet(0, j, palet, tour, tab1.length);
    });
    tab2.forEach((palet, j) => {
        createPalet(1, j, palet, tour, tab2.length);
    });
    tab3.forEach((palet, j) => {
        createPalet(2, j, palet, tour, tab3.length);
    });
    drawTourNumber(tour);
    canvas.setAttribute('height', (HEIGHT + Y_OFFSET) * (tour + 1));
}

let nbPalets = parseInt(prompt("Nombre de Palets"));

let tab1 = [];
let tab2 = [];
let tab3 = [];

let tourJoue = 0;

function initialize(x) {
    for (let i = 1; i <= x; i++) {
        tab1.push(i)
    }
}

function hanoi(n, tourSource, tourPivot, tourDestination) {
    if (n > 0) {
        hanoi(n - 1, tourSource, tourDestination, tourPivot);
        playTour(tourJoue);
        tourJoue++;
        moveToTab(tourSource, tourDestination)
        console.log( `coup ${tourJoue} : Palet ${n} de  ` + tourSource + " vers " + tourDestination);
        hanoi(n - 1, tourPivot, tourSource, tourDestination);
    }
}

function moveToTab(tabA, tabB) {
    let temp = tabA[0];
    tabA.shift();
    tabB.splice(0, 0, temp)
}

initialize(nbPalets);

hanoi(nbPalets, tab1, tab2, tab3);
playTour(tourJoue);
