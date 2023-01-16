import { FC, useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import { Card } from "../components/Card";
import { UserContext } from "../context/userContext";
import { cardData } from "../data/cardData";
import { userData } from "../data/userData";

export const CardScreen: FC = () => {
  const { user: userId } = useContext(UserContext);

  const userCard = cardData;
  const currentUserData = userData.filter((user) => user.id === userId)[0];

  return (
    <View
      style={{
        padding: 16,
      }}
    >
      <Text>Manage Your Card Here</Text>
      <ScrollView>
        {userCard.map((card) => (
          <Card
            key={card.id}
            name={currentUserData.name}
            number={card.number}
          />
        ))}
      </ScrollView>
    </View>
  );
};
