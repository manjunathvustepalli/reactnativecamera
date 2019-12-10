//All the Screen name should be mentioned to use navigator

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import camerascreen from './screen/camerascreen';
import { fromTop } from 'react-navigation-transitions';
import transistion from './screen/transistion';
import overlay1 from './screen/overlay1';
import Advancedsetting from './screen/Advancedsetting';
import tdrawerportrait from './screen/tdrawerportrait'
import cameradd from './screen/cameradd'
import cameraddlandscape from './screen/cameraddlandscape';
const navigator = createStackNavigator(
  {


    Home: camerascreen,
    transistion:transistion,
    Advancedsetting:Advancedsetting,
    tdrawerportrait:tdrawerportrait,
    cameradd:cameradd,
    cameraddlandscape:cameraddlandscape
    

   
   
  
    
  },
  
  {

    //By default Home Screen will be redirected

    initialRouteName: 'Home',
    transitionConfig: () => fromTop(),
    defaultNavigationOptions: {
     // title: 'App',
      header: null,
     
    }
  }
);

export default createAppContainer(navigator);
