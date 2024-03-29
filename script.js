const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

function playerMove(cellIndex) {
  if (gameActive && board[cellIndex] === '') {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
  }
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      gameActive = false;
      const winningTeam = board[a]; // Identify the winning team
      document.getElementById('status').textContent = `Player ${winningTeam} Wins!`; // Display winning team
      document.getElementsByClassName('cell')[a].classList.add('winning-cell');
      document.getElementsByClassName('cell')[b].classList.add('winning-cell');
      document.getElementsByClassName('cell')[c].classList.add('winning-cell');
      return;
    }
  }

  if (!board.includes('')) {
    gameActive = false;
    document.getElementById('status').textContent = "It's a Draw!";
  }
}

function resetGame() {
  board.fill('');
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
  const cells = document.getElementsByClassName('cell');
  for (const cell of cells) {
    cell.textContent = '';
    cell.classList.remove('winning-cell'); // Remove winning-cell class
  }
}
