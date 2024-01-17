function contar() {
    let inicio =document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.querySelector('div#res')

    if (inicio.value.length || fim.value.length || passo.value.length ) {
        res.innerText = 'Impossível contar!'
    }else{
        
    }
}