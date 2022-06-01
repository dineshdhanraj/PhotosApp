// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import PhotosAppItemDetails from '../components/PhotosAppItemDetails';
// import PhotosAppListDetails from '../components/PhotosAppListDetails';
// import {ItemSelector} from '../selectors/PhotosAppSelectors';
// import {useSelector} from 'react-redux';

// const Stack = createNativeStackNavigator();

// const PhotosAppStackNavigator = () => {
  
// const list = useSelector(state => ItemSelector(state));

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name={'Home'}
//           component={PhotosAppListDetails}
//           options={{
//             title: "Photos App Title's List",
//             headerTitleAlign: 'center',
//             headerStyle: {backgroundColor: 'white'},
//             headerTitleStyle: {fontSize: 25, fontWeight: 'bold'},
//           }}
//         />
//         <Stack.Screen
//           name={'ItemDetailsScreen'}
//           component={PhotosAppItemDetails}
//           options={{
//             title: list.nickname,
//             headerTitleStyle: {
//               fontSize: 15,
//             },
//             headerStyle: {
//               backgroundColor: '#f4511e',
//             },
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default PhotosAppStackNavigator;
