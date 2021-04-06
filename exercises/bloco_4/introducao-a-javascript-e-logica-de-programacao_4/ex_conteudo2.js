let a = 5;
let b = 10;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = b % a;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

//Maior entre dois numeros

function higherNumber (a, b){
    if (a > b) {
        console.log(a);
    } else{
        console.log(b);
    }
}

higherNumber(10, 5);


//Maior entre 3 numeros

function higherNumber (a, b, c){
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }  

}

higherNumber(5, 10, 50);

//Positivo ou Negativo

function positiveNegative (num) {
    if (num > 0) {
        console.log("positive");
    } else if (num < 0) {
        console.log("negative");
    } else {
        console.log("zero");
    }
}

positiveNegative(-5);

//Angulos triangulo

function isThatTriangle (ang1, ang2, ang3) {
    if (ang1 + ang2 + ang3 === 180) {
        console.log(true);
    } else if (ang < 0 || ang < 0 || ang < 0) {
        console.log("Este valor de angulo nao é valido")
    } else {
        console.log(false)
    }
}

isThatTriangle(45, 45, 90);

//Xadrez

function chessPieceMove (chessPiece) {
    let res = chessPiece.toLowerCase();
    switch (res){
        case "king":
          console.log(res, "=> one square in any direction");
          break;
        case "queen":
          console.log(res, "=> diagonally, horizontally, or vertically any number of squares");
          break;
        case "rooks":
          console.log(res, "=> horizontally or vertically any number of squares");
          break;
        case "bishops":
          console.log(res, "=> diagonally any number of square");
          break;
        case "kinights":
          console.log(res, "=> in an ‘L’ shape");
          break;
        case "pawns":
          console.log(res, "=> vertically forward one square");
          break;
        default:
          console.log(res, "=> wtf, this chess I don't know")
            
    }
}
chessPieceMove('mARIO');