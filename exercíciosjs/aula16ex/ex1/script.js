let numero = document.getElementById('num')
let listan = document.getElementById('adcnum')
let res = document.querySelector('div#res')
let valores = []



function adicionar(){

    if(numero.value < 1 || numero.value > 100){
        alert('Valor inválido')
    }else{
        let conferir = valores.indexOf(numero.value)

        if (conferir != -1) {
            alert("Valor já encontrado")
        }else{
            valores.push(numero.value)

            listan.innerHTML += `O número ${numero.value} foi adicionado <br>`
        }
    }
    numero.value = ""
    numero.focus()
   

}

function finalizar(){
    valores.sort()
    const tamanho = valores.length
    let soma = 0
    
    for(let i = 0; i <= tamanho - 1; i++){
        soma = Number(soma) + Number(valores[i])
    }

    const media = soma/tamanho
     

    res.innerHTML += `Ao todo, foram informados ${valores.length} números<br>`
    res.innerHTML += `O maior valor informado foi ${valores[valores.length - 1]}<br>`
    res.innerHTML += `O menor valor informado foi ${valores[0]}<br>`
    res.innerHTML += `A soma dos valores é  ${soma}<br>`
    res.innerHTML += `A media dos valores é  ${media}`
    


}