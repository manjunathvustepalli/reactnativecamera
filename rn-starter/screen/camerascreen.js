import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Button,
  StatusBar,
  AppRegistry,
  CameraRoll,
  photo,
  ScrollView
} from "react-native";
import * as Permissions from "expo-permissions";

import { Camera } from "expo-camera";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import drawer from "react-native-drawer";
import MenuDrawer from "react-native-side-drawer";
import Overlay from "react-native-modal-overlay";
import * as ImagePicker from "expo-image-picker";

export default class CameraDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      modalVisible: false,
      modalVisible1: false,
      refreshing: true,
      image: null
    };
  }
  //To hide and show components
  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    modalVisible: false
  };
  //to refresh the page
  handleRefresh = () => {
    this.setState(
      {
        refreshing: false,
        Page: 1,
        Camera: this.state.Camera
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
  //To show overlay
  showOverlay() {
    this.setState({ modalVisible: true });
  }
  //To show overlay2
  showOverlay1() {
    this.setState({ modalVisible1: true });
  }

  //To close the overlays
  onClose = () => this.setState({ modalVisible: false });
  onClose1 = () => this.setState({ modalVisible1: false });
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA,Permissions.AUDIO_RECORDING);
    this.setState({ hasCameraPermission: status === "granted" });
    StatusBar.setHidden(true);
    setTimeout(() => {
      this.setState({ time: true });
    }, 1000);
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      this.setState({ count: 0 });
    });
  }
  async componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    this.focusListener.remove();
    this.getPermissionAsync();
  }
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      //allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  snap = async () => {
    if (this.camera) {
      let photo1 = await this.camera.takePictureAsync();
      let photo2 = photo1.uri;
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL,);
      if (status === "granted") {
        console.log("hello");
      }
      CameraRoll.saveToCameraRoll(photo2).then(r =>
        alert("created new file: " + r)
      );
    }
  };
  snap1 = async () => {
    if (this.camera) {
      let video = await this.camera.recordAsync();
      let video1 = video.uri;
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === "granted") {
        console.log("hello");
      }
      await CameraRoll.saveToCameraRoll(video1);
     
    }
  };
  snap2 = async () => {
    if (this.camera) {
      await this.camera.stopRecording();
     
    }
  };

  onPictureSaved = photo1 => {
    console.log(photo1);
  };
  render() {
    let { image } = this.state;
    //tTo check whether camera has permissions
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "black",
                  opacity: 0.6,
                  margin: 5,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <TouchableOpacity onPress={this.snap1}>
                  <Image
                    
                    style={{
                      width: 35,
                      height: 35,
                      opacity: 10,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    source={require("./assets/recorder.png")}
                  />
                  
                </TouchableOpacity>
                <TouchableOpacity onPress={this.snap2}>
                <Image
                    
                    style={{
                      width: 35,
                      height: 35,
                      opacity: 10,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    source={require("./assets/videocamera-red.png")}
                  /></TouchableOpacity>
              </View>
              <View style={{ flexDirection: "column", flex: 8 }}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "flex-start",
                    backgroundColor: "black",
                    opacity: 0.6,
                    leftmargin: 5,
                    borderRadius: 10,
                    justifyContent: "space-between",
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 40,
                    paddingRight: 40,
                    marginLeft: 40,
                    marginRight: 40
                  }}
                >
                  <View style={{ borderRadius: 20 }}>
                    <Overlay
                      style={{ borderRadius: 10 }}
                      visible={this.state.modalVisible}
                      onClose={this.onClose}
                      closeOnTouchOutside
                      animationType="slideInDown"
                      containerStyle={{
                        backgroundColor: "rgb(82, 75, 75,0.1)",
                        justifyContent: "flex-start",
                        marginLeft: 100,
                        marginRight: 100
                      }}
                      childrenWrapperStyle={{
                        backgroundColor: "black",
                        opacity: 0.6,
                        justifyContent: "flex-start",
                        borderRadius: 20
                      }}
                    >
                      <Text style={{ color: "white", paddingBottom: 20 }}>
                        Select an app to launch
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                          style={{ flexDirection: "row", paddingRight: 20 }}
                        >
                          <View>
                            <Image
                              style={{ width: 35, height: 35, opacity: 1 }}
                              source={require("./assets/facebook.png")}
                            ></Image>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{ flexDirection: "row", paddingRight: 20 }}
                        >
                          <View>
                            <Image
                              style={{ width: 35, height: 35, opacity: 1 }}
                              source={require("./assets/instagram.png")}
                            ></Image>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{ flexDirection: "row", paddingRight: 20 }}
                        >
                          <View>
                            <Image
                              style={{ width: 35, height: 35, opacity: 1 }}
                              source={require("./assets/youtube.png")}
                            ></Image>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{ flexDirection: "row", paddingRight: 20 }}
                        >
                          <View>
                            <Image
                              style={{ width: 35, height: 35, opacity: 1 }}
                              source={require("./assets/skype.png")}
                            ></Image>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </Overlay>
                  </View>
                  <View style={{ borderRadius: 20 }}>
                    <Overlay
                      style={{ borderRadius: 10 }}
                      visible={this.state.modalVisible1}
                      onClose={this.onClose1}
                      closeOnTouchOutside
                      animationType="slideInDown"
                      containerStyle={{
                        backgroundColor: "rgb(82, 75, 75,0.1)",
                        justifyContent: "flex-start",
                        marginLeft: 100,
                        marginRight: 100
                      }}
                      childrenWrapperStyle={{
                        backgroundColor: "black",
                        opacity: 0.6,
                        justifyContent: "flex-start",
                        borderRadius: 20
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          paddingBottom: 20,
                          fontSize: 18
                        }}
                      >
                        Set Resolution
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                          style={{ flexDirection: "row", paddingRight: 20 }}
                        >
                          <View style={{ flexDirection: "column" }}>
                            <Image
                              style={{
                                width: 35,
                                height: 35,
                                opacity: 1,
                                marginLeft: 70,
                                paddingBottom: 20
                              }}
                              source={require("./assets/recorder.png")}
                            ></Image>
                            <View
                              style={{ flexDirection: "row", paddingTop: 20 }}
                            >
                              <TouchableOpacity style={{ paddingRight: 10 }}>
                                <Image
                                  style={{
                                    width: 15,
                                    height: 15,
                                    opacity: 1,
                                    paddingRight: 10
                                  }}
                                  source={require("./assets/task1.png")}
                                ></Image>
                              </TouchableOpacity>
                              <Text
                                style={{
                                  color: "white",
                                  paddingBottom: 20,
                                  paddingRight: 20,
                                  fontSize: 18
                                }}
                              >
                                720p HD 30fps
                              </Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                              <TouchableOpacity style={{ paddingRight: 10 }}>
                                <Image
                                  style={{ width: 15, height: 15, opacity: 1 }}
                                  source={require("./assets/task.png")}
                                ></Image>
                              </TouchableOpacity>
                              <Text
                                style={{
                                  color: "white",
                                  paddingBottom: 20,
                                  paddingRight: 20,
                                  fontSize: 18
                                }}
                              >
                                1080p HD 30fps
                              </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <TouchableOpacity style={{ paddingRight: 10 }}>
                                <Image
                                  style={{
                                    width: 15,
                                    height: 15,
                                    opacity: 1,
                                    paddingRight: 10
                                  }}
                                  source={require("./assets/task.png")}
                                ></Image>
                              </TouchableOpacity>
                              <Text
                                style={{
                                  color: "white",
                                  paddingBottom: 20,
                                  paddingRight: 20,
                                  fontSize: 18
                                }}
                              >
                                1080p HD 60fps
                              </Text>
                            </View>
                          </View>
                          <View style={{ flexDirection: "column" }}>
                            <Image
                              style={{
                                width: 35,
                                height: 35,
                                opacity: 1,
                                marginLeft: 80,
                                paddingBottom: 20
                              }}
                              source={require("./assets/camera.png")}
                            ></Image>
                            <View
                              style={{ flexDirection: "row", paddingTop: 20 }}
                            >
                              <TouchableOpacity style={{ paddingRight: 10 }}>
                                <Image
                                  style={{
                                    width: 15,
                                    height: 15,
                                    opacity: 1,
                                    paddingRight: 10
                                  }}
                                  source={require("./assets/task.png")}
                                ></Image>
                              </TouchableOpacity>
                              <Text
                                style={{
                                  color: "white",
                                  paddingBottom: 20,
                                  paddingRight: 20,
                                  fontSize: 18
                                }}
                              >
                                4128 X 3096 [4:3]
                              </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <TouchableOpacity style={{ paddingRight: 10 }}>
                                <Image
                                  style={{
                                    width: 15,
                                    height: 15,
                                    opacity: 1,
                                    paddingRight: 10
                                  }}
                                  source={require("./assets/task.png")}
                                ></Image>
                              </TouchableOpacity>
                              <Text
                                style={{
                                  color: "white",
                                  paddingBottom: 20,
                                  paddingRight: 20,
                                  fontSize: 18
                                }}
                              >
                                4128 X 2322 [16:9]
                              </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <TouchableOpacity style={{ paddingRight: 10 }}>
                                <Image
                                  style={{
                                    width: 15,
                                    height: 15,
                                    opacity: 1,
                                    paddingRight: 10
                                  }}
                                  source={require("./assets/task.png")}
                                ></Image>
                              </TouchableOpacity>
                              <Text
                                style={{
                                  color: "white",
                                  paddingBottom: 20,
                                  paddingRight: 20,
                                  fontSize: 18
                                }}
                              >
                                2048 X 1152 [16:9]
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </Overlay>
                  </View>

                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("transistion")
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
                  <TouchableOpacity
                    onPress={this.showOverlay.bind(this)}
                    style={{ width: 35, height: 35, opacity: 10 }}
                  >
                    <View>
                      <Image
                        style={{ width: 35, height: 35, opacity: 1 }}
                        source={require("./assets/golive.png")}
                      ></Image>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.showOverlay1.bind(this)}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        alignSelf: "center"
                      }}
                    >
                      HD SCREEN
                    </Text>
                  </TouchableOpacity>
                  <Image
                    style={{ width: 25, height: 25, opacity: 10, margin: 5 }}
                    source={require("./assets/micon.png")}
                  />
                  <Image
                    style={{ width: 25, height: 25, opacity: 10, margin: 5 }}
                    source={require("./assets/wifi.png")}
                  />
                  <Image
                    style={{ width: 25, height: 25, opacity: 10, margin: 5 }}
                    source={require("./assets/battery.png")}
                  />
                </View>
                <View style={{ flexDirection: "row", flex: 7 }}></View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 2,
                    justifyContent: "space-between"
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 4,
                      alignSelf: "flex-start",
                      borderRadius: 10,
                      padding: 30,
                      marginLeft: 30,
                      marginRight: 50
                    }}
                  >
                    <Image
                      style={{ width: 35, height: 35, opacity: 10 }}
                      source={require("./assets/apps.png")}
                    />

                    <Image
                      style={{ width: 35, height: 35, opacity: 10 }}
                      source={require("./assets/substract.png")}
                    />
                    {this.state.show ? (
                      
                      <View style={{ flexDirection: "row", opacity: 1, }}>
                        <ScrollView horizontal={true}>
                        <Image
                          style={{ width: 70, height: 50, marginRight: 3 }}
                          source={require("./assets/football.jpg")}
                        />
                        <Image
                          style={{ width: 70, height: 50, marginRight: 3 }}
                          source={require("./assets/football.jpg")}
                        />
                        <Image
                          style={{ width: 70, height: 50, marginRight: 3 }}
                          source={require("./assets/football.jpg")}
                        />
                        <Image
                          style={{ width: 70, height: 50, marginRight: 3 }}
                          source={require("./assets/football.jpg")}
                        />
                        <TouchableOpacity style={{ alignContent:"center",alignItems:"center",alignSelf:"center"}} onPress={() =>
                      this.props.navigation.navigate("cameraddlandscape")
                    }>
                        <Image
                          style={{ width: 30, height: 30, marginRight: 3 }}
                          source={require("./assets/cameraplus.png")}
                        />
                        </TouchableOpacity  >
                        
                        </ScrollView>
                      </View>
                    ) : null}

                    <TouchableOpacity onPress={this.ShowHideComponent}>
                      {this.state.show ? (
                        <Image
                          style={{ width: 35, height: 35,marginRight:20,padding:10 }}
                          source={require("./assets/arrow-left.png")}
                        />
                      ) : (
                          <Image
                            style={{ width: 35, height: 35, padding: 10,marginRight:20 }}
                            source={require("./assets/arrow-right.png")}
                          />
                        )}
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignSelf: "flex-end",
                      marginLeft:35
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        flex: 1,

                        alignItems: "center"
                      }}
                      onPress={() => {
                        this.setState({
                          type:
                            this.state.type === Camera.Constants.Type.back
                              ? Camera.Constants.Type.front
                              : Camera.Constants.Type.back
                        });
                      }}
                    >
                      <Image
                        style={{ width: 30, height: 30, }}
                        source={require("./assets/flip1.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flex: 1,

                        alignItems: "center"
                      }}
                      onPress={this._pickImage}
                    >
                      <Image
                        style={{ width: 30, height: 30,marginLeft:10 }}
                        source={require("./assets/image-gallery.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "black",
                  opacity: 0.6,
                  margin: 5,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <TouchableOpacity onPress={this.snap}>
                  <Image
                    style={{
                      width: 35,
                      height: 35,
                      opacity: 10,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    source={require("./assets/camera.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
