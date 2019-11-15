var resultat = document.getElementById('resultat');


// Addition

var boutonAddition = document.getElementById('boutonAddition');

boutonAddition.addEventListener('click', function () {
//    resultat.innerHTML = nombre1.value+nombre2.value;
//   console.log (resultat);
    var nombre1 = document.getElementById('nombre1').value;
    var nombre2 = document.getElementById('nombre2').value;
  console.log (nombre1);
  console.log (nombre2);
    resultat.value = parseInt(nombre1)+parseInt(nombre2);
});


// Soustraction

var boutonSoustraction = document.getElementById('boutonSoustraction');

boutonSoustraction.addEventListener ('click', function () {
    var nombre1 = document.getElementById('nombre1').value;
    var nombre2 = document.getElementById('nombre2').value;
    console.log (nombre1);
    console.log (nombre2);
    resultat.value = parseInt(nombre1)-parseInt(nombre2);
});

// Multiplication

var boutonMultiplication = document.getElementById('boutonMultiplication');

boutonMultiplication.addEventListener('click', function () {
    var nombre1 = document.getElementById('nombre1').value;
    var nombre2 = document.getElementById('nombre2').value;
    console.log (nombre1);
    console.log (nombre2);
    resultat.value = parseInt(nombre1)*parseInt(nombre2);
});

// Division

var boutonDivision = document.getElementById('boutonDivision');

boutonDivision.addEventListener('click', function () {
    var nombre1 = document.getElementById('nombre1').value;
    var nombre2 = document.getElementById('nombre2').value;
    console.log (nombre1);
    console.log (nombre2);
    resultat.value = parseInt(nombre1)/parseInt(nombre2);
});





