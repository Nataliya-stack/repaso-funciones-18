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
    let textoHTML = ""; 

    if (valorInput.trim() === "") {
        textoHTML = "Por favor, ingrese números.";
    } else {
        const arrayOriginal = valorInput.split(/[\s,]+/).filter(Boolean).map(Number);

        if (arrayOriginal.some(isNaN)) {
            textoHTML = "Error: utilice solo números.";
        } else {
            const objetoResultado = separarParesEImpares(arrayOriginal);
            const textoPares = objetoResultado.pares.join(", ");
            const textoImpares = objetoResultado.impares.join(", ");

            textoHTML = `
                <strong>Pares:</strong> ${textoPares || "Ninguno"} <br>
                <strong>Impares:</strong> ${textoImpares || "Ninguno"}
            `;
        }
    }

    resultadoParesImpares.innerHTML = textoHTML;

    inputParesImpares.value = "";
    inputParesImpares.focus();
});
