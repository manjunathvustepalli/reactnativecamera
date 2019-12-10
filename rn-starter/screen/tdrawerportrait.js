import React from 'react';
import { Text, View, TouchableOpacity,Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { ScreenOrientation } from 'expo';
export default class CameraExample extends React.Component {
    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      }
  state = {
   
  };
  
  
  render() {
    
      return (
        <View style={{ flex: 1,backgroundColor:'black',opacity:1,flexDirection:'column' }}>
          
            
              <View style={{flex:1,flexDirection: 'row',justifyContent: 'flex-start',alignSelf:"center",marginTop:60}}>
                <TouchableOpacity ><View style={{flexDirection: 'row',paddingRight:75,}}><Image style={{width: 35, height: 35,opacity: 1,}}
          source={require('./assets/gear.png')}></Image><Text style={{color:'white',fontSize:18,alignSelf:"center",paddingLeft:35 }}>Setting</Text></View></TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection: 'row',justifyContent: 'flex-start',marginTop:30,alignSelf:"center"}}>
                <TouchableOpacity ><View style={{flexDirection: 'row',paddingRight:75,}}><Image style={{width: 35, height: 35,opacity: 1,}}
          source={require('./assets/lock.png')}></Image><Text style={{color:'white',fontSize:18,alignSelf:"center",paddingLeft:35 }}>Security</Text></View></TouchableOpacity>
              </View>
              
              <View style={{flex:1,flexDirection: 'row',justifyContent: 'flex-start',alignSelf:"center",marginTop:30}}>
                <TouchableOpacity ><View style={{flexDirection: 'row',paddingRight:50}}><Image style={{width: 35, height: 35,opacity: 1,flexDirection: 'row'}}
          source={require('./assets/resolution.png')}></Image><Text style={{color:'white',fontSize:18,alignSelf:"center",flexDirection: 'row',paddingLeft:35 }}>Resolution</Text></View></TouchableOpacity>
          
              </View>
              <View style={{flex:1,flexDirection: 'row',justifyContent: 'flex-start',marginTop:30,alignSelf:"center"}}>
              <TouchableOpacity  onPress={() => { ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.LANDSCAPE
            );this.props.navigation.navigate('Home')}}><View style={{flexDirection: 'row',}}><Image style={{width: 35, height: 35,opacity: 1,}}
          source={require('./assets/react2.png')}></Image><Text style={{color:'white',fontSize:18,alignSelf:"center",paddingLeft:30 }}>Advanced Mode</Text></View></TouchableOpacity></View>
              <View style={{flex:1,flexDirection: 'row',justifyContent: 'flex-start',alignSelf:"center",marginTop:30}}>
                <TouchableOpacity ><View style={{flexDirection: 'row',paddingRight:50}}><Image style={{width: 35, height: 35,opacity: 1,flexDirection: 'row'}}
          source={require('./assets/exit.png')}></Image><Text style={{color:'white',fontSize:18,alignSelf:"center",flexDirection: 'row',paddingLeft:35 }}>Log Out</Text></View></TouchableOpacity>
          
              </View>
              <View style={{flex:1,flexDirection: 'row',justifyContent: 'flex-start',alignSelf:"center",marginTop:30}}>
                <TouchableOpacity ><View style={{flexDirection: 'row',paddingRight:50}}><Image style={{width: 35, height: 35,opacity: 1,flexDirection: 'row'}}
          source={require('./assets/information.png')}></Image><Text style={{color:'white',fontSize:18,alignSelf:"center",flexDirection: 'row',paddingLeft:35 }}>Help</Text></View></TouchableOpacity>
          
              </View>
              <View style={{flex:1,flexDirection: 'row',justifyContent: 'flex-start',alignSelf:"center",}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} ><View style={{flexDirection: 'row',paddingRight:50}}><Image style={{width: 35, height: 35,opacity: 1,}}
          source={require('./assets/arrow-up.png')}></Image></View></TouchableOpacity>
              </View>




            
         
        </View>
      );
    }
  }
