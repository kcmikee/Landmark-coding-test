import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CardItem } from 'native-base'

const productList = (props) => {
    console.warn(props)
    return (
        <CardItem style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',}}>
                <View style={{alignSelf: 'flex-start',flexDirection: 'column',}}>
                    <Text style={{ color:'maroon', fontWeight: 'bold',}}>Item</Text>
                    <Text style={{color:'black'}}>{props.title}   x{props.quantity}</Text>
                </View>
                <View style={{alignSelf: 'flex-start',flexDirection: 'column',}}>
                    <Text style={{color:'maroon', fontWeight: 'bold',}}>Price(NGN)</Text>
                    <Text>{props.price}</Text>
                </View>
                <View style={{alignSelf: 'flex-start',flexDirection: 'column',}}>
                    <Text style={{color:'maroon', fontWeight: 'bold',}}>subtotal(NGN)</Text>
                    <Text>{props.sum}</Text>
                </View>
            </CardItem>
    )
}

export default productList

const styles = StyleSheet.create({})
