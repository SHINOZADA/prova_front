document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    const imc = peso / (altura * altura);
    let situacao = '';

    if (imc < 18.5) {
        situacao = 'Magreza';
    } else if (imc < 25) {
        situacao = 'Peso Normal';
    } else if (imc < 30) {
        situacao = 'Acima do Peso';
    } else {
        situacao = 'Obesidade';
    }

    document.getElementById('resultado').innerHTML = 
        `Seu IMC é ${imc.toFixed(2)}. Situação: ${situacao}`;
});