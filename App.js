import React from 'react' 
//import PhotoPaginationList from './src/components/PhotoPaginationList'
import { Provider } from 'react-redux';
import PhotosAppStore from './src/store/PhotosAppStore';
import PhotosAppListDetails from './src/components/PhotosAppListDetails';
export default function App(){
  return(
  <Provider store={PhotosAppStore}>
  <PhotosAppListDetails/>
  </Provider>
  
  )
}