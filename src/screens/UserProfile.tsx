import React, { FC, useContext } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Divider } from "../components/Divider";
import { Profile } from "../components/Profile";
import { UserContext } from "../context/userContext";
import { userData } from "../data/userData";

interface OptionProps {
  title: string;
}

export const ProfileScreen: FC = () => {
  const { user: userId } = useContext(UserContext);

  const currentUserData = userData.filter((user) => user.id === userId)[0];

  const Option: FC<OptionProps> = ({ title }) => (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="#DDDDDD"
      style={styles.optionContainer}
    >
      <>
        <Text style={styles.optionText}>{title}</Text>
        <Icon name="ios-arrow-forward-circle-outline" size={20} />
      </>
    </TouchableHighlight>
  );
  return (
    <View
      style={{
        padding: 16,
      }}
    >
      <View>
        <Profile
          name={currentUserData.name}
          theme="dark"
          mobile={currentUserData.mobile}
        />
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsTitle}>Account Settings</Text>
          <Option title="Account Info" />
        </View>
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsTitle}>App Settings</Text>
          <Option title="Language" />
          <Divider />
          <Option title="Privacy & Policy" />
          <Divider />
          <Option title="Terms & Conditions" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsTitle: {
    color: "#000000",
    opacity: 0.6,
    fontSize: 12,
    fontWeight: "600",
  },
  optionsContainer: {
    backgroundColor: "#ffffff",
    marginVertical: 8,
    padding: 16,
    borderRadius: 16,
  },
  optionContainer: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: {},
});
