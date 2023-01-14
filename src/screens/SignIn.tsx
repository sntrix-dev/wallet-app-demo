import React, { FC, useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { UserContext } from "../context/userContext";
import { userData } from "../data/userData";

interface SignInScreenProps {
  navigation: any;
}

interface CredState {
  email: string;
  password: string;
}

export const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const [cred, setCred] = useState<Partial<CredState>>({});
  const [error, setError] = useState<string>("");

  const { setUserData } = useContext(UserContext);

  const handleAuth = () => {
    setUserData(1);
    navigation.navigate("home");
    setError("");
    // if (Object.keys(cred).length > 0) {
    //   if (cred.email) {
    //     if (cred.email.search("@") >= 0) {
    //       if (cred.password) {
    //         const credFromDatabase = userData
    //           .filter((user) => user.email === cred.email)
    //           .map((user) => {
    //             return {
    //               email: user.email,
    //               password: user.password,
    //             };
    //           });

    //         if (credFromDatabase.length > 0) {
    //           const isCredSame = Object.is(
    //             JSON.stringify(credFromDatabase[0]),
    //             JSON.stringify(cred)
    //           );
    //           if (isCredSame) {
    //             setUserData(
    //               userData.filter((user) => user.email === cred.email)?.[0]
    //                 ?.id ?? 0
    //             );
    //             navigation.navigate("home");
    //           } else {
    //             setError("Inavlid credentials");
    //           }
    //         } else {
    //           setError("Inavlid credentials");
    //         }
    //       } else {
    //         setError("Password is required");
    //       }
    //     } else {
    //       setError("Enter a valid email");
    //     }
    //   } else {
    //     setError("Email is required");
    //   }
    // } else {
    //   setError("Enter your email or password");
    // }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("./img/sign-in-banner.png")} />
      </View>
      <View style={styles.formView}>
        <TextInput
          autoCapitalize="none"
          style={styles.inputField}
          placeholder="Email"
          onChangeText={(text) =>
            setCred((prevState) => {
              prevState.email = text;
              return prevState;
            })
          }
        />
        <TextInput
          style={styles.inputField}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) =>
            setCred((prevState) => {
              prevState.password = text;
              return prevState;
            })
          }
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.signInBtn} onPress={handleAuth}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 24,
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#E0E0E0",
  },
  signInBtn: {
    borderRadius: 999,
    backgroundColor: "#DFE302",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  btnText: {
    fontSize: 18,
  },
  formView: {
    flexDirection: "column",
  },
  inputField: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginVertical: 12,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#00000033",
  },
  errorText: {
    textAlign: "center",
    color: "#FF0000",
  },
});
