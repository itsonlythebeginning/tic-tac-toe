let game_board = document.querySelector(".game__board")
let game_title = document.querySelector(".game__title")


let board

let playerX = "X"
let player0 = "0"
let startPlayer = player0
let gameOver = false

function startGame() {

    board = [
        ["", "", "",],
        ["", "", "",],
        ["", "", "",]
    ]

    for (let i = 0; i < board.length; i++) {

        for (let j = 0; j < board[i].length; j++) {


            let cell = document.createElement("div")
            cell.id = i + "-" + j
            cell.classList.add("game__board-cell")

            if ( i < (board.length - 1)) {
                cell.classList.add("game__board-cell_horizontal-line")
            }
            if ( j < (board[i].length - 1)) {
                cell.classList.add("game__board-cell_vertical-line")
            }

            game_board.appendChild(cell)

        }
    }

}



startGame()

game_board.addEventListener("click", fillCell)


function fillCell(event) {

    if (gameOver === false) {

        if (event.target.textContent === "") {

            event.target.textContent = startPlayer

            let x = event.target.id.split("-")[0]
            let y = event.target.id.split("-")[1]


            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    board[x][y] = startPlayer
                }
            }

            checkWinner()

            if (startPlayer === player0) {
                startPlayer = playerX
            }
            else{
                startPlayer = player0
            }

            changePlayerTitle()

        }

    }

}


function checkWinner() {
    for (let i = 0; i < board.length; i++) {

        for (let j = 0; j < board[i].length; j++) {

            if ( board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== "" ) {
                gameOver = true
                let winnerCell = document.getElementById(i.toString() + "-" + j.toString())
                winnerCell.classList.add("game__board-cell_winner")
            }

            else if (board[0][j] === board[1][j] && board[0][j] === board[2][j] && board[0][j] !== "") {
                gameOver = true
                let winnerCell = document.getElementById(i.toString() + "-" + j.toString())
                winnerCell.classList.add("game__board-cell_winner")
            }

            else if ( board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== "") {
                gameOver = true
                document.getElementById( 0 + "-" + 0).classList.add("game__board-cell_winner")
                document.getElementById( 1 + "-" + 1).classList.add("game__board-cell_winner")
                document.getElementById( 2 + "-" + 2).classList.add("game__board-cell_winner")
            }

            else if ( board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== "") {
                gameOver = true
                document.getElementById( 0 + "-" + 2).classList.add("game__board-cell_winner")
                document.getElementById( 1 + "-" + 1).classList.add("game__board-cell_winner")
                document.getElementById( 2 + "-" + 0).classList.add("game__board-cell_winner")
            }

        }

    }

}




function changePlayerTitle() {
    if (gameOver === false) {
        game_title.textContent = `Ходит ${startPlayer}`
    }
    else{
        if (startPlayer === playerX) {
            game_title.textContent = `Выиграл ${player0}`
        }
        else{
            game_title.textContent = `Выиграл ${playerX}`
        }
    }
}



