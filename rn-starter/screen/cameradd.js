import React, { Component } from 'react';
import { ScrollView, Image, Text,View,TouchableOpacity,Button} from 'react-native';

export default class ScrolledDown extends Component {
  render() {
      return (
        <View  style={{ flex: 1,backgroundColor: '#000000'}}>
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
          <Text style={{ color: 'white', fontSize: 18, paddingLeft: 100, alignSelf: "center"   }}>HD</Text>
          <Text style={{ color: 'white', fontSize: 18, paddingLeft: 40,  paddingRight: 40, alignSelf: "center"  }}>0:00/32:15</Text>
          <Image style={{ width: 20, height: 20, opacity: 1,  paddingRight: 20, alignSelf: "center"  }}
            source={require('./assets/micon.png')}></Image>
          <Image style={{ width: 20, height: 20, opacity: 1, alignSelf: "center"   }}
            source={require('./assets/battery.png')}></Image>



        </View>
        <View style={{ flex: 1}}>
          
            <View style={{flexDirection: "row",}}><TouchableOpacity style={{flexDirection: "row",}} onPress={() =>
                      this.props.navigation.navigate("Advancedsetting")
                    }>
            <Image   style={{ width: 20, height: 20,}} source={require('./assets/arrow-left.png')}></Image>
            <Text style={{color: 'white', fontSize: 18}}>Back</Text></TouchableOpacity>
            <View style={{backgroundColor: '#ffffff',borderRadius:20,flexDirection: "row",marginLeft:180}}>
            <Text style={{color: 'black', fontSize: 18}} >Make all private </Text>
            <Image style={{ width: 20, height: 20,}} source={require('./assets/lock-black.png')} >

            </Image></View>
            </View>
          
        </View>
        <View style={{ flex: 16}}>
        <ScrollView >
        <View style={{ flex: 1,padding:20, flexDirection: "row",}}>
          <Image style={{ width: 150, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:40}}>Greg 1</Text>
          <TouchableOpacity style={{backgroundColor: '#ffffff',borderRadius:20,marginLeft:40,margin:10,height:30,width:90}}>
            <Text style={{color:'black',fontSize: 18,alignContent:'center',alignItems:'center',alignSelf:'center'}}>
            Disabled
            </Text>

          </TouchableOpacity>
          
          
          </View>
          <View>
          <Image style={{ width: 20, height: 20,marginLeft:60}} source={require('./assets/lock.png')} ></Image>
          <Image style={{ width: 20, height: 20,marginLeft:60,marginTop:10}} source={require('./assets/gear.png')} ></Image></View>

        </View>
        <View style={{ flex: 1,padding:20, flexDirection: "row",}}>
          <Image style={{ width: 150, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:40}}>Greg 1</Text>
          
          <TouchableOpacity style={{backgroundColor: '#ffffff',borderRadius:20,marginLeft:40,margin:10,height:30,width:90}}>
            <Text style={{color:'black',fontSize: 18,alignContent:'center',alignItems:'center',alignSelf:'center'}}>
            Disabled
            </Text>

          </TouchableOpacity>
          
          </View>
          <View>
          <Image style={{ width: 20, height: 20,marginLeft:60}} source={require('./assets/lock.png')} ></Image>
          <Image style={{ width: 20, height: 20,marginLeft:60,marginTop:10}} source={require('./assets/gear.png')} ></Image></View>

        </View>
        <View style={{ flex: 1,padding:20, flexDirection: "row",}}>
          <Image style={{ width: 150, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:40}}>Greg 1</Text>
          
          <TouchableOpacity style={{backgroundColor: '#000000',borderRadius:20,alignContent:'center',alignItems:'center',alignSelf:'center',borderColor:'white',borderWidth:0.7,marginLeft:40,margin:10,height:30,width:90}}>
            <Text style={{color:'white',fontSize: 18}}>
            Enabled
            </Text>
          
          
            </TouchableOpacity>
          
          
          
          </View>
          <View>
          <Image style={{ width: 20, height: 20,marginLeft:60}} source={require('./assets/lock.png')} ></Image>
          <Image style={{ width: 20, height: 20,marginLeft:60,marginTop:10}} source={require('./assets/gear.png')} ></Image></View>

        </View>
        <View style={{ flex: 1,padding:20, flexDirection: "row",}}>
          <Image style={{ width: 150, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:40}}>Greg 1</Text>
          <TouchableOpacity style={{backgroundColor: '#000000',borderRadius:20,alignContent:'center',alignItems:'center',alignSelf:'center',borderColor:'white',borderWidth:0.7,marginLeft:40,margin:10,height:30,width:90}}>
            <Text style={{color:'white',fontSize: 18}}>
            Enabled
            </Text>
          
          
            </TouchableOpacity>
          
          
          
          
          </View>
          <View>
          <Image style={{ width: 20, height: 20,marginLeft:60}} source={require('./assets/lock.png')} ></Image>
          <Image style={{ width: 20, height: 20,marginLeft:60,marginTop:10}} source={require('./assets/gear.png')} ></Image></View>

        </View>
        <View style={{ flex: 1,padding:20, flexDirection: "row",}}>
          <Image style={{ width: 150, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:40}}>Greg 1</Text>
          <TouchableOpacity style={{backgroundColor: '#000000',borderRadius:20,alignContent:'center',alignItems:'center',alignSelf:'center',borderColor:'white',borderWidth:0.7,marginLeft:40,margin:10,height:30,width:90}}>
            <Text style={{color:'white',fontSize: 18}}>
            Enabled
            </Text>
          
          
            </TouchableOpacity>
          
          
          
          </View>
          <View>
          <Image style={{ width: 20, height: 20,marginLeft:60}} source={require('./assets/lock.png')} ></Image>
          <Image style={{ width: 20, height: 20,marginLeft:60,marginTop:10}} source={require('./assets/gear.png')} ></Image></View>

        </View>
        <View style={{ flex: 1,padding:20, flexDirection: "row",}}>
          <Image style={{ width: 150, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:40}}>Greg 1</Text>
          <TouchableOpacity style={{backgroundColor: '#000000',borderRadius:20,alignContent:'center',alignItems:'center',alignSelf:'center',borderColor:'white',borderWidth:0.7,marginLeft:40,margin:10,height:30,width:90}}>
            <Text style={{color:'white',fontSize: 18}}>
            Enabled
            </Text>
          
          
            </TouchableOpacity>
          
          
          
          
          </View>
          <View>
          <Image style={{ width: 20, height: 20,marginLeft:60}} source={require('./assets/lock.png')} ></Image>
          <Image style={{ width: 20, height: 20,marginLeft:60,marginTop:10}} source={require('./assets/gear.png')} ></Image></View>

        </View>
        
        
        
        
        
        
        
        
        </ScrollView></View>

        </View>
        
    );
  }
}
