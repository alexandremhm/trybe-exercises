let custoProduto = 100;
let valorVenda = 150;

let impostoProduto = 0.2 * custoProduto;
let lucroObtido = valorVenda - impostoProduto;

if (custoProduto < 0 || valorVenda < 0 || impostoProduto < 0) {
    console.log("Insira valores válidos");
} else {
    console.log(lucroObtido);
}


