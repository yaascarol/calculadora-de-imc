function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultadoDiv = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = "Insira valores válidos!";
        resultadoDiv.style.color = "red";
        return;
}

    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "abaixo do peso";
    }  else if (imc < 24.9) {
        classificacao = "peso normal";
    }  else if (imc < 29.9) {
        classificacao = "sobrepeso";
    }  else if (imc < 34.9) {
        classificacao = "obesidade grau 1";
    }  else if (imc < 39.9) {
        classificacao = "obesidade grau 2";
    }  else {
        classificacao = "obesidade grau 3 (mórbida)";
    }
    
    resultadoDiv.innerHTML = `seu IMC é <strong>${imc.toFixed(2)}</strong><br> Classificação:<strong>${classificacao}</strong>`;
    resultadoDiv.style.color= "black"
}