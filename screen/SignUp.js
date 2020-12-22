import React from "react";
import { ScrollView, StyleSheet, Text, TouchableHighlight, View,TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import CustomInput from './HotelUicomponents/TextInput'

const createAcc = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "90%", alignSelf: "center", marginTop: 120 }}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 35, color: "#0f16a8" }}>
            Create an
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 35, color: "#0f16a8" }}>
            Account
          </Text>
        </View>
        <ScrollView>
            <View style={styles.section}>
                <CustomInput name='account' placeholder="Full Name" label="Full Name" />
                <CustomInput name='account' placeholder="Email" label="Email" />
                <View style={{flexDirection:'row', justifyContent:'space-between'}} >
                    <View style={{width:'15%'}}>
                        <CustomInput placeholder="+234" label="+234" style={{width:'20%'}}/>
                    </View>
                    <View style={{width:'80%'}}>
                        <CustomInput name='cellphone' placeholder="Phone Number" label="Full Name" />
                    </View>
                </View>
                <CustomInput name='eye-off' placeholder="Password" label="Email" />
                <CustomInput name='eye-off' placeholder="Confirm Password" label="Email" />
            </View>
            <TouchableHighlight onPress={()=>props.navigation.navigate('HotelBeach')} style={styles.btn}>
                <Text style={{color:'white'}}>Create an Account</Text>
            </TouchableHighlight>
            <View
                style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignSelf: "center",
                marginTop: 40,
                }}
            >
                <Text>Already onboard</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Signin")}>
                <Text style={{ color: Colors.primary }}> Sign in</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default createAcc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: { marginTop: 10 },
  btn:{
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
