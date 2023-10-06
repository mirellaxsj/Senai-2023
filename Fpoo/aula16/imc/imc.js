class Pacientes {
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc
    }
    

imc (){
    return this.imc = this.peso / (this.altura * this.altura);
}

diagnosticar (){
 if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    return "Obesidade grau 1";
  } else if (imc >= 35 && imc < 40) {
    return "Obesidade grau 2";
  } else {
    return "Obesidade grau 3";
  }
}

  showHTML(){
    let str = `<label>Nome:</label><label>${this.nome}</label>`;
    str += `<label>Peso:</label><label>${this.peso}</label>`;
    str += `<label>Altura:</label><label>${this.altura}</label>`;
    str += `<label>IMC:</label><label>${this.imc().toFixed(1)}</label>`;
    return str;
}
}

const pacientes = [];
pacientes.push(new Pacientes("Arthur",70,1.75))
pacientes.push(new Pacientes("Laura",58,1.61))
pacientes.push(new Pacientes("Ana",80,1.58))

const main = document.getElementById("pacientes")

pacientes.forEach(pacientes => {
    const div = document.createElement("div")
    div.innerHTML = pacientes.showHTML()
    main.appendChild(div)
})