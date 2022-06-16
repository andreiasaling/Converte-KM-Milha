function calculaKmMilha () {
    let km = document.querySelector('#valorKm').value;
    document.querySelector('#resultado').textContent = km * 1.609;
}