import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface ProfileProps {
  theme: "dark" | "light";
  mobile?: string;
  name: string;
}

export const Profile: React.FC<ProfileProps> = ({
  theme,
  mobile,
  name = "User",
}) => (
  <View
    style={{
      flexWrap: "nowrap",
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <Icon
      name="ios-person-circle-outline"
      color={theme === "dark" ? "#000000" : "#ffffff"}
      size={50}
    />
    <View
      style={{
        marginLeft: 8,
      }}
    >
      <Text
        style={{
          color: theme === "dark" ? "#000000" : "#ffffff",
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        {name}
      </Text>
      {mobile && (
        <Text
          style={{
            color: theme === "dark" ? "#000000" : "#ffffff",
            fontSize: 12,
            fontWeight: "700",
          }}
        >
          {mobile}
        </Text>
      )}
    </View>
  </View>
);
