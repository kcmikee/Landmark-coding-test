import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { Radio, Picker,DatePicker } from "native-base";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BookingDetailScreen = ( props) => {
//   DatePicker
const today = new Date();
const [checkIn, setCheckIn] = useState(new Date(today));
const onChange1 = (selectedDate) => {
    setCheckIn(selectedDate);
    
  };
//radio button
const [membership, setMember] = useState("Member");
const [selectedGuest, setSelectedGuest] = useState("Select Guest Size");
const onValueChange = (choice) => {
    setSelectedGuest(choice);
  };
// console.warn(selectedGuest)
//   // ASYNC FUNCTION
//   const save = async () => {
//     try {
//       await AsyncStorage.setItem(
//         "form1",
//         JSON.stringify({
//           MEMEBERSHIP: membership,
//           guestNum: selectedGuest,
//           bookDate: checkIn,
//         })
//       );
//     } catch (error) {
//       alert(error);
//     }
//   };

//   const next = () => navigation.navigate("SelectItem");

//   const combinedFunction = () => {
//     save();
//     next();
//   };

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{ height: 10, backgroundColor: Colors.third, marginVertical: 20 }}
        />
        <Text style={{...styles.topText,color:Colors.primary}}>1/4</Text>
        <Text style={{...styles.topText,color:Colors.primary}}>Enter Your Booking Details</Text>
      </View>
      <View style={styles.form}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#f1f3f6",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={styles.radioView}
            onPress={() => setMember("Member")}
          >
            <Radio selected={membership === "Member"} />
            <Text style={{color:Colors.primary}}> Member</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioView}
            onPress={() => setMember("Non-Member")}
          >
            <Radio selected={membership === "Non-Member"} />
            <Text style={{color:Colors.primary}}> Non-Member</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor:'#f1f3f6',marginVertical:10,borderRadius: 10,}}>
            <Picker
            mode="dropdown"
            iosHeader="Select Guest Size"
            iosIcon={
                <Icon
                name="arrow-down-drop-circle"
                size={25}
                color={Colors.primary}
                />
            }
            style={{ width: undefined, marginTop: 15 }}
            selectedValue={selectedGuest}
            onValueChange={onValueChange}
            >
            <Picker.Item label="Select Guest Size" value="key0" />
            <Picker.Item label="1-5 guests" value="1-5 guests" />
            <Picker.Item label="20 or more guests" value="20 or more guests" />
            </Picker>
        </View>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor:'#f1f3f6',marginVertical: 5,borderRadius: 10,  }} onPress={onChange1}>
          <Icon name='calendar' color={Colors.primary} size={25}/>
          <DatePicker
            defaultDate={new Date(today)}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: Colors.primary }}
            placeHolderTextStyle={{ color: Colors.primary }}
            onDateChange={onChange1}
            disabled={false}
            />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SelectItem",{Bookingcheckin:checkIn,bookingMembers:membership, bookingGuest:selectedGuest})}
          style={{
            backgroundColor: Colors.primary,
            width: "30%",
            alignSelf: 'flex-end',
            alignItems: 'center',
            marginVertical: 16,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              paddingHorizontal: 15,
              paddingVertical: 10,
              color: "#fff",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'flex-end',marginHorizontal: 20,alignItems: 'flex-start',}}>
            <Image source={require('../../assets/image/lmbeachlogo.png')} style={{height:100,width:120}} resizeMode='contain' />
        </View>
    </View>
  );
};

export default BookingDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topText: { fontSize: 20, fontWeight: "bold", marginVertical: 4 },
  radioView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
  },
});
