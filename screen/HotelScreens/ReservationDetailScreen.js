import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CheckBox from '@react-native-community/checkbox'
import BookingDetails from "../HotelUicomponents/bookingDetails";
import CustomInput from '../HotelUicomponents/TextInput'
import CustomButton from '../HotelUicomponents/CuttomButton'


const ReservationDetailScreen = (props) => {
 const CHECKIN = props.route.params.checkin.toUTCString().slice(0,17)
 const CHECKOUT = props.route.params.checkout.toUTCString().slice(0,17)
 const SUBTOTAL = props.route.params.sub
 const VAT = props.route.params.vat
 const CONSUMPTION = props.route.params.consumption
 const TOTAL = props.route.params.total

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{justifyContent: 'center',alignItems: 'center', marginTop: 10, }}>
            <Text style={{fontSize:25,}}>Reservation Details</Text>
        </View>
        <View style={styles.formContainer}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}} >
                <View style={{width:'15%'}}>
                    <CustomInput placeholder="Title" style={{width:'20%'}}/>
                </View>
                <View style={{width:'38%'}}>
                    <CustomInput placeholder="First Name"  />
                </View>
                <View style={{width:'38%'}}>
                    <CustomInput placeholder="Last Name" />
                </View>
            </View>

            <CustomInput placeholder="Enter Email" />

            <View style={{flexDirection:'row', justifyContent:'space-between'}} >
                <View style={{width:'20%'}}>
                    <CustomInput placeholder="+234" label="+234" style={{width:'20%'}}/>
                </View>
                <View style={{width:'75%'}}>
                    <CustomInput placeholder="Phone Number" label="Full Name" />
                </View>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', marginTop: 20,}} >
                <CheckBox 
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                <Text> I ACCEPT THE TERM AND CONDITIONS</Text>
            </View>
            <View style={{ borderWidth: 1, borderColor: "#f2f2f2",marginBottom: 15, marginTop: 15, }}></View>


            <View style={{marginBottom: 15,}}>
                <CustomButton btnTitle="Complete Booking"/>
            </View>
        </View>
        <View style={styles.bookDet}>
          <BookingDetails tot={TOTAL} sub={SUBTOTAL} vt={VAT} consump={CONSUMPTION} chin={CHECKIN} chout={CHECKOUT} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ReservationDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formContainer:{marginTop: 20,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 5,
    marginBottom: 30,
    paddingLeft:20,
    paddingRight:20
},
  bookDet: {
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 30,
  },
});
