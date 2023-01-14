import React, { FC, useContext } from "react";
import { View } from "react-native";
import { Profile } from "../components/Profile";
import { UserContext } from "../context/userContext";
import { userData } from "../data/userData";

export const ProfileScreen: FC = () => {
  const { user: userId } = useContext(UserContext);

  const currentUserData = userData.filter((user) => user.id === userId)[0];
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
      </View>
    </View>
  );
};
