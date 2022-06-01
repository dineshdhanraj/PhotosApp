import React from 'react';
import * as redux from 'react-redux';
import TestRenderer, {act} from 'react-test-renderer';
import PhotosAppItemDetails from '../components/PhotosAppModalItem';

const mockDispatch = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

const DummyData = {
  Data: [{Title: 'Hyd'}],
  Loading:true,
  Error: '',
  Item: [{"Title": "Hyderabad"}],
  Visible:false,
};
const DispatchMock = jest.spyOn(redux, 'useDispatch');
const SelectorMock = jest.spyOn(redux, 'useSelector');

it('Test for checking Item Details Screen', async () => {
  DispatchMock.mockReturnValue(mockDispatch);
  SelectorMock.mockReturnValueOnce(DummyData.Loading);
  SelectorMock.mockReturnValueOnce(DummyData.Item);
  SelectorMock.mockReturnValueOnce(DummyData.Visible);
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<PhotosAppItemDetails />);
  });
  const instance = tree.root;
  const wrapper = instance.findAllByProps({testID: 'Toggle'});
  expect(mockDispatch).toHaveBeenCalledTimes(0);
  await act(async () => {
    wrapper[0].props.onPress();
  });
  expect(mockDispatch).toHaveBeenCalledTimes(1);
  expect(instance.findByProps({testID: 'Default'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Ok'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Close'})).toBeTruthy();
});
