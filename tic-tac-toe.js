// tic-tac-toe.js

document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');
    
    squares.forEach(square => {
        square.classList.add('square');
    });

    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];

    squares.forEach((square, index) => {
        square.addEventListener('click', function() {
            if (gameState[index] === '') {
                gameState[index] = currentPlayer;
                this.textContent = currentPlayer;
                this.classList.add(currentPlayer);
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });

        square.addEventListener('mouseover', function() {
            if (gameState[index] === '') {
                this.classList.add('hover');
            }
        });

        square.addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });
    });
});