import React from 'react'
import { Card, CardItem } from 'native-base'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'
import { useSelector } from 'react-redux'

const TotalAmount = (props) => {
    const entryTotal = useSelector((state)=>state.entryCart.subTotal)
    const cartTotal = useSelector(state => state.productCart.subTotal)
    // console.warn(entryTotal,cartTotal)
    return (
        <Card>
            <CardItem header bordered style={{backgroundColor:Colors.primary,}}>
                <Text style={{color:'#fff',fontSize: 20,}}>Total Amount Due</Text>
            </CardItem>
            <CardItem>
                <View>
                    <Text style={{fontSize: 35,color:'maroon'}}>NGN {(parseInt(entryTotal) + parseInt(cartTotal)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</Text>
                </View>
            </CardItem>
        </Card>
    )
}

export default TotalAmount

const styles = StyleSheet.create({})
