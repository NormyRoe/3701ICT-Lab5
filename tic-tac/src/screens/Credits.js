import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import TButton from "../components/TButton";
import MessageBoard from "../components/MessageBoard";
const credits = `The Galactic Credit Standard,[9] also known as the galactic credit or simply the credit, was a standardized form of currency in use throughout the Galactic Republic,[3] the Galactic Empire,[5] and territories of the New Republic, Resistance, and other non-aligned systems following the Empire's fall.[6] Credits were considered acceptable as currency on most major planets, though on some planets in the Outer Rim Territories, such as Tatooine, some merchants refused to accept them, desiring something "more real" in exchange for their goods. They were sometimes referred to as "Republic credits" or "Republic dataries" during the time of the Galactic Republic.[3] The decicred, or "dime," was a unit of currency worth one tenth of a full Republic credit.[10] During the Clone Wars, the Confederacy of Independent Systems issued its own Confederacy credits.[4]

The old Republic currency was discontinued and exchanged with Imperial credits during the Age of the Empire.[11] Following the Battle of Endor, credits were known as New Republic credits as the New Republic replaced the Empire as the galactic government.[12] The citizens of Milvayne used Milvayne credits.[13] "Creds" was a colloquial term for credits,[14] as was "decs."[15] The credit symbol () resembled an Aurebesh letter R with two vertical strokes at the top.[16]
`;
export default function Credits() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <Title title="Credits" />
        <MessageBoard message={credits} />
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
