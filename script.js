let tour1 = [];
let tour2 = [];
let tour3 = [];
let nbPalets = Number(prompt("Combien de palets ?"));

function initializeTour1(x) {
    for (let i = 1; i <= x; i++) {
        tab1.push(i);
    }
}

// 1er coup
function moveToTab(tabA, tabB) { //prend en arguments tour de départ , tour d'arrivée
    let temp = tabA[0]; // temp prend la valeur de l'index 0 du tableau tabA
    tabA.shift(); // on supprime l'index 0 du premier tableau, ici tabA
    tabB.splice(0, 0, temp); // il s'insère à l'indice 0, on ne remplace rien, la valeur qu'on insère 
}


initializeTour1(nbPalets);

function paletMoves(nbPalets) {
    let victory = false;

    if (tour2.length === nbPalets || tour3.length === nbPalets) {
        victory = true;
        return true;
    }


    while (victory = false) {
        // Coup de départ
        tour2[0] || tour3[0] = tour1[0];
    }
}
