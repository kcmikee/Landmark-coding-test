import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/Colors";

const TextInputt = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        dense
        label={props.placeholder}
        placeholder={props.placeholder}
        style={styles.input}
      />
      <Icon name={props.name} size={25} color={Colors.grey} />
    </View>
  );
};

export default TextInputt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomColor: Colors.primary,
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderWidth: 2,
    marginTop: 25,
    alignItems: 'center',
  },
  input: {
    color: "#424242",
    borderColor:'#fff',
    borderWidth: 1,
    padding:5,
    width:'90%'

  },
});
