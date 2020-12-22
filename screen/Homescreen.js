import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import CustomButton from './HotelUicomponents/CuttomButton' 

const Homescreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/image/lm2.jpg")}
        style={styles.image}
        resizeMode="stretch"
      >
        <View
          style={{
            // width: "90%",
            alignSelf: "center",
            // marginBottom: 20,
            backgroundColor: "#000000a0",
            padding: 15,
          }}
        >
          <View style={styles.container2}>
            <Text style={styles.text}>Are you ready?</Text>
            <Text style={styles.text2}>
              Make hotel room reservation easily and buy your Beach ticket right
              here
            </Text>
          </View>
          <CustomButton
            btnTitle="Get Started"
            onPress={() => navigation.navigate("Signin")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container2: {
    paddingBottom: 20,
    paddingTop: 600,
    borderRadius: 15,
    // marginBottom: 
  },
  text: {
    color: "white",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
    textAlign: "left",
  },
  text2: {
    color: "#fff",
    fontSize: 16,
    textAlign: "left",
  },
  btn: {
    width: "40%",
  },
});
