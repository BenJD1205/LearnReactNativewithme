import React from 'react';
import {TouchableOpacity,Text,ImageBackground, Image, StyleSheet,View} from 'react-native';

import {COLORS,FONTS,SIZES} from '../constants';
import {SharedElement} from 'react-native-shared-element';

const CategoryCard = ({sharedElementPrefix,category,containerStyle, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                height:150,
                width:200,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* <ImageBackground
                source={category?.thumbnail}
                resizeMode="cover"
                style={{
                    height:150,
                    width:200,
                    paddingVertical:SIZES.padding,
                    paddingHorizontal:SIZES.radius,
                    justifyContent:'center',
                    ...containerStyle
                }}
                imageStyle={{
                    borderRadius:SIZES.radius
                }}
            >
                <Text
                    style={{
                        color:COLORS.white,
                        ...FONTS.h2
                    }}
                >
                    {category?.title}
                </Text>
            </ImageBackground> */}
            {/*Image*/}
            <SharedElement
                id={`${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`}
                style={[StyleSheet.absoluteFill]}
            >
                <Image 
                    source={category?.thumbnail}
                    resizeMode="cover"
                    style={{
                        width:'100%',
                        height:'100%',
                        borderRadius:SIZES.radius,
                    }}
                />
            </SharedElement>

            {/*Title*/}
            <View
                style={{
                    position:'absolute',
                    bottom:25,
                    left:5
                }}
            >
                <SharedElement
                    id={`${sharedElementPrefix}-CategoryCard-Title-${category?.id}`}
                    style={[StyleSheet.absoluteFillObject]}
                >
                    <Text
                        style={{
                            position:'absolute',
                            color:COLORS.white,
                            ...FONTS.h2,
                            bottom:10,
                            left:3
                        }}
                    >
                        {category?.title}
                    </Text>
                </SharedElement>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryCard