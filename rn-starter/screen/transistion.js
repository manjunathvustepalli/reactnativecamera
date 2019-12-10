import React from 'react';
import { Text, View, TouchableOpacity,Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
//import Advancedsetting from './screen/Advancedsetting';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };
  
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    
  }

  render() {
    
      return (
        <View style={{ flex: 1,backgroundColor:'black',opacity:0.9 }}>
          
            
              <View style={{flex:1,flexDirection: 'row',justifyContent: 'flex-start',marginTop:80,paddingLeft:220}}>
                <TouchableOpacity ><View style={{flexDirection: 'row',paddingRight:75,}}><Image style={{width: 35, height: 35,opacity: 1,}}
          source={require('./assets/gear.png')}></Image><Text style={{color:'white',fontSize:18,alignSelf:"center",paddingLeft:30 }}>Setting</Text></View></TouchableOpacity><TouchableOpacity><View style={{flexDirection: 'row',}}>
             <Image
           style={{width: 35, height: 35,opacity: 1,paddingLeft:30}}
          source={require('./assets/lock.png')}
        />
            <Text style={{color:'white',fontSize:18,alignSelf:"center",paddingLeft:30 }}>Security</Text></View></TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection: 'row',justifyContent: 'flex-start',paddingLeft:220,}}>
                <TouchableOpacity ><View style={{flexDirection: 'row',paddingRight:50}}><Image style={{width: 35, height: 35,opacity: 1,flexDirection: 'row'}}
          source={require('./assets/resolution.png')}></Image><Text style={{color:'white',fontSize:18,alignSelf:"center",flexDirection: 'row',paddingLeft:30 }}>Resolution</Text></View></TouchableOpacity>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Advancedsetting')}><View style={{flexDirection: 'row',}}><Image style={{width: 35, height: 35,opacity: 1,}}
          source={require('./assets/react2.png')}></Image><Text style={{color:'white',fontSize:18,alignSelf:"center",paddingLeft:30 }}>Advanced Mode</Text></View></TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection: 'row',justifyContent: 'flex-start',paddingLeft:220,}}>
                <TouchableOpacity><View style={{flexDirection: 'row',paddingRight:70}}><Image style={{width: 35, height: 35,opacity: 1,}}
          source={require('./assets/exit.png')}></Image><Text style={{color:'white',fontSize:18,alignSelf:"center",paddingLeft:30 }}>Log Out</Text></View></TouchableOpacity><TouchableOpacity><View style={{flexDirection: 'row',}}><Image style={{width: 35, height: 35,opacity: 1,}}
          source={require('./assets/information.png')}></Image><Text style={{color:'white',fontSize:18,alignSelf:"center",paddingLeft:30 }}>Help</Text></View></TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection: 'row',justifyContent: 'flex-start',alignSelf:"center",}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} ><View style={{flexDirection: 'row',paddingRight:50}}><Image style={{width: 35, height: 35,opacity: 1,}}
          source={require('./assets/arrow-up.png')}></Image></View></TouchableOpacity>
              </View>




            
         
        </View>
      );
    }
  }
