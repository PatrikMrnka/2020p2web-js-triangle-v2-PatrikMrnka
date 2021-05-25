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
    //var button = document.getElementsByTagName("button")[0];
    //button.onload = init
    let triangle1 = new triangle(a,b,c);
    document.getElementById("sideA").value = a;
    document.getElementById("sideB").value = b;
    document.getElementById("sideC").value = c;
    document.getElementById("alpha").value = triangle1.Alpha;
    document.getElementById("beta").value = triangle1.Beta;
    document.getElementById("gamma").value = triangle1.Gamma;
    document.getElementById("perimeter").value = triangle1.Perimeter;
    document.getElementById("content").value = triangle1.Content;

    if(triangle1.Constructable) {
        console.log("lze sestrojit");
        document.getElementById("result-feedback").className = "alert alert-success";
        document.getElementById("result-feedback").innerHTML = "Trojuhelník lze sestrojit"
    } else {
        console.log("nelze sestrojit");
        document.getElementById("result-feedback").className = "alert alert-danger";
        document.getElementById("result-feedback").innerHTML = "Trojuhelník nelze sestrojit"
        document.getElementById("alpha").value = "Nelze";
        document.getElementById("beta").value = "Nelze";
        document.getElementById("gamma").value = "Nelze";
        document.getElementById("perimeter").value = "Nelze";
        document.getElementById("content").value = "Nelze";
    }
}

// inicializační kód
const init = () => {
    calculate();
}