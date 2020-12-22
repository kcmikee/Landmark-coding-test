import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, CardItem } from 'native-base'
import Colors from '../../constants/Colors'

const ContactDetails = (props) => {
    return (
        <Card>
            <CardItem header bordered style={{backgroundColor:Colors.primary,}}>
                <Text style={{color:'#fff',fontSize: 20,}}>Contact Details</Text>
            </CardItem>
            <CardItem style={{flexDirection: 'column',}}>
                <View style={{alignSelf: 'flex-start',flexDirection: 'row', width:'100%'}}>
                    <Text style={{width:'35%', color:'maroon', fontWeight: 'bold',}}>name</Text>
                    <Text style={{width:'65%',color:'black'}}>{props.bd.firstName} {props.bd.lastName}</Text>
                </View>
                <View style={{alignSelf: 'flex-start',flexDirection: 'row', width:'100%',marginVertical: 8,}}>
                    <Text style={{width:'35%',color:'maroon', fontWeight: 'bold',}}>email</Text>
                    <Text style={{width:'65%'}}>{props.bd.email}</Text>
                </View>
                <View style={{alignSelf: 'flex-start',flexDirection: 'row', width:'100%'}}>
                    <Text style={{width:'35%',color:'maroon', fontWeight: 'bold',}}>phone number</Text>
                    <Text style={{width:'65%'}}>{props.bd.phoneNo}</Text>
                </View>
            </CardItem>
        </Card>
    )
}

export default ContactDetails

const styles = StyleSheet.create({})
