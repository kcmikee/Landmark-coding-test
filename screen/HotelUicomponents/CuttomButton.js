import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import Colors from '../../constants/Colors'

const CuttomButton = (props) => {
    return (
        <TouchableHighlight onPress={props.onPress} style={styles.btn1}>
          <Text style={{color:'white'}}>{props.btnTitle}</Text>
        </TouchableHighlight>
    )
}

export default CuttomButton

const styles = StyleSheet.create({
    btn1:{
        backgroundColor:Colors.primary,
        shadowColor: "black",
        shadowOpacity: 0.27,
        shadowRadius: 15,
        elevation: 5,
        borderRadius: 5,
        padding: 18,
        alignItems: 'center',
        marginTop: 20,
      }
})
