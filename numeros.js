//no modelo html
//numero de 1 a 100
//adicionar numero em array
//quantos numeros cadastrados
//o maior numero
//o menor numero
//a soma dos valores
//a media entre os valores
let digito = document.querySelector('input#fNum')
let valor = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []//array de numeros
                       
function adicionar(){
      if(eNumero(digito.value) && !inLista(digito.value, valores)){
           valores.push(Number(digito.value))//converte em numeros e adiciona no array os valores digitados pelo usuario
           let item = document.createElement('option')//cria o elemento html option
           item.text = `valor ${digito.value} adicionado`//adiciona o texto ao elemento html
           valor.appendChild(item)//adiciona a variavel valor ao elemento html criado
           res.innerHTML = ""//limpa a tela
       }else{
             window.alert('Valor inválido ou já encontrado na lista')
            }
            digito.value = "" //limpa o campo de valores a serem digitados
            digito.focus()//da o foco a variavel digito
      }


function eNumero(n){
      if(Number(n) >= 1 && Number(n) <= 100) {//limita os numeros digitados entrer 1 e 100
            return true
      } else {            
            return false
            }      
      }

      
function inLista(n, valores){
      if (valores.indexOf(Number(n)) !=-1){//verifica se é um numero, 
            //procura itens no array e valida se eles estiverem na lista          
            return true
      } else {           
            return false
            }
      }

      
function resultado(){
      if(valores.length == 0){//se o campo de digitação estiver limpo pede para adicionar um item
            alert('adicione valores antes de finalizar')
      } else {
            let total = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0                              
           
            for(let pos in valores){//percorre todos os itens do array                  
                  soma += valores[pos]
                  // faz a soma dos elementos do array            
                  if(valores[pos] > maior)
                  maior = valores[pos]
                  //verifica qual item é o maior do array
                  if(valores[pos] < menor)
                  menor = valores[pos]
                  //verifica qual item é o menor do array 
                                
            }

            let divisao = soma / total
            media = divisao.toFixed(2)          
            //verifica a media dos elementos e delimita em 2 a quantidade de numeros depois da ,
valores.sort(function(a, b) {
      return a - b;
}) //ordena o vetor em ordem crescente.


            res.innerHTML = ""
            res.innerHTML += `<p>A quantidade de elementos é: ${total} </p>`
            res.innerHTML += `<p>O maior número digitado é: ${maior} </p>`                         
            res.innerHTML += `<p>O menor número digitado é: ${menor} </p>`
            res.innerHTML += `<p>A soma dos números digitados é: ${soma} </p>`
            res.innerHTML += `<p>A ordem dos números digitados é: ${valores} </p>`
            res.innerHTML += `<p>A média entre os números digitados é: ${media} </p>`
            
      }
}