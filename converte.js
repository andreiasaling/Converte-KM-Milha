function calculaKmMilha () {
    let km = document.querySelector('#valorKm').value;
    let result = km * 1.609;
    document.querySelector('#resultado').textContent = result.toFixed(2);
}