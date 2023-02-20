/**
 * Initialise la première tour selon le nombre de palets.
 * @param {*} x Le nombre de palets
 */
function initialize(x) {
  for (let i = 1; i <= x; i++) {
    tab1.push(i);
  }
}

/**
 * Calcule le nomnbre de coups à réaliser selon le nombre de palets.
 * @param {*} n Le nombre de palets
 * @returns Le nombre de coup à réaliser pour gagner
 */
function movesToBeat(n) {
  result = Math.pow(2, n) - 1;
  return result;
}

/**
 * Résout les tours d'hanoi.
 * 
 * à chaque tour, on alterne entre trois couples de tours.
 * 
 * @param {*} n Le nombre de coups à réaliser
 * @param {*} tabSource La tour de départ
 * @param {*} tabPivot La tour intermédiaire
 * @param {*} tabCible La tour finale
 */
function resolution(n, tabSource, tabPivot, tabCible) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 1) {
      legalMove(tabSource, tabCible);
    } else if (i % 3 === 2) {
      legalMove(tabSource, tabPivot);
    } else {
      legalMove(tabPivot, tabCible);
    }
  }
}

/**
 * Étant donné 2 tours, détermine quel est le seul coup possible et l'effectue.
 * @param {*} tabA La tour source
 * @param {*} tabB La tour cible
 */
function legalMove(tabA, tabB) {
    if (tabA.length === 0) {
        // cible -> source
        moveToTab(tabB, tabA);
      } else if (tabB.length === 0) {
        // source -> cible
        moveToTab(tabA, tabB);
      } else if (tabA[0] < tabB[0]) {
        // source -> cible
        moveToTab(tabA, tabB);
      } else {
        // cible -> source
        moveToTab(tabB, tabA);
      }
}

/**
 * Bouge un palet de la tour source vers la tour cible
 * @param {*} tabA La tour source
 * @param {*} tabB La tour cible
 */
function moveToTab(tabA, tabB) {
  let temp = tabA[0];
  tabA.shift();
  tabB.splice(0, 0, temp);
}

let nbPalets = parseInt(prompt("Nombre de Palets"));

let tab1 = [];
let tab2 = [];
let tab3 = [];

initialize(nbPalets);

let nbreCoups = movesToBeat(nbPalets);

console.log('Départ', tab1, tab2, tab3);

// Selon que le nombre de palets est pair ou impair, on tourne dans un sens ou dans l'autre
if (nbPalets % 2 === 0) {
  resolution(nbreCoups, tab1, tab3, tab2);
} else {
  resolution(nbreCoups, tab1, tab2, tab3);
}

console.log('Arrivée', tab1, tab2, tab3);
