{/* Import libraries/Functions */}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';


{/* Import components from src folder */}
import Title from '../components/Title';
import TButton from '../components/TButton';
import Board from '../components/Board';
import colors from '../constants/colors';
import { createNewGame, makeMove, is_board_empty, get_current_board } from '../datamodel/game';



export default function Home( {navigation}) {

  // Setting the game state
  const [game, setGame] = useState(createNewGame());

  // Variable for disabling new game button
  const new_game_disabled = is_board_empty(get_current_board(game));

  // Function for when a cell is pressed
  function handleCellPress(index)
  {
    // Variable for storing the current board after move made
    const new_move = makeMove(game, index);

    // Updating game variable to reflect the board after the new move
    setGame(new_move);
  }

  // Function for new game
  function newGame()
  {
    setGame(createNewGame());
  }

  // Function for moving backwards through the move history
  function goBack()
  {
    // Only move back if we are NOT already at the first move (step 0)
    if (game.step > 0)
    {
      // Calculate the new step index (one move earlier)
      const new_step = game.step - 1;

      // Update the game state:
      // - step moves back by one
      // - x_is_next is recalculated based on the new step
      //   (even step = X's turn, odd step = O's turn)
      // This keeps the turn order consistent with the board snapshot.
      setGame({
        ...game,
        step: new_step,
        x_is_next: (new_step % 2 === 0)
      });
    }
  }

  // Function for moving forwards through the move history
  function goForward()
  {
    // Only move forward if we are NOT already at the latest move
    if (game.step < game.history.length - 1)
    {
      // Calculate the new step index (one move later)
      const new_step = game.step + 1;

      // Update the game state:
      // - step moves forward by one
      // - x_is_next is recalculated based on the new step
      //   (even step = X's turn, odd step = O's turn)
      // This ensures the correct player is shown as next to move.
      setGame({
        ...game,
        step: new_step,
        x_is_next: (new_step % 2 === 0)
      });
    }
  }



  return (
    <View style={styles.container}>
      {/* Table Section */}
      <View style={styles.table}>
        {/* Top Section */}
        <View style={styles.top_section}>
          <Title text="Tic Tac Toe App!" />
        </View>
        {/* End Top Section */}
        {/* Middle Section */}
        <View style={styles.middle_section}>
          {/* Game Navigation Buttons */}
          <View style={styles.navRow}>
            <TButton 
              text="<" 
              size="small" 
              onPress={goBack} 
              disabled={game.step === 0}
            />
            <TButton 
              text="New Game" 
              onPress={newGame} 
              disabled={new_game_disabled}
            />
            <TButton 
              text=">" 
              size="small" 
              onPress={goForward} 
              disabled={game.step === game.history.length - 1} 
            />            
          </View>
          {/* End Game Navigation Buttons */}
          {/* Game Board */}
          <Board 
            board={get_current_board(game)}
            onCellPress={handleCellPress}
          />
        </View>
        {/* End Middle Section */}
        {/* Bottom Section */}
        <View style={styles.bottom_section}>
          <View style={styles.buttonRow}>
            {/* Add Buttons */}
            <TButton text="Rules" onPress={() => navigation.navigate("Rules")} />
            <TButton text="Credits" onPress={() => navigation.navigate("Credits")} />
          </View>
        </View>
        {/* End Bottom Section */}
      </View>
      {/* End Table Section */}
    </View>
  );
}





{/* Style Sheets */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    flex: 1,
    backgroundColor: colors.tableBackground,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  top_section: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  },
  middle_section: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  bottom_section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,              // modern RN supports gap!
  },
  navRow: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 30,
  marginVertical: 10,
  marginBottom: 60,  // adds space at bottom
  },
});
