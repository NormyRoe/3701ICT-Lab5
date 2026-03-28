{/* Import libraries/Functions */}
import AsyncStorage from '@react-native-async-storage/async-storage';


// Function to save a game to AsyncStorage
export async function saveGameToStorage(game, status) {

    // Create a unique ID for this saved game
    const id = "games_" + Date.now().toString();

    // Build the object we want to save
    const savedGame = {
        id: id,
        date: new Date().toISOString(),
        result: status.state === "win" ? `${status.winner} wins` : "Tie",
        steps: game.step,
        history: game.history,
    };

    try {
        // Save to AsyncStorage
        await AsyncStorage.setItem(id, JSON.stringify(savedGame));
    } 
    catch (error) {
        console.log("Error saving game:", error);
    }
}

// Function to load ALL saved games from storage
export async function loadAllGames()
{
    try
    {
        // Get a list of all keys stored in AsyncStorage
        // Each save game uses its ID as the key
        const keys = await AsyncStorage.getAllKeys();

        // Filter keys so we ONLY load saved games
        // All saved games start with "games_"
        const gameKeys = keys.filter(key => key.startsWith("games_"));

        // Retrieve only the saved game key/value pairs
        // multiGet returns an array of [key, value] pairs
        const items = await AsyncStorage.multiGet(gameKeys);

        // Convert each JSON string back into a JavaScript object
        // items = [ [key1, value1], [key2, value2], ... ]
        const games = items.map(([keys, value]) => JSON.parse(value));

        // Return the array of saved game objects
        return games;
    }
    catch (error)
    {
        // If something goes wrong, log the error and return an empty list
        console.log("Error loading games:", error);
        return [];
    }

}

