function pintarlinhaimpar(limpar){
    limpar.forEach(function (div){
        if( Number(div.innerHTML) % 2 == 0){
            div.style.background = '#FFABAB'
            interatividadeCorFFABAB(div)
        } else{
            div.style.background = '#D14D72'
            interatividadeCorD14D72(div)
        }
    })
}
function pintarlinhapar(lpar){
    lpar.forEach(function(div2){
        if(Number(div2.innerHTML)% 2 == 0){
            div2.style.background = '#D14D72'
            interatividadeCorD14D72(div2)
        }else{
            div2.style.background = '#FFABAB'
            interatividadeCorFFABAB(div2)
        }
    })
}

function interatividadeCorD14D72(div){
    div.onmouseover = function(){
        div.style.background = 'grey'
    }
    div.onmouseout = function(){
        div.style.background = '#D14D72' 
    }
}
function interatividadeCorFFABAB(div){
    div.onmouseover = function(){
        div.style.background = 'grey'
    }
    div.onmouseout = function(){
        div.style.background = '#FFABAB' 
    }  
}

function clicar(limpar, lpar){
    limpar.forEach(function(div){
        div.onclick = function(){
            NumerosEscolhidos.push(div.innerHTML)
            div.innerHTML = '<img src="imagens/formatura.png" width="20px"> '
            NumEs.innerHTML= NumerosEscolhidos
            dinheiro2 += 10
            dinheiro.innerHTML = `VALOR: R$ ${dinheiro2}`
        }
    })
    lpar.forEach(function(div){
        div.onclick = function(){
            NumerosEscolhidos.push(div.innerHTML)
            div.innerHTML = '<img src="imagens/formatura.png" width="20px"> '
            NumEs.innerHTML= NumerosEscolhidos 
            dinheiro2 += 10
            dinheiro.innerHTML = `VALOR: R$ ${dinheiro2}`
        }
    })
    
}

var limpar = document.querySelectorAll('div.linhaimpar')
var lpar = document.querySelectorAll('div.linhapar')
let NumerosEscolhidos = [""]
var NumEs = document.querySelector('td#NumerosEscolhidos')
var dinheiro = document.querySelector('td#dinheiro')
var dinheiro2 = 0
pintarlinhaimpar(limpar) 
pintarlinhapar(lpar)
clicar(limpar, lpar)
