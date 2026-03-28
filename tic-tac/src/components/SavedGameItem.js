{/* Import libraries/Functions */}
import { View, Text, StyleSheet } from 'react-native';


{/* Import components from src folder */}
import colors from '../constants/colors';
import TButton from './TButton';


// Component to display a single saved game's details
// Props:
// - game: the saved game object
// - index: the display number (0-based, so we add +1)
export default function SavedGameItem({ game, index, onLoad, onDelete })
{
    // Convert ISO date string into a readable date object
    const dateObj = new Date(game.date);

    // Format date and time separately
    const dateString = dateObj.toLocaleDateString();
    const timeString = dateObj.toLocaleTimeString();

    return (
        <View style={styles.container}>
            {/* First line: (n) Result, Steps, ID */}
            <Text style={styles.line}>
                {/* Display number in brackets */}
                <Text style={styles.label}>({index + 1})</Text>
                {/* Display Result */}
                <Text style={styles.label}> Result: </Text>{game.result}
                {/* Display Steps */}
                <Text style={styles.label}> Steps: </Text>{game.steps}
                {/* Display ID */}
                <Text style={styles.label}> ID: </Text>{game.id.slice(-4)}
            </Text>
            {/* End First line */}
            {/* Second line: Date and Time */}
            <Text style={styles.line}>
                {/* Display Date */}
                <Text style={styles.label}> Date: </Text>{dateString}
                {/* Display Time */}
                <Text style={styles.label}> Time: </Text>{timeString}
            </Text>
            {/* End Second line */}
            {/* Third line: Load and Delete Buttons */}
            <View style={styles.buttonRow}>
              {/* Add Load Button */}
              <TButton 
                text = "Load"
                size = "small"
                onPress={() => onLoad(game)}  // call parent function
              />
              {/* Add Delete Button */}
              <TButton 
                text = "Delete"
                size = "small"
                onPress={() => onDelete(game)}  // call parent function
              />
            </View>
            {/* End Third line */}
        </View>
    );
}



// Styles for the saved game item
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c0c0c0",     // darker grey background
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    width: "100%",
  },
  line: {
    color: "black",
    fontSize: 18,
    marginBottom: 4,
  },
  label: {
    fontWeight: "bold",
    color: "black",
  },
  buttonRow: {
    flexDirection: "row",             // place buttons side by side
    justifyContent: "space-evenly",   // evenly space buttons across the row
    alignItems: "center",             // vertically center them
    marginTop: 10,                    // small spacing above the row
    width: "100%",                    // ensure full width for spacing
  },
});