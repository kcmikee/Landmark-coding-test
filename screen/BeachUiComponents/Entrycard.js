import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card, CardItem } from "native-base";
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Entrycard = (props) => {
  const [isValue, setValue] = useState(0);

  const incrementValue = () => {
    const newValue = isValue + 1;
    setValue(newValue);
  };

  const decrementValue = () => {
    const newValue = isValue - 1;
    setValue(newValue);
  };

  const combinedAddition= () =>{
    incrementValue()
    props.onAddProduct()
}
const combinedAddition2= () =>{
    decrementValue()
    props.onRemoveProduct()
}

  return (
    <Card>
      <CardItem>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginHorizontal: 5, width: "35%" }}>
            <Text style={{ ...styles.topText, fontSize: 16, marginVertical: 0 }}>
              {props.name}
            </Text>
            <Text
              style={{
                ...styles.topText,
                color: Colors.grey,
                fontSize: 14,
                fontWeight: "normal",
                marginVertical: 0,
              }}>
              {props.description}
            </Text>
          </View>
          <Text
            style={{
              ...styles.topText,
              color: Colors.primary,
              fontSize: 16,
              marginVertical: 0,
              width: "30%",
            }}
          >
            NGN{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "35%",
            }}
          >
            <TouchableOpacity
              onPress={combinedAddition2}
              style={{
                backgroundColor: "red",
                borderRadius: 16,
                padding: 5,
              }}
            >
              <Icon name="minus" size={16} color="#fff" />
            </TouchableOpacity>
            <Text> {isValue} </Text>
            <TouchableOpacity
              onPress={combinedAddition}
              style={{
                backgroundColor: Colors.primary,
                borderRadius: 16,
                padding: 5,
              }}
            >
              <Icon name="plus" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          {/* <Text>2</Text> */}
        </View>
      </CardItem>
    </Card>
  );
};

export default Entrycard;

const styles = StyleSheet.create({});
