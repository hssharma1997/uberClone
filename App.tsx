
import React, { useState,useEffect } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Pressable, StatusBar } from 'react-native';
import LocationNotification from './components/LocationNotification';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import DeviceInfo from 'react-native-device-info';
import Geolocation from 'react-native-geolocation-service';
import {AppState} from 'react-native';




function App(): JSX.Element { 
  const [locationEnabled,setLocationEnabled]=useState(false)

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      // if app is foreground.
      if (nextAppState === 'active') {
        DeviceInfo.isLocationEnabled().then((enabled: boolean) => {
          setLocationEnabled(enabled)
        });
      }
    });
    return () => {
      subscription.remove();
    };
 
  }, [])

  const getPermission=()=>{
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    .then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log('This feature is not available (on this device / in this context)');
          break;
        case RESULTS.DENIED:
         request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(statuses=>console.log(statuses))
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          enableLocation()
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch((error) => {
      // …
    });
  }
  


  const enableLocation=async()=>{    
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setLocationEnabled(true)
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
  }

  StatusBar.setBarStyle('dark-content', true)
  return (
   <NavigationContainer>
     <StatusBar backgroundColor={locationEnabled?'#fff':'#e8c605'} />
   { !locationEnabled && <Pressable onPress={()=>getPermission()}>
            <LocationNotification/>
            </Pressable>}
      <BottomTabNavigation/>
    </NavigationContainer>
   
  );
}

export default App;
