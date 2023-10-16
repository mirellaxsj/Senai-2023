class Triangulo {
    constructor(lado1, lado2, lado3){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;

    }
    tipo(){
        if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
            return "Equilátero"; 
    }else if (
      this.lado1 === this.lado2 ||
      this.lado1 === this.lado3 ||
      this.lado2 === this.lado3
    ) {
        return "Isósceles" 
    } else {
        return "Escaleno"
    }

    }

    showHTML(){
        let str = `<label>Lado1:</label><label>${this.lado1}</label>`;
        str += `<label>Lado2:</label><label>${this.lado2}</label>`;
        str += `<label>Lado3:</label><label>${this.lado3}</label>`;
        str += `<label>Tipo:</label><label>${this.tipo()}</label>`;
        return str;
    }
}

const lista = [];
lista.push(new Triangulo(5,5,5))
lista.push(new Triangulo(4,4,6))
lista.push(new Triangulo(3,4,5))

const main = document.getElementById("triangulos");

lista.forEach(triangulo => {
    const div = document.createElement("div")
    div.innerHTML = triangulo.showHTML()
    main.appendChild(div)
})

// const lado1 = new Triangulo(5, 5, 5); 
// console.log(lado1.tipo()); 

// const lado2 = new Triangulo(4, 4, 6); 
// console.log(lado2.tipo()); 

// const lado3 = new Triangulo(3, 4, 5); 
// console.log(lado3.tipo()); 


// const lado1 = new triangulo('5, 5, 5');
// const lado2 = new triangulo('4, 4, 6');
// const lado3 = new triangulo('3, 4, 5');

// const main = document.getElementById('triangulos');
// const lado1 = document.createElement('div');
// const lado2 = document.createElement('div');
// const lado3 = document.createElement('div');




