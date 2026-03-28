{/* Import libraries/Functions */}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


{/* Import components from src folder */}
import Title from '../components/Title';
import Label from '../components/Label';
import TButton from '../components/TButton';
import SButton from '../components/SButton';
import Popup from '../components/Popup';
import Board from '../components/Board';
import colors from '../constants/colors';
import { 
  createNewGame, 
  makeMove, 
  is_board_empty, 
  get_current_board, 
  get_game_status 
} from '../datamodel/game';
import { saveGameToStorage } from '../datamodel/savedata';




export default function Home( {navigation, route}) {

  // Setting the game state
  const [game, setGame] = useState(createNewGame());

  // Setting the state for when the Save popup is visible
  const [showSavePopup, setShowSavePopup] = useState(false);

  // If a saved game was passed from LoadPage, load it into state
  useEffect(() => {
    if (route.params && route.params.loadedGame)
    {
      const saved = route.params.loadedGame;

      // Rebuild the game object using the saved history and step
      setGame({
        history: saved.history,
        step: saved.steps,
        x_is_next: (saved.steps % 2 === 0)  // even steop = X's turn
      });

      // Clear the param so it doesn't reload on every render
      navigation.setParams({ loadedGame: null });
    }
  }, [route.params]);

  // Determine status of the game
  const status = get_game_status(game);

  // Verible for whether save is enabled
  const save_enabled = (status.state === "win" || status.state === "tie");

  // Create variable for status text
  let status_text = "";

  // If the status is "playing"
  if (status.state === "playing")
  {
    status_text = `${status.next} to play`;
  }
  // else if status is "win"
  else if (status.state === "win") 
  {
    status_text = `${status.winner} wins`;    
  } 
  // else status is "tie"
  else 
  {
    status_text = "Tie";    
  }

  // Variable for disabling new game button
  const new_game_disabled = is_board_empty(get_current_board(game));

  // Function for when a cell is pressed
  function handleCellPress(index)
  {
    // Prevent moves if the game is already over (win or tie)
    if (status.state !== "playing")
    {
      return; // Ignore taps once the game has ended
    }

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

  // Function to confirm save
  async function confirmSave()
  {
    // Save the game
    await saveGameToStorage(game, status);

    // Close popup
    setShowSavePopup(false);

    // Start new game
    setGame(createNewGame());

  }

  // Function to cancel save
  function cancelSave()
  {
    setShowSavePopup(false);
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
          {/* Adding board area */}
          <View style={styles.board_area}>
            {/* Game State Label */}
            <Label text={status_text}/>
            {/* Game Board */}
            <Board 
              board={get_current_board(game)}
              onCellPress={handleCellPress}
              winningLine={status.line}
            />
          </View>
          {/* End board area */}
        </View>
        {/* End Middle Section */}
        {/* Bottom Section */}
        <View style={styles.bottom_section}>
          <View style={styles.buttonRow}>
            {/* Add Buttons */}
            <TButton 
              text="Load" 
              size="small" 
              onPress={() => navigation.navigate("Load Page")} 
            />
            <TButton 
              text="Save" 
              size="small" 
              onPress={() => setShowSavePopup(true)} 
              disabled={!save_enabled}
            />
            <TButton 
              text="Rules" 
              size="small" 
              onPress={() => navigation.navigate("Rules")} 
            />
            <TButton 
              text="Credits" 
              size="small" 
              onPress={() => navigation.navigate("Credits")} 
            />
          </View>
        </View>
        {/* End Bottom Section */}
      </View>
      {/* End Table Section */}
      {showSavePopup && (
        <Popup 
          title="Save Game"
          message="Are you sure you want to save the game?"
        >
          <SButton text="SAVE AND START A NEW GAME" onPress={confirmSave} />
          <SButton text="CANCEL" onPress={cancelSave} />
        </Popup>
      )}
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
    gap: 5,              // modern RN supports gap!
  },
  navRow: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 30,
  marginVertical: 10,
  marginBottom: 60,  // adds space at bottom
  },
  board_area: {
  width: "100%",        // allows Label + Board to stretch
  alignItems: "center", // Board stays centered inside
},
});
