{/* Import libraries/Functions */}
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

{/* Import components from src folder */}
import Title from '../components/Title';
import TButton from '../components/TButton';
import Message from '../components/Message';

const rules_text = 
`Tic Tac Toe
You probably already know how to play Tic-Tac-Toe. It's a really simple game, right? That's what most people think. But if you really wrap your brain 
around it, you'll discover that Tic-Tac-Toe isn't quite as simple as you think!

Tic-Tac -Toe (along with a lot of other games) involves looking ahead and trying to figure out what the person playing against you might do next.

Rules for Tic-Tac-Toe
The game is played on a grid that's 3 squares by 3 squares.
You are X , your friend (or the computer in this case) is O . Players take turns putting their marks in empty squares.
The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
      Top-Left	Top-Center	Top-Right
      Middle-Left	Middle-Center	Middle-Right
      Bottom-Left	Bottom-Center	Bottom-Right
Reset   Help
            

How can I win at Tic-Tac-Toe?
To beat the computer (or at least tie), you need to make use of a little bit of strategy. Strategy means figuring out what you need to do to win.

Part of your strategy is trying to figure out how to get three X s in a row. The other part is trying to figure out how to stop the computer from getting 
three O s in a row.

After you put an X in a square, you start looking ahead. Where's the best place for your next X ? You look at the empty squares and decide which ones are 
good choices which ones might let you make three X s in a row.

You also have to watch where the computer puts its O . That could change what you do next. If the computer gets two O s in a row, you have to put your 
next X in the last empty square in that row, or the computer will win. You are forced to play in a particular square or lose the game.

If you always pay attention and look ahead, you'll never lose a game of Tic-Tac-Toe. You may not win, but at least you'll tie.`;


export default function Rules( {navigation}) {
  return (
    <View style={styles.container}>
        {/* Top Section */}
        <View style={styles.top_section}>
            <Title text = "Rules" />
        </View>
        {/* End Top Section */}
        {/* Middle Section */}
        <View style={styles.middle_section}>
          {/* Add Scrollable View */}
          <ScrollView>
            {/* Rules Text */}
            <Message text={rules_text} />
            {/* End Rules Text */}
          </ScrollView>
          {/* End Scrollable View */}
        </View>
        {/* End Middle Section */}
        {/* Bottom Section */}
        <View style={styles.bottom_section}>
            <TButton text="Back" onPress={() => navigation.navigate("Home")} />
        </View>
        {/* End Bottom Section */}
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
