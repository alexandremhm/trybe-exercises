let salarioBruto = 10000;
let salarioBase;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (salarioBruto * 0.11);
} else {
    salarioBase = salarioBruto - 570.88;
}

if (salarioBase <= 1903.98) {
   salarioLiquido = salarioBase;
} else if (salarioBase >=1903.99 && salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - (salarioBase * 0.075);
} else if (salarioBase >=2826.66 && salarioBase <= 3751.05) {
    salarioLiquido = salarioBase - (salarioBase * 0.15);
} else if (salarioBase >=3751.06 && salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - (salarioBase * 0.225);
} else {
    salarioLiquido = salarioBase - (salarioBase * 0.275);
}
     
console.log(salarioLiquido);