let valeur1 = document.getElementById("input1");
let valeur2 = document.getElementById("input2");
let bouton = document.getElementById("switch");


function changeValeur () {
    let valeurInput1 = valeur1.value;
    let valeurInput2 = valeur2.value;

    console.log(valeurInput1);
    console.log(valeurInput2);
}

bouton.addEventListener("click", changeValeur);
