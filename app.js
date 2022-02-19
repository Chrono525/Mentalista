var erros = 0
function Chutar() {
    var numeroSecreto = parseInt(Math.random() * 11);
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10";
     } else if(erros > 2){
          elementoResultado.innerHTML = "Você atingiu o número de limites de tentativas"
          return;
      } else {
      elementoResultado.innerHTML = "Você errou, o número secreto era " + numeroSecreto;
      erros+=1;
    }
  }