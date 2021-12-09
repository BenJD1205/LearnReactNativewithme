import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;
  console.log(item)
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom:20
      }}
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={style.headerImg}
        source={item.image}
      >
        <View style={style.header}>
          <Icon 
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={() =>navigation.goBack()}
          />
          <Icon 
            name="bookmark-border"
            size={28}
            color={COLORS.white}      
          />
        </View>
      </ImageBackground>
      <View>
        <View style={style.iconContainer}>
          <Icon name="place" color={COLORS.white} size={28} />
        </View>
        <View style={{marginTop:20,paddingHorizontal:20}}>
          <Text style={{fontWeight:'bold',fontSize:20}}>{item.name}</Text>
          <Text
            style={{
              fontSize:12,
              fontWeight:'400',
              color:COLORS.grey,
              marginTop:5
            }}
          >
            {item.location}
          </Text>
          <View 
            style={{
              marginTop:10,
              flexDirection:'row',
              justifyContent:'space-between',
            }}
          >
            <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'row'}}>
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.grey} />
              </View>
              <Text 
                style={{
                  fontWeight:'bold',
                  fontSize:18,
                  marginLeft:15
                }}
              >
                4.0
              </Text>
            </View>
            <Text style={{fontSize:13,color:COLORS.grey}}>
              365 reviews
            </Text>
          </View>
          <View style={{marginTop:20}}>
            <Text style={{lineHeight:20,color:COLORS.grey}}>
              {item.details}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop:20,
            flexDirection:'row',
            justifyContent:'center',
            paddingLeft:20,
            alignItems:'center',
          }}        
        >
          <Text style={{fontSize:20,fontWeight:'bold'}}>
            Price per night
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                fontSize:12,
                fontWeight:'bold',
                color:COLORS.grey,
                marginLeft:5,
              }}
            >
              ${item.price}
            </Text>
            <Text
              style={{
                fontSize:12,
                fontWeight:'bold',
                color:COLORS.grey,
                marginLeft:5,
              }}
            >
              +breakfast
            </Text>
          </View>
        </View>
        <View style={style.btn}>
          <Text style={{color:COLORS.white,fontSize:18,fontWeight:'bold'}}>
            Book Now
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  btn:{
    height:55,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
    backgroundColor: COLORS.primary,
    marginHorizontal:20,
    borderRadius:10
  },
  priceTag:{
    height:40,
    alignItems:'center',
    marginLeft:40,
    paddingLeft:40,
    flex:1,
    backgroundColor: COLORS.secondary,
    flexDirection:'row',
    borderBottomLeftRadius:20,
    borderTopLeftRadius:20
  },
  iconContainer:{
    position:'absolute',
    height:60,
    width:60,
    backgroundColor: COLORS.primary,
    top:-30,
    right:20,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
  },
  headerImg:{
    height:400,
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    overflow:'hidden'
  },
  header:{
    marginTop:60,
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:20,
    justifyContent:'space-between'
  }
});

export default DetailsScreen;
