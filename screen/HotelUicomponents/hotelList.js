import React, { useState } from "react";
import { Image, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



const hotelList = (props) => {
  const [isValue, setValue] = useState(0);
//   const cartTotal

const incrementValue = () =>{
    const newValue = isValue + 1
    setValue(newValue)
}

const combinedAddition= () =>{
    incrementValue()
    props.onAddRoom()
}
const combinedAddition2= () =>{
    decrementValue()
    props.onRemoveRoom()
}
// console.warn(props.onAddRoom)
const decrementValue = () =>{
    const newValue = isValue - 1
    setValue(newValue)
}
//   console.warn(isValue)
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: props.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={{ marginLeft: 15, justifyContent: "center" }}>
        <Text
          style={{ fontWeight: "bold", fontSize: 18, color: Colors.primary }}
        >
          {props.title}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.grey }}>
          N{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}
        </Text>
        <Text style={{ color: Colors.third }}>
          {props.quantity}room(s) available
        </Text>
        <View style={{ flexDirection: "row", alignItems: 'center',}}>
          <Text style={{ color: Colors.grey }}>
            Select No of Rooms
          </Text>
          <View style={{flexDirection: 'row',marginLeft: 20, justifyContent: 'flex-end',alignItems: 'center',}}>
            <TouchableOpacity
                onPress={combinedAddition2}
                style={{backgroundColor: 'red', borderRadius: 16, padding: 5,}}
                >
                    <Icon name="minus" size={16} color="#fff" />
                </TouchableOpacity>
                <Text>  {isValue} </Text>
                <TouchableOpacity
                onPress={combinedAddition}
                style={{backgroundColor: Colors.primary, borderRadius: 16, padding: 5,}}
                >
                    <Icon name="plus" size={16} color='#fff' />
                </TouchableOpacity>
          </View>
          {/* <Text>2</Text> */}
        </View>
      </View>
    </View>
  );
};

export default hotelList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.27,
    shadowRadius: 5,
    elevation: 4,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
