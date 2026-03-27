{/* Import libraries/Functions */}
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

{/* Import components from src folder */}
import Title from '../components/Title';
import TButton from '../components/TButton';
import Message from '../components/Message';


const credits_text = 
`
The Galactic Credit Standard,[9] also known as the galactic credit or simply the credit, was a standardized form of currency in use throughout the Galactic Republic, [3] the Galactic Empire, [5] and territories of the New Republic, Resistance, and other non-aligned systems following the Empire's fall.
[6] Credits were considered acceptable as currency on most major planets, though on some planets in the Outer Rim Territories, such as Tatooine, some merchants refused to accept them, desiring something "more real" in exchange for their goods. They were sometimes referred to as "Republic credits" or "Republic dataries" during the time of the Galactic Republic.[3] The decicred, or "dime," was a unit of currency worth one tenth of a full Republic credit.
[10] During the Clone Wars, the Confederacy of Independent Systems issued its own Confederacy credits.[4]

The old Republic currency was discontinued and exchanged with Imperial credits during the Age of the Empire.[11] Following the Battle of Endor, credits were known as New Republic credits as the New Republic replaced the Empire as the galactic government.[12] The citizens of Milvayne used Milvayne credits.
[13] "Creds" was a colloquial term for credits,[14] as was "decs."[15] The credit symbol () resembled an Aurebesh letter R with two vertical strokes at the top.[16]
`;

export default function Credits( {navigation}) {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.top_section}>
        <Title text = "Credits" />
      </View>
      {/* End Top Section */}
      {/* Middle Section */}
      <View style={styles.middle_section}>
        {/* Add Scrollable View */}
        <ScrollView>
          {/* Credits Text */}
          <Message text={credits_text} />
          {/* End Credits Text */}
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
