
let nbPalets = parseInt(prompt("Nombre de Palets"));

let tab1 = [];
let tab2 = [];
let tab3 = [];

let tm = 0;
initialize(nbPalets);

hanoi(nbPalets, tab1, tab2, tab3)


if (nbPalet%2 ===0) {
    resolution(tab1, tab3, tab2)
} else {
    resolution(tab1,tab2,tab3)
}

function initialize(x) {
    for (let i=1; i<=x ; i++) {
        tab1.push(i)
    }
}

function movesToBeat(n) {
    result = Math.pow(2,n) - 1;
    return result;
}

//à chaque tour, on alterne entre trois couples de tours, 
//La dernière chose à faire, est de rajouter le code qui détermine dans quel sens 
//se fait le transfert
function resolution (n, tabSource, tabPivot, tabCible) {
    for (let i=1; i<=n; i++) {
        if (i%3 === 1) {
            //
            //ici il faut rajouter le code qui détermine quel est le coup autorisé
            //entre tabSource ==> tabCible et tabCible ==> tabSource
        } else if (i%3 === 2) {
            //tabSource <==> tabPivot
        } else {
            //tabPivot <==> tabCible 
        }
    }
}

//on bouge le palet au sommet de tabA vers tabB
function moveToTab(tabA, tabB) {
    let temp = tabA[0];
    tabA.shift();
    tabB.splice(0,0, temp)
}

let nbreCoups = movesToBeat(nbPalets);
