


import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import PlanYourRide from "../Screens/PlanYourRide";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createStackNavigator();  

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator >   
       <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
       <Stack.Screen
        name="PlanRide"
        component={PlanYourRide}
      />
    </Stack.Navigator>
  );
}

export {HomeScreenNavigator};

// const SecondScreenNavigator = () => {
//     return (
//       <Stack.Navigator >
//           <Stack.Screen
//             name="Screen2"
//             component={Screen2}
//         />
//          <Stack.Screen
//           name="NestedScreen2"
//           component={NestedScreen}
//         />
//       </Stack.Navigator>
//     );
//   }
  
//   export {SecondScreenNavigator}; // Stack-Navigator for Screen 2 Tab

//   const ThirdScreenNavigator = () => {
//     return (
//       <Stack.Navigator >
//           <Stack.Screen
//             name="Screen3"
//             component={Screen3}
//         />
//          <Stack.Screen
//           name="NestedScreen3"
//           component={NestedScreen}
//         />
//       </Stack.Navigator>
//     );
//   }
  
//   export {ThirdScreenNavigator};  // Stack-Navigator for Screen 3 Tab
