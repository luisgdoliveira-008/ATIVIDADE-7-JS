function folhaPagamento(){

    let nome = prompt("Digite o nome do funcionário:");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto (ex: 2500.00):"));

    const taxaINSS = 0.08;
    let valorDesconto = salarioBruto * taxaINSS;
    let salarioLiquido = salarioBruto - valorDesconto;

    console.log("Funcionário: " + nome);
    console.log("Salário Bruto: R$ " + salarioBruto);
    console.log("Desconto INSS (8%): R$ " + valorDesconto);
    console.log("Salário Líquido: R$ " + salarioLiquido);


}