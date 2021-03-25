let chessPiece = "Mário";
let res = chessPiece.toLowerCase();
//A resolucao desse codigo eu utilizei como referencia a documentacao no site:
//www.w3schools.com/jsref/jsref_tolowercase.asp

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