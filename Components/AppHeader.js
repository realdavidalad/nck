import React from "react";
import {View, StyleSheet, Text, StatusBar} from "react-native";
import Theme from "../Themes/customBoostrapTheme"

const AppHeader=props=>{

  return (
    
    <View style={style.container}>
     {/* set the style of device status bar */}
     <StatusBar backgroundColor={Theme.color.black} barStyle="light-content" />
      <Text style={style.title}>
      {props.children}
      </Text>
    </View>

  );
}

//Embeded object styles
const style=StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Theme.color.black,
        padding:25,
        width:"100%",
        height:30
    },
    title:{
        fontSize:18,
        color:Theme.color.white,
    }

});

//Export App
export default AppHeader;