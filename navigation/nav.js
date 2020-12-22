import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//GetStarted
import HomeScreen from "../screen/Homescreen";
import SignIn from "../screen/signIn";
import SignUp from "../screen/SignUp";
//HotelScreens
import HotelHomeScreen from "../screen/HotelScreens/HotelHomeScreen";
import AvailableListScreen from "../screen/HotelScreens/AvailableListScreen";
import ReservationDetailScreen from "../screen/HotelScreens/ReservationDetailScreen";
//BeachScreen
import BeachHomeScreen from "../screen/BeachScreens/BeachHome";
import BookingDetailScreen from "../screen/BeachScreens/BookingDetailScreen";
import SelectItemScreen from "../screen/BeachScreens/SelectItemScreen";
import ContactDetailsScreen from "../screen/BeachScreens/ContactDetailsScreen";
import ReviewReservationScreen from "../screen/BeachScreens/ReviewReservation";
import ForgotPassword from '../screen/ForgotPassword'

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HotelTab = createStackNavigator();
const BeachTab = createStackNavigator();
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HotelTabScreens = () => {
  return (
    <HotelTab.Navigator
      screenOptions={{
        headerTitle: () => (
          <Image
            style={{ width: 170, }}
            source={require("../assets/image/lmhotel.jpg")}
            resizeMode="contain"
          />
        ),
      }}
    >
      <HotelTab.Screen name="HotelHome" component={HotelHomeScreen} 
        options={{
            headerLeft:null
        }}
      />
      <HotelTab.Screen name="Available" component={AvailableListScreen} />
      <HotelTab.Screen name="Reservation" component={ReservationDetailScreen} />
    </HotelTab.Navigator>
  );
};

const BeachTabScreens = () => {
  return (
    <BeachTab.Navigator
      screenOptions={{
        
        headerTitle: () => (
            <Image
              style={{ width: 170, height: 30, marginLeft: 10 }}
              source={require("../assets/image/LMLEISUREBEACH.png")}
              resizeMode="contain"
            />
            ),
        headerStyle: { backgroundColor: "blue" },
      }}
    >
      <BeachTab.Screen name="BeachHome" component={BeachHomeScreen} 
        options={{
            headerLeft:null
        }}
      />
      <BeachTab.Screen name="Booking" component={BookingDetailScreen} />
      <BeachTab.Screen name="SelectItem" component={SelectItemScreen} />
      <BeachTab.Screen name='Info' component={ContactDetailsScreen}/>
      {/* <BeachTab.screen name="ContactDetails" component={ContactDetailsScreen} /> */}
      <BeachTab.Screen name="Contact" component={ContactDetailsScreen} />
      <BeachTab.Screen
        name="ReviewReservation"
        component={ReviewReservationScreen}
      />
    </BeachTab.Navigator>
  );
};

const HotBeac = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Hotel") {
            iconName = focused ? "home-city" : "home-city-outline";
          } else if (route.name === "Beach") {
            iconName = focused ? "beach" : "beach";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Hotel" component={HotelTabScreens} />
      <Tab.Screen name="Beach" component={BeachTabScreens} />
    </Tab.Navigator>
  );
};

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HotelBeach"
          component={HotBeac}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
