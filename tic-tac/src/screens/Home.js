import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Board from "../components/Board";
import Title from "../components/Title";
import TButton from "../components/TButton";
import { playMove, buildBoard } from "../gameLogic/game";
export default function Home({ navigation }) {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [steps, setSteps] = useState([]);
  const [lastP, setLastP] = useState(0);
  const play = (idx) => {
    console.log("played with idx:", idx);
    const newSteps = playMove(idx, steps, lastP);
    setSteps(newSteps);
    setLastP(newSteps.length);
    const newBoard = buildBoard(newSteps, newSteps.length);
    setBoard(newBoard);
  };
  const goPre = () => {
    const newLastP = lastP - 1;
    setLastP(newLastP);
    const newBoard = buildBoard(steps, newLastP);
    setBoard(newBoard);
  };
  const goNxt = () => {
    const newLastP = lastP + 1;
    setLastP(newLastP);
    const newBoard = buildBoard(steps, newLastP);
    setBoard(newBoard);
  };
  const newGame = () => {
    setSteps([]);
    setLastP(0);
    setBoard(Array(9).fill(""));
  };
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <Title title="Tic Tac Toe" />
        <View style={styles.buttonPanel}>
          <TButton label="<" fun={goPre} width={30} enabled={lastP > 0} />
          <TButton
            label="New Game"
            fun={newGame}
            width={100}
            enabled={steps.length > 0}
          />
          <TButton
            label=">"
            fun={goNxt}
            width={30}
            enabled={lastP < steps.length}
          />
        </View>

        <Board plays={board} onPress={play} />
        <View style={styles.buttonPanel}>
          <TButton label="Rules" fun={() => navigation.navigate("Rules")} />
          <TButton label="Credits" fun={() => navigation.navigate("Credits")} />
        </View>
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
  buttonPanel: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
  },
});
