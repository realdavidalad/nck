import React from "react";
import {View, StyleSheet, Text} from "react-native";
import Theme from "../Themes/customBoostrapTheme"
import AppHeader from "../Components/AppHeader";

const Profile=()=>{

  return (
    <View>
      {/* Screen header */}
      <AppHeader>
        Profile | @olugbenga
      </AppHeader>

      {/* body */}
      
    </View>
  );
}

//Embeded object styles
const style=StyleSheet.create({
    

});

//Export App
export default Profile;