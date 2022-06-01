import React from 'react';
import * as redux from 'react-redux';
import TestRenderer, {act} from 'react-test-renderer';
import PhotosAppListDetails from '../components/PhotosAppListDetails';
import PhotosAppService from '../service/PhotosAppService';
const mockNavigate = jest.fn();
const mockDispatch = jest.fn();
jest.mock('../actions/PhotosAppActions');
jest.mock('../service/PhotosAppService');
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockNavigate}),
}));

afterEach(() => {
  jest.resetAllMocks();
});

const DispatchMock = jest.spyOn(redux, 'useDispatch');
const SelectorMock = jest.spyOn(redux, 'useSelector');

const DummyData = {
  Data: [{Title: 'Hyd'}],
  Loading:true,
  Error: '',
  Item: [{"Title": "Hyderabad"}],
  Visible:true,
};


it('Testing for Successful data retrive from API', async () => {
  DispatchMock.mockReturnValue(mockDispatch);
  SelectorMock.mockReturnValueOnce(DummyData.Data);
  SelectorMock.mockReturnValueOnce(DummyData.Error);
  SelectorMock.mockReturnValueOnce(DummyData.Loading);
  SelectorMock.mockReturnValueOnce(DummyData.Item);
  SelectorMock.mockReturnValueOnce(DummyData.Visible);
  PhotosAppService.mockReturnValueOnce('www');
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<PhotosAppListDetails />);
  });
  const instance = tree.root;
  expect(instance.findByProps({testID: 'List'})).toBeTruthy();
});


it('Testing When Api Fails', async () => {
  DispatchMock.mockReturnValue(mockDispatch);
  SelectorMock.mockReturnValueOnce(DummyData.Data);
  SelectorMock.mockReturnValueOnce("Rejected");
  SelectorMock.mockReturnValueOnce(DummyData.Loading);
  SelectorMock.mockReturnValueOnce(DummyData.Item);
  SelectorMock.mockReturnValueOnce(DummyData.Visible);
  PhotosAppService.mockReturnValueOnce('www');
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<PhotosAppListDetails />);
  });
  const instance = tree.root;
  expect(instance.findByProps({testID: 'Error'})).toBeTruthy();
});

