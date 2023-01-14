import { FC, useContext } from "react";
import { ScrollView, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Divider } from "../components/Divider";
import { BottomContainer } from "../components/Home/BottomContainer";
import { TopContainer } from "../components/Home/TopContainer";
import { UserContext } from "../context/userContext";
import { transactionsData } from "../data/transactionsData";
import { userData } from "../data/userData";

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const { user: userId } = useContext(UserContext);

  const currentUserData = userData.filter((user) => user.id === userId)[0];

  return (
    <SafeAreaView style={styles.container}>
      <TopContainer userData={currentUserData} />
      <BottomContainer transactions={transactionsData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363D4E",
  },
});
