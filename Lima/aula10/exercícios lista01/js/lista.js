function ex01(){
    let ValorA = Number(document.getElementById("ValorAEx01").value)
    let ValorB = Number(document.getElementById("ValorBEx01").value)
    let ValorC = Number(document.getElementById("ValorCEx01").value)

    let resultadoEx = document.getElementById("resultadoEx01")
    let resultado = (ValorA + ValorB) / ValorC

    if(resultado == 'Infinity'){
        resultadoEx.innerHTML = resultado + '♾️'
        resultadoEx.classList.add('infinity')
    }else{
        console.log(resultado)
        resultadoEx.innerHTML = resultado
    }
    
}

function ex02(){
    let ValorA = Number(document.getElementById("ValorAEx02").value)
    let ValorB = Number(document.getElementById("ValorBEx02").value)

    let resultadoEx = document.getElementById("resultadoEx02")
    let resultado = ValorB / ValorA
    
    let sign = (resultado >= 0) ? 1 : -1

    resultado = resultado * sign

    let hour = Math.floor(resultado)
    let decpart = resultado - hour

    let min = 1 / 60

    decpart = min * Math.floor(decpart / min)

    let minute = Math.floor(decpart * 60) + ''

    if (minute.length < 2) {
        minute = '0' + minute; 
    }

    sign = sign == 1 ? '' : '-';

    notTime = sign + hour;
    time = sign + hour + ':' + minute + 'h';

    if(sign != ''){
        resultadoEx.innerHTML = 'Valores negativos não são aceitos'
    }else if(notTime == 8766){
        resultadoEx.innerHTML = 'Um ano ' + time
    }else if(notTime > 8766){
        resultadoEx.innerHTML = 'Maior que um ano ' + time
    }else{
        resultadoEx.innerHTML = time
    }
}

function ex03(){
    let ValorA = document.getElementById("ValorAEx03").value
    let ValorB = Number(document.getElementById("ValorBEx03").value)
    let ValorC = Number(document.getElementById("ValorCEx03").value)

    let resultadoEx = document.getElementById("resultadoEx03")
    let resultado = ValorB*(ValorC+100)/100

    resultadoEx.innerHTML = `${ValorA} Seu novo salário é de R$${resultado}`
}

function ex04(){
    let ValorA = document.getElementById("ValorAEx04").value
    let ValorB = Number(document.getElementById("ValorBEx04").value)
    let ValorC = Number(document.getElementById("ValorCEx04").value)

    let resultadoEx = document.getElementById("resultadoEx04")
    let vitorias = ValorB * 3
    let empates = ValorC
    let resultado = `${ValorA} Total de pontos ${vitorias + empates}`

    if(ValorA == 'São Paulo'){
        resultadoEx.innerHTML = resultado
        resultadoEx.classList.add('infinity')
    }else{
        resultadoEx.innerHTML = resultado
    }
}

function ex05(){
    let ValorA = Number(document.getElementById("ValorAEx05").value)

    let resultadoEx = document.getElementById("resultadoEx05")
    let resultado = `${ValorA - 1} <span style="color: #6495ED;">${ValorA}</span> ${ValorA + 1}`

    if(ValorA <= 0){
        resultadoEx.innerHTML = 'O valor inserido <span style="color: red;">não</span> pode ser menor ou igual a 0'
    }else{
        resultadoEx.innerHTML = resultado
    }
}

function ex06(){
    let ValorA = Number(document.getElementById("ValorAEx06").value)

    let resultadoEx = document.getElementById("resultadoEx06")
    let resultado = ValorA / 900
    
    let sign = (resultado >= 0) ? 1 : -1

    resultado = resultado * sign

    let hour = Math.floor(resultado)
    let decpart = resultado - hour

    let min = 1 / 60

    decpart = min * Math.floor(decpart / min)

    let minute = Math.floor(decpart * 60) + ''

    if (minute.length < 2) {
        minute = '0' + minute; 
    }

    sign = sign == 1 ? '' : '-';

    notTime = sign + hour;
    time = sign + hour + ':' + minute + 'h';

    if(sign != ''){
        resultadoEx.innerHTML = 'Valores negativos não são aceitos'
    }else if(ValorA == ''){
        resultadoEx.innerHTML = 'Insira um valor'
    }else{
        resultadoEx.innerHTML = time
    }
}

function ex07(){
    let ValorA = Number(document.getElementById("ValorAEx07").value)
    let ValorB = Number(document.getElementById("ValorBEx07").value)

    let resultadoEx = document.getElementById("resultadoEx07")
    let resultado = ValorA * 250
    resultado = (resultado / 18) / ValorB

    resultadoEx.innerHTML = `O número total de viagens é ${resultado.toFixed(0)}`
}

function ex08(){
    const PI = 3.14159

    let ValorA = Number(document.getElementById("ValorAEx08").value)
    let ValorB = Number(document.getElementById("ValorBEx08").value)

    let resultadoEx = document.getElementById("resultadoEx08")
    let resultado = 2*PI*ValorA*(ValorA + ValorB)
    let resultado2 = PI*ValorA*ValorA*ValorB

    resultadoEx.innerHTML = `A área do cilíndro é de ${resultado.toFixed(2)} e o volume é de ${resultado2.toFixed(2)}`
}

function ex09(){
    let ValorA = document.getElementById("ValorAEx09").value
    let ValorB = Number(document.getElementById("ValorBEx09").value)

    let resultadoEx = document.getElementById("resultadoEx09")
    let resultado = ValorB * 1.05

    resultadoEx.innerHTML = `O valor de ${ValorA} com 5% de aumento é de R$${resultado}`
}

function ex10(){
    let ValorA = document.getElementById("ValorAEx10").value
    let ValorB = Number(document.getElementById("ValorBEx10").value)
    let ValorC = Number(document.getElementById("ValorCEx10").value)

    let resultadoEx = document.getElementById("resultadoEx10")
    let resultado = (ValorC / ValorB) * 100

    resultadoEx.innerHTML = `A cidade ${ValorA} teve um total de ${resultado}% de participação`
}