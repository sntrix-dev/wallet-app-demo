import { FC } from "react";
import { ScrollView } from "react-native";
import { TransactionCard } from "../components/TransactionCard";
import { transactionsData } from "../data/transactionsData";

export const TransactionScreen: FC = () => (
  <ScrollView
    style={{
      padding: 16,
      width: "100%",
    }}
  >
    {transactionsData.map((transaction) => (
      <TransactionCard key={transaction.id} {...transaction} />
    ))}
  </ScrollView>
);
