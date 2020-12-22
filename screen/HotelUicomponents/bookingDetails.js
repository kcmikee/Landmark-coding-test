import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

import Colors from "../../constants/Colors";
// import CustomButton from '../HotelUicomponents/CuttomButton'
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const bookingDetails = (props) => {
    
    return (
        <View style={{width:'90%',alignSelf: 'center',marginBottom: 20,}}>
            <Text style={{marginTop:20,fontSize: 18,marginBottom: 10,alignSelf: 'center',}}>Booking Details</Text>
            <Image source={require('../../assets/image/rm1.jpg')} resizeMode="cover" style={styles.image}/>
            <Text style={{color:Colors.third,}}>* Dual adult occupancy incurs additional N5,000</Text>
            
            <View style={{ borderWidth: 1, borderColor: "#f2f2f2",marginBottom: 15, marginTop: 15, }}></View>
        
            <View>
                <View style={styles.opt}>
                    <Text style={styles.textBold}>Check In</Text>
                    <Text style={styles.textBold}>Check Out</Text>
                </View>
                <View>
                    <View style={styles.opt}>
                        <Text style={styles.textBold2}>{props.chin}</Text>
                        <Text style={styles.textBold2}>{props.chout}</Text>
                    </View>
                </View>
            </View>

            <View style={{ borderWidth: 1, borderColor: "#f2f2f2",marginBottom: 15, marginTop: 15, }}></View>

            <View style={styles.opt}>
                <Text style={styles.textBold2}>Subtotal</Text>
                <Text style={styles.textBold2}>N{props.sub}</Text>
            </View>
            <View style={styles.opt}>
                <Text style={styles.textBold2}>VAT(7.5%)</Text>
                <Text style={styles.textBold2}>N{props.vt}</Text>
            </View>
            <View style={styles.opt}>
                <Text style={styles.textBold2}>Consumption Tax(5%)</Text>
                <Text style={styles.textBold2}>N{props.consump}</Text>
            </View>
            <View style={styles.opt}>
                <Text style={styles.textBold}>TOTAL COST</Text>
                <Text style={{...styles.textBold, color:Colors.accent}}>N{props.tot}</Text>
            </View>
            {/* <CustomButton btnTitle="Continue Booking" onPress={() => navigation.navigate("Reservation")}/> */}
        </View>
    )
}

export default bookingDetails

const styles = StyleSheet.create({
    image:{
        height:200,
        width:'100%',
        marginTop: 4,
        marginBottom: 15,
    },
    opt:{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginBottom: 10,},
    textBold:{fontWeight: 'bold', color:Colors.grey, fontSize: 16,},
    textBold2:{fontWeight: 'normal', color:Colors.grey, fontSize: 15,}
  
})
