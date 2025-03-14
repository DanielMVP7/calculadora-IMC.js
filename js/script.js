const pesoEl = document.getElementById("peso");
const alturaEl = document.getElementById("altura");
const calcularBtn = document.getElementById("calcular");
const limparBtn = document.getElementById("limpar");
const resultado = document.getElementById("valorIMC");
const descricao = document.getElementById("descricao");

limparBtn.addEventListener("click", () => {
    pesoEl.value = '';
    alturaEl.value = '';
});

calcularBtn.addEventListener("click", () => {
    const peso = parseFloat(pesoEl.value);
    const altura = parseFloat(alturaEl.value) / 100;

    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);

    resultado.textContent = imc.replace('.', ',');
    descricao.textContent = classificacao;

    pesoEl.value = '';
    alturaEl.value = '';
});

function calcularIMC(peso, altura) {
    return (peso / (altura ** 2)).toFixed(2);
}

function classificarIMC(imc) {
    if (imc < 16) {
        return 'Baixo peso | Muito grave';
    } else if (imc >= 16 && imc <= 16.99) {
        return 'Baixo peso | Grave';
    } else if (imc >= 17 && imc <= 18.49) {
        return 'Baixo peso';
    } else if (imc >= 18.50 && imc <= 24.99) {
        return 'Peso normal';
    } else if (imc >= 25 && imc <= 29.99) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.99) {
        return 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.99) {
        return 'Obesidade grau II';
    } else {
        return 'Obesidade grau III';
    }
}


