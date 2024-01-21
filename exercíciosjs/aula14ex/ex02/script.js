function tabuada(){
    let numero = document.getElementById('num')

    if (numero.value.length == 0) {
        alert('Digite um número para obter o resultado!')

    }else{
        let n = Number(numero.value)
        let res = document.querySelector('div#res')

        for (let i = 1; i <= 10; i++){

            let tab = n * i 

            res.innerHTML += `${n} x ${i} = ${tab} <br>`
        }
    }
}