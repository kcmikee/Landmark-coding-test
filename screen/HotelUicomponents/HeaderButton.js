import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/Colors";

const HeaderButton = (props) => {
    return (
        <TouchableOpacity>
          <Icon
            name={props.iconName}
            size={25}
            color={Colors.primary}
            style={{ marginRight: 20 }}
          />
        </TouchableOpacity>
    )
}

export default HeaderButton

const styles = StyleSheet.create({})
