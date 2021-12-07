import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import places from '../../consts/places';
const {width} = Dimensions.get('screen');
const HomeScreen = ({navigation}) => {

  const categoryIcons = [
    <Icon name="flight" size={25} color={COLORS.primary} />,
    <Icon name="beach-access" size={25} color={COLORS.primary} />,
    <Icon name="near-me" size={25} color={COLORS.primary} />,
    <Icon name="place" size={25} color={COLORS.primary} />,
  ];

  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon,index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    )
  }

  const Card = ({place}) =>{
    return (
      <TouchableOpacity 
        activeOpacity={0.8}
        onPress={()=> navigation.navigate('DetailsScreen', place)}
      >
        <ImageBackground 
          style={style.cardImg}
          source={place.image}
        >
          <Text
            style={{
              color:COLORS.white,
              fontSize:20,
              fontWeight:'bold',
              marginTop:10
            }}  
          >
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent:'space-between',
              flexDirection:'row',
              alignItems:'flex-end'
            }}
          >
            <View style={{flexDirection:'row'}}>
              <Icon name="place"  size={20}  color={COLORS.white} />
              <Text style={{marginLeft:5,color:COLORS.white}}>
                {place.location}
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Icon name="star"  size={20}  color={COLORS.white} />
              <Text style={{marginLeft:5,color:COLORS.white}}>
                5.0
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>

    )
  }

  const RecommendedCard = ({place}) => {
    return(
      <ImageBackground
        style={style.rmCardImg}
        source={place.image}
      > 
        {/*Name */}
        <Text
          style={{
            color:COLORS.white,
            fontSize:22,
            fontWeight:'bold',
            marginTop:10
          }}
        >
          {place.name}
        </Text>
        <View
          style={{
            flex:1,
            justifyContent:'space-between',
            alignItems:'flex-end'
          }}
        > 
          <View
            style={{
              width:'100%',
              flexDirection:'row',
              marginTop:10
            }}
          >
            <View style={{flexDirection:'row'}}>
                <Icon name="place" size={22} color={COLORS.white}/>
                <Text style={{color:COLORS.white,marginLeft:5}}>
                  {place.location}
                </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Icon name="star" size={22} color={COLORS.white}/>
                <Text style={{color:COLORS.white,marginLeft:5}}>
                  5.0
                </Text>
            </View>
          </View>
          <Text style={{color:COLORS.white,fontSize:13}}>
            {place.details}
          </Text>
        </View>
      </ImageBackground>
    )
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      {/*Header home */}
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="notifications-none" size={28} color={COLORS.white}  />
      </View>
      {/*Body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*Header Title */}
        <View
          style={{
            backgroundColor:COLORS.primary,
            height:120,
            paddingHorizontal:20
          }}
        >
          <View>
            <Text style={style.headerTitle}>
              Explore the
            </Text>
            <Text style={style.headerTitle}>
              beautiful places
            </Text>
            {/*Search*/}
            <View style={style.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput placeholder="Search where you want" style={{color:COLORS.grey}} />
            </View>
          </View>
        </View>
        {/*List of category*/}
        <ListCategories />
        <Text style={style.sectionTitle}>
          Places
        </Text>

        {/*Places*/}
        <View>
          <FlatList 
            horizontal
            contentContainerStyle={{
              paddingLeft:20
            }}
            showsHorizontalScrollIndicator={false}
            data={places}
            keyExtractor={item=>`${item.id}`}
            renderItem={({item}) => ( 
              <Card place={item} />
            )}
          />
          <Text style={style.sectionTitle}>
            Recommends
          </Text>
          {/*Recommend Places*/}
          <FlatList 
            contentContainerStyle={{
              paddingLeft:20,
              paddingBottom:20
            }}
            snapToInterval={width-20}
            horizontal
            data={places}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item=>`${item.id}`}
            renderItem={({item})=>(
              <RecommendedCard place={item} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header:{
    paddingVertical:20,
    paddingHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: COLORS.primary
  },
  headerTitle:{
    color:COLORS.white, 
    fontSize:23,
    fontWeight:'bold'
  },
  inputContainer:{
    height:60,
    width:'100%',
    backgroundColor:COLORS.white,
    borderRadius:10,
    position:'absolute',
    top:90,
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:'center',
    elevation:12
  },
  categoryContainer:{
    marginTop:60,
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  iconContainer:{
    height:60,
    width:60,
    backgroundColor:COLORS.secondary,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  sectionTitle:{
    marginHorizontal:20,
    marginVertical:20,
    fontWeight:'bold',
    fontSize:20
  },
  cardImg:{
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImg:{
    width:width-40,
    height:200,
    marginRight:20,
    borderRadius:10,
    overflow:'hidden',
    padding:10
  }
});
export default HomeScreen;
