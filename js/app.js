const inputParesImpares = document.getElementById("input");
const btnSeparar = document.getElementById("btn");
const resultadoParesImpares = document.getElementById("resultado");

const separarParesEImpares = (arrayNumeros) => {
    let arrayPares = [];
    let arrayImpares = [];

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 === 0) {
            arrayPares.push(arrayNumeros[i]);
        } else {
            arrayImpares.push(arrayNumeros[i]);
        }
    }

    return {
        pares: arrayPares,
        impares: arrayImpares
    };
};

btnSeparar.addEventListener("click", () => {
    const valorInput = inputParesImpares.value;

    if (valorInput.trim() === "") {
        resultadoParesImpares.textContent = "Por favor, ingrese números.";
        return;
    }

    const arrayOriginal = valorInput.split(/[\s,]+/).filter(Boolean).map(Number);

    if (arrayOriginal.some(isNaN)) {
        resultadoParesImpares.textContent = "Error: utilice solo números.";
        return;
    }

    const objetoResultado = separarParesEImpares(arrayOriginal);
    const textoPares = objetoResultado.pares.join(", ");
    const textoImpares = objetoResultado.impares.join(", ");

    resultadoParesImpares.innerHTML = `
        <strong>Pares:</strong> ${textoPares || "Ninguno"} <br>
        <strong>Impares:</strong> ${textoImpares || "Ninguno"}
    `;

    inputParesImpares.value = "";
    inputParesImpares.focus();
});
