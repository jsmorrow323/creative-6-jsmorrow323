var board = [[null, null, null], [null, null, null], [null, null, null]];
var turn = 0;
var win = null;
var winner;
var winnerName;
var loserName;

function gameTurn(clicked_id) {
    var currentCell = clicked_id;
    
    updateBoard(currentCell, turn);
    
    if (turn % 2 == 0) {
        // X STARTS
        placeX(currentCell);
        turn++;
    } else {
        // SWITCH TO O
        placeO(currentCell);
        turn++;
    }
}

function placeO(currentCell) {
    // alert("O Placed at: " + currentCell);
    document.getElementById(currentCell).innerHTML = "<img src='/images/O.png' style='height: 230px; width: 230px;'>";
    cellUsed(currentCell);
    gameStatus();
}

function placeX(currentCell) {
    // alert("X Placed at: " + currentCell);
    document.getElementById(currentCell).innerHTML = "<img src='/images/X.png' style='height: 160px; width: 160px;'>";
    cellUsed(currentCell);
    gameStatus();
}

function cellUsed(currentCell) {
    // alert("Deactivating: " + currentCell);
    document.getElementById(currentCell).setAttribute("onclick", "" );
}

function updateBoard(currentCell, turn) {
    var value;
    if (turn % 2 == 0) {
        value = 1;
    } else {
        value = -1;
    }
    //console.log(currentCell);
    //console.log(value);
    
    if (currentCell == "1") {
        board[0][0] = value;
    } else if (currentCell == "2") {
        board[0][1] = value;
    } else if (currentCell == "3") {
        board[0][2] = value;
    } else if (currentCell == "4") {
        board[1][0] = value;
    } else if (currentCell == "5") {
        board[1][1] = value;
    } else if (currentCell == "6") {
        board[1][2] = value;
    } else if (currentCell == "7") {
        board[2][0] = value;
    } else if (currentCell == "8") {
        board[2][1] = value;
    } else if (currentCell == "9") {
        board[2][2] = value;
    }    
}

function gameStatus() {
    //console.dir(board);
    
    //Horizontal Wins
    if (board[0][0] + board[0][1] + board[0][2] == 3) {
        winner = "Player 1";
        win = true;
    } else if (board[0][0] + board[0][1] + board[0][2] == -3) {
        winner = "Player 2";
        win = true;
    } else if (board[1][0] + board[1][1] + board[1][2] == 3) {
        winner = "Player 1";
        win = true;
    } else if (board[1][0] + board[1][1] + board[1][2] == -3) {
        winner ="Player 2";
        win = true;
    } else if (board[2][0] + board[2][1] + board[2][2] == 3) {
        winner = "Player 1";
        win = true;
    } else if (board[2][0] + board[2][1] + board[2][2] == -3) {
        winner ="Player 2";
        win = true;
    }
    
    //Vertical Wins
    if (board[0][0] + board[1][0] + board[2][0] == 3) {
        winner = "Player 1";
        win = true;
    } else if (board[0][0] + board[1][0] + board[2][0] == -3) {
        winner = "Player 2";
        win = true;
    } else if (board[0][1] + board[1][1] + board[2][1] == 3) {
        winner = "Player 1";
        win = true;
    } else if (board[0][1] + board[1][1] + board[2][1] == -3) {
        winner ="Player 2";
        win = true;
    } else if (board[0][2] + board[1][2] + board[2][2] == 3) {
        winner = "Player 1";
        win = true;
    } else if (board[0][2] + board[1][2] + board[2][2] == -3) {
        winner ="Player 2";
        win = true;
    }
    
    //Cross Wins
    if (board[0][0] + board[1][1] + board[2][2] == 3) {
        winner = "Player 1";
        win = true;
    } else if (board[0][0] + board[1][1] + board[2][2] == -3) {
        winner = "Player 2";
        win = true;
    } else if (board[2][0] + board[1][1] + board[0][2] == 3) {
        winner = "Player 1";
        win = true;
    } else if (board[2][0] + board[1][1] + board[0][2] == -3) {
        winner ="Player 2";
        win = true;
    }
    
    if (winner == "Player 1") {
        winnerName = document.getElementById('player1').value;
        loserName = document.getElementById('player2').value;
    } else if (winner == "Player 2") {
        winnerName = document.getElementById('player2').value;
        loserName = document.getElementById('player1').value;
    }
    
    if (turn == 8 & win == null) {
        win = false;
    }
    
    if (win == true) {
        swal(`${winnerName} Won!`, `You defeated ${loserName}.`, "success");
        setTimeout(function() {reset()}, 1000);
    } else if (win == false) {
        swal("Cats Game!", "Try Again!", "warning");
        setTimeout(function() {reset()}, 1000);
    }
}

function reset() {
    //turn reset
    turn = 0;
    
    //clear user interface
    for (var i = 1; i < 10; i++) {
       var currentCell = i.toString();
       document.getElementById(currentCell).innerHTML = " ";
       document.getElementById(currentCell).setAttribute("onclick", "gameTurn(this.id);" );
    }
    
    //clear board
    board = [[null, null, null], [null, null, null], [null, null, null]];
    
    //reset win counter
    win = null;
}