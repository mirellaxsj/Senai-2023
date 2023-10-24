// function inss(salario) {
//     if (salario < 1320.01)
//         return salario * 7.5 / 100;
//     else if (salario < 2571.30)
//         return salario * 9 / 100;
//     else if (salario < 3856.95)
//         return salario * 12 / 100;
//     else if (salario < 7507.49)
//         return salario * 14 / 100;
//     else
//         return 1051.05;
// }

// function irrf(salario) {
//     if (salario < 1903.99)
//         return 0;
//     else if (salario < 2826.66)
//         return salario * 7.5 / 100 - 142.8;
//     else if (salario < 3751.06)
//         return salario * 15 / 100 - 354.8;
//     else if (salario < 4664.69)
//         return salario * 22.5 / 100 - 636.13;
//     else
//         return salario * 27.5 / 100 - 869.36;
// }

// //Testando as funções:
// let salario = 1000;
// let inss = inss(salario);
// let salarioBase = salario - inss;
// let irrf = irrf(salarioBase);
// let salarioLiquido = salarioBase - irrf;

// console.log("Salário: " + salario);
// console.log("INSS: " + inss);
// console.log("Salário Base: " + salarioBase);
// console.log("IRRF: " + irrf);
// console.log("Salário Líquido: " + salarioLiquido);

// class salario{
//     constructor(nome, salario){
//         this.nome = nome
//         this.salario = salario
//         this.inss = this.INSS()
//         this.irrf = this.IRRF()
//         this.salarioBase = this.salario - this.inss
//         this.salarioLiquido = this.salarioBase - this.irrf
//     }

// INSS() {
//     if (this.salario < 1320.01)
//     return this.salario * 7.5 / 100;
// else if (this.salario < 2571.30)
//     return this.salario * 9 / 100;
// else if (this.salario < 3856.95)
//     return this.salario * 12 / 100;
// else if (this.salario < 7507.49)
//     return this.salario * 14 / 100;
// else
//     return 1051.05;
// }

// IRRF() {
//     if (this.salario < 1903.99)
//     return 0;
// else if (this.salario < 2826.66)
//     return this.salario * 7.5 / 100 - 142.8;
// else if (this.salario < 3751.06)
//     return this.salario * 15 / 100 - 354.8;
// else if (this.salario < 4664.69)
//     return this.salario * 22.5 / 100 - 636.13;
// else
//     return this.salario * 27.5 / 100 - 869.36;
// }


// const obj1 = new salario('Joao', 1000)
// const obj2 = new salario('Maria', 2000)
// const obj3 = new salario('Mariana', 3000)
// const obj4 = new salario('Ana', 4000)
// const obj5 = new salario('Julia', 5000)
// const obj6 = new salario('Bárbara', 6000)
// const obj7 = new salario('Rosalina', 7000)
// const obj8 = new salario('Marina', 8000)
// const obj9 = new salario('Silvia', 10000)



// console.log(obj1)

// const pagamento = [];
// pagamento.push(new salario('Joao', 1000))
// pagamento.push(new salario('Maria', 2000))
// pagamento.push(new salario('Mariana', 3000))
// pagamento.push(new salario('Ana', 4000))
// pagamento.push(new salario('Julia', 5000))

// const main = document.getElementById("pagamento");

// pagamento.forEach(pagamento => {
//     const div = document.createElement("div")
//     div.innerHTML = pagamento.showHTML()
//     main.appendChild(div)
// })

// const nomeInput = document.getElementById("nomeInput")
// const salarioInput = document.getElementById("salarioInput")

// function enviar(){
//     console.log(nomeInput.value, salarioInput.value)
    
// }
// const pgto1 = new salario("João", 1900)
class Pagamento {
    //Método construtor
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
        this.salarioBase = (this.salario - this.inss()).toFixed(2);
        this.salarioLiquido = (this.salarioBase - this.irrf()).toFixed(2);
    }

    //Métodos de cálculo
    inss() {
        if (this.salario < 1320.01)
            return this.salario * 7.5 / 100;
        else if (this.salario < 2571.30)
            return this.salario * 9 / 100;
        else if (this.salario < 3856.95)
            return this.salario * 12 / 100;
        else if (this.salario < 7507.49)
            return this.salario * 14 / 100;
        else
            return 1051.05;
    }

    irrf() {
        if (this.salario < 1903.99)
            return 0;
        else if (this.salario < 2826.66)
            return this.salario * 7.5 / 100 - 142.8;
        else if (this.salario < 3751.06)
            return this.salario * 15 / 100 - 354.8;
        else if (this.salario < 4664.69)
            return this.salario * 22.5 / 100 - 636.13;
        else
            return this.salario * 27.5 / 100 - 869.36;
    }
}

const pgto1 = new Pagamento("João", 2689);
// console.log(pgto1);