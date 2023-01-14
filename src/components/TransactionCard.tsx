import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { cardData } from "../data/cardData";
import { TransactionData } from "../data/transactionsData";

interface TransactionCardProps extends TransactionData {}

export const TransactionCard: React.FC<TransactionCardProps> = ({
  amount,
  cardId,
  category,
  date,
  id,
  merchant,
  type,
}) => {
  const card = cardData.filter((card) => card.id === cardId)[0];
  let [secret1, secret2, secret3, verify] = card.number.split(" ");
  secret1 = "****";
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#000000",
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Icon
              name={type === "credit" ? "ios-arrow-back" : "ios-arrow-forward"}
              color="#ffffff"
              size={28}
              style={{
                transform: [
                  {
                    rotate: "-45deg",
                  },
                ],
              }}
            />
          </View>
          <View
            style={{
              marginLeft: 8,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
              }}
            >
              {type === "credit" ? "Recieaved from" : "Paid to"}
            </Text>
            <Text
              style={{
                color: "#00000080",
                fontWeight: "700",
                fontSize: 12,
              }}
            >
              {" "}
              {merchant}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 12,
          }}
        >
          ${amount}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <Text
          style={{
            fontSize: 12,
          }}
        >
          {date}
        </Text>
        <Text
          style={{
            fontSize: 12,
          }}
        >
          {type}ed {type === "credit" ? "to" : "from"} {secret1 + verify}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
  },
});
