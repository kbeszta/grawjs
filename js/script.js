var buttonRock, buttonPaper, buttonScissors, buttonName;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

// function for buttons click

function buttonClicked(buttonName) {
    clearMessages();
    console.log(buttonName + ' został kliknięty');

  var moveId, computerMove, playerMove, argComputerMove, argPlayerMove, randomNumber; 

  function getMoveName(moveId) {
      console.log('wywołano funkcję getMoveName z argumentem: ' + moveId);
      if (moveId == 1) {
        return 'kamień';
      } else if (moveId == 2) {
          return 'papier';
      } else if (moveId == 3) {
          return 'nożyce';
      } else {
          printMessage('Nie znam ruchu o id' + moveId + '. Zakładam, że chodziło o "kamień".');
          return 'kamień';
      }
    }

  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResult z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz! :)');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz! :)');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz! :)');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else {
        printMessage('Przegrywasz! :(');
    }
    printMessage('Twoje zagranie to ' + argPlayerMove + ', a moje ' + argComputerMove);
  }

  playerMove = buttonName;
  console.log('Ruch gracza to ' + playerMove);

  randomNumber = Math.ceil(Math.random() * 3);
  console.log('Wylosowana liczba to: ' + randomNumber);

  computerMove = getMoveName(randomNumber);
  console.log('Ruch komputera to: ' + computerMove);

  displayResult(playerMove, computerMove);
}


buttonRock.addEventListener('click', function () {
    buttonClicked('Kamień');
});

buttonPaper.addEventListener('click', function() {
    buttonClicked('papier');
});

buttonScissors.addEventListener('click', function() {
    buttonClicked('Nożyce')
});