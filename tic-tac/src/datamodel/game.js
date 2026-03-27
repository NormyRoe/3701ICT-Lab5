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

