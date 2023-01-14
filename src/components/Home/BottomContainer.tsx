import { FC } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TransactionData } from "../../data/transactionsData";
import { Divider } from "../Divider";
import { TransactionCard } from "../TransactionCard";

interface BottomContainerProps {
  transactions: TransactionData[];
}

export const BottomContainer: FC<BottomContainerProps> = ({ transactions }) => (
  <View style={styles.bottomContainer}>
    <Text
      style={{
        fontWeight: "600",
      }}
    >
      Last Transactions
    </Text>
    <Divider color="#000000" spaceAround={8} />
    <ScrollView>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} {...transaction} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: "#F5F5F5",
    padding: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
  },
});
