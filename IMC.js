// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona. El BMI se calcula con la siguiente fórmula: peso / altura^2.
// En un archivo llamado IMC.js escribe una función llamada bmi que reciba dos argumentos: peso y altura. Utiliza la formula para retornar el BMI correspondiente. Debes ejecutar tu archivo usando node.js node IMC.js
function bmi(a, b){
    let calculo = (a/(b**2));
    return "Su indicce de masa corporal es: " + calculo;
}

// código de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695