function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var nasc = document.getElementById('nasc')
    var resp = document.querySelector('div#res')
    nasc = Number(nasc.value)

    if(nasc == '' || nasc > anoAtual){
        alert('Dados invalidos tente novamente!!!')
    } else {
        var sexo = document.getElementsByName('radsexo')
        var idade = anoAtual - nasc
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'imagem')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 13){ //crianca
                imagem.setAttribute('src', '../fotos/foto_bebe_m.png') 
            } else if(idade < 21){ // jovem
                imagem.setAttribute('src', '../fotos/foto_jovem_m.png') 
            } else if(idade < 50){ // adulto    
                imagem.setAttribute('src', '../fotos/foto_adulto_m.png') 
            } else { //idoso
                imagem.setAttribute('src', '../fotos/foto_idoso_m.png') 
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 13){ //crianca
                imagem.setAttribute('src', '../fotos/foto_bebe_f.png')
            } else if(idade < 21){ // jovem
                imagem.setAttribute('src', '../fotos/foto_jovem_m.png') 
            } else if(idade < 50){ // adulto    
                imagem.setAttribute('src', '../fotos/foto_jovem_m.png') 
            } else { //idoso
                imagem.setAttribute('src', '../fotos/foto_jovem_m.png') 
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(imagem)

  
    }
}


