import { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { UserData } from "../../data/userData";
import { Divider } from "../Divider";
import { Profile } from "../Profile";

interface TopContainerProps {
  userData: UserData;
}

export const TopContainer: FC<TopContainerProps> = ({ userData }) => (
  <View style={styles.container}>
    <Profile name={userData.name} theme="light" />
    <View>
      <Text
        style={{
          fontSize: 16,
          color: "#ffffff",
          fontWeight: "500",
          marginTop: 8,
        }}
      >
        Balance
      </Text>
      <Divider color="#ffffff" spaceAround={8} />
      <Text
        style={{
          fontSize: 46,
          color: "#ffffff",
        }}
      >
        $519,00
      </Text>
    </View>
    <View style={styles.toggleBtnContainer}>
      <TouchableOpacity
        style={{
          ...styles.toggleButton,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
          }}
        >
          RE-CHARGE
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.toggleButton,
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
          }}
        >
          TRANSACTIONS
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 38,
  },
  toggleBtnContainer: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 8,
  },
  toggleButton: {
    flex: 1,
    backgroundColor: "#DFE302",
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
