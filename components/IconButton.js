import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import {COLORS} from '../constants';

const IconButton = ({containerStyle,icon,iconStyle,onPress}) => {
    return (
        <TouchableOpacity
            styles={{
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image 
                source={icon}
                resizeMode="contain"
                style={{
                    width:30,
                    height:30,
                    tintColor:COLORS.white,
                    ...iconStyle
                }}
            />
        </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({})
