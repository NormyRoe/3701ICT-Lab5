// The game model will manage:
// - board state
// - move history
// - current step index
// - making moves
// - navigating moves
// - resetting the game


// Function to create an empty board
export function createEmptyBoard()
{
    return ["", "", "", "", "", "", "", "", ""]
}

// Function to determine if the board is empty
export function is_board_empty(board)
{
    return board.every(cell => cell === "");
}


// Function to create game object with initial history record
export function createNewGame()
{
    // Create variable for an empty board
    const empty = createEmptyBoard();

    return {
        // History starts with one empty board
        history: [empty],
        // We are currently looking at move 0
        step: 0,
        // Set x_is_next as true as X moves first
        x_is_next: true
    };
}

// Function to get the current board
export function get_current_board(game)
{
    return game.history[game.step];
}

// Function to place X or O on board
export function placeMark(board, index, mark)
{
    // If cell is not empty
    if (board[index] !== "")
    {
        // ignore invalid move
        return board;
    }

    // Make a copy of the board
    const new_board = [...board];

    // Places X or O
    new_board[index] = mark;

    // Returns the new board
    return new_board;
}

// Function to make a move on the game
export function makeMove(game, index)
{
    // Get the current board based on the step
    const current_board = game.history[game.step];

    // Make the mark X if x_is_next is true,
    // otherwise make the mark O
    const mark = game.x_is_next ? "X" : "O";

    // Create a new board with the new mark added
    // Essentially creating a snapshot of the board
    const new_board = placeMark(current_board, index, mark);

    // If the move was invalid (cell already filled)
    if (new_board === current_board)
    {
        // Return the game unchanged
        return game;
    }

    // Create a new history up to the current step
    // This discards any "future" moves if the user rewinds
    const new_history = game.history.slice(0, game.step + 1);

    // Add the new board (snapshot) to the history
    new_history.push(new_board);

    return {
        // Return the board's latest history record
        history: new_history,
        // Move forward one step
        step: new_history.length - 1,
        // Switch turns
        x_is_next: !game.x_is_next
    };
}


// Function to check if a player has won
export function get_winner(board)
{
    // All possible winning lines (indices on the board)
    const lines = [
        [0, 1, 2],  // top row
        [3, 4, 5],  // middle row
        [6, 7, 8],  // botton row
        [0, 3, 6],  // left column
        [1, 4, 7],  // middle column
        [2, 5, 8],  // right column
        [0, 4, 8],  // diagonal
        [2, 4, 6],  // diagonal
    ];

    // Loop through each winning line
    for (let [a, b, c]  of lines)
    {
        // If the three cells are the same and not empty
        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c])
        {
            // Return both the winner and the winning line
            return {
                winner: board[a],
                line: [a, b, c]
            };
        }
    }

    // No winner
    return {
        winner: null,
        line: []
    };

}

// Function to check if all cells contain a move
export function is_board_full(board)
{
    // The board is considered "full" when every cell is NOT an empty string.
    // If even one cell is empty (""), the game is not yet a tie.
    // Using .every() makes this a clean and readable check.
    return board.every(cell => cell !== "");
}

// Function to get the current game status
export function get_game_status(game)
{
    // Retrieve the board for the current step in history
    const board = get_current_board(game);

    // Determine if there is a winner and get the winning line (if any)
    const { winner, line } = get_winner(board);

    // If a winner exists, the game is over with a win result
    if (winner)
    {
        return {
            state: "win",    // game has been won
            winner: winner,  // "X" or "O"
            line: line       // the winning sequence of 3 cells
        };
    }

    // If the board is full and no winner, the game ends in a tie
    if (is_board_full(board))
    {
        return {
            state: "tie",   // game ended with no winner
            winner: null,   // no winning player
            line: []        // no winning line to highlight
        };
    }

    // Otherwise, the game is still in progress
    // Determine whose turn it is based on the step number:
    // - Even step numbers mean X's turn (step 0 = X starts)
    // - Odd step numbers mean O's turn
    const next_player = (game.step % 2 === 0) ? "X" : "O";

    return {
        state: "playing",   // game is ongoing
        next: next_player,  // "X" or "O" to play next
        line: []            // no winning line yet
    };
}