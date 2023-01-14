import { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface WelcomeScreenProps {
  navigation: any;
}

export const WelcomeScreen: FC<WelcomeScreenProps> = ({ navigation }) => (
  <View style={styles.container}>
    <View>
      <Image source={require("./img/welcome-banner.png")} />
    </View>
    <TouchableOpacity
      style={styles.signInBtn}
      onPress={() => navigation.navigate("sign-in")}
    >
      <Text style={styles.btnText}>Sign In</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 24,
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#ffffff",
  },
  signInBtn: {
    borderRadius: 999,
    backgroundColor: "#DFE302",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  btnText: {
    fontSize: 18,
  },
});
