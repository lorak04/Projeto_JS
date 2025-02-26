function calcularSoma() {
    // Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    // Verificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, informe dois números válidos.");
        return;
    }
    // Calcular a soma
    let soma = numero1 + numero2;
    // Exibir o resultado
    document.getElementById('soma').textContent = soma;
    document.getElementById('resultadoSoma').style.display = 'block';

    
}

function calcularSubtracao() {
    // Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    // Verificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, informe dois números válidos.");
        return;
    }
    // Calcular a subtração
    let subtracao = numero1 - numero2;
    // Exibir o resultado
    document.getElementById('subtracao').textContent = subtracao;
    document.getElementById('resultadoSubtracao').style.display = 'block';

    
}

function calcularMultiplicacao() {
    // Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    // Verificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, informe dois números válidos.");
        return;
    }
    // Calcular a multiplicação
    let multiplicacao = numero1 * numero2;
    // Exibir o resultado
    document.getElementById('multiplicacao').textContent = multiplicacao;
    document.getElementById('resultadoMultiplicacao').style.display = 'block';

    
}

function calcularDivisao() {
    // Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    // Verificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, informe dois números válidos.");
        return;
    }
    // Verificar se o divisor é zero
    if (numero2 === 0) {
        alert("Não é possível dividir por zero.");
        return;
    }
    // Calcular a divisão
    let divisao = numero1 / numero2;
    // Exibir o resultado
    document.getElementById('divisao').textContent = divisao;
    document.getElementById('resultadoDivisao').style.display = 'block';

   
}
