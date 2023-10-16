class Pessoa {
    constructor(nome, nascimento, sexo) {
        this.nome = nome;
        this.nascimento = nascimento;
        this.sexo = sexo;
        this.idade = this.calcIdade(); //Atributo calculado
        this.classificacao = this.classificar()
    }

    calcIdade() {
        if (this.nascimento == undefined) return 0;
        let hoje = new Date();
        let difAno = hoje.getFullYear() - this.nascimento.getFullYear();
        let difMes = hoje.getMonth() - this.nascimento.getMonth();
        let difDia = hoje.getDate() - this.nascimento.getDate();
        if (difMes < 0 || (difMes == 0 && difDia < 0)) {
            difAno--;
        }
        return difAno;
    }

    classificar(){
        if(this.idade < 11){
            return 'Criança'
        }else if(this.idade > 10 && this.idade < 18){
            return 'Adolescente'
        }else if(this.idade > 17){
            return 'Adulto'
        }
    }

    toTable() {
        return `<tr id="pessoa">
                    <td>${this.nome}</td>
                    <td>${this.nascimento.toLocaleDateString()}</td>
                    <td>${this.sexo}</td>
                    <td>${this.idade}</td>
                    <td>${this.classificacao}</td>
                    <td class="tdRemover"><button class="remover" onclick='remover(this)'>Excluir</button></td>
                </tr>`;
    }
}

const pessoas = [];

pessoas.push(new Pessoa("João Silva 1", new Date(1990, 8, 10), "M"));
pessoas.push(new Pessoa("Maria Santos 2", new Date(2018, 13, 10), "F"));
pessoas.push(new Pessoa("José Oliveira 3", new Date(2007, 9, 16), "M"));
pessoas.push(new Pessoa("Joana Gimenes 4", new Date(2002, 7, 21), "F"));
pessoas.push(new Pessoa("Pedro Martins 5", new Date(1998, 4, 1), "M"));

const form = document.getElementById("novaPessoa");
const corpo = document.getElementById("corpoTabela");
const alert = document.getElementById('alert')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let pessoa = new Pessoa(form.nome.value, new Date(form.nascimento.value), form.sexo.value);
    if(form.sexo.value == 'N'){
        alert.innerHTML = 'Insira um gênero!'
    }else{
        alert.innerHTML = ''
        pessoas.push(pessoa);
        // form.reset();
        atualizaTabela();
    }
});

function exclude(){
    let nome = document.getElementById("fodase").value;

    if(nome == ''){
        pessoas.pop();
    }else{
        pessoas.forEach(pessoa => {
            if(pessoa.nome == nome){
                pessoas.splice(pessoas.indexOf(pessoa), 1);
            }else{
                console.log("Não existe ninguém com esse nome");
            }
        })
    }
    atualizaTabela();
}

function remover(id){
    pessoas.forEach(pessoa => {
        if(pessoa == id){
            pessoas.splice(pessoas.indexOf(id), 1);
        }else{
            console.log("Não existe ninguém com esse nome");
            console.log(pessoa, pessoas.indexOf(id));
        }
    })
    atualizaTabela();
}

function atualizaTabela() {
    corpo.innerHTML = "";
    pessoas.forEach((pessoa) => {
        corpo.innerHTML += pessoa.toTable();
    });
}