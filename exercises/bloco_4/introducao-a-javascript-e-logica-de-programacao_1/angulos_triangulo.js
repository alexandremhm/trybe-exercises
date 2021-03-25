let angulo1 = 90;
let angulo2 = 45;
let angulo3 = -46;

if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("Este valor de angulo nao é valido")
} else {
    console.log(false)
}