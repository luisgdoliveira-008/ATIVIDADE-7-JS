function folhaDesconto(){

let salarioInformado = parseFloat(prompt("Digite o salário bruto:"));
let taxaDesconto;
let nomeTaxa;

if (salarioInformado <= 1000.00) {
    taxaDesconto = 0.08;  
    nomeTaxa = "8%";
} else if (salarioInformado <= 1500.00) {
    taxaDesconto = 0.085; 
    nomeTaxa = "8,5%";
} else {
    taxaDesconto = 0.09;   
    nomeTaxa = "9%";
}


let valorDesconto = salarioInformado * taxaDesconto;
let salarioLiquido = salarioInformado - valorDesconto;


console.log("Salário informado: R$ " + salarioInformado);
console.log("Taxa de desconto aplicada: " + nomeTaxa);
console.log("Valor do desconto: R$ " + valorDesconto);
console.log("Salário líquido: R$ " + salarioLiquido);



}