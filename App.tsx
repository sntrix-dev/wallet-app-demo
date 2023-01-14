import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import {
  CardScreen,
  HomeScreen,
  ProfileScreen,
  SignInScreen,
  TransactionScreen,
  WelcomeScreen,
} from "./src/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { UserContext, UserContextProvider } from "./src/context/userContext";
import { SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabBasedScreens: FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = "";

        if (route.name === "home") {
          iconName = focused ? "ios-home" : "ios-home-outline";
        }
        if (route.name === "cards") {
          iconName = focused ? "ios-card" : "ios-card-outline";
        }
        if (route.name === "transactions") {
          iconName = focused
            ? "ios-swap-horizontal"
            : "ios-swap-horizontal-outline";
        }
        if (route.name === "profile") {
          iconName = focused ? "ios-person" : "ios-person-outline";
        }

        return <Icon name={iconName} size={size} color="#000000" />;
      },
      tabBarShowLabel: false,
    })}
  >
    <Tab.Screen
      name="home"
      component={HomeScreen}
      options={{
        title: "Home",
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="transactions"
      component={TransactionScreen}
      options={{
        title: "Transactions",
      }}
    />
    <Tab.Screen
      name="cards"
      component={CardScreen}
      options={{
        title: "Cards",
      }}
    />
    <Tab.Screen
      name="profile"
      component={ProfileScreen}
      options={{
        title: "Profile",
      }}
    />
  </Tab.Navigator>
);

const App: FC = () => (
  <UserContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            title: "Welcome",
          }}
        />
        <Stack.Screen
          name="sign-in"
          component={SignInScreen}
          options={{
            title: "Sign In",
          }}
        />
        <Stack.Screen
          name="home"
          component={TabBasedScreens}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </UserContextProvider>
);

export default App;
