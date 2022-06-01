import React from 'react';
import {
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  SafeAreaView,ActivityIndicator
} from 'react-native';
import styles from './PhotosAppStyles';
import {useSelector, useDispatch} from 'react-redux';
import {
  NewItemSelector,
  LoadingSelector,
  VisibleSelector
} from '../selectors/PhotosAppSelectors';
import {ListAction,LoadingAction, ItemAction} from '../actions/PhotosAppActions';

export default function PhotosAppItemDetails() {

  const getLoader = useSelector(state => LoadingSelector(state));
  const getTitle = useSelector(state => NewItemSelector(state));
  const getVisibleData=useSelector(state => VisibleSelector(state))
  const dispatch = useDispatch();

  const toggleLoading = () => {
    dispatch(LoadingAction(!getLoader));
  };

  return (
    <View>
        <ActivityIndicator style={styles.Indicator}
      animating={getVisibleData}
      size="large"
      color="paleblue"
      />
   {!getVisibleData? <TouchableOpacity
        testID="Toggle"
        onPress={toggleLoading}>
        <Text style={styles.NewTitle}>
          + Click Here To Add New Title To The List
        </Text>
      </TouchableOpacity>:<></>}
      <SafeAreaView style={styles.screen}>
        <Modal
          transparent
          visible={getLoader}
          presentationStyle="overFullScreen"
          onDismiss={toggleLoading}>
          <View style={styles.viewWrapper}>
            <View style={styles.modalView}>
              <TextInput
              testID="Default"
                placeholder="Enter Title Here To Add In The List"
                value={getTitle}
                style={styles.PlaceholderText}
                onChangeText={value => dispatch(ItemAction(value))}
              />
              <View style={styles.ButtonView}>
                <Text testID="Ok"
                  style={styles.Ok}
                  onPress={() => {
                    if (getTitle) {
                      dispatch(ListAction([{title: getTitle}])),
                        dispatch(LoadingAction(false)),
                        dispatch(ItemAction(''));
                    } else {
                      dispatch(LoadingAction(false)),
                        alert('No Input Is Added To The List');
                    }
                  }}>
                  ok
                </Text>

                <Text testID="Close" style={styles.Cancel} onPress={toggleLoading}>
                  close
                </Text>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
}
