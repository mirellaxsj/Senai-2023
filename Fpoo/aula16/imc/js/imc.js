// class Pacientes {
//     constructor(nome, peso, altura){
//         this.nome = nome;
//         this.peso = peso;
//         this.altura = altura;
//         this.imc
//     }
    

// imc (){
//     return this.imc = this.peso / (this.altura * this.altura);
// }

// diagnosticar (){
//  if (imc < 18.5) {
//     return "Abaixo do peso";
//   } else if (imc >= 18.5 && imc < 25) {
//     return "Peso normal";
//   } else if (imc >= 25 && imc < 30) {
//     return "Sobrepeso";
//   } else if (imc >= 30 && imc < 35) {
//     return "Obesidade grau 1";
//   } else if (imc >= 35 && imc < 40) {
//     return "Obesidade grau 2";
//   } else {
//     return "Obesidade grau 3";
//   }
// }

//   showHTML(){
//     let str = `<label>Nome:</label><label>${this.nome}</label>`;
//     str += `<label>Peso:</label><label>${this.peso}</label>`;
//     str += `<label>Altura:</label><label>${this.altura}</label>`;
//     str += `<label>IMC:</label><label>${this.imc().toFixed(1)}</label>`;
//     return str;
// }
// }

// const pacientes = [];
// pacientes.push(new Pacientes("Arthur",70,1.75))
// pacientes.push(new Pacientes("Laura",58,1.61))
// pacientes.push(new Pacientes("Ana",80,1.58))

// const main = document.getElementById("pacientes")

// pacientes.forEach(pacientes => {
//     const div = document.createElement("div")
//     div.innerHTML = pacientes.showHTML()
//     main.appendChild(div)
// })
class Paciente{
  constructor(nome, peso, altura){
      this.nome = nome
      this.peso = peso
      this.altura = altura
      this.imc
  }

  imc(){
      return this.imc =  this.peso / (this.altura * this.altura)
  }

  diagnosticar(){
      if(this.imc < 18.5){
          return "Abaixo do peso"
      }else if(this.imc > 18.5 && this.imc < 24.9){
          return "Peso normal"
      }else if(this.imc > 25 && this.imc < 29.9){
          return "Sobrepeso"
      }else if(this.imc > 30 && this.imc < 34.9){
          return "Obesidade grau 1"
      }else if(this.imc > 35 && this.imc < 39.9){
          return "Obesidade grau 2"
      }else{
          return "Obesidade grau 3"
      }
  }

  showHTML(){
      let str = `<h2>${this.nome}</h2>`
      str += `<hr>`
      str += `<div class="espaco">`
      str += `<p>Peso:</p><p>${this.peso}</p>`
      str += `</div>`
      str += `<div class="espaco">`
      str += `<p>Altura:</p><p>${this.altura}</p>`
      str += `</div>`
      str += `<div class="espaco">`
      str += `<p>IMC:</p><p>${this.imc().toFixed(1)}</p>`
      str += `</div>`
      str += `<hr>`
      str += `<h3>Diagnóstico</h3>`
      str += `<h3>${this.diagnosticar()}</h3>`
      return str
  }
}

const pacientes = []
pacientes.push(new Paciente('André Mattos', 80, 1.8))
pacientes.push(new Paciente('João da silva', 100, 1.7))
pacientes.push(new Paciente('Maria de Souza', 60, 1.8))
pacientes.push(new Paciente('José de Oliveira', 90, 1.75))
pacientes.push(new Paciente('Silva Andrade', 60, 1.85))
pacientes.push(new Paciente('Sueli Oliveira', 44, 1.65))
pacientes.push(new Paciente('Pedro de Souza', 110, 1.85))

const main = document.getElementById("pacientes")
pacientes.forEach(pce => {
  const div = document.createElement('div')
  div.classList.add("card")
  div.innerHTML = pce.showHTML()
  main.appendChild(div)
})