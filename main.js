//Simulador de cuotas

//variables;
let monto = 0;
let cuotas = 0;
let interes = 0;
let cuotaAPagar= 0;
let calcularNuevamente = false;



do{
    monto = parseInt(prompt("¿Cual es el moto a financiar?"))
    cuotas = parseInt(prompt("¿En cuantas cuotas desea financiar 3 / 6 / 12?"));


    switch (cuotas) {
        case 3:
            cuotaAPagar = (monto  * 1.15) / cuotas;
            break;
        case 6:
            cuotaAPagar = (monto  * 1.30) / cuotas;
            break;
        case 12:
            cuotaAPagar = (monto  * 1.45) / cuotas;
            break;
        default:
            alert("la cantidad de cutas es invalida");
            break;
    }
    let totalAPagar = cuotaAPagar * cuotas
    alert("El total a pagar es de: "+"$"+totalAPagar+" en "+cuotas+" cuotas de: "+"$"+Math.round(cuotaAPagar));
    calcularNuevamente = confirm("¿Desea volver a calcular?");
    console.log(calcularNuevamente);

} while (calcularNuevamente);

alert("Gracias por su visita!");
