import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, CardItem } from 'native-base'
import Colors from '../../constants/Colors'

const BookngDetails = (props) => {
    return (
        <Card>
            <CardItem header bordered style={{backgroundColor:Colors.primary,}}>
                <Text style={{color:'#fff',fontSize: 20,}}>Booking Details</Text>
            </CardItem>
            <CardItem style={{flexDirection: 'column',}}>
                <View style={{alignSelf: 'flex-start',flexDirection: 'row', width:'100%'}}>
                    <Text style={{width:'50%', color:'maroon', fontWeight: 'bold',}}>Booking Type</Text>
                    <Text style={{width:'50%',color:'black'}}>{props.bd.prev.bookingData.bookingMembers}</Text>
                </View>
                <View style={{alignSelf: 'flex-start',flexDirection: 'row', width:'100%'}}>
                    <Text style={{width:'50%',color:'maroon', fontWeight: 'bold',}}>Date</Text>
                    <Text style={{width:'50%'}}>{props.bd.prev.bookingData.Bookingcheckin.toUTCString().slice(0,17)}</Text>
                </View>
            </CardItem>
        </Card>
    )
}

export default BookngDetails

const styles = StyleSheet.create({})
