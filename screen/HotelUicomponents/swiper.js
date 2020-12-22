import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Swiper from "react-native-swiper/src"

const swiper = () => {
    return (
        <Swiper height={250} showsButtons={true} >
            <Image source={require('../../assets/image/lm.jpg')} resizeMode='cover' style={{ width:'100%', height: 250 }}/>
            <Image source={require('../../assets/image/rm1.jpg')} resizeMode='cover' style={{ width:'100%', height: 250 }}/>
            <Image source={require('../../assets/image/be1.jpg')} resizeMode='stretch' style={{ width:'100%', height: 250 }}/>
            <Image source={require('../../assets/image/177859470.jpg')} resizeMode='stretch' style={{ width:'100%', height: 250 }}/>
            <Image source={require('../../assets/image/129703580.jpg')} resizeMode='cover' style={{ width:'100%', height: 250 }}/>
        </Swiper>
    )
}

export default swiper

// const styles = StyleSheet.create({})
