import React, { Component } from 'react';
import { View, Text,ImageBackground,Image,TouchableOpacity } from 'react-native';
import { withOrientation } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

class cameraddlandscape extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{backgroundColor:"black",flex:1,flexDirection:"row"}}>
            <ImageBackground source={require('./assets/football.jpg')} style={{width: '100%', height: '100%'}}>
    
  
        <View style={{backgroundColor:"black",opacity:0.7,borderRadius:10,alignSelf:"center",marginTop:5,marginLeft:40,marginRight:40,flex:5}}>
        <ScrollView>
          <View style={{flexDirection:"row"}}>
          <View style={{flexDirection:"column",padding:20}}>
        <Text style={{color:'white',fontSize:30}}>My Cameras </Text>
        <View style={{ flex: 1,padding:10, flexDirection: "row",}}>
          <Image style={{ width: 90, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:20}}>Greg 1</Text>
          
          <TouchableOpacity style={{backgroundColor: '#ffffff',borderRadius:20,marginLeft:20,margin:10,height:30,width:90}}>
            <Text style={{color:'black',fontSize: 18,alignContent:'center',alignItems:'center',alignSelf:'center'}}>
            Disable
            </Text>

          </TouchableOpacity>
          
          </View>
          <View>
          <Image style={{ width: 20, height: 20,marginLeft:20}} source={require('./assets/lock.png')} ></Image>
          <Image style={{ width: 20, height: 20,marginLeft:20,marginTop:10}} source={require('./assets/gear.png')} ></Image></View>

        </View>
        <View style={{ flex: 1,padding:10, flexDirection: "row",}}>
          <Image style={{ width: 80, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:20}}>Greg 1</Text>
          <TouchableOpacity style={{backgroundColor: '#000000',borderRadius:20,alignContent:'center',alignItems:'center',alignSelf:'center',borderColor:'white',borderWidth:0.7,marginLeft:20,margin:10,height:30,width:90}}>
            <Text style={{color:'white',fontSize: 18}}>
            Enable
            </Text>
          
          
            </TouchableOpacity>
          
          
          
          
          </View>
          <View>
          <Image style={{ width: 20, height: 20,marginLeft:30}} source={require('./assets/lock.png')} ></Image>
          <Image style={{ width: 20, height: 20,marginLeft:30,marginTop:10}} source={require('./assets/gear.png')} ></Image></View>

        </View>
        <View style={{ flex: 1,padding:10, flexDirection: "row",}}>
          <Image style={{ width: 80, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:20}}>Greg 1</Text>
          <TouchableOpacity style={{backgroundColor: '#000000',borderRadius:20,alignContent:'center',alignItems:'center',alignSelf:'center',borderColor:'white',borderWidth:0.7,marginLeft:20,margin:10,height:30,width:90}}>
            <Text style={{color:'white',fontSize: 18}}>
            Enable
            </Text>
          
          
            </TouchableOpacity>
          
          
          
          
          </View>
          <View>
          <Image style={{ width: 20, height: 20,marginLeft:30}} source={require('./assets/lock.png')} ></Image>
          <Image style={{ width: 20, height: 20,marginLeft:30,marginTop:10}} source={require('./assets/gear.png')} ></Image></View>

        </View>
        <View style={{padding:20,justifyContent:"space-between"}}>
        <TouchableOpacity style={{borderRadius:40,backgroundColor:"white",alignSelf:"center",alignContent:"center",height:40,width:250,justifyContent:"space-between",marginBottom:10}}>
                  <Text style={{alignSelf:"center",alignContent:"center",width:180,height:30,marginTop:4,fontSize:20}}> Add New Camera</Text>
                  
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius:40,backgroundColor:"white",alignSelf:"center",alignContent:"center",height:40,width:250}}>
    <Text style={{alignSelf:"center",alignContent:"center",width:180,height:30,marginTop:4,fontSize:20}}> Make All Private  {<Image style={{ width: 20, height: 20,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/lock.png')}></Image>}</Text>
                 
        </TouchableOpacity></View>
        
        </View>
      
       <View style={{flexDirection:"column",}}>
       
       <Text  style={{color:'white',fontSize:30}}>Shared Cameras </Text>
       <View style={{ flex: 1,padding:20, flexDirection: "row",}}>
          <Image style={{ width: 80, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:40}}>Greg 1</Text>
          <TouchableOpacity style={{backgroundColor: '#000000',borderRadius:20,alignContent:'center',alignItems:'center',alignSelf:'center',borderColor:'white',borderWidth:0.7,marginLeft:40,margin:10,height:30,width:90}}>
            <Text style={{color:'white',fontSize: 18}}>
            Enable
            </Text>
          
          
            </TouchableOpacity>
          
          
          
          
          </View>
          <View>
          </View>

        </View>
        <View style={{ flex: 1,padding:20, flexDirection: "row",}}>
          <Image style={{ width: 80, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:40}}>Greg 1</Text>
          <TouchableOpacity style={{backgroundColor: '#000000',borderRadius:20,alignContent:'center',alignItems:'center',alignSelf:'center',borderColor:'white',borderWidth:0.7,marginLeft:40,margin:10,height:30,width:90}}>
            <Text style={{color:'white',fontSize: 18}}>
            Enable
            </Text>
          
          
            </TouchableOpacity>
          
          
          
          
          </View>
          <View>
          </View>

        </View>
        <View style={{ flex: 1,padding:20, flexDirection: "row",}}>
          <Image style={{ width: 80, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:40}}>Greg 1</Text>
          <TouchableOpacity style={{backgroundColor: '#000000',borderRadius:20,alignContent:'center',alignItems:'center',alignSelf:'center',borderColor:'white',borderWidth:0.7,marginLeft:40,margin:10,height:30,width:90}}>
            <Text style={{color:'white',fontSize: 18}}>
            Enable
            </Text>
          
          
            </TouchableOpacity>
          
          
          
          
          </View>
          <View>
          </View>

        </View>
        
        <View style={{ flex: 1,padding:20, flexDirection: "row",}}>
          <Image style={{ width: 80, height: 80,borderRadius:20,borderWidth: 1, borderColor: '#ffffff'}} source={require('./assets/football.jpg')}></Image>
          <View>
          <Text style={{color: 'white', fontSize: 18,marginLeft:40}}>Greg 1</Text>
          <TouchableOpacity style={{backgroundColor: '#000000',borderRadius:20,alignContent:'center',alignItems:'center',alignSelf:'center',borderColor:'white',borderWidth:0.7,marginLeft:40,margin:10,height:30,width:90}}>
            <Text style={{color:'white',fontSize: 18}}>
            Enable
            </Text>
          
          
            </TouchableOpacity>
          
          
          
          
          </View>
          <View>
          </View>

        </View>
        <TouchableOpacity style={{borderRadius:40,backgroundColor:"white",alignSelf:"center",alignContent:"center",height:40,width:250}}>
                  <Text style={{alignSelf:"center",alignContent:"center",width:90,height:30,marginTop:4,fontSize:20}}> Refresh</Text>
        </TouchableOpacity>
        
        </View>
        
        </View>
        
        </ScrollView>
        
       </View>
       <View
                    style={{
                      flexDirection: "row",
                      
                      alignSelf: "stretch",
                      marginLeft:5,
                      marginRight:40,
                      
                      
                      backgroundColor:"black",
                      opacity:0.6,
                      borderRadius:10
                      
                      
                      
                      
                    }}
                  >
                    <Image style={{ width: 20, height: 20,alignSelf:"center",alignItems:"center",alignContent:"center",padding:10,margin:10}} source={require('./assets/cameraplus.png')}></Image>
                    <Image style={{ width: 100, height: 50,alignSelf:"center",alignItems:"center",alignContent:"center",padding:10,margin:2}} source={require('./assets/football.jpg')}></Image>
                    <Image style={{ width: 100, height: 50,alignSelf:"center",alignItems:"center",alignContent:"center",padding:10,margin:2}} source={require('./assets/football.jpg')}></Image>
                    <Image style={{ width: 100, height: 50,alignSelf:"center",alignItems:"center",alignContent:"center",padding:10,margin:2}} source={require('./assets/football.jpg')}></Image>
                    <Image style={{ width: 40, height: 40,alignSelf:"center",alignItems:"center",alignContent:"center",padding:10,marginLeft:300}} source={require('./assets/arrow-left.png')}></Image>

                    
                    
                    
                  </View>
         </ImageBackground>
         
         
         </View>
    );
  }
}

export default cameraddlandscape;
