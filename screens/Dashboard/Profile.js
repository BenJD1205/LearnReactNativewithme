
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import {IconButton,TextButton,LineDivider, ProgressBar, ProfileValue, ProfileRadioButton} from '../../components';
import {COLORS, FONTS,SIZES, icons, images} from '../../constants'
import {connect} from 'react-redux';
import {toggleTheme} from '../../stores/themeActions';
// import appTheme from '../../constants/theme';

const Profile = ({appTheme,toggleTheme}) => {

    const [newCourseNotification,setNewCourseNotification] = React.useState(false)
    const [studyReminder, setStudyReminder] = React.useState(false)

    ///Handler
    function toggleThemeHandler(){
        if(appTheme?.name == "light"){
            toggleTheme('dark')
        }else{
            toggleTheme('light')
        }
    }

    function renderHeader(){
        return(
            <View style={styles.header}>
                <Text
                    style={{
                        color:appTheme?.textColor,
                        ...FONTS.h1
                    }}
                >
                    Profile
                </Text>
                <IconButton 
                    icon={icons.sun}
                    iconStyle={{
                        tintColor:appTheme?.tintColor
                    }}
                    onPress={() =>toggleThemeHandler()}
                />
            </View>
        )
    }

    function renderProfileCard(){
        return(
            <View  style={[styles.profileCard,{backgroundColor:appTheme?.backgroundColor2}]}>   
                {/*Profile details*/}
                <TouchableOpacity
                    style={{
                        width:80,
                        height:80
                    }}
                >
                    {/*Profile image*/}
                    <Image 
                        source={images.profile}
                        style={{
                            width:'100%',
                            height:'100%',
                            borderRadius:40,
                            borderWidth:1,
                            borderColor:COLORS.white
                        }}
                    />
                    {/*Profile IconCam */}
                    <View style={styles.profileInfo} >
                        <View style={styles.iconCamera}>
                            <Image 
                                source={icons.camera}
                                resizeMode="contain"
                                style={{
                                    width:17,
                                    height:17
                                }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                {/*Details */}
                <View
                    style={{
                        flex:1,
                        marginLeft:SIZES.radius,
                        alignItems:'flex-start'
                    }}
                >
                    <Text
                        style={{
                            color:COLORS.white,
                            ...FONTS.h2
                        }}
                    >
                        BenJD1205
                    </Text>
                    <Text
                        style={{
                            color:COLORS.white,
                            ...FONTS.body4
                        }}
                    >
                        Full stack Developer
                    </Text>
                    {/*Progress Bar */}
                    <ProgressBar 
                        progress="58%"
                        containerStyle={{
                            marginTop:SIZES.radius
                        }}
                    />
                    <View
                        style={{
                            flexDirection:'row',
                        }}
                    >
                        <Text
                            style={{
                                flex:1,
                                color:COLORS.white,
                                ...FONTS.body4
                            }}
                        >
                            Overall Progress
                        </Text>

                        <Text
                            style={{
                                color:COLORS.white,
                                ...FONTS.body4
                            }}
                        >
                            58%
                        </Text>
                    </View>
                    {/*Member*/}
                    <TextButton 
                        label="+ Become Member"
                        contentContainerStyle={{
                            height:35,
                            marginTop:SIZES.padding,
                            paddingHorizontal:SIZES.radius,
                            borderRadius:20,
                            backgroundColor:appTheme?.backgroundColor4
                        }}
                        labelStyle={{
                            color:appTheme?.textColor2
                        }}
                    />
                </View>
            </View>
        )
    }

    function renderProfileSection1(){
        return (
            <View style={styles.profileSectionContainer}>
                {/*Name*/}
                <ProfileValue 
                    icon={icons.profile}
                    label="Name"
                    value="BenJD1205"
                />

                <LineDivider />
                {/*Email*/}
                <ProfileValue 
                    icon={icons.email}
                    label="Email"
                    value="s.anh2209@gmail.com"
                />

                <LineDivider />
                {/*Password */}
                <ProfileValue 
                    icon={icons.password}
                    label="Password"
                    value="Updated 2 weeks ago"
                />

                <LineDivider />
                {/*Phone*/}
                <ProfileValue 
                    icon={icons.call}
                    label="Password"
                    value="+84937713404"
                />

                <LineDivider />
            </View>
        )
    }

    function renderProfileSection2(){
        return (
            <View style={styles.profileSectionContainer}>
                {/*Star*/}
                <ProfileValue 
                    icon={icons.star_1}
                    value="Pages"
                />

                <LineDivider />

                {/*New*/}
                <ProfileRadioButton 
                    icon={icons.new_icon}
                    label="New Course Notifications"
                    isSelected={newCourseNotification}
                    onPress={() => {
                        setNewCourseNotification(!newCourseNotification)
                    }}
                />

                <LineDivider />

                {/*Study*/}
                <ProfileRadioButton 
                    icon={icons.reminder}
                    label="Study Reminder"
                    isSelected={studyReminder}
                    onPress={() => {
                        setStudyReminder(!studyReminder)
                    }}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex:1,
                backgroundColor: appTheme?.backgroundColor1
            }}
        >
            {/*Header*/}
            {renderHeader()}
            <ScrollView
                containerStyle={{
                    paddingHorizontal:SIZES.padding,
                    paddingBottom:150
                }}
            >
                {/*Profile Card*/}
                {renderProfileCard()}

                {/*Profile Section 1*/}
                {renderProfileSection1()}

                {/*Profile Section 2*/}
                {renderProfileSection2()}
                <View 
                    style={{
                        marginBottom:200
                    }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        marginTop:50,
        paddingHorizontal:SIZES.padding,
        justifyContent:'space-between'
    },
    profileCard:{
        flexDirection:'row',
        marginTop:SIZES.padding,
        marginLeft:10,
        marginRight:10,
        paddingHorizontal:SIZES.radius,
        paddingVertical:20,
        borderRadius:SIZES.radius,
    },
    profileInfo:{
        position:'absolute',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    iconCamera:{
        width:30,
        height:30,
        marginBotton:-10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:COLORS.primary
    },
    profileSectionContainer:{
        marginTop:SIZES.padding,
        paddingHorizontal:SIZES.padding,
        marginHorizontal:10,
        borderWidth:1,
        borderRadius:SIZES.radius,
        borderColor:COLORS.gray20
    }
})

function mapStateToProps(state){
    return{
        appTheme:state.appTheme,
        error:state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTheme: (themeType) => {
            dispatch(toggleTheme(themeType))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);