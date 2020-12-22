import React, { useState } from "react";
import Entrycard from "../BeachUiComponents/Entrycard";
import ProductEntry from "../BeachUiComponents/ProductCard";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,FlatList
} from "react-native";
import Colors from "../../constants/Colors";
import { Card, CardItem,Button } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import * as productAction from '../../store/actions/products'
import * as entryAction from '../../store/actions/Entry'

const SelectItemScreen = (props) => {
    const data= props.route.params

    const products = useSelector((state)=>state.products.allProducts)
    // const cart = useSelector((state) => state.productCart)
    const dispatch = useDispatch()
    // const SUBTOTAL = cart.subTotal;

    const entries = useSelector((state) => state.entry.allEntry)
    const entryCart = useSelector((state)=>state.entryCart)
    // const subbb = entryCart.subTotal
    // console.warn(entries)
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
                width: "30%",
              }}
            />
            <View
              style={{
                height: 10,
                backgroundColor: 'red',
                marginVertical: 20,
                width: "70%",
              }}
            />
          </View>
          <Text style={styles.topText}>2/4</Text>
          <Text style={styles.topText}>Select Your Items</Text>
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <Text style={styles.topText}>Entry Tickets</Text>
          <Card>
            <CardItem>
              <View>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Labore, harum. Debitis, deserunt dolores. Quos nam atque
                  nobis, illo suscipit veniam. Amet laboriosam dolore porro
                  veritatis facilis rerum possimus vitae explicabo.
                </Text>
              </View>
            </CardItem>
          </Card>
          <FlatList
            data={entries}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <Entrycard
                    name={itemData.item.title}
                    price={itemData.item.price}
                    description={itemData.item.description}               
                    onAddProduct={() =>
                        dispatch(entryAction.bookEntry(itemData.item))
                    }
                    onRemoveProduct={() =>
                        dispatch(entryAction.removeEntry(itemData.item))
                    }
                    />
            )}
        />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.topText}>Beach Furnitures and Facilities</Text>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <ProductEntry
                    name={itemData.item.title}
                    price={itemData.item.price}
                    capacity={itemData.item.capacity}               
                    onAddProduct={() =>
                        dispatch(productAction.makePurchase(itemData.item))
                    }
                    onRemoveProduct={() =>
                        dispatch(productAction.removePurchase(itemData.item.id))
                    }
                    />
            )}
        />
        </View>
        <View style={{width:'90%',marginTop: 10,marginHorizontal: 20,}}>
            <TextInput
                style={{ borderRadius: 6,paddingHorizontal:10, height:100,paddingVertical:10,textAlignVertical: 'top',backgroundColor: '#f1f3f6',}}
                multiline={true}
                placeholder={'Special Request'}
                />
        </View>
        <View style={{width:'90%', flexDirection: 'row', justifyContent: 'flex-end',alignItems: 'flex-end',marginVertical: 16,}}>
              <Button light style={{marginLeft: 20,paddingHorizontal:20}} onPress={()=> navigation.goBack()}>
                  <Text>Prev</Text>
              </Button>
              <Button primary style={{marginLeft: 20,paddingHorizontal:20}} onPress={() => props.navigation.navigate("Info",{bookingData:data})}>
                  <Text>Next</Text>
              </Button>
        </View>
        <View style={{position:'relative',justifyContent: 'flex-end',marginHorizontal: 20,}}>
            <Image source={require('../../assets/image/lmbeachlogo.png')} style={{height:100,width:120}} resizeMode='contain' />
        </View>
      </View>
    </ScrollView>
  );
};

export default SelectItemScreen;

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
});
