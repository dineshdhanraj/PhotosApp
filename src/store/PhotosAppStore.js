import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import PhotosAppReducer from '../reducer/PhotosAppReducer';

const middleware = [thunk];

const PhotosAppStore = createStore(
  PhotosAppReducer,
  applyMiddleware(...middleware),
);

export default PhotosAppStore;
