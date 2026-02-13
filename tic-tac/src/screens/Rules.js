import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import TButton from "../components/TButton";
import MessageBoard from "../components/MessageBoard";
const rules = `Tic Tac Toe
You probably already know how to play Tic-Tac-Toe. It's a really simple game, right? That's what most people think. But if you really wrap your brain around it, you'll discover that Tic-Tac-Toe isn't quite as simple as you think!

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

Part of your strategy is trying to figure out how to get three X s in a row. The other part is trying to figure out how to stop the computer from getting three O s in a row.

After you put an X in a square, you start looking ahead. Where's the best place for your next X ? You look at the empty squares and decide which ones are good choices which ones might let you make three X s in a row.

You also have to watch where the computer puts its O . That could change what you do next. If the computer gets two O s in a row, you have to put your next X in the last empty square in that row, or the computer will win. You are forced to play in a particular square or lose the game.

If you always pay attention and look ahead, you'll never lose a game of Tic-Tac-Toe. You may not win, but at least you'll tie.

`;
export default function Rules() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <Title title="Rules" />
        <MessageBoard message={rules} />
        <TButton label="Back" fun={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  table: {
    flex: 1,
    backgroundColor: "#ccc",
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
