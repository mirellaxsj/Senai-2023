//criar objetos a partir de uma classe 
class coisa {
    constructor(nome, preço, quantidade){
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }
    total(){
        return this.preço * this.quantidade
    }
    showHTML(){
        let str = `<label>Nome:</label><label>${this.nome}</label>`;
        str += `<label>Preço:</label><label>${this.preco}</label>`;
        str += `<label>Quantidade:</label><label>${this.qtd}</label>`;
        str += `<label>Total:</label><label>${this.total().toFixed(2)}</label>`;
        return str;
    }
}
//instâncias dessa classe
const obj = new coisa('cadeira, 149.90, 6');
const obj2 = new coisa('mesa, 349.90, 2');
const obj3 = new coisa('caneta, 149.90, 6');
const obj4 = new coisa('sofá, 149.90, 6');
const obj5 = new coisa('poltrona do papai, 149.90, 6');

const main = document.getElementById('objetos');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');





