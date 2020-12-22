import React, { useState,useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/Colors";

import Swipper from "../HotelUicomponents/swiper";
// import DateTimePicker from "@react-native-community/datetimepicker";
import CustomButton from "../HotelUicomponents/CuttomButton";
// import HeaderButton from "../HotelUicomponents/HeaderButton";
import { DatePicker } from "native-base";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const HotelHomeScreen = ({ props, navigation }) => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
  //         <HeaderButton iconName="account" />
  //         <HeaderButton iconName="ticket-confirmation" />
  //       </View>
  //     ),
  //     headerLeft: () => (
  //         <View style={{marginLeft: 10,}}>
  //             <HeaderButton iconName="menu" />
  //         </View>

  //     ),
  //   });
  const today = new Date();
  const [checkIn, setCheckIn] = useState(new Date(today));
  const [checkOut, setCheckOut] = useState(new Date(today));

  const onChange = (selectedDate) => {
    setCheckIn(selectedDate);
  };
  const onChange1 = (selectedDate) => {
    setCheckOut(selectedDate);
  };
  // ASYNC FUNCTION
//   const save = async () => {
//     try {
//       await AsyncStorage.setItem(
//           "checkInDate", JSON.stringify(checkIn),  
//         )
//       await AsyncStorage.setItem(
//         "checkOutDate", JSON.stringify(checkOut)
//       )  
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.warn(save());
//   //combine save and next button
//   const next = () => navigation.navigate("Available");

//   const combinedFunction = () => {
//     next();
//     save();
//   };

//   const getData = async () => {
//     try {
//       let chIn = await AsyncStorage.getItem('checkInDate');
//       let chOut = await AsyncStorage.getItem('checkOutDate');
//       let checkInParse = JSON.parse(chIn) 
//       let checkOutParse = JSON.parse(chOut) 
//       if (checkInParse != null) {
//         setState({ checkIn });
//       }
//       if (checkOutParse != null) {
//         setState({ checkOut });
//       }
//     } catch (e) {
//       // error reading value
//       console.warn(e);
//     }
//   };
 
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <Swipper />
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Text style={styles.header}>Where would you like to stay?</Text>
          <View style={styles.dateTime}>
            <View style={{ padding: 10 }}>
              <TouchableOpacity style={{ paddingBottom: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text>Check-in Date</Text>
                  <DatePicker
                    defaultDate={new Date(checkIn)}
                    modalTransparent={false}
                    animationType={"fade"}
                    placeHolderText="Select date"
                    textStyle={{ color: Colors.primary }}
                    placeHolderTextStyle={{ color: Colors.primary }}
                    onDateChange={onChange}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ borderWidth: 1, borderColor: "#c4c4c4c4" }}></View>

            <TouchableOpacity style={{ padding: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text>Check-out Date</Text>
                <DatePicker
                  defaultDate={new Date(checkIn)}
                  modalTransparent={false}
                  animationType={"fade"}
                  placeHolderText="Select date"
                  textStyle={{ color: Colors.primary }}
                  placeHolderTextStyle={{ color: Colors.primary }}
                  onDateChange={onChange1}
                />
              </View>
            </TouchableOpacity>
            <CustomButton
              btnTitle="Check Availability"
              onPress={() => navigation.navigate("Available",{CHECKIN: checkIn, CHECKOUT: checkOut})}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default HotelHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    height: 400,
    width: windowWidth,
    justifyContent: "flex-end",
    paddingBottom: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.primary,
    marginTop: 15,
  },
  dateTime: {
    shadowColor: "black",
    shadowOpacity: 0.27,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 15,
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
});
