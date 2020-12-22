import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomInput from './HotelUicomponents/TextInput'
import CustomButton from './HotelUicomponents/CuttomButton'

const signIn = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="dark" />

      <View style={{ width: "90%", alignSelf: "center", marginTop: 120 }}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#0f16a8" }}>
            Welcome to
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 40, color: "#0f16a8" }}>
            LandMark
          </Text>
        </View>
        <ScrollView>
          <View style={styles.section}>
            <Text>Login with</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{ ...styles.icons, backgroundColor: Colors.primary }}
              >
                <Icon name="facebook" size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.icons, backgroundColor: "#029f00" }}>
                <Icon name="google" size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.icons, backgroundColor: "#00acee" }}>
                <Icon name="twitter" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.section}>
            <Text>Or</Text>
                <CustomInput name='account' placeholder='Enter Email' />
                <CustomInput name='eye-off' placeholder='Enter Password' />
            <CustomButton btnTitle='Create an Account' onPress={()=>props.navigation.navigate('HotelBeach')}/>
            <TouchableOpacity
              style={{ alignItems: "flex-end", marginTop: 15 }}
              onPress={()=> props.navigation.navigate('Forgot')}
            >
              <Text style={{ color: Colors.primary }}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignSelf: "center",
          marginTop: 60,
        }}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
          <Text style={{ color: Colors.primary }}>Create one</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default signIn;

const styles = StyleSheet.create({
  section: { marginTop: 40 },
  icons: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingRight: 0,
    backgroundColor: "#fff",
    color: "#424242",
    borderBottomColor: "#000",
    borderWidth: 1,
    borderTopColor: "#fff",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
  },
  btn:{
      marginTop: 50,
  },
  btn1:{
    backgroundColor:Colors.primary,
    shadowColor: "black",
    shadowOpacity: 0.27,
    shadowRadius: 15,
    elevation: 5,
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    marginTop: 50,
  }
});
