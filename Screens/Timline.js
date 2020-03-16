import React, { useState, useEffect } from "react";
import { Alert, ScrollView, View, StyleSheet, Text, Platform } from "react-native";
//custom components
import Theme from "../Themes/customBoostrapTheme"
import AppHeader from "../Components/AppHeader";
//other open source componets
import { Card, ListItem, Button, Icon } from 'react-native-elements'
// Import Web View
import { WebView } from 'react-native-webview';
import { FlatList } from "react-native-gesture-handler";



const Timeline = () => {

//define contents state.
const [contentList, setContentList]=useState([]);


 //get data

 //make api call
 fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCCJ0NWFHBZaV6ea4O0obxlYKEEtS5Y1XM&channelId=UCG6orNVuXIICv9_ifH6msIA&part=snippet,id&order=date&maxResults=20')
 .then((response) => response.json())
 .then((responseJson) => {
  setContentList([responseJson.items, responseJson.items]);
 })
 .catch((error) =>{
   console.error(error);
 });
//  
 //set state

//to avoid recursive loop
// useEffect(() => {setContentList(contents)},[]);

  return (
    <View style={{ backgroundColor: Theme.color.black }}>
      {/* Screen header */}
      <AppHeader>My Timeline - @Olugbenga</AppHeader>

      {/* body */}
      <ScrollView horizontal={false}>
        {contentList.map((channel, index) => {
          return (
            <ScrollView key={index} horizontal={true}>
              {channel.map((video) => {
                return (
                  <Card key={video.id.videoId} containerStyle={style.Card}>
                    {/* Web view */}
                    <View style={{ height: 300, width: 360 }}>
                      <WebView
                        style={style.WebViewContainer}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: 'https://www.youtube-nocookie.com/embed/'+video.id.videoId }}
                      />
                    </View>
                    {/* //video stats */}
                    <View style={style.cardStatsPanel}>
                      <Text style={style.cardStats}>500 views</Text>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', marginRight:10}}>
                          <Text style={style.cardStats}>200</Text>
                          <Icon name="thumb-up" color={Theme.color.white} size={17} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={style.cardStats}>500</Text>
                          <Icon name="thumb-down" color={Theme.color.white} size={17} />
                        </View>
                      </View>
                    </View>
                    {/* Web view */}
                  </Card>
                )
              })}
            </ScrollView>
          )
        })}



      </ScrollView>


    </View >
  );
}

//Embeded object styles
const style = StyleSheet.create({
  WebViewContainer: {

    marginTop: (Platform.OS == 'ios') ? 20 : 0,

  },

  Card: {
    padding: 0,
    borderColor: Theme.color.black,
    backgroundColor: Theme.color.lightBlack
  }
  ,
  cardStats: {
    color: Theme.color.white,
    marginRight: 5
  }
  ,
  cardStatsPanel: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical:5,
    marginHorizontal:10
  }

});

//Export App
export default Timeline;