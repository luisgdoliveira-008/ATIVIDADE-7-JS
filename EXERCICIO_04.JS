function ordena() {
    let numeros = [];

    for(let i = 0; i < 4; i++){
        numeros.push(number(prompt("digite um numero")));
       numeros.sort((a,b) => b - a);
    } 

     alert.log("ordem decrescente: " + numeros);
}

