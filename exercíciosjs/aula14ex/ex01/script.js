function contar(){
    const inicio = document.getElementById('txtn1')
    const fim = document.querySelector('input#txtn2')
    const passo = document.getElementById('txtn3')
    const res = document.getElementById('res')

    let i = Number(inicio.value)
    let f = Number(fim.value) 
    let p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
       
        res.innerText = 'Impossível contar'

    }else{
       
        res.innerText = 'Contagem: '

        if (i>f) {
            while (i>=f){
                if (p==0) {
                    alert('Passo inválido considerando passo 1.')
                    p = 1
                }
    
                if (i == f || i - p < f) {
                    res.innerText += `${i}.`
                }else{
                    res.innerText += `${i},`
                }
    
                
    
                i = i - p

            }
        }else{

            while(i<=f){
                if (p==0) {
                    alert('Passo inválido considerando passo 1.')
                    p = 1
                }
    
                if (i == f || i + p > f) {
                    res.innerText += `${i}.`
                }else{
                    res.innerText += `${i},`
                }
    
                
    
                i = i + p
    
            }

        }
            
        }
    }
   