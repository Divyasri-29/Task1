var n = 0; 
var currentRow = 0;
var currentCol = 0;
var table = document.getElementById("TABLE"); 
var buttonContainer = null;
var dog = [];
var finalRow, finalCol;

function clearTable() {
    table.innerHTML = '';
}

function createTable() {
    for (var i = 0; i < n; i++) {
        var table_row = document.createElement("tr");
        for (var j = 0; j < n; j++) {
            var table_data = document.createElement("td");
            table_row.appendChild(table_data);
            if (i === 0 && j === 0) {
                var img = document.createElement("img");
                img.src = "https://img.clipart-library.com/2/clip-school-animated-gif/clip-school-animated-gif-16.gif";
                img.id = "movableObject";
                table_data.appendChild(img);
                currentRow = i;
                currentCol = j;
            }
        }
        table.appendChild(table_row);
    }

    placedog();
    placeFinalDestination();
}

function placedog() {
    dog = [];
    while (dog.length < 5) {
        var dogRow = Math.floor(Math.random() * n);
        var dogCol = Math.floor(Math.random() * n);
        if ((dogRow !== 0 || dogCol !== 0) && !dog.some(([r, c]) => r === dogRow && c === dogCol)) {
            dog.push([dogRow, dogCol]);
            var cell = table.rows[dogRow].cells[dogCol];
            cell.style.backgroundImage = "url('https://img.clipart-library.com/2/clip-transparent-animal-gif/clip-transparent-animal-gif-7.gif')";
            cell.style.backgroundSize = "cover";
            cell.style.backgroundSize='100% 100%';
        }
    }
}

function placeFinalDestination() {
    do {
        finalRow = Math.floor(Math.random() * n);
        finalCol = Math.floor(Math.random() * n);
    } while ((finalRow === 0 && finalCol === 0) || snakes.some(([r, c]) => r === finalRow && c === finalCol));

    var cell = table.rows[finalRow].cells[finalCol];
    cell.style.backgroundImage = "url('https://clipart-library.com/2023/country-house-clipart-md.png')";
    cell.style.backgroundSize = '100% 100%';
}

function removeButtons() {
    if (buttonContainer) {
        buttonContainer.parentNode.removeChild(buttonContainer);
        buttonContainer = null; 
    }
}

function createButtons() {
    buttonContainer = document.createElement("div");
    buttonContainer.id = "buttonContainer";

    var top = document.createElement("button");
    top.innerHTML = "TOP";
    top.onclick = function() { move('up'); };
    buttonContainer.appendChild(top);

    var down = document.createElement("button");
    down.innerHTML = "DOWN";
    down.onclick = function() { move('down'); };
    buttonContainer.appendChild(down);

    var left = document.createElement("button");
    left.innerHTML = "LEFT";
    left.onclick = function() { move('left'); };
    buttonContainer.appendChild(left);

    var right = document.createElement("button");
    right.innerHTML = "RIGHT";
    right.onclick = function() { move('right'); };
    buttonContainer.appendChild(right);

    document.getElementById("mybody").appendChild(buttonContainer);
}

function move(direction) {
    var img = document.getElementById("movableObject");

    var newRow = currentRow;
    var newCol = currentCol;

    if (direction === 'up' && currentRow > 0) {
        newRow--;
    } else if (direction === 'down' && currentRow < n - 1) {
        newRow++;
    } else if (direction === 'left' && currentCol > 0) {
        newCol--;
    } else if (direction === 'right' && currentCol < n - 1) {
        newCol++;
    } else {
        alert("Cannot move in that direction.");
        return;
    }

    var newCell = table.rows[newRow].cells[newCol];
    if (newCell) {
        if (snakes.some(([r, c]) => r === newRow && c === newCol)) {
            showGameOver();
            setTimeout(() => {
                hideGameOver();
                clearTable();
                createTable();
            }, 5000); // Show game over for 5 seconds
            return;
        }

        if (newRow === finalRow && newCol === finalCol) {
            showCelebration();
            setTimeout(() => {
                hideCelebration();
                clearTable();
                createTable();
            }, 5000); // Show celebration for 5 seconds
            return;
        }

        newCell.appendChild(img);
        currentRow = newRow;
        currentCol = newCol;
    }
}

function fun() {
    n = parseInt(window.prompt("Enter n value"), 10);

    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    clearTable();
    createTable();
    removeButtons();
    createButtons();
}

function showCelebration() {
    document.getElementById('celebration').classList.remove('hidden');
    createConfetti(true);
}

function hideCelebration() {
    document.getElementById('celebration').classList.add('hidden');
    clearConfetti();
}

function showGameOver() {
    document.getElementById('game-over').classList.remove('hidden');
    document.getElementById('game-over').classList.add('shake');
}

function hideGameOver() {
    document.getElementById('game-over').classList.add('hidden');
    document.getElementById('game-over').classList.remove('shake');
}

function createConfetti(isCelebration) {
    var confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = ''; // Clear existing confetti

    var colors = isCelebration ? ['#ff0', '#0f0', '#00f', '#f0f', '#0ff'] : ['#f00', '#800', '#400'];

    for (var i = 0; i < 200; i++) {
        var confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiContainer.appendChild(confetti);
    }

    for (var i = 0; i < 50; i++) {
        var spring = document.createElement('div');
        spring.className = 'spring';
        spring.style.left = Math.random() * 100 + 'vw';
        spring.style.animationDelay = Math.random() * 2 + 's';
        spring.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiContainer.appendChild(spring);
    }
}

function clearConfetti() {
    var confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = '';
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
