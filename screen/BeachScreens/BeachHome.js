import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native'
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from '../../constants/Colors'

const { width } = Dimensions.get('window');
const BeachHome = ({props,navigation}) => {
    return (
        <ScrollView nestedScrollEnabled={true} style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.fun}>
                <Text style={styles.funText}>Hey, Are you ready</Text>
                <Text style={styles.funText}>For Fun?</Text>

            </View>
            <ScrollView 
                style={styles.container}
                horizontal= {true}
                decelerationRate={0}
                snapToInterval={width - 60}
                snapToAlignment={"center"}
                contentInset={{
                top: 0,
                left: 30,
                bottom: 0,
                right: 30,
                }}>
                <TouchableOpacity style={styles.view}>
                    <Image source={require('../../assets/landmark/qr2.jpg')} resizeMode="cover" style={{height:200,width: width - 80,borderRadius:10,}}/>
                    <Text style={{color:Colors.primary,fontWeight: 'bold',fontSize: 16,}}>Quad Bikes</Text>
                    <Text style={{color:Colors.grey, fontWeight: 'normal',fontSize: 16,}}>NGN10,500</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view}>
                    <Image source={require('../../assets/landmark/beachcabanas.jpg')} resizeMode="cover" style={{height:200,width: width - 80,borderRadius:10,}}/>
                    <Text style={{color:Colors.primary,fontWeight: 'bold',fontSize: 16,}}>Cabanas</Text>
                    <Text style={{color:Colors.grey, fontWeight: 'normal',fontSize: 16,}}>NGN1,500</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view}>
                    <Image source={require('../../assets/landmark/hr.jpg')} resizeMode="cover" style={{height:200,width: width - 80,borderRadius:10,}}/>
                    <Text style={{color:Colors.primary,fontWeight: 'bold',fontSize: 16,}}>Horse riding</Text>
                    <Text style={{color:Colors.grey, fontWeight: 'normal',fontSize: 16,}}>NGN10,500</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view}>
                    <Image source={require('../../assets/landmark/ks.jpg')} resizeMode="cover" style={{height:200,width: width - 80,borderRadius:10,}}/>
                    <Text style={{color:Colors.primary,fontWeight: 'bold',fontSize: 16,}}>Kite Sking</Text>
                    <Text style={{color:Colors.grey, fontWeight: 'normal',fontSize: 16,}}>NGN10,500</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view}>
                    <Image source={require('../../assets/landmark/js2.jpg')} resizeMode="cover" style={{height:200,width: width - 80,borderRadius:10,}}/>
                    <Text style={{color:Colors.primary,fontWeight: 'bold',fontSize: 16,}}>Jet Sking</Text>
                    <Text style={{color:Colors.grey, fontWeight: 'normal',fontSize: 16,}}>NGN10,500</Text>
                </TouchableOpacity>
            </ScrollView>

            <ScrollView contentContainerStyle={styles.ticket}>
            <TouchableOpacity style={{...styles.view2, backgroundColor: '#000',height:220,justifyContent: 'flex-end',}} onPress={() =>navigation.navigate('Booking')}>
                    <View style={{flexDirection: 'row',alignItems: 'center',margin: 10,}}>
                        <Text style={{color:Colors.grey, fontWeight: 'normal',fontSize: 35, color:'#fff', fontSize: 18,fontWeight:"bold"}}>Reservations</Text>
                        <Icon name='arrow-right' size={25} color='#fff'/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view2}>
                    <Image source={require('../../assets/landmark/ks.jpg')} resizeMode="stretch" style={{height:180,width: width / 2.5,borderRadius:10,}}/>
                    <Text style={{color:Colors.primary,fontWeight: 'bold',fontSize: 16,}}>Kite Sking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view3}>
                    <Image source={require('../../assets/landmark/bv.jpg')} resizeMode="cover" style={{height:200,width: width / 2.5,borderRadius:10,}}/>
                    <Text style={{color:Colors.primary,fontWeight: 'bold',fontSize: 16,}}>Beach VolleyBall</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view3}>
                    <Image source={require('../../assets/landmark/bs.jpg')} resizeMode="cover" style={{height:200,width: width / 2.5,borderRadius:10,}}/>
                    <Text style={{color:Colors.primary,fontWeight: 'bold',fontSize: 16,}}>Beach Soccer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view3}>
                    <Image source={require('../../assets/landmark/bs.jpg')} resizeMode="cover" style={{height:200,width: width / 2.5,borderRadius:10,}}/>
                    <Text style={{color:Colors.primary,fontWeight: 'bold',fontSize: 16,}}>Beach Soccer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view3}>
                    <Image source={require('../../assets/landmark/bs.jpg')} resizeMode="cover" style={{height:200,width: width / 2.5,borderRadius:10,}}/>
                    <Text style={{color:Colors.primary,fontWeight: 'bold',fontSize: 16,}}>Beach Soccer</Text>
                </TouchableOpacity>
            </ScrollView>
            {/* <View style={{marginTop:100,height:100}}/> */}
            

        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      fun:{
        marginTop: 20,
        marginHorizontal: 10,

      },
      funText:{
        color:Colors.primary,
        fontSize: 30,
        fontWeight: 'bold',
      },
      view: {
        // marginTop: 10,
        backgroundColor: '#fff',
        width: width - 80,
        margin: 10,
        height: 230,
        borderRadius: 10,
        //paddingHorizontal : 30
      },
      ticket:{
        //   paddingVertical:20,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        // marginHorizontal:50

      },
      view2: {
        marginTop: 20,
        backgroundColor: '#fff',
        width: width / 2.5,
        margin: 10,
        height: 200,
        borderRadius: 10,
        //paddingHorizontal : 30
      },
      view3: {
        // marginTop: 40,
        backgroundColor: '#fff',
        width: width / 2.5,
        margin: 10,
        height: 230,
        borderRadius: 10,
        //paddingHorizontal : 30
      }
})

export default BeachHome