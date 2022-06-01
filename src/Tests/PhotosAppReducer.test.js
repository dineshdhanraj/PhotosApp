import * as Actions from "../constants/PhotosAppConstants"
import PhotosAppReducer from '../reducer/PhotosAppReducer';

const initialState = {
  ListItem: [],
  Error: '',
  Loading:false,
  Item:[],
  Visible:true
};
const DummyData = {
  Data: [{nickname: 'sai'}],
  Loading:true,
  Error: 'Rejected',
  Item: [{"Title": "Hyderabad"}],
  Visible:true
};

it('Testing ListDetails State ', () => {
  const result = PhotosAppReducer(initialState, {
    type: Actions.ListDetails,
    payload: DummyData.Data,
  });
  expect(result.ListItem.nickname).toEqual(DummyData.Data.nickname);
});

it('Testing Loading State', () => {
  const result = PhotosAppReducer(initialState, {
    type: Actions.LoadingDetails,
    payload: DummyData.Loading,
  });
  expect(result.Loading).toEqual(true);
});

it('Testing Error State', () => {
  const result = PhotosAppReducer(initialState, {
    type: Actions.ErrorDetails,
    payload: DummyData.Error,
  });
  expect(result.Error).toEqual(DummyData.Error);
});

it('Testing Item Details State', () => {
  const result = PhotosAppReducer(initialState, {
    type: Actions.NewItemDetails,
    payload: DummyData.Item,
  });
  expect(result.Item.Title).toEqual(
    DummyData.Item.Title,
  );
});

it('Testing Visible Details State', () => {
  const result = PhotosAppReducer(initialState, {
    type: Actions.VisibleDetails,
    payload: DummyData.Visible,
  });
  expect(result.Visible).toEqual(
    DummyData.Visible,
  );
});