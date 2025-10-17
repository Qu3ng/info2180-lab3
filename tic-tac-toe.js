// tic-tac-toe.js

document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');
    const statusDisplay = document.getElementById('status');
    const newGameBtn = document.querySelector('.btn');
    
    squares.forEach(square => {
        square.classList.add('square');
    });

    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    squares.forEach((square, index) => {
        square.addEventListener('click', function() {
            if (gameState[index] === '' && gameActive) {
                gameState[index] = currentPlayer;
                this.textContent = currentPlayer;
                this.classList.add(currentPlayer);
                
                const winningConditions = [
                    [0, 1, 2],
                    [3, 4, 5], 
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
                ];
                
                for (let i = 0; i < winningConditions.length; i++) {
                    const [a, b, c] = winningConditions[i];
                    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                        gameActive = false;
                        statusDisplay.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
                        statusDisplay.classList.add('you-won');
                        return;
                    }
                }

                if (!gameState.includes('')) {
                    gameActive = false;
                    statusDisplay.textContent = "Game ended in a draw!";
                    return;
                }
                
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });

        square.addEventListener('mouseover', function() {
            if (gameState[index] === '' && gameActive) {
                this.classList.add('hover');
            }
        });

        square.addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });
    });

    newGameBtn.addEventListener('click', function() {
        gameState = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = 'X';
        
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X');
            square.classList.remove('O');
        });
        
        statusDisplay.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDisplay.classList.remove('you-won');
    });
});