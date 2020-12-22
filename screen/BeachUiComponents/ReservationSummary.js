import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../../constants/Colors'
import { Card, CardItem } from 'native-base'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import ProductList from './productList'

const ReservationSummary = (props) => {
    const proda = useSelector((state)=>{
        const transformedCartItems= []
        for(const key in state.productCart.products){
          transformedCartItems.push({
              productId: key,
              title:state.productCart.products[key].productTitle,
              price:state.productCart.products[key].productPrice,
              sum:state.productCart.products[key].sum,
              quantity:state.productCart.products[key].quantity,          
          })
        }
        return transformedCartItems
        })
    // console.warn(proda)
     const entry = useSelector((state)=> state.entryCart.entry)
    const entries = useSelector((state)=>{
        const transformedCartItems= []
        for(const key in state.entryCart.entry){
          transformedCartItems.push({
              productId: key,
              title:state.entryCart.entry[key].entryTitle,
              price:state.entryCart.entry[key].entryPrice,
              sum:state.entryCart.entry[key].sum,
              quantity:state.entryCart.entry[key].quantity,          
          })
        }
        return transformedCartItems
        })
        // console.warn(entries)
    return (
        
        <Card>
            <CardItem header bordered style={{backgroundColor:Colors.primary,}}>
                <Text style={{color:'#fff',fontSize: 20,}}>Reservation Summary</Text>
            </CardItem>
            <FlatList
            data={proda}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <ProductList
                title={itemData.item.title}
                price={itemData.item.price}
                sum = {itemData.item.sum}
                quantity={itemData.item.quantity}
                />
            )}
      />
      <FlatList
            data={entries}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <ProductList
                title={itemData.item.title}
                price={itemData.item.price}
                sum={itemData.item.sum}
                quantity={itemData.item.quantity}
                />
            )}
      />
        </Card>
    )
}

export default ReservationSummary

const styles = StyleSheet.create({})
