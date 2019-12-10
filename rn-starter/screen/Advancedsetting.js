import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { ScreenOrientation } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class HelloWorldApp extends Component {
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }
  render() {
    return (

      <View style={{ flex: 1, backgroundColor: 'black', opacity: 1, flexDirection: "column", justifyContent: 'space-between' }}>
        <View style={{ flex: 1, backgroundColor: '#595858', opacity: 1, margin: 5, flexDirection: "row", }} >
        <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("tdrawerportrait")
                    }
                    style={{ width: 35, height: 35, opacity: 10 }}
                  >
                    <View>
                      <Image
                        style={{ width: 30, height: 30, opacity: 1 }}
                        source={require("./assets/navbar.png")}
                      ></Image>
                    </View>
                  </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 18, paddingLeft: 100, alignSelf: "center" }}>HD</Text>
          <Text style={{ color: 'white', fontSize: 18, paddingLeft: 40, alignSelf: "center", paddingRight: 40 }}>0:00/32:15</Text>
          <Image style={{ width: 20, height: 20, opacity: 1, alignSelf: "center", paddingRight: 20 }}
            source={require('./assets/micon.png')}></Image>
          <Image style={{ width: 20, height: 20, opacity: 1, alignSelf: "center" }}
            source={require('./assets/battery.png')}></Image>



        </View>

        <View style={{ flex: 2, backgroundColor: 'black', opacity: .6, margin: 5, borderRadius: 10, flexDirection: "row", alignItems: "center", padding: 10, justifyContent: 'space-between' }} >
        <View  style={{ flex: 1, borderRadius: 7, borderWidth: 0.7, borderColor: '#d6d7da', width: '100%', height: '100%', marginRight: 10 }}>
          <TouchableOpacity onPress={() =>
                      this.props.navigation.navigate("cameradd")
                    }>
            <Image
              style={{ width: 40, height: 40, opacity: 1, alignSelf: "center", alignContent: "center", marginTop: 5 }}
              source={require('./assets/cameraplus.png')}
            /></TouchableOpacity></View>
          <View style={{ flex: 1, borderRadius: 7, borderWidth: 0.7, borderColor: '#d6d7da', paddingRight: 3, width: '100%', height: '100%', marginRight: 10 }}>
            <Image
              style={{ width: 40, height: 40, opacity: 1, alignSelf: "center", marginTop: 7 }}
              source={require('./assets/cubestack.png')}
            /></View>
          <View style={{ flex: 1, borderRadius: 7, borderWidth: 0.7, borderColor: '#d6d7da', width: '100%', height: '100%' }}>
            < Image
              style={{ width: '100%', height: '100%', opacity: 1, }}
              source={require('./assets/football.jpg')}
            />
          </View>
        </View>
        <View style={{ flex: 2 }}></View>
        <View style={{ flex: 5, backgroundColor: 'black', opacity: .6, margin: 5, borderRadius: 10, flexDirection: "row" }} >
          <Image
            style={{ width: '100%', height: '100%', opacity: 1, }}
            source={require('./assets/football.jpg')}
          />

        </View>
        <View style={{ flex: 3, backgroundColor: 'black', opacity: .6, margin: 5, borderRadius: 10, flexDirection: "row" }} >
          <View style={{ flex: 1, paddingRight: 5 }}><Image style={{ width: '100%', height: '100%' }} source={require('./assets/football.jpg')}></Image></View>
          <View style={{ flex: 1, paddingRight: 5 }}><Image style={{ width: '100%', height: '100%' }} source={require('./assets/football.jpg')}></Image></View>
          <View style={{ flex: 1 }}><Image style={{ width: '100%', height: '100%' }} source={require('./assets/football.jpg')}></Image></View>


        </View>
        <View style={{ flex: 2 }}></View>
        <View style={{ flex: 3, backgroundColor: 'black', opacity: .6, margin: 5, borderRadius: 10, flexDirection: "row", padding: 10, justifyContent: 'space-between' }} >
          <View style={{ flex: 1, borderColor: '#d6d7da', borderRadius: 10, borderWidth: 0.7, paddingRight: 10, marginRight: 10 }}><Image style={{ width: 40, height: 40, alignContent: 'center', alignItems: "center", alignSelf: "center", paddingRight: 10, marginTop: 22, }} source={require('./assets/recorder.png')}></Image></View>
          <View style={{ flex: 1, borderColor: '#d6d7da', borderRadius: 10, borderWidth: 0.7, }}><Image style={{ width: 40, height: 40, alignContent: 'center', alignItems: "center", alignSelf: "center", marginTop: 22 }} source={require('./assets/camera.png')}></Image></View>
        </View>



        


      </View>
    );
  }
}
