    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    var título = document.getElementById('titulohr')
   
           
    título.innerText = `Agora são ${hora} horas`
   
    if (hora <= 12 && hora > 5) {
        img.src='dia.jpg'
        document.body.style.background='#dacf31ce'
    }
    else if( hora > 12 && hora <=18 ){
        img.src ='tarde.jpg'
        document.body.style.background='#c76541'
    }else{

        if(hora == 1 || hora == 0){
            título.innerHTML = `Agora são ${hora} hora`
        }
        img.src ='noite.jpg'
        document.body.style.background = '#1b1b47'
    }




