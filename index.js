//Digite o primeiro valor para vitorias e o segundo para derrotas:
victorysCount(70, 30);

function victorysCount(victories, defeats) {
    // Calcula o saldo de vitórias
    const rankedBalance = victories - defeats;
    let level = "";
  
    // Estrutura de decisão para definir o nível com base no saldo
    switch (true) {
      case rankedBalance <= 10:
        level = "iron";
        break;
      case rankedBalance <= 20:
        level = "bronze";
        break;
      case rankedBalance <= 50:
        level = "silver";
        break;
      case rankedBalance <= 80:
        level = "gold";
        break;
      case rankedBalance <= 90:
        level = "diamond";
        break;
      case rankedBalance <= 100:
        level = "legend";
        break;
      default:
        level = "immortal";
        break;
    }
  
    // Exibe o resultado no console
    console.log(
      `The Hero has ${rankedBalance} victory points and is at the ${level} level.`
    );
  }
