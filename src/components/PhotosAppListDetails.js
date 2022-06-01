import React, {useEffect} from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {ListAction, ErrorAction,VisibleAction} from '../actions/PhotosAppActions';
import {
  ListSelector,
  ErrorSelector,

} from '../selectors/PhotosAppSelectors';
import PhotosAppItemDetails from './PhotosAppModalItem';
import PhotosAppUrl from '../config/PhotosAppUrl';
import PhotosAppService from '../service/PhotosAppService';
import styles from './PhotosAppStyles';

export default function App() {
  const getListData = useSelector(state => ListSelector(state));
  const getErrorData = useSelector(state => ErrorSelector(state));
 
  const dispatch = useDispatch();

  async function load(url) {
    const List = await PhotosAppService(url);
    if (List.ErrorMessage) dispatch(ErrorAction(List.ErrorMessage));
    else {
      dispatch(ListAction(List));
      dispatch(VisibleAction(false))
    }
  }

  const ListDetails = ({item}) => {
    return (
      <View style={styles.ListItemView}>
        <Text style={styles.ItemView}>{item.title}</Text>
      </View>
    );
  };

  useEffect(() => {
    load(PhotosAppUrl());
  }, []);

  return (
    
    <View>
    
      {getErrorData? (
        <Text testID="Error" style={styles.Error}>
          {getErrorData}
        </Text>
      ) : (
        <View>
          <PhotosAppItemDetails />
          <View style={styles.seperator}>
            <FlatList
              data={getListData}
              testID="List"
              renderItem={ListDetails}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      )}
    </View>
  );
}
