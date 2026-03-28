{/* Import libraries/Functions */}
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

{/* Import components from src folder */}
import Title from '../components/Title';
import TButton from '../components/TButton';
import SButton from '../components/SButton';
import Message from '../components/Message';
import Popup from '../components/Popup';
import { loadAllGames } from '../datamodel/savedata';
import SavedGameItem from '../components/SavedGameItem';





export default function LoadPage( {navigation} ) {
    // State variable to store the list of saved games
    const [games, setGames] = useState([]);

    // State for delete popup visibility
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    // State to store which game is selected for deletion
    const [selectedGame, setSelectedGame] = useState(null);

    // useEffect runs ONCE when the screen loads
    useEffect(() => {
        async function fetchGames() 
        {
            // Load all saved games from AsyncStorage
            const allGames = await loadAllGames();

            // Update state so the UI re-renders with the saved games
            setGames(allGames);
            
        }

        // Call the function
        fetchGames();
    }, []);    // Empty dependency array -> runs only once

    // Function to handle loading a saved game
    function handleLoad(game)
    {
        // Navigate back to Home and pass the saved game object
        navigation.navigate("Home", { loadedGame: game });

        //console.log("Load pressed for: ", game.id);
    }

    // Function to handle deleting a saved game
    function handleDelete(game)
    {
        // Store the selected game
        setSelectedGame(game);

        // Show the popus
        setShowDeletePopup(true);

        //console.log("Delete pressed for: ", game.id);
    }

    // Function to confirm deletion
    async function confirmDelete()
    {
        if (!selectedGame) return;

        // Removge the game from AsyncStorage
        await AsyncStorage.removeItem(selectedGame.id);


        // Remove it from the list in state
        setGames(games.filter(g => g.id !== selectedGame.id));

        // Close popup
        setShowDeletePopup(false);
        setSelectedGame(null);
    }


    // Function to cancel deletion
    function cancelDelete()
    {
        // Close popup
        setShowDeletePopup(false);
        setSelectedGame(null);
    }

  
    return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.top_section}>
        <Title text = "Load Game" />
      </View>
      {/* End Top Section */}
      {/* Middle Section */}
      <View style={styles.middle_section}>
        {/* Add Scrollable View */}
        <ScrollView>
          {/* List of saved games */}
          {/* If no games exist, show a message */}
          {games.length === 0 && (
            <Message text = "No saved games found." />
          )}
          {/* Otherwise, display each saved game */}
          {games.length > 0 && games.map((game, index) => (
            <SavedGameItem 
                key={game.id} 
                game={game} 
                index={index}
                onLoad={handleLoad}
                onDelete={handleDelete}
            />
          ))}
          {/* End List of saved games */}
        </ScrollView>
        {/* End Scrollable View */}
      </View>
      {/* End Middle Section */}
      {/* Bottom Section */}
      <View style={styles.bottom_section}>
          <TButton text="Back" onPress={() => navigation.navigate("Home")} />
      </View>
      {/* End Bottom Section */}
      {showDeletePopup && (
        <Popup 
            title="Delete Saved Game"
            message="Are you sure you want to delete this saved game?"
        >
            <SButton text="DELETE" onPress={confirmDelete} />
            <SButton text="CANCEL" onPress={cancelDelete} />
        </Popup>
        )}
    </View>
    );
}



{/* Style Sheets */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,   // gives space around all 3 sections
  },
  top_section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  middle_section: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom_section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
