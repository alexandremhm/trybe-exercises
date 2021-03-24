let chessPiece = "Mário";
let res = chessPiece.toLowerCase();
//A resolucao desse codigo eu utilizei como referencia a documentacao no site:
//www.w3schools.com/jsref/jsref_tolowercase.asp

switch (res){
    case "king":
      console.log("One square in any direction");
      break;
    case "queen":
      console.log("Diagonally, horizontally, or vertically any number of squares");
      break;
    case "rooks":
      console.log("Horizontally or vertically any number of squares");
      break;
    case "bishops":
      console.log("Diagonally any number of square");
      break;
    case "kinights":
      console.log("In an ‘L’ shape");
      break;
    case "pawns":
      console.log("Vertically forward one square");
      break;
    default:
      console.log("Wtf, this chess I don't know")
    

}