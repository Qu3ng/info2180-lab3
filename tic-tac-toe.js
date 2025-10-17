// tic-tac-toe.js

document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');
    
    squares.forEach(square => {
        square.classList.add('square');
    });
});