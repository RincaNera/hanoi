let nbPalets = parseInt(prompt("Nombre de Palets"));

let tab1 = [];
let tab2 = [];
let tab3 = [];

let tm = 0;
initialize(nbPalets);

hanoi(nbPalets, tab1, tab2, tab3)

function initialize(x) {
    for (let i=1; i<=x ; i++) {
        tab1.push(i)
    }
}



function hanoi(n, tourSource, tourPivot, tourDestination){
    if(n>0){
        hanoi(n-1, tourSource, tourDestination, tourPivot);
        tm++;
        moveToTab(tourSource,tourDestination)
        console.log(tourSource + "vers" + tourDestination ); 
        hanoi(n-1, tourPivot, tourSource, tourDestination);
        }
    }

function moveToTab(tabA, tabB) {
    let temp = tabA[0];
    tabA.shift();
    tabB.splice(0,0, temp)
}

