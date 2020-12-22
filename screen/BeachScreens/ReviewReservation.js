import React, {useState} from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import Booking from "../BeachUiComponents/BookngDetails";
import Reservation from "../BeachUiComponents/ReservationSummary";
import Total from "../BeachUiComponents/TotalAmount";
import Details from "../BeachUiComponents/ContactDetails";
import CheckBox from "@react-native-community/checkbox";
import { Button } from "native-base";

const ReviewReservation = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
//   console.warn(props)
  const bookingData = props.route.params.prev.bookingData
  const params = props.route.params
//   console.warn(proda)
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginHorizontal: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 10,
                backgroundColor: Colors.primary,
                marginVertical: 20,
                width: "100%",
              }}
            />
          </View>
          <Text style={styles.topText}>4/4</Text>
          <Text style={styles.topText}>Review Your Reservation</Text>
        </View>
        <View style={{ width: "90%", justifyContent: "space-between" }}>
          {/****** booking *********/}
          <Booking bd={params} />
          {/****** reservation  *******/}
          <Reservation/>
          {/******** total  ********/}
          <Total />
          {/******** detail  ********/}
          <Details bd={params}/>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text> I ACCEPT THE TERM AND CONDITIONS</Text>
          </View>
          <View style={{width:'90%', flexDirection: 'row', justifyContent: 'center',alignItems: 'center',marginVertical: 16,}}>
              <Button light style={{marginLeft: 20,paddingHorizontal:20}} onPress={()=> navigation.goBack()}>
                  <Text style={{color:'#fff'}}>Prev</Text>
              </Button>
              <Button success style={{marginLeft: 20,paddingHorizontal:20}} onPress={()=> navigation.navigate('ReviewReservation')}>
                  <Text style={{color:'#fff'}}>Make Payment</Text>
              </Button>
        </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReviewReservation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  topText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 4,
    color: Colors.primary,
  },
});
