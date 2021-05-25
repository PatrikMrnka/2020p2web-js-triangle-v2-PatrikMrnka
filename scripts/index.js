var queryParams = new URLSearchParams(window.location.search);
var a = queryParams.get("a");
var b = queryParams.get("b");
var c = queryParams.get("c");

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
    document.getElementById("sideA").value = a;
    document.getElementById("sideB").value = b;
    document.getElementById("sideC").value = c;
    var Perimeter = a + b + c;
    var halfPerimeter = (Perimeter / 2);
    var alpha = 2 * Math.asin(Math.sqrt(((halfPerimeter - b)*(halfPerimeter - c)) / (b * c)));
    var beta = 2 * Math.asin(Math.sqrt(((halfPerimeter - c)*(halfPerimeter - a)) / (a * c)));
    var gamma = 2 * Math.asin(Math.sqrt(((halfPerimeter - a)*(halfPerimeter - b)) / (a * b)));
    var halfPerimeter
    document.getElementById("alpha").value = alpha;
    document.getElementById("beta").value = beta;
    document.getElementById("gamma").value = gamma;
}

// inicializační kód
const init = () => {
    calculate();
}