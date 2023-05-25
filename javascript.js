var numeroAleatorio;
var tentativas;

    function novoJogo() {
      numeroAleatorio = Math.floor(Math.random() * 101);
      tentativas = 0;
      document.getElementById("resultado").innerHTML = "";
      document.getElementById("numDigitado").value = "";
    }

    function campoTentativas() {
      var numDigitado = parseInt(document.getElementById("numDigitado").value);

      if (numDigitado < 0 || numDigitado > 100) {
        alert("Por favor, digite um número válido entre 0 e 100.");
        return;
      }

      tentativas++;

      if (numDigitado === numeroAleatorio) {
        var pontos = 100 - tentativas + 1;
        document.getElementById("resultado").innerHTML = "Parabéns!! Você acertou em " + tentativas + " tentativs. Sua pontuação é: " + pontos;
      } 
	  else if (numDigitado < numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "Errou :( Tente um número maior na sua proxima jogada.";
      } 
	  else {
        document.getElementById("resultado").innerHTML = "Errou :(Tente um número menor na sua proxima jogada.";
      }
    }

    novoJogo();