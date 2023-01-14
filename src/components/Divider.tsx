import React from "react";
import { View } from "react-native";

interface DividerProps {
  color?: string;
  weight?: number;
  spaceAround?: number;
}

export const Divider: React.FC<DividerProps> = ({
  color = "#000000",
  weight = 1,
  spaceAround = 4,
}) => (
  <View
    style={{
      backgroundColor: color,
      width: "100%",
      height: weight,
      marginVertical: spaceAround,
    }}
  />
);
