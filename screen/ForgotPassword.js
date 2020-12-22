import React from 'react'
import { StyleSheet, Text, View,TouchableHighlight,TextInput } from 'react-native'
import CustomButton from './HotelUicomponents/CuttomButton'
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const ForgotPassword = (props) => {
    return (
        <View style={styles.container}>
           <View>
            <Text style={{ fontWeight: "bold", fontSize: 35, color: "#0f16a8" }}>
                Forgot
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 35, color: "#0f16a8" }}>
                Password
            </Text>
           </View>
           <View>
                <View style={{...styles.container1, flexDirection: 'row',alignItems: 'center',}}>
                <TextInput
                    autoCapitalize="none"
                    dense
                    placeholder='Enter Email'
                    style={styles.input}
                />
                <Icon name='account' size={25} color={Colors.grey} />
                </View>
            </View>           
         <View>
            <CustomButton btnTitle='Create an Account' onPress={()=>props.navigation.navigate('HotelBeach')}/>
           </View>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-around',
        width:'90%',
        alignSelf:'center',
        marginTop: 50,
    },
    container1: {

        // backgroundColor: "#f2f2f2",
        borderBottomColor: Colors.primary,
        borderTopColor: '#f2f2f2',
        borderLeftColor: '#f2f2f2',
        borderRightColor: '#f2f2f2',
        borderWidth: 2,
        // marginTop: 25,
        alignItems: 'center',
      },
      input: {
        color: "#424242",
        borderColor:'#f2f2f2',
        borderWidth: 1,
        width:'90%',
        padding: 8,
      },
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
})
