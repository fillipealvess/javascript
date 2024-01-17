function verificar(){
    const data = new Date
    const ano = data.getFullYear()
    const anof = document.getElementById('txtano')
    const res = document.querySelector('p#msg')

    if (  anof.value.length == 0 || anof.value > ano) {
        alert('Reveja os dados e tente novamente!')
    } else{
        const idade = ano - anof.value
        const m = document.getElementById('masc') 
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        res.innerHTML = `Detectamos um homem de ${idade} anos!`

        if (m.checked) {
            
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criancaH.jpg')

            }else if(idade < 21){
                img.setAttribute('src', 'jovemH.jpg')

            }else if(idade < 50){
                img.setAttribute('src', 'adultoH.jpg')

            }else{
                img.setAttribute('src', 'idosoH.jpg')

            }
        }else{
            res.innerHTML = `Detectamos uma mulher de ${idade} anos!`
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criancaM.jpg')

            }else if(idade < 21){
                img.setAttribute('src', 'jovemM.jpg')

            }else if(idade < 50){
                img.setAttribute('src', 'adultaM.png')

            }else{
                img.setAttribute('src', 'idosaM.jpg')

            }
        }
            
            res.appendChild(img)
    }
}