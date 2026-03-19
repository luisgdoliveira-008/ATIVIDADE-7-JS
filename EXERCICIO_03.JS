function ex03() {

    let ganhoAnual = 0;
    let gastoAnual = 0;

    for(let i=1; i<=12; i++) {

        let ganho = number(prompt("ganho do mes " + i));
          let gasto = number(prompt("gasto do mes " + i));
          ganhoAnual += ganho;
          gastoAnual += gasto;
    }

    console.log(ganhoAnual);
    console.log(gastoAnual);

    let saldo = ganhoAnual - gastoAnual;

    alert("ganho Anual: ", ganhoAnual);
    alert("gasto Anual: ", gastoAnual);
    alert("saldo Anual: ", saldoAnual);
        if (saldo >0){
            alert("");
        }else{
            alert("prejuizo!");
        }

}
ex03();