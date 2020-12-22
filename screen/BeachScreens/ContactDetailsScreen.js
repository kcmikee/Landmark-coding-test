import React from "react";
import { StyleSheet, Text, TextInput, View,TouchableOpacity, Image,ScrollView } from "react-native";
import {Button } from 'native-base'
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react/cjs/react.development";

const ContactDetailsScreen = ( props) => {
    const [isFirstName, setFirstName] = useState()
    const [isLastName, setLastName] = useState()
    const [isEmail, setEmail] = useState()
    const [isPhoneNo, setPhoneNo] = useState()
    const prev = props.route.params
    // console.warn(props)
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
              width: "60%",
            }}
          />
          <View
            style={{
              height: 10,
              backgroundColor: 'red',
              marginVertical: 20,
              width: "40%",
            }}
          />
        </View>
        <Text style={styles.topText}>3/4</Text>
        <Text style={styles.topText}>Enter Your Contact Details</Text>
      </View>
      <View style={styles.inputView}>
            <TextInput 
                style={{
                    flex:1,
                    paddingHorizontal:10
                }}
                placeholder={'First Name'}
                onChangeText={(text) => setFirstName(text)}
            />
            <Icon name='account' size={25} color={Colors.grey}/>
      </View>
      <View style={styles.inputView}>
            <TextInput 
                style={{
                    flex:1,
                    paddingHorizontal:10
                }}
                placeholder={'Last Name'}
                onChangeText={(text)=> setLastName(text)}
            />
            <Icon name='account' size={25} color={Colors.grey}/>
      </View>
      <View style={styles.inputView}>
            <TextInput 
                style={{
                    flex:1,
                    paddingHorizontal:10
                }}
                placeholder={'Email'}
                keyboardType='email-address'
                onChangeText={(email) => setEmail(email)}
            />
            <Icon name='email' size={25} color={Colors.grey}/>
      </View>
      <View style={styles.inputView}>
            <TextInput 
                style={{
                    flex:1,
                    paddingHorizontal:10
                }}
                placeholder={'Phone Number'}
                keyboardType='numeric'
                onChangeText={(num)=>setPhoneNo(num)}

            />
            <Icon name='phone' size={25} color={Colors.grey}/>
      </View>
      <View style={{width:'90%', flexDirection: 'row', justifyContent: 'flex-end',alignItems: 'flex-end',marginVertical: 16,}}>
              <Button light style={{marginLeft: 20,paddingHorizontal:20}} onPress={()=> navigation.goBack()}>
                  <Text>Prev</Text>
              </Button>
              <Button primary style={{marginLeft: 20,paddingHorizontal:20}} 
                onPress={()=> props.navigation.navigate('ReviewReservation',{
                    firstName:isFirstName,
                    lastName: isLastName,
                    email: isEmail,
                    phoneNo: isPhoneNo,
                    prev
                })}>
                  <Text>Next</Text>
              </Button>
        </View>
        <View style={{width:'90%', flexDirection: 'row', justifyContent: 'flex-end',alignItems: 'flex-end',marginVertical: 16,}}>
            <TouchableOpacity>
                <Text style={{color:'purple'}}>Terms and Condition</Text>
            </TouchableOpacity>  
        </View>
        <View style={{position:'relative',justifyContent: 'flex-end',marginHorizontal: 20,}}>
            <Image source={require('../../assets/image/lmbeachlogo.png')} style={{height:100,width:120}} resizeMode='contain' />
        </View>
    </View>
    </ScrollView>
  );
};

export default ContactDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  topText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 4,
    color: Colors.primary,
  },
  inputView:{
      height:44,
      backgroundColor: '#f1f3f6',
      borderRadius: 8,
      paddingHorizontal:10,
      display:'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 10,
  }
});
