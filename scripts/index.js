
// Vymaže obsah elementu
const clearElement = (element) => {
    while (element.firstChild) {
        element.firstChild.remove();
    }
}

// resetuje pozici čar v elementech lAB, lBC, lCA
const clearLines = (lAB, lBC, lCA) => {
    // ---
}

// vykreslí čáry do elementú lAB, lBC, lCA na soořadnice bodů
const drawLines = (lAB, lBC, lCA, coordA, coordB, coordC) => {
    let pointAx = coordA.x;
    let pointAy = coordA.y + 300;
    let pointBx = coordB.x * 10;
    let pointBy = coordB.y * 10 + 300;
    let pointCx = coordC.x * 10;
    let pointCy = 300 - coordC.y * 10;
    // --- 

}

// vypočítá a doplní zbývající hodnoty v reakci na stisk tlačítka a vyplnění hodnot
const calculate = (e) => {
    // ---
}

// inicializační kód
const init = () => {
    // ---
}