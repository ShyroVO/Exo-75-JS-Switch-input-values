let valeur1 = document.getElementById("input1");
let valeur2 = document.getElementById("input2");
let bouton = document.getElementById("switch");


function changeValeur () {
    let valeurInput1 = valeur1.value;
    let valeurInput2 = valeur2.value;

    valeur1.value = valeurInput2;
    valeur2.value = valeurInput1;
}

bouton.addEventListener("click", changeValeur);
